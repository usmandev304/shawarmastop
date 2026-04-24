'use client';

import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import { X, MapPin } from 'lucide-react';
import { saveUserLocationToBackend } from '@/lib/api';

/** Fresh GPS request + high accuracy — browser permission bar (Chrome “Google” location) is tied to this call. */
const GEO_OPTIONS: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 25_000,
  maximumAge: 0,
};

const SUGGEST_DEBOUNCE_MS = 380;
const MIN_QUERY_LEN = 2;

type Suggestion = { id: string; label: string; lat: string; lon: string };

export default function Location() {
  const [isOpen, setIsOpen] = useState(true);
  const [address, setAddress] = useState('');
  const [, setSelectedLocation] = useState('');
  const [formHint, setFormHint] = useState('');
  const [geoHint, setGeoHint] = useState('');
  const [locating, setLocating] = useState(false);
  const [locationNudge, setLocationNudge] = useState('');

  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [suggestOpen, setSuggestOpen] = useState(false);
  const [suggestLoading, setSuggestLoading] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const suppressSuggestRef = useRef(false);
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    const trimmed = address.trim();
    if (!trimmed) {
      setFormHint('Please enter your address or use current location.');
      return;
    }
    setFormHint('');
    setSelectedLocation(trimmed);
    console.log('Location saved:', trimmed);
    setIsOpen(false);
    localStorage.setItem('userLocation', trimmed);
  };

  const handleUseCurrentLocation = () => {
    setGeoHint('');
    setLocationNudge('');

    if (typeof window === 'undefined') return;

    if (!window.isSecureContext) {
      setGeoHint(
        'Location permission needs a secure page (HTTPS). Open this site with https:// or use localhost for testing.',
      );
      return;
    }

    if (!navigator.geolocation) {
      setGeoHint('Geolocation is not supported. Please enter your address manually.');
      return;
    }

    setLocating(true);
    setLocationNudge('When your browser shows the location prompt (e.g. Chrome bar), tap Allow.');

    const onSuccess = (position: GeolocationPosition) => {
      setLocating(false);
      setLocationNudge('');
      const { latitude, longitude } = position.coords;
      setGeoHint('');
      setSelectedLocation(`Location: ${latitude}, ${longitude}`);
      const stored = `${latitude},${longitude}`;
      localStorage.setItem('userLocation', stored);
      void saveUserLocationToBackend({
        locationText: stored,
        latitude,
        longitude,
        source: 'gps',
      });
      setIsOpen(false);
      console.log('Current location:', latitude, longitude);
    };

    const onError = (error: GeolocationPositionError) => {
      setLocating(false);
      setLocationNudge('');
      console.error('Error getting location:', error);
      if (error.code === error.PERMISSION_DENIED) {
        setGeoHint(
          'Location access was blocked. Click the lock or “site settings” icon in the address bar → allow Location, then try again.',
        );
        return;
      }
      if (error.code === error.TIMEOUT) {
        setGeoHint('Location request timed out. Check GPS / signal and try again, or enter your address manually.');
        return;
      }
      setGeoHint('Could not get your location. Please enter your address manually or try again.');
    };

    try {
      navigator.geolocation.getCurrentPosition(onSuccess, onError, GEO_OPTIONS);
    } catch (e) {
      setLocating(false);
      setLocationNudge('');
      console.error(e);
      setGeoHint('Could not start location. Please try again or enter your address manually.');
    }
  };

  const pickSuggestion = useCallback((item: Suggestion) => {
    suppressSuggestRef.current = true;
    setAddress(item.label);
    setSuggestOpen(false);
    setSuggestions([]);
    setHighlightIndex(-1);
    setFormHint('');
    setLocationNudge('');
  }, []);

  useEffect(() => {
    if (suppressSuggestRef.current) {
      suppressSuggestRef.current = false;
      return;
    }

    const q = address.trim();
    if (q.length < MIN_QUERY_LEN) {
      setSuggestions([]);
      setSuggestOpen(false);
      setSuggestLoading(false);
      setHighlightIndex(-1);
      return;
    }

    const ac = new AbortController();
    const timer = window.setTimeout(async () => {
      setSuggestLoading(true);
      try {
        const res = await fetch(`/api/location-search?q=${encodeURIComponent(q)}`, {
          signal: ac.signal,
        });
        const data = (await res.json()) as Suggestion[];
        if (ac.signal.aborted) return;
        setSuggestions(Array.isArray(data) ? data : []);
        setSuggestOpen(true);
        setHighlightIndex(-1);
      } catch (e) {
        if ((e as Error).name === 'AbortError') return;
        if (!ac.signal.aborted) {
          setSuggestions([]);
          setSuggestOpen(false);
        }
      } finally {
        setSuggestLoading(false);
      }
    }, SUGGEST_DEBOUNCE_MS);

    return () => {
      window.clearTimeout(timer);
      ac.abort();
    };
  }, [address]);

  const onAddressKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!suggestOpen || suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightIndex((i) => (i + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (e.key === 'Enter') {
      if (highlightIndex >= 0 && highlightIndex < suggestions.length) {
        e.preventDefault();
        pickSuggestion(suggestions[highlightIndex]);
      }
    } else if (e.key === 'Escape') {
      setSuggestOpen(false);
      setHighlightIndex(-1);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      aria-modal="true"
      role="presentation"
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white p-6 shadow-xl animate-fadeIn"
        role="dialog"
        aria-labelledby="location-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 id="location-modal-title" className="text-xl font-bold text-gray-900">
              Choose Delivery Location
            </h2>
            <p className="mt-1 text-sm leading-tight text-gray-400">
              Select your current location or enter address manually.
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="text-gray-400 transition-colors hover:text-gray-600"
            aria-label="Close"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <button
          type="button"
          disabled={locating}
          onClick={handleUseCurrentLocation}
          className="mb-2 flex w-full items-center justify-start gap-3 rounded-xl border border-gray-200 px-2 py-4 transition-colors hover:bg-gray-50 disabled:cursor-wait disabled:opacity-70 lg:px-4"
        >
          <div className="rounded-full bg-orange-50 p-2">
            <MapPin className="text-orange-600" size={20} />
          </div>
          <span className="font-bold text-gray-900">
            {locating ? 'Waiting for location permission…' : 'Use Current Location'}
          </span>
        </button>

        <div className="mb-4 min-h-0 space-y-1">
          {locationNudge ? (
            <p className="text-center text-sm text-slate-600" role="status">
              {locationNudge}
            </p>
          ) : null}
          {geoHint ? (
            <p className="text-center text-sm text-red-600" role="alert">
              {geoHint}
            </p>
          ) : null}
        </div>

        <div className="relative mb-6 flex items-center">
          <div className="flex-grow border-t border-gray-200" />
          <span className="mx-4 flex-shrink text-xs font-medium uppercase tracking-widest text-gray-300">OR</span>
          <div className="flex-grow border-t border-gray-200" />
        </div>

        <div className="mb-8">
          <label htmlFor="manual-address" className="mb-3 block font-bold text-gray-900">
            Enter Address Manually
          </label>
          <div className="relative">
            <input
              ref={inputRef}
              id="manual-address"
              type="text"
              autoComplete="off"
              role="combobox"
              aria-expanded={suggestOpen}
              aria-controls={listId}
              aria-autocomplete="list"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                if (formHint) setFormHint('');
                if (locationNudge) setLocationNudge('');
              }}
              onKeyDown={onAddressKeyDown}
              onFocus={() => {
                if (suggestions.length > 0) setSuggestOpen(true);
              }}
              onBlur={() => {
                window.setTimeout(() => {
                  setSuggestOpen(false);
                  setHighlightIndex(-1);
                }, 180);
              }}
              placeholder="Start typing area, city, or street…"
              className="w-full rounded-2xl border-none bg-gray-50 p-4 text-base text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-orange-500"
            />

            {suggestLoading ? (
              <p className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                Searching…
              </p>
            ) : null}

            {suggestOpen && suggestions.length > 0 ? (
              <ul
                id={listId}
                role="listbox"
                className="absolute left-0 right-0 top-full z-20 mt-1 max-h-56 overflow-auto rounded-xl border border-gray-200 bg-white py-1 shadow-lg"
              >
                {suggestions.map((item, index) => (
                  <li key={item.id} role="presentation">
                    <button
                      type="button"
                      role="option"
                      aria-selected={highlightIndex === index}
                      className={`flex w-full cursor-pointer px-3 py-2.5 text-left text-sm text-gray-800 hover:bg-orange-50 ${
                        highlightIndex === index ? 'bg-orange-50' : ''
                      }`}
                      onMouseDown={(e) => e.preventDefault()}
                      onMouseEnter={() => setHighlightIndex(index)}
                      onClick={() => pickSuggestion(item)}
                    >
                      <span className="line-clamp-2">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <p className="mt-2 text-xs text-gray-400 hidden">
            Suggestions from OpenStreetMap (worldwide). Pick one or keep typing your full address.
          </p>
        </div>

        {formHint ? (
          <p className="mb-3 text-center text-sm text-red-600" role="alert">
            {formHint}
          </p>
        ) : null}

        <button
          type="button"
          onClick={handleConfirm}
          className="w-full rounded-full bg-[#FF5A3D] py-4 font-bold text-white shadow-lg shadow-orange-200 transition-all hover:bg-[#e84f35] active:scale-[0.98]"
        >
          Confirm Location
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

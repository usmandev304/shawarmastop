import { NextRequest, NextResponse } from 'next/server';

/** OSM Nominatim policy: identify the app (https://operations.osmfoundation.org/policies/nominatim/) */
const USER_AGENT =
  process.env.NOMINATIM_USER_AGENT ??
  'ShawarmaStop/1.0 (+https://shawarmastop.example; location autocomplete)';

export type LocationSearchHit = {
  id: string;
  label: string;
  lat: string;
  lon: string;
};

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get('q')?.trim() ?? '';
  if (q.length < 2) {
    return NextResponse.json([]);
  }

  try {
    const url = new URL('https://nominatim.openstreetmap.org/search');
    url.searchParams.set('q', q);
    url.searchParams.set('format', 'json');
    url.searchParams.set('limit', '8');
    url.searchParams.set('addressdetails', '1');

    const res = await fetch(url.toString(), {
      headers: {
        'User-Agent': USER_AGENT,
        Accept: 'application/json',
        'Accept-Language': 'en',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      return NextResponse.json([]);
    }

    const data = (await res.json()) as Array<{
      place_id?: number | string;
      lat: string;
      lon: string;
      display_name: string;
    }>;

    if (!Array.isArray(data)) {
      return NextResponse.json([]);
    }

    const out: LocationSearchHit[] = data.map((row) => ({
      id: String(row.place_id ?? `${row.lat},${row.lon}`),
      label: row.display_name,
      lat: row.lat,
      lon: row.lon,
    }));

    return NextResponse.json(out);
  } catch {
    return NextResponse.json([]);
  }
}

import { MapPin } from "lucide-react";

type LocationAddressBadgeProps = {
  branchName: string;
  address: string;
  mapUrl: string;
};

export default function LocationAddressBadge({
  branchName,
  address,
  mapUrl,
}: LocationAddressBadgeProps) {
  return (
    <a
      href={mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex max-w-md items-start gap-3 rounded-2xl text-left transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
    >
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 shadow-lg backdrop-blur-sm"
        aria-hidden
      >
        <MapPin className="h-7 w-7 text-[#FFED4A] drop-shadow-md" strokeWidth={2} />
      </span>
      <span className="min-w-0">
        <span className="mb-1 block text-sm font-medium text-white/90">{branchName}</span>
        <span className="inline-block rounded-lg bg-[#C42D2D] px-4 py-2.5 text-sm font-bold text-white shadow-md md:text-base">
          {address}
        </span>
        <span className="mt-1 block text-xs text-white/70">Tap to open in Google Maps</span>
      </span>
    </a>
  );
}

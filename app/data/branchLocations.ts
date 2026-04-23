import type { StaticImageData } from "next/image";
import img1 from "../../images/home-location/img1.png";

export type BranchLocation = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  focal: string;
  /** Short line for badge + maps search */
  addressBadge: string;
  mapUrl: string;
};

export const branchLocations: BranchLocation[] = [
  {
    id: "dha",
    title: "Our DHA Branch",
    description:
      "Located in the heart of DHA Phase 4, this branch offers a premium dining experience with a comfortable ambiance and top-quality service—perfect for families and friends.",
    image: img1,
    focal: "42% 45%",
    addressBadge: "DHA Phase 4, Lahore",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=DHA+Phase+4+Lahore+Shawarma",
  },
  {
    id: "lake-city",
    title: "Lake City Branch",
    description:
      "Situated in the vibrant Commercial Area of Lake City, this outlet brings you fresh flavors and quick service, making it an ideal stop for casual meals and takeaways.",
    image: img1,
    focal: "58% 38%",
    addressBadge: "Block M3, Lake City, Lahore",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Block+M3+Lake+City+Lahore",
  },
  {
    id: "pia",
    title: "PIA Housing Society Branch",
    description:
      "Conveniently located in Block D of PIA Housing Society, this branch is known for its fast service, delicious taste, and a welcoming environment for everyday dining.",
    image: img1,
    focal: "50% 55%",
    addressBadge: "Block D, PIA Housing, Lahore",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=PIA+Housing+Society+Block+D+Lahore",
  },
  {
    id: "gulberg",
    title: "Gulberg III Branch",
    description:
      "Positioned on Main Boulevard Gulberg III, this branch delivers a modern dining experience with bold flavors and a lively atmosphere in one of Lahore’s busiest areas.",
    image: img1,
    focal: "35% 50%",
    addressBadge: "Main Blvd, Gulberg III, Lahore",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Gulberg+III+Main+Boulevard+Lahore",
  },
];

export function getBranchByIndex(index: number): BranchLocation {
  if (branchLocations.length === 0) {
    throw new Error("No branches configured");
  }
  const i = ((index % branchLocations.length) + branchLocations.length) % branchLocations.length;
  return branchLocations[i];
}

export function getBranchIndexById(id: string): number {
  const i = branchLocations.findIndex((b) => b.id === id);
  return i === -1 ? 0 : i;
}

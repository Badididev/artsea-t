"use client"

import dynamic from "next/dynamic"

const ArtistRequestForm = dynamic(
  () => import("./artist-request-form").then(mod => mod.ArtistRequestForm),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export function ArtistRequestWrapper() {
  return <ArtistRequestForm />;
}
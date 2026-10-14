"use client";

import dynamic from "next/dynamic";

const DrawingBoard = dynamic(() => import("./DrawingBoard"), {
  ssr: false,
  loading: () => <p>Loading drawing board...</p>,
});

export function DrawingBoardClient() {
  return <DrawingBoard />;
}

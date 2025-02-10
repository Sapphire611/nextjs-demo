"use client";

import "tailwindcss/tailwind.css";

import { Timeline } from "antd";
export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">NextJs Demo</h1>
      {/* <p className="text-gray-600">Made By Sapphire611.</p> */}

      <Timeline
        items={[
          {
            color: "green",
            children: "Made Basic CMS UI on 2025-02-10",
          },
          {
            color: "grey",
            children: "...",
          },
          {
            color: "red",
            children: "...",
          },
        ]}
      />
    </>
  );
}

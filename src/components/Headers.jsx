"use client";

import React from "react";

export default function Headers() {
  return (
    <header className="bg-skin-fill w-full h-screen flex justify-center items-center">
      <div className="bg-green-400 max-w-3xl">
        <h1 className="text-neutral-950">Credits</h1>
        <p className="text-neutral-600">
          My friend Fabian created me as part of his bachelor thesis at
          Stuttgart Media University, supervised by Walter Kriha, Miško Hevery
          and Ryan Carniato. My role models also include Colin McDonnell, who
          had a big influence on my API design with Zod.
        </p>
        <button className="bg-skin-button-accent px-10 py-3 mx-auto">Button</button>
      </div>
    </header>
  );
}


// extend: {
//   textColor: {
//     skin: {
//       base: "ver(--color-text-base)",
//       muted: "ver(--color-text-muted)",
//       inverted: "ver(--color-text-inverted)",
//     },
//   },
//   backgroundColor: {
//     skin: {
//       fill: "ver(--color-fill",
//       "button-accent": "ver(--color-button-accent)",
//       "button-accent-hover": "ver(--color-button-accent-hover)",
//       "button-muted": "ver(--color-button-muted)",
//     },
//   },
// },
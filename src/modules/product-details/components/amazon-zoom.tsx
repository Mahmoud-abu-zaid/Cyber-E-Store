"use client";

import Image from "next/image";
import { useState } from "react";

export default function AmazonZoom({ src, alt }: { src: string, alt: string }) {
  const [showZoom, setShowZoom] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [bgPos, setBgPos] = useState({ x: 0, y: 0 });

  const lensSize = 120;
  const zoom = 2.5;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget
      .querySelector(".zoom-image")!
      .getBoundingClientRect();

    let x = e.clientX - rect.left - lensSize / 2;
    let y = e.clientY - rect.top - lensSize / 2;

    const maxX = rect.width - lensSize;
    const maxY = rect.height - lensSize;

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    setLensPos({ x, y });
    setBgPos({
      x: (x / maxX) * 100,
      y: (y / maxY) * 100,
    });
  };

  return (
    <div
      className="relative flex lg:cursor-crosshair cursor-pointer"
      onMouseEnter={() => setShowZoom(true)}
      onMouseLeave={() => setShowZoom(false)}
      onMouseMove={handleMove}
    >
      <div className="relative overflow-hidden lg:block zoom-image">
        <Image
          src={src}
          alt={alt}
          width={450}
          height={450}
          className=" lg:w-110 lg:h-105 w-100 h-80"
        />

        {showZoom && (
          <div
            className="absolute border bg-white/40  pointer-zoom lg:block hidden"
            style={{
              width: lensSize,
              height: lensSize,
              left: lensPos.x,
              top: lensPos.y,
            }}
          />
        )}
      </div>

      {showZoom && (
        <div
          className="hidden absolute lg:block w-112.5 h-112.5 pointer-zoom"
          style={{
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${zoom * 100}%`,
            backgroundPosition: `${bgPos.x}% ${bgPos.y}%`,
          }}
        />
      )}
    </div>
  );
}
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Img = { src: string; alt: string };

export default function AlbumGrid({ images }: { images: Img[] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const close = () => setOpen(false);
  const openAt = (i: number) => {
    setIdx(i);
    setOpen(true);
  };

  // ESC로 닫기 + 좌우키로 넘기기
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") setIdx((v) => (v - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setIdx((v) => (v + 1) % images.length);
    };

    document.addEventListener("keydown", onKeyDown);
    // 스크롤 잠금
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, images.length]);

  return (
    <>
      <div className="mt-6 grid grid-cols-3 gap-2">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => openAt(i)}
            className="relative aspect-[3/4] overflow-hidden rounded-lg"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 200px"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          {/* 모달 컨텐츠 클릭은 닫히지 않게 */}
          <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
              <Image
                src={images[idx].src}
                alt={images[idx].alt}
                fill
                className="object-contain bg-black"
                priority
              />
            </div>

            {/* 닫기 */}
            <button
              type="button"
              onClick={close}
              className="absolute -top-10 right-0 rounded-full bg-white/10 px-3 py-2 text-white"
            >
              닫기
            </button>

            {/* 좌우 버튼 */}
            <button
              type="button"
              onClick={() => setIdx((v) => (v - 1 + images.length) % images.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setIdx((v) => (v + 1) % images.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}

import { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default function CardSwiper({ images }: { images: string[] }) {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        effect: "cards",
        grabCursor: true,
      });
    }
  }, []);

  return (
    <div className="swiper mt-10 md:mt-0" ref={swiperRef}>
      <div className="swiper-wrapper">
        {images.map((src, index) => (
          <div className="swiper-slide" key={index}>
            <img
              src={src}
              alt={`Card ${index}`}
              width="400"
              height="300"
              className="rounded-xl shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

import { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { dataTestimonials } from "../Testimonials.data";
import { Reveal } from "@components/Reveal";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

export function SlideTestimonials() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 50
          },
          678: {
            slidesPerView: 3,
            spaceBetween: 15
          }
        },
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        mousewheel: true,
        keyboard: true,
        modules: [Navigation, Pagination, Mousewheel, Keyboard],
      });
    }
  }, []);

  return (
    <div className="swiper mt-10 md:mt-0 h-[250px] w-full md:max-w-5xl" ref={swiperRef}>
      <div className="swiper-wrapper">
        {dataTestimonials.map(({ id, name, work, testimonial, image }) => (
          <div className="swiper-slide my-5 cursor-pointer md:px-10" key={id}>
            <Reveal>
              <img
                src="/testimonials/testimonial-icon.png"
                alt="Testimonial"
                width={50}
                height={50}
                className="w-auto h-auto"
              />
              <div className="my-5">{testimonial}</div>
              <div className="flex">
                <img
                  src={image}
                  alt="Imagen"
                  width={50}
                  height={50}
                  className="mr-5"
                />
                <div>
                  <h4 className="text-center">{name}</h4>
                  <p>{work}</p>
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
      <div className="swiper-pagination" />
    </div>
  );
}

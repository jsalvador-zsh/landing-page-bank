import { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { dataPaymentMethods } from "./PaymentMethods.data";

export function PaymentMethodsSection() {
    const swiperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (swiperRef.current) {
            new Swiper(swiperRef.current, {
                breakpoints: {
                    320: {
                        slidesPerView: 8,
                        spaceBetween: 15
                      }
                },
                autoplay: {
                    delay: 1,
                    disableOnInteraction: false
                },
                loopAdditionalSlides: dataPaymentMethods.length,
                grabCursor: true,
                speed: 3000
            });
        }
    }, []);

    return (
        <div className="relative w-full overflow-hidden">
            <div className="swiper" ref={swiperRef}>
                <div className="swiper-wrapper">
                    {dataPaymentMethods.map(({ id, image }) => (
                        <div className="swiper-slide flex justify-center items-center slider-horizontal" key={id}>
                            <img
                                src={image}
                                alt="Método de pago"
                                width="120"
                                height="60"
                                className="h-[60px] w-[120px] object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
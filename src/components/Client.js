"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clients = [
    { id: 1, image: "/client_2.jpeg" },
    { id: 2, image: "/client_1.jpeg" },
    { id: 3, image: "/client_3.jpeg" },
];

export default function ClientCarousel() {
    return (
        <section className="relative container mx-auto py-10">
            <h2
                className="text-4xl font-extrabold text-center text-[#005dac] mb-10"
                data-aos="fade-up"
            >
                Our Clients
            </h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                modules={[Autoplay]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {clients.map((client) => (
                    <SwiperSlide key={client.id}>
                        <div className="flex justify-center items-center " data-aos="fade-up">
                            <Image
                                src={client.image}
                                alt={`Client ${client.id}`}
                                width={170}
                                height={150}
                                className="object-contain rounded-lg shadow-md"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

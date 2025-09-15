"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import Header from "@/components/Header";
import InnovateSection from "@/components/PortfolioHeader";
import GetInTouch from "@/components/Contact";
import Calendly from "@/components/Calendly";
import portfolioData from "@/components/profileData";
import Footer from "@/components/Footer";
const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const projects = Object.entries(portfolioData);

  const ImageBox = ({ slug, title, image, description }) => (
    <div className="mb-8 group">
      <Link href={`/portfolio/${slug}`}>
        <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-2 text-sm text-white">{description}</p>
      </Link>
    </div>
  );

  return (
    <>
      <Header />
      <InnovateSection />
      <section className="py-16 px-6 lg:px-12 bg-gray-900" data-aos="fade-up">
        <div className="mb-12 text-center" data-aos="zoom-in">
          <h1 className="max-w-3xl mx-auto text-3xl lg:text-4xl font-bold leading-snug">
            Add your brand’s name to our{" "}
            <span className="text-blue-600">success stories</span>
          </h1>
          <p className="mt-4 text-white text-lg">
            We help businesses transform ideas into impactful digital solutions.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {projects.map(([slug, item]) => (
            <ImageBox key={slug} slug={slug} {...item} />
          ))}
        </div>
      </section>
      <Calendly />
      <GetInTouch />
      <Footer/>
    </>

  );
};

export default Page;

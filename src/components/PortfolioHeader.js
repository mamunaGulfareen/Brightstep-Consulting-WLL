"use client"
import React from "react";

const InnovateSection = ({ heading = "Innovate with Us" }) => {
  return (
    <section className="py-16 lg:py-28 lg:h-[20vh] flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center"  style={{
        backgroundImage: "url('https://www.themetechmount.com/wordpress/bismount/wp-content/uploads/2023/08/titlebar3.png')",

      }}>
      <div className="container mx-auto px-4">
        <div className="text-center  max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {heading}
          </h1>  
        </div>
      </div>
    </section>
  );
};

export default InnovateSection;

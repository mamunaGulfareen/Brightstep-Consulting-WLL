"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import AOS from "aos";
import Header from "@/components/Header";
import GetInTouch from "@/components/Contact";
import Calendly from "@/components/Calendly";
import portfolioData from "@/components/profileData";
import Footer from "@/components/Footer";
const ProjectPage = () => {
    const { slug } = useParams();
    const project = portfolioData[slug];

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    if (!project) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold">Project Not Found</h1>
            </div>
        );
    }

    return (
        <>
            <Header />
            <section className="bg-gray-950 text-white py-16 px-6 lg:px-12">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
                    <p className="text-lg text-gray-300">{project.tagline}</p>
                    <div className="mt-6 flex justify-center gap-6 text-sm">
                        <span className="bg-blue-600 px-4 py-1 rounded-full">
                            Industry: {project.industry}
                        </span>
                        <span className="bg-green-600 px-4 py-1 rounded-full">
                            Solution: {project.solution}
                        </span>
                    </div>
                </div>
            </section>
            {project.sections.map((sec, i) => (
                <section
                    key={i}
                    className={`py-12 px-4 md:px-8 lg:px-16 ${i % 2 === 1 ? "bg-gray-900" : "bg-black"
                        }`}
                    data-aos="fade-up"
                    data-aos-delay={100 + i * 200}
                >
                    <div
                        className={`max-w-7xl mx-auto flex flex-col ${sec.reverse ? "md:flex-row-reverse" : "md:flex-row"
                            } items-center gap-10`}
                    >
                        <div className="w-full md:w-1/2">
                            <img
                                src={sec.image}
                                alt={sec.heading}
                                className="w-full h-auto rounded-xl shadow-md"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                {sec.heading}
                            </h2>
                            <p className="text-white text-lg leading-relaxed">{sec.text}</p>
                        </div>
                    </div>
                </section>
            ))}


            <section className="py-16 px-6 lg:px-12 bg-gray-900 text-white">
                <div className="max-w-5xl mx-auto text-center">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={500}
                        className="rounded-2xl mx-auto shadow-lg"
                    />
                    <h1 className="mt-8 text-4xl font-bold">{project.title}</h1>
                    <p className="mt-4 text-lg">{project.content}</p>
                </div>
            </section>
            <Calendly />
            <GetInTouch />
            <Footer />
        </>
    );
};

export default ProjectPage;

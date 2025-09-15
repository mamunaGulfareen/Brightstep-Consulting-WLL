"use client";
import React from "react";
import Link from "next/link";


const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <h2 className="text-xl font-bold text-white mb-2">Brightstep Consulting WLL</h2>
                        <p className="text-white text-lg mb-2">
                            Your Success Our Commitment
                        </p>
                        <p className="text-gray-400 text-sm">
                            We build innovative digital solutions to help businesses grow,
                            scale, and stand out in today’s fast-moving world.
                        </p>
                    </div>


                    <div className=" lg:flex  lg:items-center lg:flex-col">
                        <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-blue-500 transition">
                                    Home
                                </Link>
                            </li>
                            
                            <li>
                                <a href="/about" className="hover:text-blue-500 transition">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-blue-500 transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-white mb-4">Services</h2>
                        <ul className="space-y-2">
                            <li>Bookkeeping & Accounting</li>
                            <li>VAT Returns</li>
                            <li>Economic Substance Report</li>
                            <li>Annual Audit</li>
                            <li>Web & App Development</li>
                            <li>Logistics Consulting</li>
                            <li>HR Consulting</li>
                        </ul>
                    </div>

                    
                </div>

                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-white">
                    © {new Date().getFullYear()} Brightstep Consulting WLL. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

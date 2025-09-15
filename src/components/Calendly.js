'use client'
import React, { useEffect } from 'react'

function Calendly() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);
    return (
        <div id="calendly" className="w-full h-[780px] lg:mb-0 mb-8 mt-8 relative">
            <h2
            className="text-4xl font-extrabold text-center text-[#005dac] mb-6"
            data-aos="fade-up"
          >
            Book a Meeting
          </h2>
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/mamunagulfareen/30min"
                style={{ minWidth: '320px', height: '100%' }}
            ></div>
        </div>
    )
}

export default Calendly
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from 'react-icons/fa';
import {
    MdOutlineArrowForward,
} from "react-icons/md";

const services = [
    {
        name: "LDPE Rolls & Bags",
        slug: "ldpe-rolls-and-bags",
        description: [
            "At Waris Packages, we offer a wide selection of LDPE bags that cater to various industrial and commercial packaging needs. Our LDPE polybags are renowned for their strength, flexibility, and reliability, making them the perfect choice for secure packaging and transporting goods.",
            "We also specialize in LDPE bags printing, allowing for custom branding and designs that elevate the presentation of your products. Our advanced printing capabilities ensure high-quality, vibrant prints on every LDPE bag."
        ],
        image: "LDPE-banner.png",
        gallery: ["ldpe.jpg", "ldep2.png", "ldep3.webp"],
        applications: [
            "Confectionary Industry",
            "Auto parts and tools",
            "Pharmaceuticals and healthcare products",
            "Industrial packaging for heavy-duty items",
            "Waste management and recycling",
            "Agriculture and horticulture",
            "Shipping and logistics",
            "Cosmetics and personal care products",
            "Electronics and gadgets",
            "Medical and laboratory supplies"
        ]
    }
    ,
    {
        name: "HDPE Rolls & Bags",
        slug: "hdpe-rolls-and-bags",
        description: [
            "At Waris Packages, we offer a wide selection of HDPE bags that cater to various industrial and commercial packaging needs. Our HDPE polybags are renowned for their strength, flexibility, and reliability, making them the perfect choice for securely packaging and transporting goods.",
            "We also specialize in HDPE bags printing, allowing for custom branding and designs that elevate the presentation of your products. Our advanced printing capabilities ensure high-quality, vibrant prints on every HDPE bag"
        ],
        image: "HDPE.jpeg",
        gallery: ["hdpe1.png", "hdpe2.jpg"],
        applications: [
            "Confectionary Industry",
            "Auto parts and tools",
            "Pharmaceuticals and healthcare products",
            "Industrial packaging for heavy-duty items",
            "Waste management and recycling",
            "Agriculture and horticulture",
            "Shipping and logistics",
            "Cosmetics and personal care products",
            "Electronics and gadgets",
            "Medical and laboratory supplies"
        ]
    },
    {
        name: "Garbage Bags",
        slug: "garbage-bags",
        description:
            "At Waris Packages, we offer heavy-duty garbage bags made from premium raw materials in multi-layer structures, providing high tensile strength and puncture resistance. Our biohazard bags are designed for the storage or disposal of high-risk organic or biologically hazardous waste, such as blood, contaminated organs, or items that have come into contact with hazardous waste streams. It is essential to identify these bags as containing dangerous waste, and they should be incinerated.",
        image: "Garbage-bag.png",
        applications: [
            "Household Waste Management",
            "Commercial and Office Spaces",
            "Healthcare Facilities",
            "Construction and Renovation Sites",
            "Municipal Waste Collection",
            "Recycling and Sorting Facilities",
            "Camping and Outdoor Activities",
            "Industrial and Manufacturing Settings",
            "Pet Waste Collection",
            "Municipal Waste Collection",
        ]
    },
    {
        name: "BOPP Bags",
        slug: "bopp-bags",
        description: [
            "At Waris Packages, we offer premium-quality BOPP bags and rolls, meticulously designed to meet a wide range of packaging needs across various industries. Our BOPP bags and rolls are renowned for their durability, clarity, and versatility, making them the ideal choice for protecting and showcasing your products with a polished finish.",
            "We also specialize in BOPP bag and roll printing, providing custom branding and designs that enhance the presentation of your products. Our advanced printing capabilities ensure high-quality, vibrant prints on every BOPP bag."
        ],
        image: "BOPP-Bags.png",
        applications: [
            "Garment Bags",
            "Textile Bags",
            "Hosiery Bags",
            "Stationery Bags",
            "Jewelry Bags",
            "CD Bags",
            "Food Packaging Bags",
            "Gusset Bags",
            "Header Bags",
        ]
    },
    {
        name: "PP Rolls & Bags",
        slug: "pp-rolls-and-bags",
        description: [
            "At Waris Packages, we offer premium-quality PP (Polypropylene) Bags and Rolls, meticulously designed to meet a wide range of packaging needs across various industries. Our PP bags and rolls are renowned for their durability, clarity, and versatility, making them the ideal choice for protecting and showcasing your products with a polished finish.",
            "Our PP bags are perfect for various applications, including clear poly bags that provide a crystal-clear view of the contents, making them ideal for retail and clothing packaging. We offer both standard and custom 25 kg PP bags to meet different packaging requirements. Whether you need woven or non-woven PP bags, our advanced PP bag-cutting machines ensure precise dimensions and top-notch quality.",
            "We also specialize in PP bag printing, allowing for custom branding and designs that elevate the presentation of your products. Our advanced printing capabilities ensure high-quality, vibrant prints on every PP bag."
        ],
        image: "PP-Rolls-Bags.png",
        applications: [
            "Retail Industry",
            "Food Packaging",
            "Pharmaceuticals",
            "Ecommerce",
            "Promotional bags",
            "Construction",
            "Home & Garden",
            "Industrial Use",
        ],
    },
    {
        name: "Hand Carry Bags",
        slug: "hand-carry-bags",
        description: [
            "At Waris Packages, we are committed to providing sustainable packaging solutions that align with current trends. Our Biodegradable Hand Carry Bags are crafted from eco-friendly materials, ensuring they naturally degrade while maintaining the strength and durability of conventional bags for everyday use.",
            "We offer a range of biodegradable bags, including both standard and custom-made options to meet your specific needs. These bags not only enhance your brand’s image but also play a significant role in reducing environmental impact. Ideal for retail, grocery, and promotional purposes, our biodegradable hand carry bags provide an excellent opportunity to showcase your company’s commitment to environmental conservation.",
            "By choosing Waris Packages for your biodegradable hand carry bags, you are opting for superior quality, reliability, and a solution that benefits the environment. Our advanced production process ensures that each bag is strong, tear-resistant, and environmentally friendly."
        ],
        image: "hapy-shopper.png",
        gallery: ["bag1.png", "bag2.png"],
        applications: [
            "Retail Packaging",
            "Polybags for Supermarkets",
            "Convenience Stores Polybags",
            "Packaging for Boutique Shops",
            "Farmers Markets Packaging",
            "Food Industry Packaging",
            "E - commerce Packaging",
            "Restaurants Packaging",
            "Pharmaceutical Polybags",
            "Automotive Packaging",
        ],
    },
    {
        name: "PE Shrink Film Sheet",
        slug: "pe-shrink-film-sheet",
        description:
            "This high-quality film offers excellent clarity, durability, and shrinkage properties, ensuring secure and visually appealing packaging.",
        image: "PE-Shrink-Film-Sheet.png",
        applications: [
            "Garment Bags",
            "Food and Beverage Packaging",
            "Non-food Product Packaging",
            "Electrical and Electronics Packaging",
            "Home Appliances Packaging",
            "Toy Packaging",
            "Sporting Goods Packaging",
            "Transportation and Storage Packaging",
            "Bundle Packaging",
        ],
    },
    {
        name: "Printing & Converting",
        slug: "printing-and-converting",
        description:
            "Experience outstanding, high-quality printing that sets you apart with our state-of-the-art Flexo Printing machines. With an unwavering focus on precision and excellence, we surpass expectations, consistently delivering exceptional results that exceed your highest standard.",
        image: "Printing-and-Converting.png",
        gallery: ['/printing1.png'],
    },
];


export default async function ServiceDetail({ params }) {
    const { slug } = await params
    if (!slug) return notFound();

    const service = services.find((s) => s.slug === slug);

    if (!service) return notFound();

    return (
        <>
            <Header />
            <section className="relative bg-[#005dac] text-white py-16 text-center bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: `url('/breadcumb-bg.jpg')`,
            }}>
                <h1 className="text-5xl font-bold">{service.name}</h1>
                <p className="mt-4 flex justify-center items-center gap-1">
                    <Link href="/" className="hover:underline text-white">
                        Home
                    </Link>
                    <MdOutlineArrowForward className="text-lg" />
                    <span>{service.name}</span>
                </p>
            </section>

            <section className="bg-black text-white py-16 px-4 md:px-20">
                <div className="max-w-5xl mx-auto">
                    <Image
                        src={`/services/${service.image}`}
                        alt={service.name}
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-xl mb-8"
                    />
                    {Array.isArray(service.description) ? (
                        service.description.map((para, index) => (
                            <p key={index} className="text-lg mb-6 leading-relaxed">
                                {para}
                            </p>
                        ))
                    ) : (
                        <p className="text-lg leading-relaxed">{service.description}</p>
                    )}
                </div>
            </section>

            {service.gallery && (
                <section className="bg-[#0e0e0e] py-16 px-4 md:px-20 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {service.gallery.map((img, idx) => (
                            <Image
                                key={idx}
                                src={`/sub-services/${img}`}
                                alt={`${service.name} ${idx + 1}`}
                                width={400}
                                height={300}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        ))}
                    </div>
                </section>
            )}

            {service.applications && service.applications.length > 0 && (
                <section className="bg-black text-white py-16 px-4 md:px-20">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#005dac] mb-6">
                            Applications of {service.name}
                        </h2>
                        <ul className="space-y-2 text-lg leading-relaxed">
                            {service.applications.map((app, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                    <FaCheckCircle className="text-white w-5 h-5 mt-1 flex-shrink-0" />
                                    <span>{app}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}
            <section className="bg-[#0e0e0e] text-white py-16 px-4 md:px-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#005dac] mb-6">
                        Explore Other Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
                        {services
                            .filter((s) => s.slug !== service.slug)
                            .map((otherService, index) => (
                                <Link key={index} href={`/services/${otherService.slug}`}>
                                    <div className="bg-black border border-[#005dac] rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
                                        <div className="relative w-full h-48">
                                            <Image
                                                src={`/services/${otherService.image}`}
                                                alt={otherService.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold mb-2">
                                                {otherService.name}
                                            </h3>
                                            <p className="text-sm text-gray-400 line-clamp-3">
                                                {Array.isArray(otherService.description)
                                                    ? otherService.description[0]
                                                    : otherService.description}
                                            </p>
                                            <div className="mt-4 text-[#00bfff] flex items-center gap-1">
                                                <span>Read More</span>
                                                <MdOutlineArrowForward className="text-lg animate-[moveArrow_1.5s_ease-in-out_infinite]" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                            ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

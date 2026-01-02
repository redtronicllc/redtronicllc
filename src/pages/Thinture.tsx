import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

interface Product {
  id: number;
  category: string;
  title: string;
  rating: number;
  description: string;
  bullets: string[];
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    category: "THINTURE",
    title: "SPEED EYE PLUS",
    rating: 4.8,
    description:
      "SPEED-EYE 4 is a smart synchronization of GPS Tracking with Speed Limiter & Recorder. It has the most modern technology developed in-house and it is capable of doing complete fleet management solution. It controls the top speed of the vehicle without altering the comfort travelling of passengers, it can record speed and location data upto past 72 driving hours and live track and monitor the vehicle and the driver behavior.",
    bullets: [],
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1767011504/speed_eye_plus_fbhl4h.jpg",
  },
  {
    id: 2,
    category: "THINTURE",
    title: "GPS TRACKER",
    rating: 4.6,
    description:
      "Thinture GPS based vehicle tracker is designed and developed as per the stringent automotive standards. The system is using very high quality GPS and GSM modules equipped with high gain internal antennas. After testing the device for more than 3 years in various countries, we can confidently claim that GS-07 is a perfect vehicle tracking system.",
    bullets: [],
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1763543753/GPS_Tracker_pfdgwb.png",
  },
  {
    id: 3,
    category: "THINTURE",
    title: "SHIELD - TWO WHEELER SAFETY",
    rating: 4.9,
    description:
      "Shield is a rider safety device. You can add your best friends to Shield, so that they can help you in case you are in trouble. Without compromising your privacy, Shield provides effective protection while riding.",
    bullets: [],
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1763543751/speed_main_3_g5otcj.jpg",
  },
  {
    id: 4 ,
    category: "THINTURE",
    title: "MULTI - SPEED LIMITER",
    rating: 4.9,
    description:
      " Multi-Speed Limiter — a dynamic system designed to manage and regulate speed efficiently for enhanced safety, compliance, and driving confidence.",
    bullets: [],
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1767013048/multispeed_psr1am.png",
  },
];

const StarRating: React.FC<{ value: number; size?: number }> = ({
  value,
  size = 14,
}) => {
  const fullStars = Math.round(value);
  return (
    <div className="flex items-center gap-1" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < fullStars ? "currentColor" : "none"}
          stroke="currentColor"
          className={i < fullStars ? "text-yellow-400" : "text-yellow-700/30"}
        >
          <path d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.602L19.333 24 12 19.897 4.667 24l1.583-8.648L0.5 9.75l7.832-1.732z" />
        </svg>
      ))}
    </div>
  );
};

const Thinture: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-gray-200 antialiased">
      <Header />

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <header
        className="relative pt-20 md:pt-28 pb-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(' https://res.cloudinary.com/dvjgt44qs/image/upload/v1766495480/Picture1_speed_ge01pt.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-[#0b0b0d]" />

        <div className="relative container mx-auto px-6">
          <div className="text-center mt-16">
            <ScrollAnimation animation="fade-up">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                ROAD SPEED LIMITER – THINTURE
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.08}>
              <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg">
                Experience smarter, safer driving with our advanced Road Speed
                Limiter technology.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </header>
{/* PRODUCT LIST */}
<main className="container mx-auto px-6 py-20">
  <div className="space-y-32">
    {products.map((p, index) => {
      const even = index % 2 === 1;

      return (
        <article
          key={p.id}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* IMAGE */}
          <div
            className={`${
              even
                ? "lg:col-start-7 lg:col-end-13 lg:order-2"
                : "lg:col-start-1 lg:col-end-7 lg:order-1"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#202023]">
              <img
                src={p.image}
                alt={p.title}
                className="
                  w-full 
                  aspect-[16/9]
                  object-cover
                  lg:h-[320px]
                "
              />
            </div>
          </div>

          {/* CONTENT */}
          <div
            className={`flex flex-col justify-center ${
              even
                ? "lg:col-start-1 lg:col-end-7 lg:order-1 lg:pl-14"
                : "lg:col-start-7 lg:col-end-13 lg:order-2 lg:pr-14"
            }`}
          >
            <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
              {p.category}
            </span>

            <h2 className="mt-4 text-3xl lg:text-4xl font-extrabold text-white">
              {p.title}
            </h2>

            <div className="mt-4">
              <StarRating value={p.rating} />
            </div>

            <p className="mt-6 text-gray-300 leading-relaxed max-w-xl">
              {p.description}
            </p>
          </div>
        </article>
      );
    })}
  </div>
</main>


      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="rounded-xl bg-gradient-to-r from-[#0f0f10] to-[#0b0b0d] border border-[#19191a] p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                Looking for a speed limiter solution?
              </h3>
              <p className="text-gray-400 mt-2">
                Our team is here to help – Enquire Now.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Thinture;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import Counter from "@/components/Counter";
import { Check, Award, Users, Globe, Target } from "lucide-react";
import { useEffect } from "react";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description:
      "Continuously developing advanced car care formulas to deliver superior protection, shine, and long-lasting performance.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We focus on premium quality, offering products that enhance shine, durability, and overall vehicle appearance.",
  },
  {
    icon: Users,
    title: "Trust & Partnership",
    description:
      "Our commitment to trust is reflected in the strong relationships we maintain with automotive professionals and customers alike.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Serving customers across multiple regions with high-quality detailing solutions backed by expertise and responsive service.",
  },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dvjgt44qs/image/upload/v1766479578/dax_fb_cover_page_d2smph.png"
            alt="About Redtronic"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <ScrollAnimation animation="fade-up">
              <span className="font-subheading text-sm tracking-wider uppercase mb-4 block text-primary">
                Who We Are
              </span>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.1}>
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                ABOUT US
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.2}>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Delivering premium car care products with innovation, quality,
                and trust at the core of everything we do.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="fade-right">
              <div>
                <span className="text-primary font-subheading text-sm tracking-wider uppercase mb-4 block">
                  “A dream that inspires action and results”
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                  Why REDTRONIC?
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  We believe excellent customer support and fast service are
                  pre-requisites for successful cooperation. For every customer,
                  we offer the best of our services along with competitive
                  pricing. We never compromise on quality and are trusted across
                  international markets.
                </p>

                <ul className="space-y-4">
                  {[
                    "Quality You Can Trust",
                    "Innovative Product Development",
                    "Customer-Focused Approach",
                    "Driven by Passion for Cars",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="text-primary" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-left" delay={0.2}>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dvjgt44qs/image/upload/v1765544648/car-service-worker-polishes-car-details-with-orbital-polisher_jbqxdt.jpg"
                    alt="Our Work"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-8 rounded-2xl shadow-lg">
                  <div className="text-5xl font-bold">9+</div>
                  <div className="text-sm uppercase tracking-wider">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-up">
              <span className="text-primary text-sm uppercase mb-4 block">
                Our Values
              </span>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold">
                What Drives Us Forward
              </h2>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={0.1 * index}
              >
                <div className="feature-card h-full">
                  <value.icon className="text-primary mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

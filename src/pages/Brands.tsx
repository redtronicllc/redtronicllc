import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const brands = [
  {
    name: "SIRIUS",
    description:
      " SIRIUS PRO is a premium quality nano ceramic coating engineered with advanced technology in nano ceramic protective coating. ",
    image:
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765545186/sirius_logo222_Blue_Yellow_fglyaj.png",
    products: 18,
  },
  {
    name: "DAX DETAILING",
    description:
      "Car Detailing is the performance of thorough cleaning, restoration, Polishing & finishing of an automobile, both inside and out, to produce a show-quality level of detail. ",
    image:
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765544900/DAX_Logo_with_R__1_-1-removebg-preview_uchnvx.png",
    products: 44,
  },
  {
    name: "DAX SOLUTIONS",
    description:
      " The manufacturer of many different oils can utilize the same base stock for each formulation and can choose different additives for each specific application. ",
    image:
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765544900/DAX_Logo_with_R__1_-1-removebg-preview_uchnvx.png",
    products: 6,
  },
];

const Brands = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src=" https://res.cloudinary.com/dvjgt44qs/image/upload/v1766481348/pexels-lynxexotics-6969028_qezuce.jpg"
            alt="Our Brands"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <ScrollAnimation animation="fade-up">
              <span className="text-primary font-subheading text-sm tracking-wider uppercase mb-4 block">
                Our Brands
              </span>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.1}>
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                For a Car That Always Looks New
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.2}>
              <p className="text-xl text-white/80">
                SIRIUS & DAX delivers premium car detailing products designed to
                give every vehicle a flawless shine and long-lasting protection.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={0.1 * index}
              >
                <Link
                  to="/products"
                  className="group block relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-heading text-2xl font-bold group-hover:text-primary transition-colors">
                        {brand.name}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {brand.products} Products
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {brand.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary">
                      <span className="font-subheading text-sm tracking-wider uppercase">
                        Explore Products
                      </span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-2 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 text-center">
          <ScrollAnimation animation="scale-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Not Sure What to Choose?
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.1}>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Tell us what you’re looking for and our specialists will recommend
              the ideal products.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.2}>
            <Link
              to="/contact"
              className="btn-hero inline-flex items-center gap-2"
            >
              Contact Our Experts
              <ArrowRight size={18} />
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Brands;

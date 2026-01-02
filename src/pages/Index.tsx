import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Award, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import Counter from "@/components/Counter";
import heroCar from "@/assets/hero-video.mp4";

const features = [
  {
    icon: Zap,
    title: "Your Reliable Car Care Partner",
    description:
      "Our reputation as a trusted partner stems from our dedication to delivering exceptional products and services.",
  },
  {
    icon: Shield,
    title: "Driven by Integrity & Quality",
    description:
      "By choosing REDTRONIC, you can trust that you are partnering with professionals who prioritize your satisfaction and success.",
  },
  {
    icon: Award,
    title: "Industry Expertise You Can Trust",
    description:
      "With over 9 years of experience and a deep understanding of market trends, we continuously refine our products and services to stay ahead of industry standards.",
  },
];

const stats = [
  { value: 7000, suffix: "+", label: "Customers" },
  { value: 100, suffix: "+", label: "Products" },
  { value: 9, suffix: "+", label: "Countries" },
  { value: 100, suffix: "%", label: "Customer Satisfaction" },
];

const categories = [
  {
    title: "BOROPHENE COATING",
    description: "40% brighter, showroom-quality shine that lasts a lifetime.",
    image:
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765019113/Borophene_NEW_1_hodpjz.png",
  },
  {
    title: "GRAPHENE COATING",
    description: " Our Graphene Coating utilizes the revolutionary properties of graphene to deliver unparalleled protection and visual enhancement.",
    image:
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765533966/Graphene_kit_b6vweu.png",
  },
  {
    title: "PAINT PROTECTION FILM",
    description: "Paint protection film is equipped with our easy-stretch formula and exclusive adhesive",
    image:
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765534167/ppf_kcgxcz.png",
  },
  {
    title: "WINDOW TINTING",
    description: " Minimizes sun glare for safer and more comfortable driving",
    image:
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765534558/tinting_yuox1d.png",
  },
];

const steps = [
  {
    number: "01",
    title: "High-Performance Formulas",
    description:
      "Our products are developed using advanced technologies to enhance paint, protect surfaces, and boost clarity.",
  },
  {
    number: "02",
    title: "Protect & Preserve",
    description:
      "Enjoy long-term defense against UV, dirt, and environmental damage while keeping your car looking immaculate.",
  },
  {
    number: "03",
    title: "Enhanced Durability",
    description:
      "Benefit from long-term hydrophobicity, UV resistance, and superior surface protection.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
<section className="relative min-h-screen flex items-center overflow-hidden">
  {/* Background Video */}
  <div className="absolute inset-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      src={heroCar}
      className="w-full h-full object-cover"
    />
  
 

          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 pt-24">
          <div className="max-w-3xl">
            <ScrollAnimation animation="fade-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-subheading text-sm tracking-wider uppercase mb-6">
                Premium Car Detailing Products
              </span>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.1}>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Illuminate Your Drive With{" "}
                <span className="text-primary">Premium Car Care</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.2}>
              <p className="text-xl text-muted-foreground mb-10 max-w-xl">
                Redtronic delivers high-performance car detailing products
                designed to protect, enhance, and transform your vehicle.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn-hero flex items-center gap-2">
                  Explore Products
                  <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </section>

      {/* === FEATURE CARDS — moved OUTSIDE hero section so they appear after hero === */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={0.1 + index * 0.08}
              >
                <div className="glass-card p-6 h-full flex flex-col">
                  <feature.icon className="text-primary mb-4" size={28} />
                  <h5 className="font-subheading text-lg font-semibold mb-3">
                    {feature.title}
                  </h5>
                  <p className="text-sm text-muted-foreground flex-1">
                    {feature.description}
                  </p>
                  {/* optional CTA or icon row */}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollAnimation animation="fade-right">
                <span className="text-primary font-subheading text-sm tracking-wider uppercase mb-4 block">
                  About Us
                </span>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={0.1}>
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Delivering quality products and professional service for over 9
                  years
                </h2>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={0.2}>
                <div className="w-20 h-1 bg-primary mb-6" />
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={0.3}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Redtronic LLC, a Middle East based company headquartered in
                  Dubai, UAE a subsidiary of Weinber Inc. NY, USA which is
                  involved in manufacturing of Lubricants, Car Care, Detailing
                  and Surface Protective Coating products. We have passion for
                  our customers and their business requirements. Redtronic
                  Solutions, Car Care Products and Technology are very much
                  accredited by our customers in the Middle East, Far East and
                  African countries. By partnering with the world leaders in car
                  care manufacturer and Technology developers our formulas are
                  second to none. To gain ultimate customer satisfaction, we
                  emphasize on consistency in our performances and services.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={0.4}>
                <Link to="/about" className="btn-hero inline-flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight size={18} />
                </Link>
              </ScrollAnimation>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <ScrollAnimation
                  key={index}
                  animation="scale-in"
                  delay={0.2 + index * 0.1}
                >
                  <div className="feature-card text-center">
                    <Counter end={stat.value} suffix={stat.suffix} />
                    <p className="text-muted-foreground mt-2 font-subheading text-sm tracking-wider uppercase">
                      {stat.label}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-up">
              <span className="text-primary font-subheading text-sm tracking-wider uppercase mb-4 block">
                Our Products
              </span>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Our Premium Car Detailing Products
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Enhance every curve and detail of your car. Shine and protection
                that lasts.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={0.1 * index}>
                <Link
                  to="/products"
                  className="group block relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="font-subheading text-sm tracking-wider uppercase">
                        View Products
                      </span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fade-up" delay={0.3}>
            <div className="text-center mt-12">
              <Link
                to="/products"
                className="btn-hero inline-flex items-center gap-2 animate-pulse-glow"
              >
                View All Products
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollAnimation animation="fade-right">
                <span className="text-primary font-subheading text-sm tracking-wider uppercase mb-4 block">
                 
                </span>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={0.1}>
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                 Advanced Engineering / Proven Performance
                </h2>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={0.2}>
                <Link to="/contact" className="btn-hero inline-flex items-center gap-2">
                  Let's Get In Touch
                  <ArrowRight size={18} />
                </Link>
              </ScrollAnimation>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <ScrollAnimation
                  key={index}
                  animation="fade-left"
                  delay={0.2 + index * 0.15}
                >
                  <div className="flex gap-6">
                    <span className="step-number">{step.number}</span>
                    <div className="pt-4 border-t border-primary/30 flex-1">
                      <h3 className="font-heading text-2xl font-bold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollAnimation animation="scale-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Vehicle’s Shine?
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.1}>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Contact our team today to explore the best detailing products for
              your car and get a solution tailored to your needs.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.2}>
            <Link
              to="/contact"
              className="btn-hero inline-flex items-center gap-2 animate-pulse-glow"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
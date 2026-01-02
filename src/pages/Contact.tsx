import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Swal from "sweetalert2";


const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+971 4 33 99 55 0", " +971 55 930 5208"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["business@redtronicllc.com"],
  },
   {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sat: 8:30 AM - 5:30 PM", "Sunday: Closed"],
  },
  {
    icon: MapPin,
    title: "UAE",
    details: [" Redtronic LLC " , "Ras Al Khor, Industrial Area - 1 ", "P.O. Box 118215, Dubai, UAE."],  
  },
   {
    icon: MapPin,
    title: "INDIA",
    details: ["Redtronic LLP", "Kerala, India"], 
  },
 
];

const Contact = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    company: "",

    message: "",
  });

  const onSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  formData.append(
    "access_key",
    "7b92b47c-4df5-4103-96a0-bc5262498967"
  );

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        icon: "success",
        title: "Thank You!",
        text: "Thank you for contacting us. We will get back to you shortly.",
        confirmButtonText: "OK",
      });

      event.target.reset();
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        company: "",
        message: "",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again.",
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Unable to submit the form. Please try again later.",
    });
  }
};

   

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section
        className="relative pt-36 pb-20 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dvjgt44qs/image/upload/v1766477401/batmobile-concept-car-with-neon-lights_rrbsbw.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/70 via-black/0 to-background" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <ScrollAnimation animation="fade-up">
              <span className="text-primary font-subheading text-sm tracking-wider uppercase mb-4 block">
                Contact Us
              </span>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.1}>
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                Get In Touch
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.2}>
              <p className="text-xl text-gray-300">
                Have questions about our products? Need a custom solution?
                Our team is ready to help.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={0.1 * index}>
                <div className="feature-card text-center h-full">
                  <info.icon className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="font-heading text-xl font-bold mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <ScrollAnimation animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.2}>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-subheading tracking-wider uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder=" "
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-subheading tracking-wider uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder=" "
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-subheading tracking-wider uppercase mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-subheading tracking-wider uppercase mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder=" "
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-subheading tracking-wider uppercase mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="quote">Request a Quote</option>
                    <option value="products">Product Information</option>
                    <option value="support">Technical Support</option>
                     <option value="services">Service Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-subheading tracking-wider uppercase mb-2">
                    Message 
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-hero w-full flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-up">
            <div className="rounded-2xl overflow-hidden h-96 bg-card">
              <iframe
                src=" https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7221.897576443682!2d55.335606!3d25.171207000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67cfd5bfe7a5%3A0xedcd49a1dd76cd6e!2sRedtronic%20LLC!5e0!3m2!1sen!2sae!4v1718261394554!5m2!1sen!2sae"
                width="250%"
                height="250%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Redtronic Location"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

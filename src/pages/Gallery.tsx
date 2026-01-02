import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { X } from "lucide-react";

const galleryItems = [
  {
    src: "https://res.cloudinary.com/dvjgt44qs/video/upload/v1763542053/Nisan_petrol_Graphene_t6aljo.mp4",
    alt: "Graphene coating",
    category: "COATINGS",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dvjgt44qs/video/upload/v1763541450/Untitled_3_fkkqck.mp4",
    alt: "Graphene coating",
    category: "COATINGS",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dvjgt44qs/video/upload/v1763541316/bently_graphene_bphacg.mp4",
    alt: "Graphene coating",
    category: "COATINGS",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dvjgt44qs/video/upload/v1763542048/Untitled_hn8ftx.mp4",
    alt: "Leather Coating",
    category: "COATINGS",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dvjgt44qs/video/upload/v1763542046/sl_63_ppf_gbsx8n.mp4",
    alt: "PPF installation video",
    category: "AUTOMOTIVE FILMS",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dvjgt44qs/video/upload/v1763541293/autopro_ppf_1_reyxu0.mp4",
    alt: "PPF installation video",
    category: "AUTOMOTIVE FILMS",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dvjgt44qs/video/upload/v1763542010/mg_whale_tint_pkujy5.mp4",
    alt: "PPF installation video",
    category: "AUTOMOTIVE FILMS",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dvjgt44qs/video/upload/v1765786086/ppf_video_czvil0.mp4",
    alt: "PPF installation video",
    category: "AUTOMOTIVE FILMS",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dvjgt44qs/video/upload/v1763542024/range_rover_ahallq.mp4",
    alt: "PPF installation video",
    category: "AUTOMOTIVE FILMS",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dvjgt44qs/video/upload/v1765786177/g_wagon_ppf_yqg4pf.mp4",
    alt: "PPF installation video",
    category: "AUTOMOTIVE FILMS",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dvjgt44qs/video/upload/v1765786180/prado_ppf_hf08pa.mp4",
    alt: "PPF installation video",
    category: "AUTOMOTIVE FILMS",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dvjgt44qs/video/upload/v1765786186/ppf_mix_re_lau8rt.mp4",
    alt: "PPF installation video",
    category: "AUTOMOTIVE FILMS",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dvjgt44qs/video/upload/v1765786205/benz_s400d_ppf_gqbrw9.mp4",
    alt: "PPF installation video",
    category: "AUTOMOTIVE FILMS",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dvjgt44qs/video/upload/v1765786241/ppf_ad_video_xolssv.mp4",
    alt: "PPF installation video",
    category: "AUTOMOTIVE FILMS",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dvjgt44qs/video/upload/v1763542040/Sequence_01_xxko6i.mp4",
    alt: "Polishing",
    category: "DETAILING",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dvjgt44qs/video/upload/v1763542000/toyota_celica_bqs3j1.mp4",
    alt: "Polishing",
    category: "DETAILING",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dvjgt44qs/video/upload/v1763542028/toyota_supra_weo9il.mp4",
    alt: "Polishing",
    category: "DETAILING",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dvjgt44qs/video/upload/v1763541980/prime_cut_okzz3q.mp4",
    alt: "Polishing",
    category: "DETAILING",
    type: "video",
  },
];

const categories = ["All", "COATINGS", "AUTOMOTIVE FILMS", "DETAILING"];

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxItem, setLightboxItem] =
    useState<(typeof galleryItems)[0] | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO WITH BACKGROUND IMAGE */}
      <section
        className="relative pt-36 pb-24 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(' https://res.cloudinary.com/dvjgt44qs/image/upload/v1766478622/freepik__expand__62319_dzvgy4.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/85" />

        <div className="relative z-10">
          <ScrollAnimation animation="fade-up">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white">
              Our Work Showcase
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={0.2}>
            <p className="text-xl text-gray-300">
              Explore our coatings, films, and detailing projects.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 sticky top-20 z-40 bg-background/95 backdrop-blur border-b">
        <div className="flex justify-center gap-3 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm uppercase transition ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <ScrollAnimation key={index} animation="scale-in">
              <div
                onClick={() => setLightboxItem(item)}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              >
                <video
                  src={item.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-primary uppercase text-sm tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur flex items-center justify-center p-6"
          onClick={() => setLightboxItem(null)}
        >
          <button className="absolute top-6 right-6">
            <X size={32} />
          </button>

          <video
            src={lightboxItem.src}
            controls
            autoPlay
            className="max-w-full max-h-full rounded-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ArrowRight, Filter, Grid, List } from "lucide-react";

/* ================= CATEGORIES ================= */
const categories = [
  { id: "all", name: "All Products" },
  { id: "lightbars", name: "SIRIUS COATINGS" },
  { id: "beacons", name: "AUTOMOTIVE PROTECTION FILMS" },
  { id: "sirens", name: "DAX DETAILING" },
  { id: "interior", name: "DAX ADDICTIVES" },
];

const products = [

  {
    id: "borophene coating",
    name: "BOROPHENE COATING",
    category: "lightbars",
    description: "SIRIUS – Premium Borophene Coating: The Future of Protective Coatings",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765019113/Borophene_NEW_1_hodpjz.png",
    specs: ["Ultimate Durability", "Scratch Resistance", " Packing - Bottle & Kit"],
  },
  {
    id: "graphene coating",
    name: "GRAPHENE COATING",
    category: "lightbars",
    description: "Advanced protection with extreme gloss & Ultimate protection",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765533966/Graphene_kit_b6vweu.png",
    specs: ["Long lasting durability", "High Gloss", " Packing - Bottle & Kit"],
  },
  {
    id: "ceramic coating",
    name: "CERAMIC COATING",
    category: "lightbars",
    description: "Advanced nano ceramic coating with 9H hardness and hydrophobic properties",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765534763/ceramic_kit_ojy3o3.png",
    specs: ["Super Hydrophobic Effect", "UV Resistance", " Packing - Bottle & Kit"],
  },
  {
    id: "graphene wax",
    name: "GRAPHENE WAX",
    category: "lightbars",
    description: "Smooth finish, Deep Shine & enhanced durability.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765535117/graphene_wax_mc9kfp.png",
    specs: ["Ultimate Durability", "Scratch Resistance", " Packing - Bottle"],
  },
  {
    id: "leather coating",
    name: "LEATHER COATING",
    category: "lightbars",
    description: "Keeps leather seats looking new",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765535687/leather_coating_xb0g68.png",
    specs: ["Maintains Natural Look & Feel", "Long-Term Durability", " Packing - Bottle"],
  },
  {
    id: "fabric coating",
    name: "FABRIC COATING",
    category: "lightbars",
    description: "Invisible protection for fabric surfaces",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765535602/fabric_coating_uem00r.png",
    specs: ["Long-lasting wear",  " Packing - Bottle", "Interior Cleaning & Dressing"],
  },
  {
    id: "ceramic prep",
    name: "CERAMIC PREP",
    category: "lightbars",
    description: "Prepare the surface. Perfect the shine.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765535509/ceramic_prep_d99mlr.png",
    specs: ["Enhances Final Finish", "Antistatic Surface", "Packing - Bottle"],
  },
  {
    id: "ceramic boost",
    name: "CERAMIC BOOST",
    category: "lightbars",
    description: "Keeps surfaces silk, shiny and smooth",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765535853/ceramic_boost_sg9hsw.png",
    specs: ["Shiny and Smooth", "Easy Detailer Spray", "Packing - Bottle"],
  },
  {
    id: "PPF st.guard",
    name: "PPF ST. GUARD",
    category: "beacons",
    description: "High corrosion resistance, perform well in harsh environment",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765534167/ppf_kcgxcz.png",
    specs: ["Hydrophobic Property", "Heat Healing","Anti-Yellowing","Packing - 1.52x15m Roll"],
  },
  {
    id: "PPF Prudence",
    name: "PPF PRUDENCE",
    category: "beacons",
    description: "High corrosion resistance, perform well in harsh environment",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765534167/ppf_kcgxcz.png",
    specs: ["Hydrophobic Property", "Anti-Scratches","High Gloss","Packing - 1.52x15m Roll"],
  },
  {
    id: "PPF matte finish",
    name: "PPF MATTE FINISH",
    category: "beacons",
    description: "Outstanding durability to help protect longer.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765534167/ppf_kcgxcz.png",
    specs: ["Hydrophobic Property", "Heat Healing","Anti-Yellowing","Packing - 1.52x15m Roll"],
  },
  {
    id: "PPF magnifence",
    name: "PPF MAGNIFENCE",
    category: "beacons",
    description: " Paint protection film is equipped with our easy-stretch formula.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765534167/ppf_kcgxcz.png",
    specs: ["Hydrophobic Property", "Instant Healing","High Gloss","Packing - 1.52x15m Roll"],
  },
  {
    id: "PPF dazzling silver",
    name: "PPF DAZZLING SILVER",
    category: "beacons",
    description: "It will make the car to a shining & dazzling finish.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765534167/ppf_kcgxcz.png",
    specs: ["Hydrophobic Property", "Self Healing","High Gloss","Packing - 1.52x15m Roll"],
  },
  {
    id: "tinting film",
    name: "WINDOW TINTING FILM",
    category: "beacons",
    description: "Enjoy cooler drives with enhanced comfort and privacy",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765534558/tinting_yuox1d.png",
    specs: ["Anti-Glare", "UV Rejection", "IR Rejection", "Packing -1.52x30m Roll"],
  },
  {
    id: "prime cut plus",
    name: "PRIME CUT PLUS COMPOUND",
    category: "sirens",
    description: "Be ready for a breathtaking driving condition with DAX Prime Cut.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765536144/prime_cut_plus_aitekc.png",
    specs: ["Deep scratches", "Packing - 1 Gal, 32oz"],
  },
  {
    id: "finishing wax",
    name: "FINISHING WAX",
    category: "sirens",
    description: "Specially formulated to enhance the surface and provide excellent gloss.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765536244/finishing_wax_rpnehx.png",
    specs: [ "Mirror-like finish","Easy application", "Packing - 1 Gal, 32oz"],
  },
  {
    id: "proglaze",
    name: "PROGLAZE",
    category: "sirens",
    description: "DAX Pro Glaze Polish is an all-in-one polishing product that cuts heavy oxidation",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765536445/pro_glaze_d8n5qz.png",
    specs: ["Packing - 1 Gal, 32oz"],
  },
  {
    id: "finish polish",
    name: "FINISH POLISH",
    category: "sirens",
    description: "Buffing residue wipes off easily.Safe for clear coat,single-stage,and modern paints.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765536838/finish_polish_kfd4po.png",
    specs: ["Packing - 1 Gal, 32oz","mirror-like finish" ],
  },
  {
    id: "sparkle shine",
    name: "SPARKLE SHINE",
    category: "sirens",
    description: "Mirror-like gloss with a smooth, swirl-free finish.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765536987/sparkle_shine_ocuqfa.png",
    specs: ["Packing - 16oz","sparkling finish"],
  },
  {
    id: "ultimate finish",
    name: "ULTIMATE FINISH",
    category: "sirens",
    description: "Quick-detail solution that safely removes light dust",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765537208/ultimate_finish_5_gal_v9jaxl.png",
    specs: ["Packing - 5 Gal, 1 Gal & 500ml", "High Gloss"],
  },
  {
    id: "multi purpose cleaner",
    name: "MULTI PURPOSE CLEANER",
    category: "sirens",
    description: "Powerful cleaning for every surface, inside and out.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765537586/MULTI_PURPOSE_CLEANER_-_5_GAL_mb8h6w.png",
    specs: ["Packing - 5 Gal, 1 Gal & 500ml "],
  },
  {
    id: "multi purpose degreaser",
    name: "MULTI PURPOSE DEGREASER",
    category: "sirens",
    description: "Deep clean performance you can trust.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765537453/MULTI_PURPOSE_CLEANER_-_1_GAL_asni66.png",
    specs: ["Packing - 5 Gal & 1 Gal"],
  },
  {
    id: "hyperdresser",
    name: "HYPER DRESSER",
    category: "sirens",
    description: "Professional finish, instant results",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765537316/HYPER_DRESSER_-_5_GAL_dcvnay.png",
    specs: ["Packing - 5 Gal, 1 Gal & 500ml","Long-lasting gloss"],
  },
  {
    id: "leather cleaner&conditioner",
    name: "LEATHER CLEANER & CONDITIONER",
    category: "sirens",
    description: "Restores natural look and smooth finish",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765537708/leather_cleaner_conditioner_lrbwak.png",
    specs: ["Packing - 1 Gal"],
  },
  {
    id: "tire glow",
    name: "TIRE GLOW",
    category: "sirens",
    description: "Rich gloss. Long-lasting protection",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765537840/TIRE_GLOW_-_5_GAL_vbszcf.png",
    specs: ["Packing - 5 Gal & 500ml"],
  },
  {
    id: "engine shine",
    name: "ENGINE SHINE",
    category: "sirens",
    description: "Powerful shine, clean performance",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765537924/ENGINE_SHINE_-_5_GAL_rsxkr6.png",
    specs: ["Packing - 5 Gal, 1 Gal & 500ml"],
  },
  {
    id: "wash N shine shampoo",
    name: "WASH N SHINE SHAMPOO",
    category: "sirens",
    description: "Every wash, a sparkling finish",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765538016/wash_N_shine_5_gal_thmm6t.png",
    specs: ["Packing - 5 Gal"],
  },
  {
    id: "high foam shampoo",
    name: "HIGH FOAM SHAMPOO",
    category: "sirens",
    description: "Powerful foam with a glossy finish",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765538091/High_foam_shampoo_5_Gal_wjklge.png",
    specs: ["Packing - 5 Gal"],
  },
  {
    id: "clay bar coarse twin can",
    name: "CLAY BAR TWIN CAN",
    category: "sirens",
    description: "Professional-grade decontamination power",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765538181/clay_bar_twin_can_ta5uqu.png",
    specs: ["Packing - 200 g "],
  },
  {
    id: "clay bar normal blue",
    name: "CLAY BAR NORMAL BLUE",
    category: "sirens",
    description: "Clean surface, silky touch.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765538339/clay_bar_normal_blue_omtfa7.png",
    specs: ["Packing - 200 g"],
  },
  {
    id: "foam pad blue",
    name: "FOAM PAD BLUE",
    category: "sirens",
    description: "Perfect control for final polishing",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765539696/Foam_pad_blue_mdkdif.png",
    specs: ["Size - 5 & 7 inch", "Individual Packaging"],
  },
  {
    id: "foam pad yellow",
    name: "FOAM PAD YELLOW",
    category: "sirens",
    description: "Efficient polishing with smooth results",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765538462/foam_pad_yellow_barjaj.png",
    specs: ["Size - 5 & 7 inch", "Individual Packaging"],
  },
  {
    id: "foam pad black",
    name: "FOAM PAD BLACK",
    category: "sirens",
    description: "Perfect pad for final detailing touches.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765538540/foam_pad_black_u3tskn.png",
    specs: ["Size - 5 & 7 inch", "Individual Packaging"],
  },
   {
    id: "wool pad black&white",
    name: " WOOL PAD BLACK & WHITE",
    category: "sirens",
    description: "Built for serious correction work",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765538628/wool_pad_black_White_lkt8jl.png",
    specs: ["Size - 5 inch", "Individual Packaging"],
  },
  {
    id: "wool pad black",
    name: "WOOL PAD BLACK",
    category: "sirens",
    description: "Maximum correction, consistent finish",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765538793/Wool_pad_black_ggwwl5.png",
    specs: ["Size - 6 inch", "Individual Packaging"],
  },
   {
    id: "hybrid foam pad blue",
    name: "  HYBRID FOAM PAD BLUE",
    category: "sirens",
    description: "Hybrid performance for efficient polishing.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765538894/hybrid_pad_zgx2zm.png",
    specs: ["Size - 6 inch", "Individual Packaging"],
  },
   {
    id: "single side wool pad natural",
    name: "SINGLE SIDE WOOL PAD NATURAL",
    category: "sirens",
    description: "Natural wool for fast, consistent results",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765538978/single_side_wool_pad_bicuri.png",
    specs: ["Size - 7 inch", "Individual Packaging"],
  },
   {
    id: "cutting foam pad maroon",
    name: "CUTTING FOAM PAD MAROON",
    category: "sirens",
    description: "High cutting power for effective paint correction",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765539065/maroon_foam_pad_sjzoz0.png",
    specs: ["Size - 6 & 8 inch", "Individual Packaging"],
  },
  {
    id: "polishing foam pad yellow",
    name: "POLISHING FOAM PAD YELLOW",
    category: "sirens",
    description: "Even polishing with professional results.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765538462/foam_pad_yellow_barjaj.png",
    specs: ["Size - 6 & 8 inch", "Individual Packaging"],
  },
  {
    id: "Finishing Foam Pad Black",
    name: "FINISHING FOAM PAD BLACK",
    category: "sirens",
    description: "Ultra-soft finishing for a mirror-like shine.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765539428/finishing_foam_pad_black_n0dchq.png",
    specs: ["Size - 6 & 8 inch", "Individual Packaging"],
  },
  {
    id: "interior upholstery brush",
    name: "INTERIOR UPHOLSTERY ",
    category: "sirens",
    description: "Perfect for seats, carpets, and fabric",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765540589/upholstery_brush_bwsh4m.png",
    specs: ["Medium-Size Hand Brush",],
  },
    {
    id: "detailing brush set 5 pcs",
    name: "DETAILING BRUSH SET ",
    category: "sirens",
    description: "Complete set for thorough detailing",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765541026/5_set_brush_sl79kw.png",
    specs: ["Removes dirt", "Multi-Surface Cleaning",],
  },
   {
    id: "ESS detailing brush",
    name: "ESS DETAILING BRUSH",
    category: "sirens",
    description: "Perfect tool for delicate surfaces.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765541438/ESS_Brush_jiq8dg.png",
    specs: ["Ideal for interior & exterior detailing"],
  },
   {
    id: "seat belt brush",
    name: "SEAT BELT BRUSH",
    category: "sirens",
    description: "Deep cleans seat belts safely",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765541648/seat_belt_brush_mily8i.png",
    specs: ["Dual‑Sided Bristles", "U‑shaped" ],
  },
  {
    id: "wheel brush",
    name: "WHEEL BRUSH",
    category: "sirens",
    description: "Essential tool for spotless wheels. Helps restore a clean, shiny wheel finish.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765541658/wheel_brush_crknhu.png",
    specs: ["Cylindrical cone design", "Red & black color" ],
  },
  {
    id: "tire scrub brush",
    name: "TIRE SCRUB BRUSH",
    category: "sirens",
    description: "Deep scrubbing for like-new tires. Safe for all types of tires.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765541651/tire_scrub_brush_bd8ame.png",
    specs: [" Plastic or rubberized grip"],
  },
  {
    id: "tire&carpet brush heavy duty",
    name: "TIRE & CARPET BRUSH HEAVY DUTY",
    category: "sirens",
    description: "Powerful scrubbing for tires and carpets.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765541649/Tire_carpet_brush_dowyau.png",
    specs: ["Rectangular shape", "Heavy-Duty "],
  },
  {
    id: "microfibre towel 40x60",
    name: "MICRO FIBRE TOWEL DETAILING 40X60",
    category: "sirens",
    description: "Professional detailing towel performance",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765541932/40x60_towel_-_blue_pnwnbt.png",
    specs: ["40x60 cm Size", "Stiched Edges","350 GSM"],
  },
  {
    id: "microfibre towel 40x40",
    name: "MICRO FIBRE TOWEL DETAILING 40X40",
    category: "sirens",
    description: "Perfect for quick detailing tasks.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765541932/40x40_towel_-_green_gwiclh.png",
    specs: ["Edgeless", "400 GSM", "40x40 cm Size"],
  },
   
  {
    id: "engine oil cleaning detergent",
    name: "ENGINE OIL CLEANING DETERGENT",
    category: "interior",
    description: "Helps restore engine efficiency.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765542034/Detergent_zkhka5.png",
    specs: ["Packing - 355ml"],
  },
  {
    id: "engine oil treatment",
    name: "ENGINE OIL SYSTEM TREATMENT",
    category: "interior",
    description: "Extends engine life and efficiency.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765542358/Engine_oil_system_Treatment_vocyyc.png",
    specs: ["Packing - 355ml"],
  },
  {
    id: "fuel system cleaner",
    name: "FUEL SYSTEM CLEANER",
    category: "interior",
    description: "Keeps your fuel system running clean. Improves fuel efficiency.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765542356/fuel_system_elry7u.png",
    specs: ["Packing - 355ml"],
  },
  {
    id: "engine oil stop smoke",
    name: "ENGINE OIL STOP SMOKE",
    category: "interior",
    description: "Improves engine operation and protection",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765542358/stop_smoke_txy54w.png",
    specs: ["Packing - 355ml"],
  },
];


const Products = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section WITH BACKGROUND IMAGE */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src=" https://res.cloudinary.com/dvjgt44qs/image/upload/v1766478348/hands-man-with-orbital-polisher-repair-shop-polishing-black-sports-car-closeup-shot-car_rygmso.jpg"
            alt="Products Hero"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <ScrollAnimation animation="fade-up">
              <span className="text-primary font-subheading text-sm tracking-wider uppercase mb-4 block">
                Our Products
              </span>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.1}>
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                Premium Automotive Detailing Products
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.2}>
              <p className="text-xl text-white/80">
                Explore our comprehensive range of detailing products, developed
                to meet the highest industry standards.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 py-4 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
              <Filter size={20} className="text-muted-foreground flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-subheading tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className={
            viewMode === "grid"
              ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-6"
          }>
            {filteredProducts.map((product, index) => (
              <ScrollAnimation key={product.id} animation="fade-up" delay={0.05 * (index % 8)}>
                <Link
                  to={`/products/${product.id}`}
                  className={`group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 ${
                    viewMode === "list" ? "flex flex-col lg:flex-row" : ""
                  }`}
                >
                  <div className={`overflow-hidden ${viewMode === "list" ? "lg:w-64 flex-shrink-0" : "aspect-square"}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <span className="text-primary text-xs font-subheading tracking-wider uppercase">
                      {categories.find(c => c.id === product.category)?.name}
                    </span>
                    <h3 className="font-heading text-xl font-bold mt-2 mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.specs.map((spec, i) => (
                        <span key={i} className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground">
                          {spec}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{product.price}</span>
                      <ArrowRight size={18} className="text-primary group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;

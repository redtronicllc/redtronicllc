import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ArrowLeft, ArrowRight, Check, Download, Phone } from "lucide-react";
import { useEffect } from "react";

const products: Record<string, {
  name: string;
  category: string;
  description: string;
  longDescription: string;
  price: string;
  image: string;
  images: string[];
  specs: string[];
  features: string[];
  downloads: { name: string; type: string }[];
}> = {
  "borophene coating": {
    name: "PREMIUM BOROPHENE COATING",
    category: "lightbars",
    description: "SIRIUS – Premium Borophene Coating: The Future of Protective Coatings",
    longDescription: " Discover a breakthrough in surface protection — a permanent, single-layer coating powered by cutting-edge Borophene technology. Elevate Every Surface with SIRIUS Borophene Coating Indulge in flawless brilliance, enduring durability, and cutting-edge protection. SIRIUS Borophene sets a new benchmark in luxury coatings. Transform your surfaces with timeless elegance. Expect extraordinary brilliance, superior defence, and timeless durability in one effortless application:",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765616691/borophene_kit_tphko4.png",
    images: [
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765616693/borophene_Bottle_knp8gh.png",
    ],
    specs: [
      "10H hardness prevents micro-swirls and scratches from routine washing.",
      "40% brighter, showroom-quality shine that lasts a lifetime.",
      "Up to 10 years durability.",
      "Blocks 99.9% of UV rays, preventing paint fade and maintaining vibrant color for life.",
      "One-layer application with a quick one-minute flash time before levelling.",
      " Extreme Heat Resistance – Withstands temperatures up to 3000°F.",
    ],
    features: [
      "Durability Upto 10 years",
      "10H Hardness",
      "Crystal Clear Finish",
      "10 Years Warranty",
      "Packing - Kit & Bottle",
      
    ],
    downloads: [
        { name: "Product Datasheet", type: "PDF" },
    ],
  },
  "graphene coating": {
    name: "GRAPHENE COATING",
    category: "lightbars",
    description: "SIRIUS Ultra – Premium graphene coating",
    longDescription: " Our Graphene Coating utilizes the revolutionary properties of graphene to deliver unparalleled protection and visual enhancement. This advanced formulation creates an incredibly strong, flexible barrier that resists environmental contaminants while providing exceptional depth and clarity.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765616932/graphene_kit_fu4muo.png",
    images: [
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765616933/graphene_bottle_bgywbo.png",
    ],
    specs:  [
      "Long Lasting durability",
      "Super Hydrophobicity",
      "High Gloss Finish",
      "Protection lasting up to 7 years",
    ],
   features: [
      "Deep Wet-Look Finish",
      "7+ Years",
      "10H",
      "Packing - Kit & Bottle",
    ],
    downloads: [
      
    ],
  },
   "ceramic coating": {
    name: "NANO CERAMIC COATING",
    category: "lightbars",
    description: "Advanced nano ceramic coating with 9H hardness and hydrophobic properties",
    longDescription: " Our Nano Ceramic Coating represents the pinnacle of automotive surface protection technology. Engineered with advanced nano-ceramic particles, this coating creates an ultra-durable, transparent barrier that bonds molecularly with your vehicle's paintwork.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765611434/ceramic_kit_kdugyf.png",
    images: [
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765611209/ceramic_bottle_nyqpap.png",
    ],
    specs:  [
      "9H hardness rating for superior scratch resistance",
      "Extreme hydrophobic properties for effortless water beading",
      "UV protection to prevent paint oxidation and fading",
      "Chemical resistance against acids, bird droppings, and contaminants",
      "High-gloss finish that enhances depth and clarity",
      "Long-lasting protection up to 5 years with proper maintenance",
    ],
   features: [
      "High-Gloss Finish",
      "Durability - 5 Years",
      "9H Hardness",
       "Packing - Kit & Bottle",
    ],
    downloads: [
      
    ],
  },
   "graphene wax": {
    name: "GRAPHENE WAX",
    category: "lightbars",
    description: "SIRIUS GRAPHENE WAX is a fully synthetic wax infused with Graphene to create unmatched shining",
    longDescription: " Our Graphene Coating utilizes the revolutionary properties of graphene to deliver unparalleled protection and visual enhancement. This advanced formulation creates an incredibly strong, flexible barrier that resists environmental contaminants while providing exceptional depth and clarity.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765617058/graphene_wax_ikxruu.png",
    images: [
      
    ],
    specs:  [
      "Long Lasting durability",
      "Super Hydrophobicity",
      "High Gloss Finish",
      "Protection lasting up to 7 years",
    ],
   features: [
      "Deep Wet-Look Finish",
      "Durability - 7+ Years",
      "10H Hardness",
       "Packing - Bottle",
    ],
    downloads: [    
    ],
  },
   "leather coating": {
    name: "LEATHER COATING",
    category: "lightbars",
    description: "Specialized coating for automotive leather surfaces and upholstery",
    longDescription: "  Sirius Leather Coating protects leather surfaces from stains, aging, and marks. It forms a smooth, hydrophobic layer that makes cleaning easy and keeps your car interiors looking like new. Suitable for all leather surfaces, including household leather items, but not recommended for suede.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765617220/leather_coating_dspyje.png",
    images: [
       
    ],
    specs:  [
      "UV protection prevents fading and cracking",
        "Stain resistance against common spills",
        "Maintains leather's natural breathability",
        "Anti-microbial properties inhibit mold growth",
        "Enhances and deepens leather color",
        "Prevents drying and premature aging",
    ],
   features: [
      "UV & Stain Resistance",
      "Simple application",
      "Durability - 3+ years",
      "Packing -50 ml Bottle",
    ],
    downloads: [
      
    ],
  },
   "fabric coating": {
    name: "FABRIC COATING",
    category: "lightbars",
    description: "Strong fabric protection repels water based spills for easier cleanup",
    longDescription: " Sirius Fabric Protector repels water-based spills without altering the natural feel of the fabric. This solvent-based, deep-penetrating protectant evaporates quickly, leaving behind an invisible protective barrier. As a result, spills can be wiped away before they sleep in, ensuring cleaner surfaces and long-lasting fabric durability.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765617397/fabric_coating_l8tgm1.png",
    images: [
      
    ],
    specs:  [
      "Strong fabric protection repels water based spills for easier cleanup",
      "Invisible coating",
      "Dries clear and odorless",
      "Ideal for household items like upholstery, curtains, pillows, table linens, backpacks, luggage and more",
    ],
   features: [
      "Hydrophobic",
      "Safe for most fabric materials",
      "Packing - 200 ml Bottle",
    ],
    downloads: [
      
    ],
  },
   "ceramic prep": {
    name: "CERAMIC PREP",
    category: "lightbars",
    description: "Ensures a perfectly clean surface for maximum bonding.",
    longDescription: " Sirius Ceramic Prep is an advanced pH-balanced (pH-7) formula, a necessary supplement for preparing a vehicle for coating application. It enables safely breaks down wax, grease & Oily residues from delicate vehicle and marine surfaces thus creating a smooth, antistatic surface. Ceramic Prep has strong cleansing and degreasing properties, making the preparation of the vehicle for any detailing activities much easier and more efficient. It can be used on paint, plastic, chrome, polished metals glass, alloy wheels, and fiberglass. Ceramic prep increases the integrity of the molecular bond that occurs when applying sealants and coatings.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765617560/ceramic_prep_omqltx.png",
    images: [
      
    ],
    specs:  [
      "To get best results from Nano ceramic products, it is strongly recommended to use ceramic prep just prior to Ceramic Coating to ensure a proper bond.",
      "Ceramic coatings require excellent surface preparation, means for all coatings demand strong and effective degreasing. Also, all polish paste residue needs to be removed – this is a crucial point of preparation. To achieve this result, use ceramic Prep.",
      "Ceramic prep increases the integrity of the molecular bond that occurs when applying sealants and coatings",
    ],
   features: [
      "Shake well before use.",
      "Do not apply on hot surfaces.",
      "Packing - 500 ml Bottle",
    ],
    downloads: [
      
    ],
  },
   "ceramic boost": {
    name: "CERAMIC BOOST",
    category: "lightbars",
    description: "Elevate your shine instantly with Ceramic Boost.",
    longDescription: "An innovative, silica-based maintenance spray increases the durability and hardness of ceramic coating. To get best results from Nano ceramic products, it is strongly recommended to use ceramic prep just prior to Ceramic Coating to ensure a proper bond. Ceramic coatings require excellent surface preparation, means for all coatings demand strong and effective degreasing. Also, all polish paste residue needs to be removed – this is a crucial point of preparation. To achieve this result, use ceramic Prep.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765617556/ceramic_boost_tm7uzg.png",
    images: [
      
    ],
    specs:  [
      "Keeps surfaces silk, shiny and smooth",
      "Used as an easy detailer spray, removing all potential streaks  and residual water.",
      "Spray and Wipe formula",
     ],
   features: [
      "Shake well before use",
      "Do not apply on hot surfaces. ",
      "Packing - 500 ml Bottle",
      
    ],
    downloads: [
      
    ],
  },
   "PPF st.guard": {
    name: "PPF ST.GUARD",
    category: "lightbars",
    description: "Paint protection film is equipped with our easy-stretch formula and exclusive adhesive",
    longDescription: " Based on high quality Thermoplastic Polyurethane (TPU) film, easy to stretch and install on new or used cars for protection of paint surfaces, can also be used as headlight tint. The film offers a virtually invisible barrier from potential damages to your automotive paint surfaces.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765534167/ppf_kcgxcz.png",
    images: [
 
    ],
    specs:  [
      "Strong resistance to yellowing",
      "Hydrophobic property",
      "High Gloss",
      "Heat Healing",
      "High corrosion resistance, perform well in harsh environment",
    ],
   features: [
      "Material - Thermoplastic Polyurethane (TPU) film",
      "Total Thickness - 7.2mil/183μm",
      "Packing - 1.52x15m Roll",
      "Easy to install with high stretching properties",
      "Durable adhesive with UV stable technology",
    ],
    downloads: [
      
    ],
  },
   "PPF Prudence": {
    name: "PPF PRUDENCE",
    category: "lightbars",
    description: "Paint protection film is equipped with our easy-stretch formula and exclusive adhesive",
    longDescription: " Manufactured with high quality TPU to achieve a perfect balance in stretchability and easy installation. Applied advanced science for heat healing and hydrophobic coating. ",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765534167/ppf_kcgxcz.png",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=800&q=80",
    ],
    specs:  [
      "Hydrophobic property",
      "Excellent Coating Gloss",
      "Strong Adhesive",
      "Heat Healing",
      "High corrosion resistance, perform well in harsh environment",
    ],
   features: [
      "Material - Thermoplastic Polyurethane (TPU) film",
      "Total Thickness - 7mil/177μm",
      "Packing - 1.52x15m Roll",
      "Easy to install with high stretching properties",
      "Durable adhesive with UV stable technology",
    ],
    downloads: [
      
    ],
  },
   "PPF matte finish": {
    name: "SIRIUS MATTE FINISH",
    category: "lightbars",
    description: "Paint protection film is equipped with our easy-stretch formula and exclusive adhesive",
    longDescription: "Delivers all the benefits of PPF Magnifence in a visually distinctive, smooth matte finish. Its topcoat increases stain resistance. Outstanding durability to help protect longer. Matte finish PPF gives a unique, subtle look along with the durable protection.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765534167/ppf_kcgxcz.png",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
   
    ],
    specs:  [
      "Anti-Yellowing",
      "Hydrophobic property",
      "Lasting Resistance",
      "Outstanding Endurance",
      "Distinctive Finish",
      "100% Thermal Self-Healing",

    ],
   features: [
     "Material - Thermoplastic Polyurethane (TPU) film",
      "Total Thickness - 7.6mil/193 µm",
      "Packing - 1.52x15m Roll",
      "Easy to install with high stretching properties",
      "Durable adhesive with UV stable technology",
    ],
    downloads: [
      
    ],
  },
   "PPF magnifence": {
    name: "PPF MAGNIFENCE",
    category: "lightbars",
    description: "Paint protection film is equipped with our easy-stretch formula and exclusive adhesive",
    longDescription: "Manufactured with high quality 92A hardness TPU to achieve a perfect balance in scratch resistance and easy installation. Applied advanced science for instant healing hydrophobic coating. Latest technology achieves more durable yellowing resistance.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765534167/ppf_kcgxcz.png",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
 
    ],
     specs:  [
      "Instant Healing",
      "Hydrophobic property",
      "Super Elastic TPU, No Rain Spot",
      "Corrosion Resistance",
      "Excellent Tensile Properties",
      "Scratch Resistant ",

    ],
   features: [
     "Material - Thermoplastic Polyurethane (TPU) film",
      "Total Thickness - 7.6mil/193 µm",
      "Packing - 1.52x15m Roll",
      "Easy to install with high stretching properties",
      "Durable adhesive with UV stable technology",
    ],
    downloads: [
      
    ],
  },
   "PPF dazzling silver": {
    name: "PPF DAZZLING SILVER",
    category: "lightbars",
    description: "Paint protection film is equipped with our easy-stretch formula and exclusive adhesive",
    longDescription: "Beside the protection, Dazzling Series TPU offers the most dazzling appearance among all paint protection films. It will make the car to a shining & dazzling finish.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765534167/ppf_kcgxcz.png",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
   
    ],
    specs:  [
       "Self Healing",
      "Hydrophobic property",
      " Distinctive Finish",
      "Corrosion Resistance",
      "Anti-Yellowing",
      "Lasting Resistance",
      "100% Thermal Healing",

    ],
   features: [
     "Material - Thermoplastic Polyurethane (TPU) film",
      "Total Thickness - 7.6mil/193 µm",
      "Packing - 1.52x15m Roll",
      "Easy to install with high stretching properties",
      "Durable adhesive with UV stable technology",
    ],
    downloads: [
      
    ],
  },
   "tinting film": {
    name: "WINDOW TINTING FILM",
    category: "lightbars",
    description: "SIRIUS Window Tinting Film offers Premium",
    longDescription: " The newly developed window tint made in USA, optimizes sun & heat protection, UV resistance, privacy protection and glare protection for all types of vehicles. The high quality tint provides a comfortable environment during the harsh summer and comes in various shades for the customers unique needs.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765534558/tinting_yuox1d.png",
    images: [

    ],
    specs:  [
      "IR Rejection",
      "UV Rejection",
      "Clear View",
      "Stay cool",
      "Minimizes sun glare for safer and more comfortable driving",
    ],
   features: [
      "Thickness - 2 mil",
       "Shades - 0%,30%,50% & 70%",
      "Packing - 1.52x30m Roll",

    ],
    downloads: [
      
    ],
  },
   "prime cut plus": {
    name: "DAX PRIME CUT PLUS",
    category: "lightbars",
    description: "Be ready for a breathtaking driving condition with DAX Prime Cut.",
    longDescription: " PRIME CUT PLUS COMPOUND is a paint correction compound formulated with advanced abrasive technology for best results on painted surfaces with heavy and deep scratches, its fast cutting technology gives a flawless and finished surface with excellent gloss level.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765732119/prime_cut_plus_group_kn68ua.png",
    images: [
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765732117/prime_cut_plus_bottle_iesihr.png",
    ],
    specs:  [
      "Long Lasting durability",
      "Super Hydrophobicity",
      "High Gloss Finish",
      "Protection lasting up to 7 years",
    ],
   features: [
      "Packing - 1 Gal & 32oz ",
    ],
    downloads: [
      
    ],
  },
   "finishing wax": {
    name: "DAX FINISHING WAX",
    category: "lightbars",
    description: "DAX Finishing wax",
    longDescription: " Specially formulated to enhance the surface and provide excellent gloss. This intense blend of silicones, polymers, and carnauba not only seals for protection, it also intensifies the color of painted surfaces while giving a very durable finish. Better results appear if applied after the removal of deep scratches. It leaves the paint durable, with high gloss protection.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765776125/finishing_wax_eq9nyf.png",
    images: [

    ],
    specs:  [
      "Long Lasting durability",
      "High Gloss Protection",
      "High Gloss Finish",
    ],
   features: [
      "Packing - 1 Gal & 32oz ",
    ],
    downloads: [
      
    ],
  },
   "proglaze": {
    name: "DAX PROGLAZE",
    category: "lightbars",
    description: "DAX proglaze",
    longDescription: " DAX Pro Glaze Polish is an all-in-one polishing product that cuts heavy oxidation and finishes to a brilliant shine and removes imperfections while adding depth and gloss. Utilizing diminishing abrasive technology, DAX Pro Glaze is suitable for all paint types. This product is formulated to correct and refine mild to heavy scratches, swirls, paint defects, oxidation, and up to 2000 grit sanding marks. ",
    price: "Learn More",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=800&q=80",
    ],
    specs:  [
      "Long Lasting durability",
      "Super Hydrophobicity",
      "High Gloss Finish",
    ],
   features: [
      "Packing - 1 Gal & 32oz ",
    ],
    downloads: [
      
    ],
  },
   "finish polish": {
    name: "DAX FINISH POLISH",    
    category: "lightbars",
    description: "DAX FINISH POLISH",
    longDescription: "FINISH POLISH should be used as the last buffing step to outshine a dazzling gloss, it will also remove buffer swirls, micro surface imperfections and oxidation by its unique penetrating nutrients revitalize all paint finishes. Buffing residue wipes off easily. Restore original brilliance and clarity by removing 3000 grit sand scratches and similar substrate imperfections.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765793956/ProGlaze_hiboh8.png",
    images: [
    ],
    specs:  [
      "All New Formula, safe for clear coat, single stage, or lacquer paint",
      "Infused with SiO2 silica for mind-blowing shine",
      "Better Results Than Ever Before!",
      "Extremely Easy To Use Polishes For Paint Restoration",
    ],
   features: [
     "Packing - 1 Gal & 32oz ",
    ],
    downloads: [
      
    ],
  },
   "sparkle shine": {
    name: "DAX SPARKLE SHINE",
    category: "lightbars",
    description: "DAX SPARKLE SHINE",
    longDescription: " It provide easy mist on…wipe-off durable protection that works fast and easy on all painted surfaces, clear coat, plastic, glass, metal, vinyl and rubber trim. This exclusive formula will create deep dark wet-look shine by safely remove dust, mild road grime, fingerprints and water spots. Fast wet or dry car application gives a “wet look” shine. Dries clear on plastic trim.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765794399/sparkle_shine_sp6fqh.png",
    images: [

    ],
    specs:  [
      "Enhance Gloss, Depth, & Shine",
      "Extends Protection with NEW Wax Boosting Technology",
      "Still Easy to Use, with No Streaking or Residues",
      "Enjoy the Amazing Scent While You Clean and Add Shine!",
    ],
   features: [
     "Packing - 16oz ",
    ],
    downloads: [
      
    ],
  },
   "ultimate finish": {
    name: "DAX ULTIMATE FINISH",
    category: "lightbars",
    description: "DAX ULTIMATE FINISH",
    longDescription: " Perfect for complete vehicle cleaning without water. No wax, Non-Silicon.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765797436/ultimate_finish_5_gal_yvzbdv.png",
    images: [
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765797438/ultimate_finish_1_gal_dgzx0j.png",
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765797435/ultimate_finish_500ml_ugsybz.png",
    ],
    specs:  [
      "Removes surface dust, dirt, smudges, finger prints and contaminants",
      "Provides a slick high gloss wet look finish without removing previous protectants",
      "Strengthens wax protection and enhances shine, color and gloss",
    ],
   features: [
    "Packing - 5 Gal, 1 Gal & 500ml ",
    ],
    downloads: [
      
    ],
  },
   "multi purpose cleaner": {
    name: "DAX MULTI PURPOSE CLEANER",
    category: "lightbars",
    description: "DAX MULTI PURPOSE CLEANER",
    longDescription: "  Multi Purpose Cleaner is an industrial strength, water-based biodegradable cleaner. The high concentration of this formula allows for maximum dilution ratios.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765800212/multipurpose_cleaner_5_gal-removebg-preview_z6auo4.png",
    images: [
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765800402/Multi_purpose_cleaner-removebg-preview_zngawm.png",
    ],
    specs:  [
      "It is formulated to remove a wide variety of stains and dirt from automotive interiors",
      "Works well on grease, oils, dirt and worn in dirt from interiors, floors, door jambs, vinyl, upholstery and more",
    ],
   features: [
     "Packing - 5 Gal, 1 Gal & 500ml ",
    ],
    downloads: [
      
    ],
  },
   "multi purpose degreaser": {
    name: "DAX MULTI PURPOSE DEGREASER",
    category: "lightbars",
    description: "DAX MULTI PURPOSE DEGREASER",
    longDescription: " Multi Purpose Degreaser is an industrial strength, water-basedbiodegradable Degreaser. The high concentration of this formula allows for a thorough clean within the engine and hard to reach places of the vehicles.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765803050/MD_5_gal_y1prqf.png",
    images: [
    ],
    specs:  [
      "The product is formulated to remove a wide variety of stains from engine interiors",
      "Works well on grease, oils, dirt and worn in dirt on engines, tires and rims",
    ],
   features: [
     "Packing - 5 Gal",
    ],
    downloads: [
      
    ],
  },
   "hyperdresser": {
    name: "DAX HYPER DRESSER",
    category: "lightbars",
    description: "Interior Detailing",
    longDescription: " A super concentrated dressing that dilutes with water to make a multi-purpose dressing to use on interior and exterior surfaces such as Vinyl, Plastic and Rubber.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765870256/Hyper_dresser_5_gal_zcv8hn.png",
    images: [
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765870358/Hyper_dresser_1_gal_dfzyuj.png",
    ],
    specs:  [
      "DAX Hyper Dresser provides a long lasting shine and protects the surface",
      "VOC compliant, Non-toxic and non-flammable",
      "Excellent product to use on interior and exterior surfaces",
    ],
   features: [
      "Packing - 5 Gal, 1 Gal & 500ml ",
    ],
    downloads: [
      
    ],
  },
   "leather cleaner&conditioner": {
    name: "DAX LEATHER CLEANER & CONDITIONER",
    category: "lightbars",
    description: "DAX LEATHER CLEANER & CONDITIONER",
    longDescription: " DAX LEATHER CLEANER & CONDITIONER is a super formulated conditioner containing lanolin for cleaning and hydrating leather and vinyl. Contains no harsh chemicals or abrasives that could damage fine leather. For use in home, auto or office.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765871116/leather_cleaner_1_gal_xf0xjg.png",
    images: [
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765871110/leather_cleaner_500ml_qhxhsa.png",
    ],
    specs:  [
      "Retains factory sheen and color",
      "Cleans and conditions in one easy step",
      "pH – balanced",
    ],
   features: [
      "Packing - 1 Gal ",
    ],
    downloads: [
      
    ],
  },
   "tire glow": {
    name: "DAX TIRE GLOW",
    category: "lightbars",
    description: "TIRE GLOW",
    longDescription: "  The coating cures dry to the touch in minutes, sheds water, dirt and other contaminants and lasts for months. A water-based acrylic tire protectant that contains no silicone. Fast drying time and long lasting effect. It can be applied with additional coats to provide customizable levels of gloss.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765871348/Tire_Glow_5_gal_tipjnn.png",
    images: [
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765871346/tire_glow_500ml_ufqbob.png",
    ],
    specs:  [
      "A water-based acrylic tire protectant that contains no silicone",
      "Fast drying time and long lasting effect",
      "Can be applied with additional coats to provide customizable levels of gloss",
    ],
   features: [
     "Packing - 5 Gal & 500ml ",
    ],
    downloads: [
      
    ],
  },
   "engine shine": {
    name: "DAX ENGINE SHINE",
    category: "lightbars",
    description: "DAX ENGINE SHINE",
    longDescription: "  An Engine Room Detailer and Protector that leaves your engine with a protective layer of coating which also makes subsequent clean-up easier.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765871463/engine_shine_5_gal_ozr93y.png",
    images: [
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765871464/engine_shine_1_gal_tpf7ls.png",
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765871564/engine_shine_500_ml_ocdmr0.png",
    ],
    specs:  [
      "Provides a dark and vibrant color to the plastic, trim and metal parts",
      "Protects Exterior Plastics and Rubber Parts",
    ],
   features: [
      "Packing - 5 Gal, 1 Gal & 500ml ",
    ],
    downloads: [
      
    ],
  },
   "wash N shine shampoo": {
    name: "DAX WASH N SHINE SHAMPOO",
    category: "lightbars",
    description: "WASH N SHINE SHAMPOO",
    longDescription: " The car shampoo is formulated to generate more suds with less amount of water. The pH neutral concentrated shampoo, rinses clean for a spot free finish without affecting the original look of the surface.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765871730/wash_N_shine_5_gal_df1mdk.png",
    images: [
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765871732/wash_N_shine_1_gal_ttebwg.png",
    ],
    specs:  [
      "Creates more suds",
      "Leaves no water spots",
      "Effective clean",
      "Excellent shine after wash",
    ],
   features: [
      "Packing - 5 Gal & 1 Gal",
    ],
    downloads: [
      
    ],
  },
   "high foam shampoo": {
    name: "DAX HIGH FOAM SHAMPOO",
    category: "lightbars",
    description: "HIGH FOAM SHAMPOO",
    longDescription: "  DAX High Foam Shampoo is a concentrated product which allows maximum dilution and works well on dirt, grease and road grime. It was created as an effective product to use with a pressure washer.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765871867/High_Foam_Shampoo_g7v94m.png",
    images: [
 
    ],
    specs:  [
      "Excellent Foaming",
      "Effective Cleaning agent",
      "Leaves no streak on surfaces",
    ],
   features: [
      "Packing - 5 Gal ",
    ],
    downloads: [
      
    ],
  },
   "clay bar coarse twin can": {
    name: "DAX CLAY BAR COARSE TWIN CAN",
    category: "lightbars",
    description: "DAX CLAY BAR COARSE TWIN CAN",
    longDescription: " The Bar easily removes bonded contaminants such as overspray,industrial fallout, water spots, tar, rail dust and tree saps on paint, glass, metal and plastic.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765872026/clay_bar_twin_can_ursxya.png",
    images: [

    ],
    specs:  [
      "Long Lasting durability",
      "Super Hydrophobicity",
      "High Gloss Finish",
      "Protection lasting up to 7 years",
    ],
   features: [
     "Packing - Bottle ",
    ],
    downloads: [
      
    ],
  },
   "clay bar normal blue": {
    name: "DAX CLAY BAR NORMAL BLUE",
    category: "lightbars",
    description: "DAX CLAY BAR NORMAL BLUE",
    longDescription: " Detailing clay bar lifts away stubborn contaminants that washing alone can’t remove, tree sap, tar, and road grime.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765872021/clay_bar_normal_blue_wifmwg.png",
    images: [

    ],
    specs:  [
      "Removes embedded contaminants, make the paint surface smooth by pulling out dirt stuck in the clear coat.",
    ],
   features: [
     "Packing - Box ",
    ],
    downloads: [
      
    ],
  },
   "foam pad blue": {
    name: "DAX FOAM PAD YELLOW",
    category: "lightbars",
    description: "DAX FOAM PAD YELLOW",
    longDescription: "   DAX buffing pads, Yellow color sponge for medium cut process. Suggested use with cutting compound for light scratch removal and can apply with medium compound to remove swirls for high glossy surface.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765539696/Foam_pad_blue_mdkdif.png",
    images: [

    ],
    specs:  [
      "Medium-Cut Foam Sponge designed for the polishing stage",
      "Produces a High-Gloss Finish while refining the paint surface",
 
    ],
   features: [
      "Individual Packaging",
      "Size - 5 & 7 inch"
    ],
    downloads: [
      
    ],
  },
   "foam pad yellow": {
    name: "DAX FOAM PAD YELLOW",
    category: "lightbars",
    description: "DAX FOAM PAD YELLOW",
    longDescription: "   DAX buffing pads, Yellow color sponge for medium cut process. Suggested use with cutting compound for light scratch removal and can apply with medium compound to remove swirls for high glossy surface.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765538462/foam_pad_yellow_barjaj.png",
    images: [
   
    ],
    specs:  [
      "Medium-Cut Foam Sponge designed for the polishing stage",
      "Ideal for Use with Cutting Compound to remove light scratches and defects",
      "Balanced Cutting & Polishing Performance",
    ],
   features: [
      "Individual Packaging",
      "Size - 5 & 7 inch"
    ],
    downloads: [
      
    ],
  },
   "foam pad black": {
    name: "DAX FOAM PAD BLACK ",
    category: "lightbars",
    description: "DAX FOAM PAD BLACK",
    longDescription: "  DAX buffing pads, Black color sponge for the finishing process. Suggested use with Finishing compound and waxes for glossy finish.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765538540/foam_pad_black_u3tskn.png",
    images: [
   
    ],
    specs:  [
      "Enhances Gloss and Paint Clarity",
      "Low Cut Action for a smooth, swirl-free finish",
 
    ],
   features: [
      "Individual Packaging",
      "Size - 5 & 7 inch"
    ],
    downloads: [
      
    ],
  },
   "wool pad black&white": {
    name: "DAX WOOL PAD BLACK & WHITE",
    category: "lightbars",
    description: "DAX WOOL PAD BLACK&WHITE",
    longDescription: " A new material mix with black and white color, this model wool polishing pad is special for dual action polisher. Its hard backing hook and loop is more durable and has longer service life.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765538628/wool_pad_black_White_lkt8jl.png",
    images: [
  
    ],
    specs:  [
      "Effectively Removes Scratches, Swirl Marks, and Heavy Oxidation",
      "Fast Paint Correction compared to foam polishing pads",
      "Balanced Cut with Controlled Finish for improved surface clarity",
      "Durable & Long-Lasting Pad suitable for professional detailing use",
    ],
   features: [
     "Individual Packaging",
      "Size - 5 inch",
    ],
    downloads: [
      
    ],
  },
  "wool pad black": {
    name: "DAX WOOL PAD BLACK",
    category: "lightbars",
    description: "DAX WOOL PAD BLACK ",
    longDescription: " DAX buffing pads, Black color sponge for the Finishing process. Suggested use with Finishing compound and waxes for glossy finish.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765538793/Wool_pad_black_ggwwl5.png",
    images: [
 
    ],
    specs:  [
      "Designed for Use with Cutting Compounds to remove heavy defects",
      "Efficiently Eliminates Scratches, Swirl Marks, and Oxidation",
      "Fast Correction Performance compared to foam pads",
      "Durable & Long-Lasting Pad for professional detailing work",
    ],
   features: [
     "Individual Packaging",
      "Size - 6 inch",
    ],
    downloads: [
      
    ],
  },
   "hybrid foam pad blue": {
    name: "DAX HYBRID WOOL PAD BLUE ",
    category: "lightbars",
    description: "DAX HYBRID WOOL PAD BLUE",
    longDescription: "  The short pile height, in combination with DAX, makes it ideal for cutting deep scratches and hard clear coats. The Heavy Cutting Wool Pad has a unique foam backing that aids in heat dispersion to maximize working time. Using this pad will quickly remove severe scratches and oxidation, reduce swirls and leave a glossy finish. DAX Microfiber buffing pad made with coarse microfiber material, strengthen hook and loop backing suggest.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765538894/hybrid_pad_zgx2zm.png",
    images: [
  
    ],
    specs:  [
      "Faster Defect Removal compared to foam pads while leaving a refined finish",
      "Ideal for Removing Scratches, Swirls, and Oxidation",
      "High Correction Efficiency with consistent performance",
      "Durable Construction for professional detailing use",
    ],
   features: [
     "Individual Packaging",
      "Size - 6 inch",
    ],
    downloads: [
      
    ],
  },
   "single side wool pad natural": {
    name: "DAX SINGLE SIDE WOOL PAD NATURAL",
    category: "lightbars",
    description: "DAX SINGLE SIDE WOOL PAD NATURAL",
    longDescription: "DAX SINGLE SIDE WOOL BUFFING PAD is made with 100% wool material that is good for the cutting process, apply with heavy process. Apply with compounds to remove deep scratches quickly.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765538978/single_side_wool_pad_bicuri.png",
    images: [
     
    ],
    specs:  [
      "Works Best with Cutting Compounds for fast defect removal",
      "Single-Sided Design for focused, controlled correction",
      "Ideal for Heavy Cutting & Paint Correction",
 
    ],
   features: [
     "Individual Packaging",
      "Size - 7 inch",
    ],
    downloads: [
      
    ],
  },
   "cutting foam pad maroon": {
    name: "DAX Cutting Foam Pad Maroon ",
    category: "lightbars",
    description: "DAX Cutting Foam Pad Maroon ",
    longDescription: "DAX buffing pads, maroon color sponge. Suggested use with cutting compound for light scratch removal and can apply with medium compound to remove swirls for high glossy surface.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765539065/maroon_foam_pad_sjzoz0.png",
    images: [
    
    ],
    specs:  [
      "Ideal for Use with Cutting Compound to remove light scratches and defects",
      "Helps achieve a high-glossy and smooth paint surface",
      "Durable sponge material for consistent performance and long service life",
      "Protection lasting up to 7 years",
    ],
   features: [
      "Individual Packaging",
      "Sizes - 6 & 8 inch",
    ],
    downloads: [
      
    ],
  },
   "polishing foam pad yellow": {
    name: "DAX Polishing Foam Pad  Yellow",
    category: "lightbars",
    description: "DAX Polishing Foam Pad  Yellow",
    longDescription: " The Yellow Polishing Foam Pad is a medium-density foam pad designed for the polishing and refining stage of paint correction. It effectively removes light to moderate swirl marks, oxidation, and minor surface imperfections, leaving a smooth, glossy finish. Suggested use with cutting compound for light scratch removal and can apply with medium compound to remove swirls for high glossy surface. ",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765538462/foam_pad_yellow_barjaj.png",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=800&q=80",
    ],
    specs:  [
      "It effectively removes moderate swirl marks, light scratches, and oxidation.",
      "The high-quality foam ensures even pressure and consistent results.",
      "Safe for use on all automotive paint types, including clear coats.",
 
    ],
   features: [
      "Individual Packaging",
      "Size - 6 & 8 inch",
    ],
    downloads: [
      
    ],
  },
   "Finishing Foam Pad Black": {
    name: "DAX Finishing Foam Pad Black",
    category: "lightbars",
    description: "DAX Finishing Foam Pad Black",
    longDescription: " DAX Finishing Foam pad Black color sponge for the Finishing process. Suggested use with Finishing compound and waxes for glossy finish. The pad’s durable hook-and-loop backing allows for quick and secure attachment to rotary or dual-action polishers, maintaining consistent performance and long-lasting durability.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765539428/finishing_foam_pad_black_n0dchq.png",
    images: [
    
    ],
    specs:  [
      "Delivers deep shine and showroom-level finish",
      "Helps remove light holograms and micro-marring after polishing.",
 
    ],
   features: [
       "Individual Packaging",
      "Size - 6 & 8 inch",
    ],
    downloads: [
      
    ],
  },
   "interior upholstery brush": {
    name: "Interior Upholstery Brush",
    category: "lightbars",
    description: "Interior Upholstery Brush",
    longDescription: " The Interior Upholstery Brush is specially designed for deep cleaning fabric, carpet, and upholstery surfaces inside vehicles. Made with durable yet gentle bristles, it effectively removes dirt, stains, and debris without damaging delicate materials. The sturdy construction ensures long-lasting performance, even with regular use in professional detailing.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765540589/upholstery_brush_bwsh4m.png",
    images: [
 
    ],
    specs:  [
      "Easy to Clean",
      "Multi-Surface Compatibility",
      "Deep Cleaning Power",
    ],
   features: [
      "Soft Natural Horsehair Bristles",
      "Medium-Size Hand Brush",
      "Safe for Fabric & Leather",
    ],
    downloads: [
      
    ],
  },
   "detailing brush set 5 pcs": {
    name: "Detailing Brush Set 5pcs",
    category: "lightbars",
    description: "Detailing Brush Set 5pcs",
    longDescription: "  This 5-piece set of detailing brushes is designed for efficient and safe cleaning, making every detail accessible.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765541026/5_set_brush_sl79kw.png",
    images: [
  
    ],
    specs:  [
      "Easy to Use: The round shape and smooth surface make them comfortable and easy to handle.",
      "Detail Cleaning Brushes: Automotive clean detailing brush can help clean car air vents, it can reach into the narrow space.",
      "Variety of brush sizes and shapes for full detail work"
    ],
   features: [
      "Multi-Surface Cleaning",
      "Removes dirt, dust & debris without damage",
    ],
    downloads: [
      
    ],
  },
   "ESS detailing brush": {
    name: "ESS Detailing Brush Combo 2pcs",
    category: "lightbars",
    description: "ESS Detailing Brush Combo 2pcs",
    longDescription: "  ESS Detailing brush is designed to remove dust, dirt and debris from elegant surfaces. Each brush features soft yet durable bristles that safely remove dust, dirt, and grime from delicate surfaces without causing scratches.",
    price: "Learn More",
  
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765541438/ESS_Brush_jiq8dg.png",
    images: [
    ],
    specs:  [
      "Premium bristles (soft & durable) for safe detailing",
      "Ideal for interior & exterior detailing",
    ],
   features: [
      "Ergonomic Grip Handle",
      "Multi-Surface Safe Bristles",
    ],
    downloads: [
      
    ],
  },
   "seat belt brush": {
    name: "Seat Belt Brush",
    category: "lightbars",
    description: "Seat Belt Brush",
    longDescription: " The brush can open and close, featuring double-sided bristles that adapt to the surface being cleaned. This design ensures that every inch of the seat belts is thoroughly scrubbed, making the cleaning process more efficient and comprehensive. The U-shaped design with raised edges provides better coverage while keeping your fingers safe from slipping. This model is built with durable and tightly secured bristles that resist shedding, even with repeated use.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765541648/seat_belt_brush_mily8i.png",
    images: [
    ],
    specs:  [
      "Non‑slip handle for better grip during scrubbing.",
      "Great budget option for routine interior maintenance.",
      "Double‑sided and U‑shaped to wrap around the belt for full‑surface cleaning.",
      "Compact and lightweight — ideal for spot cleaning or regular car care.",
    ],
   features: [
      "Dual‑Sided Bristles",
      "Chemical Resistant",
      "Ergonomic Handles",
    ],
    downloads: [
      
    ],
  },
   "wheel brush": {
    name: "Wheel Brush",
    category: "lightbars",
    description: "Wheel Brush",
    longDescription: "  Durable bristles brush can be used for both light & heavy duty cleaning, professional automotive detailers and car care enthusiasts, safe for your wheel rims. Perfect for restoring wheels to a clean, polished, like-new condition.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765875521/wheel_brush_slmryt.png",
    images: [
    ],
    specs:  [
      "Safe for all wheel finishes including painted, powder-coated, chrome, polished metal, and alloy.",
      "Designed for professional detailing use.",
      "Prevents damage while cleaning tight areas.",
    ],
   features: [
      "Bristle Colors: Red & black",
      "Brush Shape: Cylindrical cone design",
      "Ideal for detailed wheel cleaning on rims, spokes, and small crevices.",
    ],
    downloads: [
      
    ],
  },
   "tire scrub brush": {
    name: "Tire Scrub Brush",
    category: "lightbars",
    description: "Tire Scrub Brush",
    longDescription: "The Tire Scrub Brush is specially designed for efficient cleaning of tires, rubber mats, and other tough surfaces. Its durable, stiff bristles penetrate deep into grooves and treads, removing dirt, grime, and road residues effectively. Ideal for both professional detailers and car care enthusiasts, this brush restores tires to a clean, like-new appearance.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765541651/tire_scrub_brush_bd8ame.png",
    images: [
    ],
    specs:  [
      "Removes built‑up dirt and road grime on tire walls.",
      "Ergonomically shaped handle for comfortable scrubbing without hand fatigue.",
      "Handle includes a hole for easy storage on hooks.",
    ],
   features: [
      "Helpful around the inner tire area.",
      "Nylon or polypropylene",
      "Plastic or rubberized grip",
    ],
    downloads: [
      
    ],
  },
   "tire&carpet brush heavy duty": {
    name: "Tire & carpet Brush Heavy Duty",
    category: "lightbars",
    description: "Tire & carpet Brush Heavy Duty",
    longDescription: " The Tire & Carpet Brush (Heavy Duty) is built for tough cleaning jobs, delivering powerful scrubbing action to remove deep-seated dirt, grime, and stains from tires and carpets. This brush effectively loosens and lifts heavy contamination without damaging surfaces. Its ergonomic handle ensures a firm, comfortable grip, allowing greater control and reduced fatigue during extended use. This brush is perfect for restoring the clean, fresh look of vehicle carpets, floor mats, and tire sidewalls.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765875393/uphlostery_pgrhry.png",
    images: [
    ],
    specs:  [
      "Premium heavy‑duty scrub brush for tires and carpets.",
      "Curved design reaches hard‑to‑clean areas like tire sidewalls and deep carpet fibers.",
      "Comfortable soft‑grip handle reduces hand fatigue during extended use.",
    ],
   features: [
      "Product Type:Heavy-Duty Multi-Purpose Cleaning Brush",
      "Color:Grey bristles with black & grey handle",
      "Brush Head Shape:Rectangular, flat scrub design",
      "Car mats & carpets",
    ],
    downloads: [
      
    ],
  },
   "microfibre towel 40x60": {
    name: "Micro Fibre Towel Detailing 40x60 - Edgeless",
    category: "lightbars",
    description: "Micro Fibre Towel Detailing 40x60 - Edgeless",
    longDescription: "  The Microfibre Towel 40x60 is a high-quality, ultra-soft towel designed for efficient cleaning, drying, and polishing of all vehicle surfaces. Made from premium microfiber material, it safely lifts dust, dirt. Its high absorbency allows for streak-free drying and quick water removal, making it perfect for detailing tasks such as waxing, buffing, and interior cleaning. The lint-free and scratch-free design ensures a flawless, professional finish every time.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765876899/40x60_blue_fprgop.png",
    images: [
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765876900/40x60_grey_nswp6w.png",
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765876899/40x60_orange_xqggxa.png",
    ],
    specs:  [
      "Reinforced edges for long-lasting use.",
      "Safe on Automotive Paint: Ultra-soft, non-abrasive fibers prevent marring or swirl marks.",
      "Edging That Protects Paint: Soft overlock stitching helps eliminate scratches around sensitive areas.",
      "Durable & Reusable: Withstands repeated washing without degrading fiber softness or performance.",
    ],
   features: [
      "Stiched Edges",
      "Size: 40x60 cm",
      "Premium Microfibre",
      "Colors: Blue,Grey & Yellow",
      "GSM: 350"
    ],
    downloads: [
      
    ],
  },
   "microfibre towel 40x40": {
    name: "Micro Fibre Towel Detailing 40x40 - Edgeless",
    category: "lightbars",
    description: "Micro Fibre Towel Detailing 40x40 - Edgeless",
    longDescription: "  The Microfibre Towel 40x40 is a premium-quality, ultra-soft towel designed for cleaning, drying, and polishing all vehicle surfaces with maximum efficiency. Made from high-density microfiber material, it effortlessly lifts dust, dirt, and residues without scratching or leaving streaks.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765876903/40X40_green_vduym3.png",
    images: [
      "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765876898/40x40_orange_wqn2w6.png",
    ],
    specs:  [
      "Holds significant amounts of liquid for drying or rinseless wash techniques.",
      "Maintains softness and performance even after multiple washes.",
    ],
   features: [
       "Edgeless",
       " 400 GSM ",
      "Size: 40x40 cm",
      "Ultra-soft microfibre",
      "Colors: Green & Orange",
     
    ],
    downloads: [
      
    ],
  },
   "engine oil cleaning detergent": {
    name: "Engine Oil Cleaning Detergent",
    category: "lightbars",
    description: "Engine Oil Cleaning Detergent",
    longDescription: " A concentrated detergent formula designed to quick removal of deposits, sludge, gums and varnishes by freeing sticking valves and rings, Helps extended engine life by reducing wear.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765877246/detergent_bive1v.png",
    images: [
    ],
    specs:  [
      "Cleans oil passages and improves lubrication efficiency.",
      "Add to old oil before draining—no special tools required.",
      "Cleaner internal components promote smoother combustion and better fuel economy.",
    ],
   features: [
      "Packing - 355ml",
      "Non-corrosive",
  
    ],
    downloads: [
      
    ],
  },
   "engine oil treatment": {
    name: "Engine Oil Treatment",
    category: "lightbars",
    description: "Engine Oil Treatment",
    longDescription: " Specially designed to improve viscosity index of oil in gasoline and diesel engines. Help worn engines run smoother and quieter. Coats moving parts with a tough film that decreases friction and increases power.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765877248/Treatment_un3kg2.png",
    images: [
    ],
    specs:  [
      "Reduces friction — can help smooth out noisy engines",
      "Helps maintain stable oil viscosity under stress",
      "Helps improve engine responsiveness",
      "Lower oil consumption",
    ],
   features: [
       "Packing - 355ml",
    ],
    downloads: [
      
    ],
  },
  "fuel system cleaner": {
    name: "Fuel System Cleaner",
    category: "lightbars",
    description: "Fuel System Cleaner",
    longDescription: " A high performance fuel system cleaner designed to clean fuel injector system to maximize the engine performance and restores fuel economy. Helps to remove deposits, clean injectors, restore proper spray pattern.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765877246/fue_system_v1zyta.png",
    images: [
    ],
    specs:  [
      "Some formulas include corrosion protection for metal parts in the fuel system.",
      "Improves fuel atomization and engine responsiveness.",
      "May contribute to lower emissions and improved fuel economy.",
    ],
   features: [
       "Packing - 355ml",
    ],
    downloads: [
      
    ],
  },
  "engine oil stop smoke": {
    name: "Engine Oil Stop Smoke",
    category: "lightbars",
    description: "Engine Oil Stop Smoke",
    longDescription: "  Specially engineered world class formula made in USA. Once Oil Stop Smoke is used, engines will not produce carbon contents also as it better for environment. This will enhance acceleration and engine performance.",
    price: "Learn More",
    image: "https://res.cloudinary.com/dvjgt44qs/image/upload/v1765877247/stop_smoke_sxunv7.png",
    images: [
 
    ],
    specs:  [
      "Provides smoother engine operation and less noise in worn engines.",
      "Offers an additional lubrication layer for long-lasting engine protection.",
    ],
   features: [
       "Packing - 355ml",
       "Petrol & diesel engines",
    ],
    downloads: [
     
    ],
  },
};

// Default product for unknown IDs
const defaultProduct = {
  name: "Product",
  category: "General",
  description: "Product description",
  longDescription: "Full product description would go here with detailed information about features, specifications, and applications.",
  price: "Contact for pricing",
  image: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=1200&q=80",
  images: ["https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=800&q=80"],
  specs: ["Specification 1", "Specification 2", "Specification 3"],
  features: ["Feature 1", "Feature 2", "Feature 3"],
  downloads: [{ name: "Product Datasheet", type: "PDF" }],
};

const ProductDetail = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const { productId } = useParams();
  const product = products[productId || ""] || defaultProduct;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <section className="pt-28 pb-4">
        <div className="container mx-auto px-6">
          <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={18} />
            <span>Back to Products</span>
          </Link>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Images */}
            <ScrollAnimation animation="fade-right">
              <div className="space-y-4">
                <div className="aspect-video rounded-2xl overflow-hidden bg-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {product.images.map((img, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden bg-card cursor-pointer hover:ring-2 ring-primary transition-all">
                      <img
                        src={img}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Details */}
            <ScrollAnimation animation="fade-left" delay={0.2}>
              <div>
                <span className="text-primary font-subheading text-sm tracking-wider uppercase">
                  {product.category}
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-4">
                  {product.name}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {product.longDescription}
                </p>

                <div className="border-t border-border pt-8 mb-8">
                  <h3 className="font-heading text-xl font-bold mb-4">Features</h3>
                  <ul className="space-y-3">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="text-primary flex-shrink-0" size={18} />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-hero flex items-center gap-2">
                    <Phone size={18} />
                    Request Quote
                  </Link>
                  <button
  onClick={() => {
    const link = document.createElement("a");
    link.href = "../src/assets/Brochure.pdf";
    link.download = "../Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="btn-outline-hero flex items-center gap-2"
>
  <Download size={18} />
  Download brochure
</button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-up">
            <h2 className="font-heading text-3xl font-bold mb-8">Specifications</h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={0.1 * index}>
                <div className="feature-card">
                  <span className="text-primary font-heading text-2xl font-bold mb-3 block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads }
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-up">
            <h2 className="font-heading text-3xl font-bold mb-8">Downloads</h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.downloads.map((download, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={0.1 * index}>
                <button className="w-full p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 text-left group">
                  <Download className="text-primary mb-3" size={24} />
                  <h4 className="font-heading font-bold mb-1 group-hover:text-primary transition-colors">
                    {download.name}
                  </h4>
                  <span className="text-sm text-muted-foreground">{download.type}</span>
                </button>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Related Products CTA */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-6 text-center">
          <ScrollAnimation animation="scale-in">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Looking for More Options?
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={0.1}>
            <p className="text-muted-foreground mb-8">
              Explore our complete product range to find the perfect solution.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={0.2}>
            <Link to="/products" className="btn-hero inline-flex items-center gap-2">
              View All Products
              <ArrowRight size={18} />
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;

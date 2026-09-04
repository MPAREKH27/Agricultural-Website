const initialCrops = [
  {
    _id: "c1",
    name: "Golden Wheat (Sharbati)",
    scientificName: "Triticum aestivum",
    category: "Cereal",
    season: "Rabi",
    soilType: "Loamy & Clay Loam",
    waterRequirement: "Moderate",
    duration: "120 - 135 Days",
    expectedYield: "48 - 55 Quintal/Ha",
    marketPrice: 2450,
    description: "Premium Sharbati variety with high protein content, high drought resistance, and golden grain luster.",
    imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    suitableRegion: "North & Central India",
    pestAlerts: ["Yellow Rust Vigilance", "Aphid Patrol in Feb"]
  },
  {
    _id: "c2",
    name: "Basmati Rice (PB 1121)",
    scientificName: "Oryza sativa",
    category: "Cereal",
    season: "Kharif",
    soilType: "Clay Loam & Alluvial",
    waterRequirement: "High",
    duration: "135 - 145 Days",
    expectedYield: "42 - 50 Quintal/Ha",
    marketPrice: 4200,
    description: "Extra long slender grain with aromatic fragrance and premium market price realization.",
    imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    suitableRegion: "Punjab, Haryana, UP, MP",
    pestAlerts: ["Stem Borer Watch", "Blast Disease Preventive Spray"]
  },
  {
    _id: "c3",
    name: "Organic Red Tomato (Hybrid)",
    scientificName: "Solanum lycopersicum",
    category: "Vegetable",
    season: "All Season",
    soilType: "Well-drained Sandy Loam",
    waterRequirement: "Moderate",
    duration: "75 - 90 Days",
    expectedYield: "600 - 800 Quintal/Ha",
    marketPrice: 1800,
    description: "Firm skin, high yield, excellent shelf-life suitable for long distance transportation.",
    imageUrl: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80",
    suitableRegion: "Pan India",
    pestAlerts: ["Fruit Borer Control", "Early Blight Inspection"]
  },
  {
    _id: "c4",
    name: "Bt Cotton (Long Staple)",
    scientificName: "Gossypium hirsutum",
    category: "Cash Crop",
    season: "Kharif",
    soilType: "Black Cotton Soil (Vertisols)",
    waterRequirement: "Moderate",
    duration: "160 - 180 Days",
    expectedYield: "25 - 32 Quintal/Ha",
    marketPrice: 7100,
    description: "High boll weight, pink bollworm resistant hybrid cotton for textile industry.",
    imageUrl: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80",
    suitableRegion: "Maharashtra, Gujarat, Telangana",
    pestAlerts: ["Whitefly Monitoring", "Sucking Pest Spray"]
  },
  {
    _id: "c5",
    name: "Yellow Mustard (Pusa Bold)",
    scientificName: "Brassica juncea",
    category: "Oilseed",
    season: "Rabi",
    soilType: "Light to Medium Loam",
    waterRequirement: "Low",
    duration: "105 - 120 Days",
    expectedYield: "20 - 24 Quintal/Ha",
    marketPrice: 5650,
    description: "High oil content (42%), drought tolerant and minimal irrigation requirement.",
    imageUrl: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=800&q=80",
    suitableRegion: "Rajasthan, Haryana, MP",
    pestAlerts: ["Aphid Alert during flowering stage"]
  }
];

const initialProducts = [
  {
    _id: "p1",
    name: "Bio-Organo NPK Fertilizer (50kg)",
    category: "Fertilizers",
    price: 950,
    rating: 4.9,
    stock: 120,
    unit: "50 kg Bag",
    vendor: "AgriGreen Organics",
    description: "Enriched with beneficial soil microbes, nitrogen fixers, and organic carbon to boost soil fertility.",
    imageUrl: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80",
    isOrganic: true
  },
  {
    _id: "p2",
    name: "Hybrid Wheat Seed (Pusa-44)",
    category: "Seeds",
    price: 1400,
    rating: 4.8,
    stock: 85,
    unit: "40 kg Pack",
    vendor: "IARI Certified Seeds",
    description: "High germination rate (98%), disease resistant, uniform grain formation.",
    imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    isOrganic: false
  },
  {
    _id: "p3",
    name: "Neem Shield Bio-Pesticide (1L)",
    category: "Pesticides",
    price: 450,
    rating: 4.7,
    stock: 200,
    unit: "1 Litre Bottle",
    vendor: "EcoCrop Solutions",
    description: "10,000 PPM Azadirachtin cold-pressed neem oil for organic pest management.",
    imageUrl: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80",
    isOrganic: true
  },
  {
    _id: "p4",
    name: "Automatic Drip Irrigation Kit",
    category: "Irrigation",
    price: 4999,
    rating: 4.9,
    stock: 30,
    unit: "Complete Set (1 Acre)",
    vendor: "Jain Drip Tech",
    description: "Includes UV stabilized main line, drippers, screen filter, and pressure gauge. Saves 60% water.",
    imageUrl: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80",
    isOrganic: false
  },
  {
    _id: "p5",
    name: "Soluble Micronutrient Mixture",
    category: "Bio-Stimulants",
    price: 320,
    rating: 4.6,
    stock: 150,
    unit: "1 kg Pack",
    vendor: "Micronutri Crop",
    description: "Contains Zinc, Boron, Iron, Manganese, and Copper for balanced plant nutrition.",
    imageUrl: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80",
    isOrganic: false
  }
];

const initialServices = [
  {
    _id: "s1",
    name: "High-Power Tractor Plowing & Tilling",
    category: "Machinery Rental",
    provider: "Kisan Tractor Service",
    pricePerDay: 1800,
    location: "Ludhiana & nearby 50km",
    contactPhone: "+91 98765 43210",
    availability: "Available Today",
    rating: 4.9,
    description: "55HP John Deere tractor with rotavator and reverse MB plow. Per acre or per hour service.",
    imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: "s2",
    name: "Precision Agriculture Drone Spraying",
    category: "Drone Spraying",
    provider: "SkyCrop Aero Services",
    pricePerDay: 450,
    location: "Pan India On-Demand",
    contactPhone: "+91 98123 98765",
    availability: "Book Slot",
    rating: 5.0,
    description: "10-minute per acre fast pesticide & liquid fertilizer spray with uniform coverage and zero crop damage.",
    imageUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: "s3",
    name: "Comprehensive Soil & Water Lab Testing",
    category: "Soil Testing",
    provider: "AgriLab Diagnostics",
    pricePerDay: 600,
    location: "Sample Pickup at Farm",
    contactPhone: "+91 94111 22334",
    availability: "Report in 48 Hours",
    rating: 4.8,
    description: "Analyzes 12 parameters (pH, EC, N, P, K, Organic Carbon, Micro-nutrients) with customized fertilizer recommendations.",
    imageUrl: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: "s4",
    name: "Combine Harvester Rental",
    category: "Harvesting",
    provider: "HarvestKing Agro",
    pricePerDay: 2200,
    location: "Punjab, Haryana, UP",
    contactPhone: "+91 97777 88899",
    availability: "Seasonal Pre-Booking",
    rating: 4.9,
    description: "Heavy duty wheat and paddy harvester with grain tank & straw management system.",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
  }
];

const initialResources = [
  {
    _id: "r1",
    title: "PM-Kisan Samman Nidhi Yojana Scheme 2026",
    category: "Government Scheme",
    publisher: "Ministry of Agriculture & Farmers Welfare",
    publishDate: "2026-01-15",
    summary: "Financial benefit of ₹6,000 per year transferred directly into bank accounts of eligible farmer families.",
    content: "Under the PM-KISAN scheme, eligible landholding farmer families receive ₹2,000 every 4 months. Complete e-KYC via OTP or biometric authentication to receive upcoming installment.",
    linkUrl: "https://pmkisan.gov.in",
    badge: "Government"
  },
  {
    _id: "r2",
    title: "Subsidized Agriculture Drone Scheme (SMAM)",
    category: "Subsidy News",
    publisher: "Department of Agriculture & Farmers Welfare",
    publishDate: "2026-02-10",
    summary: "Up to 50% (Max ₹5 Lakh) subsidy for custom hiring centers and progressive farmers buying spray drones.",
    content: "Sub-Mission on Agricultural Mechanization (SMAM) provides financial support for drone adoption to modernize pesticide application and crop health monitoring.",
    linkUrl: "#",
    badge: "Subsidy"
  },
  {
    _id: "r3",
    title: "Integrated Organic Pest Control Manual",
    category: "Farming Guide",
    publisher: "ICAR Agricultural Research Institute",
    publishDate: "2026-02-28",
    summary: "Comprehensive guide on eco-friendly biological pest control methods, neem extracts, and yellow sticky traps.",
    content: "Learn how to manage whiteflies, bollworms, and aphids naturally without synthetic chemicals while reducing input costs by 35%.",
    linkUrl: "#",
    badge: "Guide"
  }
];

const initialMarketPrices = [
  { crop: "Wheat (Sharbati)", mandi: "Khanna Mandi, PB", modalPrice: 2480, change: "+ ₹30", trend: "up" },
  { crop: "Paddy (Basmati 1121)", mandi: "Karnal Mandi, HR", modalPrice: 4250, change: "+ ₹80", trend: "up" },
  { crop: "Mustard Seed", mandi: "Kota Mandi, RJ", modalPrice: 5600, change: "- ₹15", trend: "down" },
  { crop: "Cotton (Medium Staple)", mandi: "Rajkot Mandi, GJ", modalPrice: 7150, change: "+ ₹50", trend: "up" },
  { crop: "Tomato (Hybrid)", mandi: "Azadpur Mandi, Delhi", modalPrice: 1850, change: "- ₹40", trend: "down" }
];

module.exports = {
  initialCrops,
  initialProducts,
  initialServices,
  initialResources,
  initialMarketPrices
};

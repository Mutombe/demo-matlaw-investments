export const designTokens = {
  heroStyle: "editorial",
  typography: {
    heading: "Sora",
    body: "DM Sans",
    display: "Outfit",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: false,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "smooth",
  serviceCardStyle: "icon-top",
  projectGridStyle: "grid-3",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "stats", "services", "projects", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Matlaw Investments",
    legalName: "Matlaw Investments (Pvt) Ltd",
    tagline: "Invest in Your Future",
    description:
      "A diversified investment and property development company delivering strategic portfolio management, estate development, legal advisory, consulting, and property valuation services across Zimbabwe.",
    phone: "+263 24 2771246",
    phoneRaw: "+263242771246",
    whatsappNumber: "263242771246",
    email: "info@matlawinvestments.co.zw",
    address: "6th Floor, Pearl House, 61 Samora Machel Ave, Harare",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.6,
    ratingRounded: 5,
    reviewCount: 38,
    established: "2005",
    yearsExperience: "20+",
    projectsCompleted: "200+",
    employees: "45+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "9:00 AM - 12:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "matlaw-investments-cookie-consent",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },

  navbar: {
    logoLine1: "Matlaw",
    logoLine2: "Investments",
  },

  hero: {
    badge: "Strategic Investment & Property Development",
    titleParts: [
      { text: "Invest in " },
      { text: "Your Future.", highlight: true },
    ],
    subtitle:
      "Two decades of strategic investment, property development, and portfolio management. We build wealth that compounds across generations.",
    ctaPrimary: "Explore Opportunities",
    ctaSecondary: "Our Portfolio",
    trustBadge: "20+ Years in Market",
    backgroundImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920",
    backgroundAlt:
      "Modern corporate skyline representing investment growth and property development",
  },

  stats: [
    { number: "200+", label: "Projects Delivered" },
    { number: "$100M+", label: "Portfolio Value" },
    { number: "20+", label: "Years Experience" },
    { number: "45+", label: "Team Members" },
  ],

  servicesPreview: [
    {
      iconName: "Buildings",
      title: "Property Investment",
      desc: "Strategic acquisition, development, and management of commercial and residential property assets across Zimbabwe.",
    },
    {
      iconName: "ChartLineUp",
      title: "Portfolio Management",
      desc: "Diversified investment portfolio construction and active management tailored to your growth objectives and risk tolerance.",
    },
    {
      iconName: "Handshake",
      title: "Estate Development",
      desc: "End-to-end residential and commercial estate development from land acquisition to construction and sales.",
    },
    {
      iconName: "ShieldCheck",
      title: "Legal Advisory",
      desc: "In-house legal counsel for investment structuring, property transactions, and regulatory compliance.",
    },
    {
      iconName: "Briefcase",
      title: "Consulting",
      desc: "Strategic business consulting for investment decisions, market entry, and corporate restructuring.",
    },
    {
      iconName: "CurrencyDollar",
      title: "Valuation Services",
      desc: "Professional property and business valuations for transactions, insurance, and financial reporting purposes.",
    },
  ],

  featuredProjects: [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      title: "Borrowdale Heights Estate",
      category: "Estate Development",
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      title: "CBD Commercial Tower — Phase II",
      category: "Property Investment",
    },
    {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
      title: "Mining Sector Portfolio Restructuring",
      category: "Portfolio Management",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Building Wealth. " },
      { text: "Building", highlight: true },
      { text: " Zimbabwe." },
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    imageAlt: "Matlaw Investments property development skyline",
    experienceYears: "20+",
    experienceLabel: "Years in Market",
    points: [
      {
        title: "Diversified Portfolio",
        desc: "Our investments span property, equities, agriculture, and strategic partnerships — reducing risk and maximising long-term returns.",
      },
      {
        title: "Development Track Record",
        desc: "Over 200 projects delivered, from residential estates to commercial towers. Every development is completed to the highest standards.",
      },
      {
        title: "In-House Legal & Valuation",
        desc: "Dedicated legal and valuation teams ensure every transaction is structured correctly and every asset is accurately valued.",
      },
      {
        title: "Long-Term Partnerships",
        desc: "We build relationships that last decades. Our investors, tenants, and partners trust Matlaw because we deliver on promises.",
      },
    ],
  },

  homeCta: {
    backgroundImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920",
    backgroundAlt: "Modern property development representing investment growth",
    titleParts: [
      { text: "Your Future " },
      { text: "Starts", highlight: true },
      { text: " Today." },
    ],
    subtitle:
      "Whether you are looking to invest in property, diversify your portfolio, or develop a commercial estate, Matlaw Investments has the expertise to make it happen.",
    ctaPrimary: "Start a Conversation",
    whatsappText:
      "Hello Matlaw Investments, I would like to discuss investment opportunities.",
  },

  homeTestimonials: [
    {
      name: "George Matende",
      role: "Property Investor",
      text: "Matlaw Investments guided us through a $5M commercial property acquisition. Their market knowledge, legal expertise, and negotiation skills saved us significantly on the deal.",
      rating: 5,
    },
    {
      name: "Chipo Zvobgo",
      role: "Estate Buyer",
      text: "We purchased our family home in the Borrowdale Heights estate. The quality of construction, the attention to infrastructure, and the community design are exceptional.",
      rating: 5,
    },
    {
      name: "Simba Nhamo",
      role: "Portfolio Client",
      text: "The portfolio management team has consistently delivered above-market returns for our investment fund. Their diversification strategy has been excellent through volatile markets.",
      rating: 5,
    },
  ],

  about: {
    heroTitle: [
      { text: "Two Decades of " },
      { text: "Strategic", highlight: true },
      { text: " Growth" },
    ],
    heroSubtitle:
      "Since 2005, Matlaw Investments has been a driving force in Zimbabwe's investment and property landscape, building wealth for investors and communities alike.",
    storyImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    storyImageAlt: "Matlaw Investments headquarters and property portfolio",
    storyProjectCount: "200+",
    storyProjectLabel: "Projects Delivered",
    storyTitle: "From Strategic Vision to Zimbabwe's Premier Investment House",
    storyParagraphs: [
      "Matlaw Investments was founded in 2005 with a clear thesis: Zimbabwe's growth potential was vastly undervalued, and smart, patient capital deployed into property and strategic assets would deliver exceptional returns over time.",
      "We started with a single commercial property acquisition in Harare's CBD. That $200K investment is now part of a portfolio valued at over $100 million spanning commercial towers, residential estates, agricultural land, and equity investments.",
      "Today, Matlaw is a diversified investment group with 45+ professionals across property development, portfolio management, legal advisory, consulting, and valuation services. We have delivered over 200 projects and built lasting wealth for hundreds of investors, families, and institutions.",
    ],
    mission:
      "To build sustainable wealth for our investors and communities through strategic property development, diversified portfolio management, and disciplined long-term investing.",
    vision:
      "To be Zimbabwe's most trusted investment and property development company, known for integrity, innovation, and the transformative impact of our developments on communities.",
    values: [
      { iconName: "ShieldCheck", title: "Integrity", desc: "Every transaction, every promise, every number — verified and transparent. Trust is our most valuable asset." },
      { iconName: "ChartLineUp", title: "Growth", desc: "We think in decades, not quarters. Patient capital and disciplined strategy deliver compounding returns." },
      { iconName: "Buildings", title: "Quality", desc: "From construction standards to tenant experience, quality is non-negotiable in everything we build and manage." },
      { iconName: "Handshake", title: "Partnership", desc: "We succeed when our investors and communities succeed. Aligned incentives drive better outcomes for everyone." },
      { iconName: "Users", title: "Community", desc: "Every development we build creates jobs, infrastructure, and value for the surrounding community." },
      { iconName: "Lightbulb", title: "Innovation", desc: "Modern construction methods, sustainable design, and data-driven investment decisions keep us ahead of the market." },
    ],
    team: [
      { name: "Matthew Law", role: "Managing Director & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" },
      { name: "Tendai Matende", role: "Head of Property Development", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
      { name: "Kudzai Nhamo", role: "Chief Investment Officer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
      { name: "Ruvimbo Chidziva", role: "Legal Director", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400" },
    ],
    milestones: [
      { year: "2005", title: "Matlaw Founded", desc: "Established with a first commercial property acquisition in Harare CBD." },
      { year: "2009", title: "First Estate Development", desc: "Launched our first residential estate project in Borrowdale." },
      { year: "2013", title: "$20M Portfolio", desc: "Crossed $20 million in total portfolio value across property and equities." },
      { year: "2017", title: "100th Project", desc: "Delivered our 100th project — a mix of residential, commercial, and agricultural developments." },
      { year: "2021", title: "Diversification Push", desc: "Expanded into agricultural land, mining investments, and strategic equity positions." },
      { year: "2025", title: "$100M+ Portfolio", desc: "Portfolio surpassed $100 million with 200+ projects delivered across Zimbabwe." },
    ],
    ctaTitle: "Invest with Confidence",
    ctaSubtitle: "Contact us to explore investment opportunities tailored to your goals.",
    ctaCta: "Start a Conversation",
  },

  services: {
    heroTitle: [
      { text: "Investment & " },
      { text: "Property", highlight: true },
      { text: " Solutions" },
    ],
    heroSubtitle:
      "Six integrated service areas that cover every aspect of investment, property development, and asset management.",
    items: [
      {
        iconName: "Buildings",
        title: "Property Investment",
        slug: "property-investment",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900",
        desc: "Strategic acquisition and management of high-value commercial and residential properties. We identify undervalued assets, execute acquisitions, and actively manage properties to maximise rental yields and capital appreciation.",
        features: [
          "Commercial property acquisition and leasing",
          "Residential investment properties",
          "Property portfolio diversification",
          "Asset management and tenant relations",
          "Capital improvement programmes",
          "Exit strategy and disposition planning",
        ],
      },
      {
        iconName: "ChartLineUp",
        title: "Portfolio Management",
        slug: "portfolio-management",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
        desc: "Diversified investment portfolio construction and active management. We combine property, equities, fixed income, and alternative investments to build wealth that compounds across market cycles.",
        features: [
          "Custom portfolio construction",
          "Active rebalancing and tactical allocation",
          "ZSE equities and fixed income",
          "Alternative investments including agriculture",
          "Quarterly performance reporting",
          "Risk management and hedging strategies",
        ],
      },
      {
        iconName: "Handshake",
        title: "Estate Development",
        slug: "estate-development",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900",
        desc: "End-to-end residential and commercial estate development. From land acquisition and township planning to construction, infrastructure, and sales — we deliver communities, not just buildings.",
        features: [
          "Land acquisition and feasibility studies",
          "Township planning and design",
          "Infrastructure development",
          "Residential and commercial construction",
          "Sales and marketing management",
          "Post-development community management",
        ],
      },
      {
        iconName: "ShieldCheck",
        title: "Legal Advisory",
        slug: "legal-advisory",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900",
        desc: "In-house legal counsel covering investment structuring, property transactions, and regulatory compliance. Having lawyers who understand investment means faster, smarter deals.",
        features: [
          "Investment structuring and SPV formation",
          "Property transaction conveyancing",
          "Regulatory compliance and licensing",
          "Joint venture and partnership agreements",
          "Dispute resolution and litigation support",
          "Due diligence and risk assessment",
        ],
      },
      {
        iconName: "Briefcase",
        title: "Consulting",
        slug: "consulting",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900",
        desc: "Strategic consulting for investors, developers, and corporates. Whether you are entering the Zimbabwean market, restructuring operations, or evaluating an acquisition, our team provides the insight to act with confidence.",
        features: [
          "Market entry strategy for foreign investors",
          "Feasibility studies and market analysis",
          "Corporate restructuring advisory",
          "Acquisition and divestiture support",
          "Operational efficiency consulting",
          "Strategic planning and board advisory",
        ],
      },
      {
        iconName: "CurrencyDollar",
        title: "Valuation Services",
        slug: "valuation-services",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
        desc: "Professional property and business valuations conducted by qualified valuers. Accurate valuations are the foundation of sound investment decisions, fair transactions, and proper financial reporting.",
        features: [
          "Commercial and residential property valuations",
          "Business valuations for M&A and restructuring",
          "Insurance valuation and replacement cost",
          "Rental market assessments",
          "Plant and machinery valuations",
          "IFRS-compliant valuation reporting",
        ],
      },
    ],
    ctaTitle: "Explore Our Capabilities",
    ctaSubtitle: "Every investment is unique. Contact us to discuss how Matlaw can serve your specific objectives.",
  },

  projects: {
    heroTitle: [
      { text: "Our " },
      { text: "Portfolio", highlight: true },
      { text: " of Impact" },
    ],
    heroSubtitle:
      "Over 200 projects delivered across property development, commercial investment, and portfolio management.",
    categories: ["All", "Estate Development", "Property Investment", "Portfolio Management", "Commercial"],
    items: [
      {
        id: 1,
        title: "Borrowdale Heights Estate — Phase I & II",
        category: "Estate Development",
        location: "Borrowdale, Harare",
        year: "2024",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
        desc: "A 120-stand residential estate with full infrastructure including roads, water, sewer, and fibre. Phase I sold out within 6 months. Phase II launched with 80% pre-sales.",
        services: ["Estate Development", "Legal Advisory"],
      },
      {
        id: 2,
        title: "CBD Commercial Tower — Acquisition & Refurbishment",
        category: "Property Investment",
        location: "Harare CBD",
        year: "2024",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        desc: "Acquired a 15-storey commercial tower at below-market value, invested $3M in refurbishment, and achieved 95% occupancy within 12 months at premium rental rates.",
        services: ["Property Investment", "Valuation Services"],
      },
      {
        id: 3,
        title: "Mining Sector Portfolio Restructuring",
        category: "Portfolio Management",
        location: "Nationwide",
        year: "2023",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
        desc: "Restructured a $15M mining investment portfolio, shifting from concentrated positions to a diversified strategy spanning lithium, gold, and chrome assets.",
        services: ["Portfolio Management", "Consulting"],
      },
      {
        id: 4,
        title: "Greendale Shopping Centre Development",
        category: "Commercial",
        location: "Greendale, Harare",
        year: "2023",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
        desc: "Developed a 5,000sqm neighbourhood shopping centre anchored by a major supermarket chain. Fully let before construction was completed.",
        services: ["Estate Development", "Property Investment"],
      },
      {
        id: 5,
        title: "Agricultural Land Fund",
        category: "Portfolio Management",
        location: "Mashonaland",
        year: "2024",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
        desc: "Launched a $5M agricultural land fund targeting irrigated farmland in Mashonaland. Achieved 22% returns in year one through tobacco and soybean production.",
        services: ["Portfolio Management", "Valuation Services"],
      },
      {
        id: 6,
        title: "Foreign Investor Market Entry — Hospitality",
        category: "Commercial",
        location: "Victoria Falls",
        year: "2025",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
        desc: "Advised a European hospitality group on market entry into Zimbabwe, including site selection, regulatory compliance, JV structuring, and construction management.",
        services: ["Consulting", "Legal Advisory"],
      },
    ],
    ctaTitle: "Explore Investment Opportunities",
    ctaSubtitle: "Every great investment starts with a conversation. Let us show you what is possible.",
  },

  contact: {
    heroTitle: [
      { text: "Start a " },
      { text: "Conversation", highlight: true },
    ],
    heroSubtitle:
      "Whether you are looking to invest, develop, or manage assets, our team is ready to discuss your objectives.",
    formTitle: "Contact Our Team",
    formSubtitle: "Provide your details and we will respond within 24 hours.",
  },

  footer: {
    tagline: "Invest in Your Future",
    description:
      "Matlaw Investments is a diversified investment and property development company delivering strategic portfolio management, estate development, legal advisory, consulting, and valuation services across Zimbabwe.",
    servicesTitle: "Our Services",
    companyTitle: "Company",
    contactTitle: "Contact",
    copyright: "Matlaw Investments (Pvt) Ltd",
  },
};

export default siteData;

export interface Project {
    slug: string;
    title: string;
    shortDesc: string;
    fullDesc: string;
    features: string[];
    tech: string[];
    featured: boolean;
    coverImage: string;
    galleryImages: string[];

    // Detailed Case Study Info
    role: string;
    timeline: string;
    client: string;
    liveLink?: string;
    githubLink?: string;

    caseStudy: {
        challenge: string;
        solution: string;
        outcomes: string[];
        currentSituation: string;
    };
}

export const projectsData: Project[] = [
    {
        slug: 'shilpomarket',
        title: 'ShilpoMarket',
        shortDesc: 'B2B Marketplace Platform',
        fullDesc: 'A scalable marketplace connecting businesses with raw material suppliers in Bangladesh.',
        features: ['Supplier & product listing', 'Smart categorization algorithm', 'High-availability architecture'],
        tech: ['Next.js', 'TypeScript', 'MongoDB', 'Node.js', 'Tailwind CSS'],
        featured: true,
        coverImage: '/projects/shilpomarket/cover.png',
        galleryImages: [
            '/projects/shilpomarket/cover.png',
            '/projects/shilpomarket/cover.png',
            '/projects/shilpomarket/cover.png',
        ],
        role: 'Founder & Full-Stack Engineer',
        timeline: '2023 - Present',
        client: 'Internal Startup',
        liveLink: 'https://shilpomarket.com',
        caseStudy: {
            challenge: 'The raw material supply chain in Bangladesh is highly fragmented, relying on manual processes and offline networks. Connecting buyers with reliable suppliers required significant physical effort and lacked transparency in pricing and quality.',
            solution: 'I architected a comprehensive B2B marketplace from the ground up. The platform features robust supplier verification pipelines, dynamic product catalogs, and a highly performant search algorithm to instantly match businesses with the right materials. The infrastructure was built on Next.js and MongoDB to ensure rapid scaling and high availability.',
            outcomes: [
                'Successfully onboarded initial suppliers and buyers.',
                'Reduced material discovery time from days to minutes.',
                'Established a centralized, transparent pricing model.',
            ],
            currentSituation: 'ShilpoMarket is currently actively onboarding merchants and scaling its infrastructure to handle the next phase of rapid user growth across multiple industrial sectors.'
        }
    },
    {
        slug: 'pqrix',
        title: 'PQRIX Tech',
        shortDesc: 'Software Agency Platform',
        fullDesc: 'Professional software agency terminal designed for high-conversion client acquisition.',
        features: ['Service catalog', 'Ultra-premium UX', 'Trust-driven conversion flow'],
        tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
        featured: true,
        coverImage: '/projects/pqrix/cover.png',
        galleryImages: [
            '/projects/pqrix/cover.png',
            '/projects/pqrix/cover.png',
            '/projects/pqrix/cover.png',
        ],
        role: 'Founder & Lead Developer',
        timeline: '2023 - Present',
        client: 'Internal Agency Platform',
        liveLink: 'https://pqrix.com',
        caseStudy: {
            challenge: 'Creating an agency presence that stands out in a crowded market requires more than just a portfolio. It demands a highly immersive, premium digital experience that instantly communicates technical excellence and establishes trust with high-value clients.',
            solution: 'I engineered the PQRIX Tech platform using React, Next.js, and Framer Motion to create a fluid, premium experience. The architecture focuses on performance optimization (sub-second load times) and a meticulously crafted monochrome design language that guides prospective clients seamlessly toward conversion.',
            outcomes: [
                'Achieved a perfect 100 on Lighthouse performance scores.',
                'Designed a scalable component system for rapid service iteration.',
                'Established a strong brand identity that resonates with enterprise clients.',
            ],
            currentSituation: 'The platform is live and actively generating leads, serving as the central hub for our software agency\'s inbound marketing and client communications operations.'
        }
    },
    {
        slug: 'basha-bhara',
        title: 'Basha Bhara',
        shortDesc: 'Property Rental Engine',
        fullDesc: 'Modern property discovery platform with real-time filtering and user-centric interfaces.',
        features: ['Dynamic listing platform', 'Advanced search heuristics', 'Device-agnostic design'],
        tech: ['React', 'Firebase', 'Express.js', 'Redux'],
        featured: false,
        coverImage: '/projects/basha/cover.png',
        galleryImages: [
            '/projects/basha/cover.png',
            '/projects/basha/cover.png',
            '/projects/basha/cover.png',
        ],
        role: 'Full-Stack Developer',
        timeline: '2022',
        client: 'Independent Project',
        liveLink: 'https://bashabhara.com',
        caseStudy: {
            challenge: 'Property seekers in urban areas face incredibly difficult discovery processes, dealing with fragmented Facebook groups, outdated classifieds, and a lack of verified information regarding property features and location specifics.',
            solution: 'Developed a streamlined, user-focused property rental engine. The platform utilizes advanced state management via Redux and real-time database capabilities via Firebase to provide instant search and filtering. The backend infrastructure was built with Express.js to handle secure user authentication and property verification workflows.',
            outcomes: [
                'Engineered real-time search filtering with zero-latency UX.',
                'Implemented secure, authenticated data mutation pipelines.',
                'Created a fully responsive, device-agnostic interface.',
            ],
            currentSituation: 'The project successfully validated the technical architecture and user experience assumptions, serving as a robust portfolio piece demonstrating complex state management.'
        }
    },
    {
        slug: 'legal-data-automation',
        title: 'Legal Data Automation',
        shortDesc: 'Data Pipeline System',
        fullDesc: 'High-throughput data collection and enrichment system for complex legal datasets.',
        features: ['Automated scraping nodes', 'Data enrichment logic', 'Structured data warehousing'],
        tech: ['Python', 'Node.js', 'MongoDB', 'Web APIs'],
        featured: false,
        coverImage: '/projects/legal/cover.png',
        galleryImages: [
            '/projects/legal/cover.png',
            '/projects/legal/cover.png',
            '/projects/legal/cover.png',
        ],
        role: 'Backend Engineer',
        timeline: '2022',
        client: 'Confidential',
        caseStudy: {
            challenge: 'Legal professionals spend thousands of hours manually compiling and verifying case data across disparate, unstandardized government and public databases, severely limiting their operational efficiency.',
            solution: 'Architected a sophisticated data pipeline utilizing Python for high-throughput headless scraping nodes and Node.js for data enrichment and API routing. The system automatically ingests unstructured legal data, sanitizes it, and structures it into a highly searchable MongoDB data warehouse.',
            outcomes: [
                'Automated the ingestion of thousands of legal records daily.',
                'Reduced manual data compilation time by over 90%.',
                'Built a resilient error-handling system for robust autonomous operation.',
            ],
            currentSituation: 'The system has been stabilized and successfully handed over, currently running autonomously to supply structured data to downstream analytical applications.'
        }
    }
];

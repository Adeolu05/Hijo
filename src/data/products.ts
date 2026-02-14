export interface Product {
    id: number;
    name: string;
    image: string;
    category: string;
    description: string;
    details: {
        material: string;
        movement: string;
        resistance: string;
        diameter: string;
    };
}

export const products: Product[] = [
    {
        id: 1,
        name: "Hijo Royal Gold",
        image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1000&auto=format&fit=crop",
        category: "Classic Series",
        description: "An embodiment of opulence. The Royal Gold features a 24k gold plated case.",
        details: { material: "18k Gold Plated", movement: "Swiss ETA 2824", resistance: "10 ATM", diameter: "41mm" }
    },
    {
        id: 2,
        name: "Hijo Smart Vision",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop",
        category: "Modern Tech",
        description: "The future on your wrist. Seamlessly connect to your digital life.",
        details: { material: "Aerospace Aluminum", movement: "HJS-Chipset", resistance: "IP68", diameter: "44mm" }
    },
    {
        id: 3,
        name: "Hijo Vogue Rose",
        image: "/image/Vogue.png", // Assuming this path is correct based on previous context
        category: "Minimalist",
        description: "Minimalist elegance for the modern trendsetter.",
        details: { material: "Rose Gold PVD", movement: "Miyota Quartz", resistance: "3 ATM", diameter: "38mm" }
    },
    {
        id: 5,
        name: "Hijo Midnight Elite",
        image: "/image/Elite.png", // Assuming this path is correct
        category: "Chronograph",
        description: "Darkness redefined. A matte black finish coupled with luminous hands.",
        details: { material: "Black PVD Steel", movement: "Auto Chrono", resistance: "10 ATM", diameter: "42mm" }
    }
];

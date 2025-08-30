import { config } from "dotenv";
import { db } from "@/utils/database/db";
import { products } from "@/utils/database/schema";

config({ path: ".env.local" });

const sampleProducts = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation",
        price: 19999, // Price in cents
        stock: 50,
        category: "Electronics",
        brand: "TechBrand",
        imageUrl: "https://example.com/headphones.jpg",
        featured: true,
    },
    {
        id: 2,
        name: "Smartphone",
        description: "Latest smartphone with advanced camera and long battery life",
        price: 79999,
        stock: 25,
        category: "Electronics",
        brand: "PhoneCorp",
        imageUrl: "https://example.com/smartphone.jpg",
        featured: true,
    },
    {
        id: 3,
        name: "Running Shoes",
        description: "Comfortable running shoes for all terrains",
        price: 12999,
        stock: 100,
        category: "Sports",
        brand: "SportsFoot",
        imageUrl: "https://example.com/shoes.jpg",
        featured: false,
    },
    {
        id: 4,
        name: "Coffee Maker",
        description: "Automatic drip coffee maker with programmable timer",
        price: 8999,
        stock: 30,
        category: "Home",
        brand: "BrewMaster",
        imageUrl: "https://example.com/coffee-maker.jpg",
        featured: false,
    },
    {
        id: 5,
        name: "Laptop",
        description: "High-performance laptop for work and gaming",
        price: 149999,
        stock: 15,
        category: "Electronics",
        brand: "CompuTech",
        imageUrl: "https://example.com/laptop.jpg",
        featured: true,
    },
];

async function seed() {
    try {
        console.log("Starting database seed...");
        
        // Insert products
        await db.insert(products).values(sampleProducts);
        
        console.log("Database seeded successfully!");
        console.log(`Inserted ${sampleProducts.length} products`);
        
    } catch (error) {
        console.error("Error seeding database:", error);
        throw error;
    }
}

// Run the seed function
seed()
    .then(() => {
        console.log("Seed completed");
        process.exit(0);
    })
    .catch((error) => {
        console.error("Seed failed:", error);
        process.exit(1);
    });
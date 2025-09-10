import { z } from "zod";

export const productSchema = z.object({
    name: z.string().min(1, { message: "Product name is required!" }),
    description: z.string().min(1, "Description is required!"),
    category: z.string().min(1, "Product Category is required!"),
    subCategory: z.string().optional(),
    brand: z.string().min(1, { message: "Product brand is required" }),
    price: z.number().min(0, { message: "Product price cannot be negative" }),
    stock: z.number().int().nonnegative({ message: "Product stock cannot be negative" }),
    status: z.enum([
        "active",
        "inactive",
        "discontinued",
        "out_of_stock",
        "pre_order"
    ]),
    imageFiles: z.array(
        z.instanceof(File).refine(file => file.size <= 5 * 1024 * 1024, { message: "Each image must be less than 5MB" })
            .refine(file => ["image/jpeg", "image/png", "image/webp"].includes(file.type), {
            message: "Invalid image file type. Only JPEG, PNG, and WEBP are allowed"
        })
    ).min(1, { message: "At least one image file is required" }),
    featured: z.boolean(),
    creator: z.string().min(1, { message: "Creator is required!"})
});




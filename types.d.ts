import z from "zod";
import { productSchema } from "./lib/productValidation";

type ProductFormData = z.infer<typeof productSchema>
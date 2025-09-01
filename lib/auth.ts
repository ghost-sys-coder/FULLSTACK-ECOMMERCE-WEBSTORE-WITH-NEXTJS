import { db } from "@/utils/database/db";
import { userSchema } from "@/utils/database/schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";


export const auth = betterAuth({
    secret: process.env.BETTER_AUTH_SECRET!,
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: userSchema
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false // set to true if email verification is required
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            enabled: true,
            scope: ["read:user", "user:email"]
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            enabled: true,
            scope: ["profile", "email"]
        }
    },
    session: {
        expiresIn: 60 * 60 * 24 * 7, // expires in 7 days
        updateAge: 60 * 60 * 24 // update every 24 hours
    },
    // user: {
    //     additionalFields: {
    //         role: {
    //             type: "string",
    //             defaultValue: "user"
    //         }
    //     }
    // }
});


export type Session = typeof auth.$Infer.Session;
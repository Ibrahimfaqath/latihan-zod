import { z } from "zod";

const schema = z.object({
    name: z.string(),
    age: z.number(),
});

const result = schema.safeParse({
    name: "Aris",
    age: 25,
});

if (!result.success) {
    console.log(result.error.format());
}

console.log(schema.safeParse({
    name: "Aris",
    age: 25,
}));
import { Hono } from "hono";
import { z } from "zod";

const app = new Hono();

const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
});

app.post("/users", async (c) => {
    const body = await c.req.json();

    const result = schema.safeParse(body);

    if (!result.success) {
        return c.json(result.error.format(), 400);
    }

    return c.json(result.data);
});

export default app
import z from "zod";
import tryParseEnv from "./try-env-parse";

const EnvSchema = z.object({
   NEXT_PUBLIC_SERVER_URL: z.string().url(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

tryParseEnv(EnvSchema);

// eslint-disable-next-line node/no-process-env
export default EnvSchema.parse(process.env);

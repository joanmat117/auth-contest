import path from "node:path";
import { defineConfig, env } from "prisma/config";
import dotenv from "dotenv";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default defineConfig({
  engine: "classic",
  schema: path.join("prisma", "schema.prisma"),
  datasource: {
    url: env("DATABASE_URL"),
  },
});

import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "0c5tto90",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

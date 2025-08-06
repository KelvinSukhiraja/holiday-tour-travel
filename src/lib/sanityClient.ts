import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "bv85u35a",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true,
});

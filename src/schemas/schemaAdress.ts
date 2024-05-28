import { z } from "zod";

export const schemaAdress = z.object({
  lot: z.string().min(4, "Number LOT need to have 4 digits, verify and try again."),
  local: z.string().min(1, "Select an option."),
  company: z.string().min(1, "Company field is required.")
})
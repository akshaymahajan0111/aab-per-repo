import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "greeting": z.string(),
      "tagline": z.string()
    })
  }
};
export type Schemas = typeof schemas;
import { z } from 'zod';

const createCategory = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
  }),
});

const updateCategory = z.object({
  body: z.object({
    title: z.string().optional(),
  }),
});

export const CategoryValidation = {
  createCategory,
  updateCategory,
};

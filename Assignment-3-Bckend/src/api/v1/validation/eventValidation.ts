import Joi from "joi";

export const createEventSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 3 characters",
    "string.max": "Name must be less than 50 characters",
    "any.required": "Name is required",
  }),

  description: Joi.string().min(10).max(500).required(),

  date: Joi.string().isoDate().required(),

  location: Joi.string().min(3).max(100).required(),

  capacity: Joi.number().integer().min(1).max(1000).required(),

  category: Joi.string()
    .valid("conference", "workshop", "seminar", "webinar")
    .required(),

  status: Joi.string().valid("draft", "published", "cancelled").default("draft"),
});

export const updateEventSchema = createEventSchema.fork(
  ["name", "description", "date", "location", "capacity", "category"],
  (schema) => schema.optional()
);
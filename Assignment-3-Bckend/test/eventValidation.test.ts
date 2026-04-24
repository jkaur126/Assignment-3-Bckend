import { createEventSchema } from "../src/api/v1/validation/eventValidation";

describe("createEventSchema", () => {
  it("should validate a correct event", () => {
    const event = {
      name: "Business Event",
      description: "This is a valid business event.",
      date: "2026-05-01T10:00:00.000Z",
      location: "Edmonton",
      capacity: 50,
      category: "conference",
      status: "published",
    };

    const result = createEventSchema.validate(event);

    expect(result.error).toBeUndefined();
  });

  it("should reject missing name", () => {
    const event = {
      description: "This is a valid business event.",
      date: "2026-05-01T10:00:00.000Z",
      location: "Edmonton",
      capacity: 50,
      category: "conference",
    };

    const result = createEventSchema.validate(event);

    expect(result.error).toBeDefined();
  });

  it("should reject invalid capacity", () => {
    const event = {
      name: "Business Event",
      description: "This is a valid business event.",
      date: "2026-05-01T10:00:00.000Z",
      location: "Edmonton",
      capacity: 0,
      category: "conference",
    };

    const result = createEventSchema.validate(event);

    expect(result.error).toBeDefined();
  });

  it("should apply default status", () => {
    const event = {
      name: "Business Event",
      description: "This is a valid business event.",
      date: "2026-05-01T10:00:00.000Z",
      location: "Edmonton",
      capacity: 50,
      category: "conference",
    };

    const result = createEventSchema.validate(event);

    expect(result.value.status).toBe("draft");
  });
});
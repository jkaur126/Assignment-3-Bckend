import * as eventService from "../src/api/v1/services/eventService";
import * as eventRepository from "../src/api/v1/repositories/eventRepository";

jest.mock("../src/api/v1/repositories/eventRepository");

describe("eventService", () => {
  it("should create an event using repository", async () => {
    const event = {
      name: "Business Event",
      description: "This is a valid business event.",
      date: "2026-05-01T10:00:00.000Z",
      location: "Edmonton",
      capacity: 50,
      category: "conference",
      status: "draft",
    };

    jest.spyOn(eventRepository, "createEvent").mockResolvedValue({
      id: "123",
      ...event,
    });

    const result = await eventService.createEvent(event);

    expect(result.id).toBe("123");
    expect(eventRepository.createEvent).toHaveBeenCalled();
  });
});
import { Event } from "../models/eventModel";
import * as eventRepository from "../repositories/eventRepository";

export const createEvent = async (event: Event) => {
  const now = new Date().toISOString();

  return eventRepository.createEvent({
    ...event,
    createdAt: now,
    updatedAt: now,
  });
};

export const getAllEvents = async () => {
  return eventRepository.getAllEvents();
};

export const getEventById = async (id: string) => {
  return eventRepository.getEventById(id);
};

export const updateEvent = async (id: string, event: Partial<Event>) => {
  return eventRepository.updateEvent(id, {
    ...event,
    updatedAt: new Date().toISOString(),
  });
};

export const deleteEvent = async (id: string) => {
  return eventRepository.deleteEvent(id);
};
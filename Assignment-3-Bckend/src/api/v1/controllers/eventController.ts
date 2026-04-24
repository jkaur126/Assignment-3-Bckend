import { Request, Response } from "express";
import * as eventService from "../services/eventService";

export const createEvent = async (req: Request, res: Response) => {
  const event = await eventService.createEvent(req.body);
  return res.status(201).json(event);
};

export const getAllEvents = async (_req: Request, res: Response) => {
  const events = await eventService.getAllEvents();
  return res.status(200).json(events);
};

export const getEventById = async (req: Request, res: Response) => {
  const event = await eventService.getEventById(req.params.id);

  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  return res.status(200).json(event);
};

export const updateEvent = async (req: Request, res: Response) => {
  const event = await eventService.updateEvent(req.params.id, req.body);

  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  return res.status(200).json(event);
};

export const deleteEvent = async (req: Request, res: Response) => {
  const deleted = await eventService.deleteEvent(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: "Event not found" });
  }

  return res.status(200).json({ message: "Event deleted successfully" });
};
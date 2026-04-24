import { db } from "../../../../config/firebaseconfig";
import { Event } from "../models/eventModel";

const collection = db.collection("events");

export const createEvent = async (event: Event) => {
  const docRef = await collection.add(event);
  return { id: docRef.id, ...event };
};

export const getAllEvents = async () => {
  const snapshot = await collection.get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getEventById = async (id: string) => {
  const doc = await collection.doc(id).get();

  if (!doc.exists) {
    return null;
  }

  return {
    id: doc.id,
    ...doc.data(),
  };
};

export const updateEvent = async (id: string, event: Partial<Event>) => {
  const docRef = collection.doc(id);
  const doc = await docRef.get();

  if (!doc.exists) {
    return null;
  }

  await docRef.update(event);

  return {
    id,
    ...event,
  };
};

export const deleteEvent = async (id: string) => {
  const docRef = collection.doc(id);
  const doc = await docRef.get();

  if (!doc.exists) {
    return false;
  }

  await docRef.delete();
  return true;
};
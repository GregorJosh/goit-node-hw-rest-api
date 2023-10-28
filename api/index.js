import express from "express";

import {
  indexContacts,
  getContact,
  createContact,
  updateContact,
  removeContact,
} from "../controllers/contacts/index.js";

export const APIRouter = express.Router();

APIRouter.get("/contacts", indexContacts);
APIRouter.get("/contacts/:contactId", getContact);
APIRouter.post("/contacts", createContact);
APIRouter.delete("/contacts/:contactId", removeContact);
APIRouter.put("/contacts/:contactId", updateContact);

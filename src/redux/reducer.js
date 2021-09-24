import { deleteItem, changeFilter, addItem } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};

const contactsReducer = createReducer(initialState, {
  [addItem]: ({ contacts }, { payload }) => ({
    contacts: {
      ...contacts,
      items: [...contacts.items, payload],
    },
  }),
  [deleteItem]: ({ contacts }, { payload }) => ({
    contacts: {
      ...contacts,
      items: contacts.items.filter((item) => item.id !== payload),
    },
  }),
  [changeFilter]: ({ contacts }, { payload }) => ({
    contacts: {
      ...contacts,
      filter: payload,
    },
  }),
});

export default contactsReducer;

import {
  configureStore,
  createReducer,
  combineReducers,
} from "@reduxjs/toolkit";
import { deleteItem, changeFilter, addItem } from "./actions";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};

const persistConfig = {
  key: "contacts",
  storage,
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

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ contacts: contactsReducer })
);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };

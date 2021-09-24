import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./reducer";

const persistConfig = {
  key: "contacts",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ contacts: contactsReducer })
);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };

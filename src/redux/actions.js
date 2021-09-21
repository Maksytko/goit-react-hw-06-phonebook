import { v4 as uuidv } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const prepareAction = (name, number) => {
  return {
    payload: {
      name,
      number,
      id: uuidv(),
    },
  };
};

const addItem = createAction("items/add", prepareAction);
const deleteItem = createAction("items/delete");
const changeFilter = createAction("filter/change");

export { deleteItem, changeFilter, addItem };

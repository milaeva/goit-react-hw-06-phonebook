import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phonebook-actions";

const contactReducer = createReducer([], {
    [actions.handleSubmit]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) => state.filter((contacts) => !contacts.id.includes(payload))
})

const inputValueReducer = createReducer("", {
    [actions.inputChange]: (_, { payload }) => payload
})

export default combineReducers({
    contact: contactReducer,
    inputValue: inputValueReducer
})
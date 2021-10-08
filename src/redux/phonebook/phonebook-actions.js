import { createAction } from "@reduxjs/toolkit";

const handleSubmit = createAction('contact/Submit');

const deleteContact = createAction('contact/Delete');

const inputChange = createAction('contact/inputChange');

const actions = { handleSubmit, deleteContact, inputChange };
export default actions;
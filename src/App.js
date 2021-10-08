import { alert, defaultModules } from "@pnotify/core"
import "@pnotify/core/dist/PNotify.css"
import * as PNotifyMobile from "@pnotify/mobile"
import "@pnotify/mobile/dist/PNotifyMobile.css"
import { connect } from "react-redux"
import actions from "./redux/phonebook/phonebook-actions"

import Form from "./components/Form/Form"
import Filter from "./components/ContactFilter/ContactFilter"
import ContactsList from "./components/Contacts/ContactsList"

import "./App.css"

function App({ contacts, inputValue, handleSubmit, deleteContact, inputChange }) {
  // useEffect(() => {
  //   const localState = JSON.parse(localStorage.getItem("Contacts"));
  //   if (localState) {
  //     setContacts(localState);
  //   } else {
  //     return;
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("Contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const filterleInputChange = (e) => {
  //   const { value } = e.currentTarget;
  //   setFilter(value);
  // };

  const submit = (data) => {
    if (contacts.find((contact) => contact.name.toLowerCase() === data.name.toLowerCase())) {
      defaultModules.set(PNotifyMobile, {})
      alert({
        text: `${data.name} is olready in contacts`,
      })
    } else {
      handleSubmit(data)
    }
  }

  // const deleteContact = (id) => {
  //   const visiblecontact = contacts.filter(
  //     (contacts) => !contacts.id.includes(id)
  //   );
  //   setContacts(visiblecontact);
  // };

  const visiblecontact = () => {
    const normalizedFilter = inputValue.toLowerCase()
    if (contacts.length === 0) {
      return
    } else {
      return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter))
    }
  }
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form submit={submit} />
      <h2>Contacts</h2>
      {contacts.length === 0 ? null : <Filter filterInput={inputChange} filterValue={inputValue} />}
      {contacts.length === 0 ? (
        <p>No Contacts</p>
      ) : (
        <ContactsList contacts={visiblecontact()} deleteContact={deleteContact} />
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  contacts: state.contact,
  inputValue: state.inputValue,
})
const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (value) => dispatch(actions.handleSubmit(value)),
  deleteContact: (id) => dispatch(actions.deleteContact(id)),
  inputChange: (event) => dispatch(actions.inputChange(event.currentTarget.value)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)

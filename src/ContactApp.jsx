//import React from "react";
import ContactList from "./components/ContactList";
import { getData } from "./data.js";

// function onDelete(){
//   console.log("Delete");
// }
// function ContactApp() {
//   const contacts = getData();
//   return (
//     <div className="contact-app">
//       <h1>Daftar Kontak</h1>
//       <ContactList contacts={contacts} onDelete={onDelete} />
//     </div>
//   );
// }

// class ContactApp extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       contacts: getData(),
//     };
//   }
//   onDelete = (id) =>{
//     const newContacts = this.state.contacts.filter((contact) => contact.id !== id);
//     this.setState({
//       contacts: newContacts,
//     });
//   }
//   render(){
//     return (
//       <div className="contact-app">
//         <h1>Daftar Kontak</h1>
//         <ContactList contacts={this.state.contacts} onDelete={this.onDelete} />
//       </div>
//     );
//   }
// }
import React, { useState } from 'react';

const ContactApp = () => {
  const [contacts, setContacts] = useState(getData());

  const onDelete = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <div className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={contacts} onDelete={onDelete} />
    </div>
  );
};



export default ContactApp;

import React, { useState } from "react";

import ContactList from "./components/ContactList";
import { getData } from "./data.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
const generateUniqueId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};
class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
      isModalOpen: false,
      newContactName: "",
    };
  }

  onDelete = (id) => {
    const newContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      contacts: newContacts,
    });
  };

  onAddContact = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  onSaveContact = () => {
    const newContact = {
      id: generateUniqueId(),
      name: this.state.newContactName,
      tag: "random",
      imageUrl: "/images/arifaizin.jpeg",
    };

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
      isModalOpen: false,
      newContactName: "",
    }));
  };

  onCloseModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    return (
      <div className="contact-app">
        <h1>Daftar Kontak</h1>
        <Button onClick={this.onAddContact}>Tambah Kontak</Button>
        <ContactList contacts={this.state.contacts} onDelete={this.onDelete} />

        <Modal show={this.state.isModalOpen} onHide={this.onCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Masukkan Nama Kontak</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="text"
              value={this.state.newContactName}
              onChange={(e) =>
                this.setState({ newContactName: e.target.value })
              }
              placeholder="Nama Kontak"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.onCloseModal}>
              Batal
            </Button>
            <Button variant="primary" onClick={this.onSaveContact}>
              Simpan
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ContactApp;

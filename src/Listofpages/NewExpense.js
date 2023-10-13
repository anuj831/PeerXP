import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewExpense({ closeModal, addExpense }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [uploadedAt, setUploadedAt] = useState('');
  const [createdBy, setCreatedBy] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newExpense = {
      name,
      category,
      description,
      date,
      amount,
      uploadedAt, // Include uploadedAt
      createdBy, // Include createdBy
    };

    // Pass the new expense data to the parent component
    addExpense(newExpense);

    // Close the modal
    closeModal();
  };

  return (
    <Modal show={true} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label><b>Name</b></Form.Label>
            <Form.Control
              type="text"
              placeholder="Expense Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="category">
            <Form.Label><b>Category</b></Form.Label>
            <Form.Control
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label><b>Description</b></Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="date">
            <Form.Label><b>Date of Expense</b></Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="amount">
            <Form.Label><b>Expense Amount</b></Form.Label>
            <Form.Control
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="uploadedAt">
            <Form.Label><b>Uploaded At</b></Form.Label>
            <Form.Control
              type="text"
              placeholder="Uploaded At"
              value={uploadedAt}
              onChange={(e) => setUploadedAt(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="createdBy">
            <Form.Label><b>Created By</b></Form.Label>
            <Form.Control
              type="text"
              placeholder="Created By"
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
            />
          </Form.Group>
          <br />
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="success" type="submit">
            Create Expense
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default NewExpense;

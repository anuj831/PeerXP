import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EditExpense({ itemToEdit, closeModal, updateExpense }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');

  // Set the initial state based on the item to be edited
  useEffect(() => {
    if (itemToEdit) {
      setName(itemToEdit.name);
      setCategory(itemToEdit.category);
      setDescription(itemToEdit.description);
      setDate(itemToEdit.date);
      setAmount(itemToEdit.amount);
    }
  }, [itemToEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedExpense = {
      ...itemToEdit,
      name,
      category,
      description,
      date,
      amount,
    };

    // Pass the updated expense data to the parent component
    updateExpense(updatedExpense);

    // Close the modal
    closeModal();
  };

  return (
    <Modal show={true} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Expense Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Date of Expense</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="amount">
            <Form.Label>Expense Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
          <br />
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 
          <Button variant="success" type="submit">
            Create Expenses
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditExpense;

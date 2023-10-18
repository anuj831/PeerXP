import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DeleteExpense({ expense, onDelete, onClose }) {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete this expense?</p>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-center w-100">
          <Button variant="danger" onClick={onClose} className="mr-2">
            No
          </Button>
          <Button variant="success" onClick={() => onDelete(expense)} className="ml-2">
            Yes, Delete
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteExpense;

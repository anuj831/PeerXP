import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import NewExpense from './NewExpense';
import EditExpense from './EditExpense';
import DeleteExpense from './DeleteExpense'; // Make sure to import DeleteExpense
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  const [search1, setSearch1] = useState('');
  const [search2, setSearch2] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const data = [
    // Sample data
    {
      id: 1,
      name: 'John Doe',
      category: 'Food',
      date: '2023-10-15',
      amount: 50.0,
      uploadedAt: '2023-10-15 12:34 PM',
      createdBy: 'User A',
    },
    {
      id: 2,
      name: 'Jane Smith',
      category: 'Entertainment',
      date: '2023-10-14',
      amount: 25.0,
      uploadedAt: '2023-10-14 10:22 AM',
      createdBy: 'User B',
    },
    // Add more data as needed
  ];

  // Expenses state
  const [expenses, setExpenses] = useState(data);




  

  const [itemToEdit, setItemToEdit] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);

  const [showNewExpenseModal, setShowNewExpenseModal] = useState(false);
  const [showEditExpenseModal, setShowEditExpenseModal] = useState(false);

  const openNewExpenseModal = () => {
    setShowNewExpenseModal(true);
  };

  const closeNewExpenseModal = () => {
    setShowNewExpenseModal(false);
  };

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    closeNewExpenseModal();
  };

  const handleEdit = (item) => {
    setItemToEdit(item);
    setShowEditExpenseModal(true);
  };

  const handleDelete = (item) => {
    setItemToDelete(item);
  };

  const confirmDelete = () => {
    const updatedExpenses = expenses.filter((item) => item.id !== itemToDelete.id);
    setExpenses(updatedExpenses);
    setItemToDelete(null);
  };

  const cancelDelete = () => {
    setItemToDelete(null);
  };

  const updateExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map((item) => (item.id === updatedExpense.id ? updatedExpense : item));
    setExpenses(updatedExpenses);
    setShowEditExpenseModal(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = expenses.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearch1Change = (event) => {
    const value = event.target.value;
    setSearch1(value);
    setCurrentPage(1);
    const filteredExpenses = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setExpenses(filteredExpenses);
  };

  const handleSearch2Change = (event) => {
    const value = event.target.value;
    setSearch2(value);
    setCurrentPage(1);
    const filteredExpenses = data.filter((item) =>
      item.date.toLowerCase().includes(value.toLowerCase())
    );
    setExpenses(filteredExpenses);
  };

  const paginate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mt-4 nav">
      <h3 className="mb-3">MY EXPENSE MANAGER</h3>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;
      <div className="row mb-3">
      <div className="col">
        <div className="d-flex justify-content-end">
          <FormControl
            type="text"
            placeholder="Search by Name..."
            value={search1}
            onChange={handleSearch1Change}
            style={{ width: '250px', marginRight: '5px' }}
          />
        </div>
      </div>
      <div className="col">
        <div className="d-flex justify-content-end">
          <FormControl
            type="text"
            placeholder="Search by Date..."
            value={search2}
            onChange={handleSearch2Change}
            style={{ width: '250px' }}
          />
        </div>
      </div>
      <div className="col">
        <div className="d-flex justify-content-end">
          <Button variant="success" onClick={openNewExpenseModal}>
            New Expense
          </Button>
        </div>
      </div>
    </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Date of Expense</th>
            <th>Amount</th>
            <th>Uploaded At</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.date}</td>
              <td>${parseFloat(item.amount).toFixed(2)}</td>
              <td>{item.uploadedAt}</td>
              <td>{item.createdBy}</td>
              <td>
                <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(item)} />
                <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} onClick={() => handleDelete(item)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {Array(Math.ceil(expenses.length / itemsPerPage))
          .fill()
          .map((_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
      </Pagination>
      {showNewExpenseModal && (
        <NewExpense closeModal={closeNewExpenseModal} addExpense={addExpense} />
      )}
      {showEditExpenseModal && itemToEdit && (
        <EditExpense
          itemToEdit={itemToEdit}
          closeModal={() => setShowEditExpenseModal(false)}
          updateExpense={updateExpense}
        />
      )}
      {itemToDelete && (
        <DeleteExpense expense={itemToDelete} onDelete={confirmDelete} onClose={cancelDelete} />
      )}
    </div>
  );
}

export default Dashboard;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';
import '../App.css';

function Dashboard() {
  const [search1, setSearch1] = useState('');
  const [search2, setSearch2] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const data = [
    // Sample data
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 28, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
    // Add more data as needed
  ];

  // Filter data based on search input
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search1.toLowerCase()) &&
      item.email.toLowerCase().includes(search2.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearch1Change = (event) => {
    setSearch1(event.target.value);
    setCurrentPage(1);
  };

  const handleSearch2Change = (event) => {
    setSearch2(event.target.value);
    setCurrentPage(1);
  };

  const paginate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mt-4 nav">
      <h1 className="mb-3 head">MY EXPENSE MANAGER</h1>
      <div className="row mb-3">
        <div className="col search1">
          <FormControl
            type="text"
            placeholder="Search by Name..."
            value={search1}
            onChange={handleSearch1Change}
            style={{ width: '120%' }}
          />
        </div>
        <div className="col search2">
          <FormControl
            type="text"
            placeholder="Search by Email..."
            value={search2}
            onChange={handleSearch2Change}
            style={{ width: '120%' }}
          />
        </div>
        <div className="col butt">
          <Link to="/new-expense">
            <Button variant="primary">New Expense</Button>
          </Link>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Date of Expense</th>
            <th>Amount</th>
            <th>Updated At</th>
            <th>Created By</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {Array(Math.ceil(filteredData.length / itemsPerPage))
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
    </div>
  );
}

export default Dashboard;

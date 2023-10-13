// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Listofpages/loginpage'
// import Dashboard from './Listofpages/NewExpense';
import NewExpense from './Listofpages/NewExpense';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/createexpenses" element={<NewExpense />} />
        <Route path="/createexpenses" element={<NewExpense />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

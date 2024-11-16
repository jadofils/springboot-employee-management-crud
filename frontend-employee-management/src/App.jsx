import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployee from './components/ListEmployee';
import AddEmployee from './components/AddEmployee';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Button from './components/Button';

// UpdateEmployee component
const UpdateEmployee = () => {
  // This will be your AddEmployee component in update mode
  return <AddEmployee />;
};

// DeleteEmployee component - you might want to create a separate component for this
const DeleteEmployee = () => {
  const navigate = useNavigate();
  // Add your delete logic here
  // You might want to show a confirmation dialog
  return (
    <div className="p-8">
      <h2>Delete Employee</h2>
      <p>Are you sure you want to delete this employee?</p>
      <Button onClick={() => navigate('/employees')}>Cancel</Button>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <NavigateButton />
      </div>
      <Routes>
        {/* Route to the ListEmployee component (home page) */}
        <Route path="/" element={<ListEmployee />} />
        {/* Route to the ListEmployee component for employees page */}
        <Route path="/employees" element={<ListEmployee />} />
        {/* Route to the AddEmployee component */}
        <Route path="/add-employee" element={<AddEmployee />} />
        {/* Route to the update component - note the :id parameter */}
        <Route path="/update-employee/:id" element={<UpdateEmployee />} />
        {/* Route to the deleteEmployee component - note the :id parameter */}
        <Route path="/delete-employee/:id" element={<DeleteEmployee />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// NavigateButton component
function NavigateButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/add-employee');
  };

  return (
    <Button onClick={handleClick}>Add Employee</Button>
  );
}

export default App;
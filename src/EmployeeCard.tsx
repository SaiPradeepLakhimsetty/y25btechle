import React from 'react';

interface EmployeeProps {
  name: string;
  id: string;
  department: string;
  salary: number;
}

const EmployeeCard: React.FC<EmployeeProps> = ({ name, id, department, salary }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      width: '250px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      color: '#333'
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#1976d2' }}>{name}</h3>
      <p style={{ margin: '4px 0' }}><strong>ID:</strong> {id}</p>
      <p style={{ margin: '4px 0' }}><strong>Department:</strong> {department}</p>
      <p style={{ margin: '4px 0' }}><strong>Salary:</strong> ₹{salary.toLocaleString()}</p>
    </div>
  );
};

export default EmployeeCard;
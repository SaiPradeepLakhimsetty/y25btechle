import { useState } from 'react';
import EmployeeCard from './EmployeeCard';

const employeesData = [
  { id: 'EMP001', name: 'Arjun Sharma', department: 'Engineering', salary: 85000 },
  { id: 'EMP002', name: 'Priya Nair', department: 'Design', salary: 72000 },
  { id: 'EMP003', name: 'Rahul Verma', department: 'Marketing', salary: 65000 },
  { id: 'EMP004', name: 'Sneha Reddy', department: 'Engineering', salary: 92000 },
];

const departments = ['All', 'Engineering', 'Design', 'Marketing'];

function Step3() {
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const filteredEmployees = selectedDept === 'All'
    ? employeesData
    : employeesData.filter((emp) => emp.department === selectedDept);

  return (
    <div style={{ padding: '16px', border: '1px solid #555', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>Step 3: Department Filter with useState()</h2>

      <div style={{ marginBottom: '16px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setSelectedDept(dept)}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: '1px solid #1976d2',
              cursor: 'pointer',
              backgroundColor: selectedDept === dept ? '#1976d2' : '#fff',
              color: selectedDept === dept ? '#fff' : '#1976d2',
              fontWeight: 'bold'
            }}
          >
            {dept}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredEmployees.map((emp) => (
          <EmployeeCard
            key={emp.id}
            name={emp.name}
            id={emp.id}
            department={emp.department}
            salary={emp.salary}
          />
        ))}
      </div>
    </div>
  );
}

export default Step3;
import EmployeeCard from './EmployeeCard';

const employeesData = [
  { id: 'EMP001', name: 'Arjun Sharma', department: 'Engineering', salary: 85000 },
  { id: 'EMP002', name: 'Priya Nair', department: 'Design', salary: 72000 },
  { id: 'EMP003', name: 'Rahul Verma', department: 'Marketing', salary: 65000 },
  { id: 'EMP004', name: 'Sneha Reddy', department: 'Engineering', salary: 92000 },
];

function Step2() {
  return (
    <div style={{ padding: '16px', border: '1px solid #555', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>Step 2: Employee Array Rendered with .map()</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {employeesData.map((emp) => (
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

export default Step2;
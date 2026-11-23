import EmployeeCard from './EmployeeCard';

function Step1() {
  return (
    <div style={{ padding: '16px', border: '1px solid #555', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>Step 1: Reusable Employee Card (Props)</h2>
      <EmployeeCard 
        name="Arjun Sharma" 
        id="EMP001" 
        department="Engineering" 
        salary={85000} 
      />
    </div>
  );
}

export default Step1;
import { useState } from 'react';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

function App() {
  const [activeView, setActiveView] = useState<'ALL' | 'STEP1' | 'STEP2' | 'STEP3'>('ALL');

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Employee Directory Project</h1>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={() => setActiveView('ALL')}>Show All Steps</button>
        <button onClick={() => setActiveView('STEP1')}>Only Step 1</button>
        <button onClick={() => setActiveView('STEP2')}>Only Step 2</button>
        <button onClick={() => setActiveView('STEP3')}>Only Step 3</button>
      </div>

      {(activeView === 'ALL' || activeView === 'STEP1') && <Step1 />}
      {(activeView === 'ALL' || activeView === 'STEP2') && <Step2 />}
      {(activeView === 'ALL' || activeView === 'STEP3') && <Step3 />}
    </div>
  );
}

export default App;
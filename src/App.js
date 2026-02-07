import React, { useState } from 'react';
import './App.css';
import BasicInfo from './components/BasicInfo';
import SpecForm from './components/SpecForm';
import ArrayForm from './components/ArrayForm';
import ShootingTypesForm from './components/ShootingTypesForm';

function App() {
  const [data, setData] = useState({
    data_id: '',
    ms_number: '',
    ms_name: '',
    ms_icon: '',
    ms_data: {
      spec: {
        sensor_rank: '',
        motion_thrust: '',
        min_straight: '',
        size: '',
        stall_speed: '',
        pp_limit: '',
        def_modifier: '',
        walk_speed: ''
      },
      receive_types: [],
      thrusters: [],
      grapple_types: [],
      shooting_types: [],
      recive_types: [],
      avoidance: {},
      defence: {},
      body_part: {},
      body_specs: {
        head: {},
        leg: {},
        body: {},
        arm: {}
      }
    }
  });

  const handleBasicChange = (key, value) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const handleSpecChange = (key, value) => {
    setData(prev => ({
      ...prev,
      ms_data: {
        ...prev.ms_data,
        spec: { ...prev.ms_data.spec, [key]: value }
      }
    }));
  };

  const addItem = (arrayName) => {
    setData(prev => ({
      ...prev,
      ms_data: {
        ...prev.ms_data,
        [arrayName]: [...prev.ms_data[arrayName], {}]
      }
    }));
  };

  const updateItem = (arrayName, index, field, value) => {
    setData(prev => ({
      ...prev,
      ms_data: {
        ...prev.ms_data,
        [arrayName]: prev.ms_data[arrayName].map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        )
      }
    }));
  };

  const removeItem = (arrayName, index) => {
    setData(prev => ({
      ...prev,
      ms_data: {
        ...prev.ms_data,
        [arrayName]: prev.ms_data[arrayName].filter((_, i) => i !== index)
      }
    }));
  };

  const downloadJSON = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'gh_data.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="App">
      <h1>GH Data Builder</h1>
      <form>
        <BasicInfo data={data} onChange={handleBasicChange} />
        <SpecForm spec={data.ms_data.spec} onChange={handleSpecChange} />
        <ArrayForm
          title="Receive Types"
          items={data.ms_data.receive_types}
          fields={['nama', 'value']}
          onAdd={() => addItem('receive_types')}
          onUpdate={(index, field, value) => updateItem('receive_types', index, field, value)}
          onRemove={(index) => removeItem('receive_types', index)}
        />
        <ArrayForm
          title="Thrusters"
          items={data.ms_data.thrusters}
          fields={['name', 'value', 'direction', 'fuel']}
          onAdd={() => addItem('thrusters')}
          onUpdate={(index, field, value) => updateItem('thrusters', index, field, value)}
          onRemove={(index) => removeItem('thrusters', index)}
        />
        <ArrayForm
          title="Grapple Types"
          items={data.ms_data.grapple_types}
          fields={['name', 'value', 'power', 'destructive_power']}
          onAdd={() => addItem('grapple_types')}
          onUpdate={(index, field, value) => updateItem('grapple_types', index, field, value)}
          onRemove={(index) => removeItem('grapple_types', index)}
        />
        <ShootingTypesForm
          shootingTypes={data.ms_data.shooting_types}
          onAdd={() => addItem('shooting_types')}
          onUpdate={(index, field, value) => updateItem('shooting_types', index, field, value)}
          onRemove={(index) => removeItem('shooting_types', index)}
        />
      </form>
      <button onClick={downloadJSON}>Download JSON</button>
    </div>
  );
}

export default App;

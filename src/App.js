import React, { useState } from 'react';
import './App.css';
import DataForm from './components/Form/DataForm';
import DataViewer from './components/Viewer/DataViewer';
import labels from './labels';

function App() {
  const [view, setView] = useState('input');
  const [data, setData] = useState({
    data_id: '',
    ms_number: '',
    ms_name: '',
    ms_name_optional: '',
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
      weapon_specs: [],
      avoidance: {
        front: { values: ['', '', '', '', '', ''] },
        side: { values: ['', '', '', '', '', ''] },
        back: { values: ['', '', '', '', '', ''] }
      },
      defence: {
        same_same: ['', '', '', ''],
        same_different: ['', '', '', ''],
        different_same: ['', '', '', ''],
        different_different: ['', '', '', '']
      },
      body_part: {
        front: ['', '', '', '', '', '', '', '', '', '', ''],
        right: ['', '', '', '', '', '', '', '', '', '', ''],
        left: ['', '', '', '', '', '', '', '', '', '', ''],
        back: ['', '', '', '', '', '', '', '', '', '', '']
      },
      body_specs: {
        head: [],
        leg: [],
        body: [],
        arm: []
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

  const handleUpdate = (section, key, subKey, value) => {
    setData(prev => ({
      ...prev,
      ms_data: {
        ...prev.ms_data,
        [section]: {
          ...prev.ms_data[section],
          [key]: subKey ? { ...prev.ms_data[section][key], [subKey]: value } : value
        }
      }
    }));
  };

  const downloadJSON = () => {
    const processedData = {
      ...data,
      ms_data: {
        ...data.ms_data,
        shooting_types: data.ms_data.shooting_types.map(item => ({
          ...item,
          hit_rates: item.hit_rates ? item.hit_rates.map(rate => rate !== null ? String(rate) : null) : [],
          power: item.power ? item.power.map(p => p !== null ? String(p) : null) : []
        }))
      }
    };
    const dataStr = JSON.stringify(processedData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = data.data_id ? `${data.data_id}.json` : 'gh_data.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const loadJSON = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const loadedData = JSON.parse(e.target.result);
          setData(loadedData);
        } catch (error) {
          alert('JSONファイルの読み込みに失敗しました。');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="App">
      <h1>GH Data Builder</h1>
      <div>
        <button onClick={() => setView('input')}>{labels.dataInput}</button>
        <button onClick={() => setView('viewer')}>{labels.dataViewer}</button>
      </div>
      {view === 'input' && (
        <DataForm
          data={data}
          onBasicChange={handleBasicChange}
          onSpecChange={handleSpecChange}
          onAddItem={addItem}
          onUpdateItem={updateItem}
          onRemoveItem={removeItem}
          onUpdate={handleUpdate}
        />
      )}
      {view === 'viewer' && <DataViewer data={data} />}
      <input
        type="file"
        accept=".json"
        onChange={loadJSON}
        style={{ display: 'none' }}
        id="json-file-input"
      />
      <button onClick={() => document.getElementById('json-file-input').click()} className="load-button">JSON読み込み</button>
      <button onClick={downloadJSON} className="download-button">JSONダウンロード</button>
    </div>
  );
}

export default App;

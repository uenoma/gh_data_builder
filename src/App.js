import React, { useState, useEffect } from 'react';
import './App.css';
import DataForm from './components/Form/DataForm';
import DataViewer from './components/Viewer/DataViewer';
import MSDataList from './components/Database/MSDataList';
import labels from './labels';

function App() {
  const [view, setView] = useState('database');
  const [selectedMS, setSelectedMS] = useState(null);
  const [sortKey, setSortKey] = useState('ms_number');
  const [sortOrder, setSortOrder] = useState('asc');
  const [refreshTrigger, setRefreshTrigger] = useState(0);
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
        arm: [],
        backpack: []
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

  const renderContent = () => {
    switch (view) {
      case 'database':
        return <MSDataList setData={setData} setView={setView} selectedMS={selectedMS} setSelectedMS={setSelectedMS} sortKey={sortKey} setSortKey={setSortKey} sortOrder={sortOrder} setSortOrder={setSortOrder} refreshTrigger={refreshTrigger} />;
      case 'edit':
        return (
          <DataForm
            data={data}
            onBasicChange={handleBasicChange}
            onSpecChange={handleSpecChange}
            onAddItem={addItem}
            onUpdateItem={updateItem}
            onRemoveItem={removeItem}
            onUpdate={handleUpdate}
          />
        );
      case 'viewer':
        return <DataViewer data={data} />;
      default:
        return null;
    }
  };

  const renderButtons = () => {
    if (view !== 'edit') return null;

    const createNewData = () => {
      setData({
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
            arm: [],
            backpack: []
          }
        }
      });
      setSelectedMS(null);
    };

    const updateDatabase = async () => {
      if (!data.data_id.trim() || !data.ms_name.trim()) {
        alert('データID、名称は必須です。');
        return;
      }
      try {
        const isNew = !selectedMS;
        const method = isNew ? 'POST' : 'PUT';
        const url = isNew ? 'https://dndhideout.com/gh/gh_backend/public/api/mobile-suits' : `https://dndhideout.com/gh/gh_backend/public/api/mobile-suits/${data.id}`;
        const response = await fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error('Failed to update database');
        }
        alert(isNew ? '新規作成しました。' : '更新しました。');
        if (isNew) {
          setRefreshTrigger(prev => prev + 1);
          setView('database');
        }
      } catch (error) {
        alert('データベース操作に失敗しました: ' + error.message);
      }
    };

    return (
      <>
        <input
          type="file"
          accept=".json"
          onChange={loadJSON}
          style={{ display: 'none' }}
          id="json-file-input"
        />
        <br />
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', flexWrap: 'wrap', marginRight: '20px' }}>
          <button onClick={createNewData} className="create-button print-hidden">
            新規作成
          </button>
          <button onClick={() => document.getElementById('json-file-input').click()} className="load-button print-hidden">
            ファイルから読み込み（JSON）
          </button>
          <button onClick={downloadJSON} className="download-button print-hidden">
            エクスポート（JSON）
          </button>
          <button onClick={updateDatabase} className="update-button print-hidden">
            データベースに保存
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="App">
      <h1 className="print-hidden">GH Data Builder</h1>
      <div className="tab-buttons print-hidden">
        <button className={`tab-button ${view === 'database' ? 'active' : ''}`} onClick={() => setView('database')}>
          {labels.database}
        </button>
        <button className={`tab-button ${view === 'edit' ? 'active' : ''}`} onClick={() => setView('edit')}>
          {labels.dataEdit}
        </button>
        <button className={`tab-button ${view === 'viewer' ? 'active' : ''}`} onClick={() => setView('viewer')}>
          {labels.dataViewer}
        </button>
      </div>
      <hr className="tab-separator print-hidden" />
      {renderButtons()}
      {renderContent()}
    </div>
  );
}

export default App;

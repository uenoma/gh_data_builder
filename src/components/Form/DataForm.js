import React from 'react';
import AuthorInfo from './AuthorInfo';
import BasicInfo from './BasicInfo';
import SpecForm from './SpecForm';
import ThrustersForm from './ThrustersForm';
import ReceiveTypesForm from './ReceiveTypesForm';
import GrappleTypesForm from './GrappleTypesForm';
import WeaponSpecsForm from './WeaponSpecsForm';
import ShootingTypesForm from './ShootingTypesForm';
import AvoidanceForm from './AvoidanceForm';
import DefenceForm from './DefenceForm';
import BodyPartForm from './BodyPartForm';
import BodySpecsForm from './BodySpecsForm';
import './DataForm.css';

const DataForm = ({
  data,
  isNew,
  onBasicChange,
  onSpecChange,
  onAddItem,
  onUpdateItem,
  onRemoveItem,
  onUpdate
}) => {
  if (!data || !data.ms_data) {
    return <div>データが読み込まれていません。</div>;
  }

  return (
    <form className="data-form">
      <div className="form-section">
        <h2 style={{ textAlign: 'center', color: isNew ? '#4CAF50' : '#2196F3', marginBottom: '20px' }}>
          {isNew ? '新規作成モード' : '更新モード'}
        </h2>
        <AuthorInfo data={data} onChange={onBasicChange} />
      </div>
      <div className="form-section">
        <div className="form-columns">
          <BasicInfo data={data} onChange={onBasicChange} />
          <SpecForm spec={data.ms_data.spec} onChange={onSpecChange} />
          <ThrustersForm
            items={data.ms_data.thrusters}
            onAdd={() => onAddItem('thrusters')}
            onUpdate={(index, field, value) => onUpdateItem('thrusters', index, field, value)}
            onRemove={(index) => onRemoveItem('thrusters', index)}
          />
        </div>
      </div>
      <div className="form-section">
        <div className="form-grid">
          <GrappleTypesForm
            items={data.ms_data.grapple_types}
            onAdd={() => onAddItem('grapple_types')}
            onUpdate={(index, field, value) => onUpdateItem('grapple_types', index, field, value)}
            onRemove={(index) => onRemoveItem('grapple_types', index)}
          />
          <ReceiveTypesForm
            items={data.ms_data.receive_types}
            onAdd={() => onAddItem('receive_types')}
            onUpdate={(index, field, value) => onUpdateItem('receive_types', index, field, value)}
            onRemove={(index) => onRemoveItem('receive_types', index)}
          />
        </div>
      </div>
      <div className="form-section">
        <ShootingTypesForm
          shootingTypes={data.ms_data.shooting_types}
          onAdd={() => onAddItem('shooting_types')}
          onUpdate={(index, field, value) => onUpdateItem('shooting_types', index, field, value)}
          onRemove={(index) => onRemoveItem('shooting_types', index)}
        />
        <WeaponSpecsForm
          items={data.ms_data.weapon_specs}
          onAdd={() => onAddItem('weapon_specs')}
          onUpdate={(index, field, value) => onUpdateItem('weapon_specs', index, field, value)}
          onRemove={(index) => onRemoveItem('weapon_specs', index)}
        />
      </div>
      <div className="form-section">
        <AvoidanceForm avoidance={data.ms_data.avoidance} onUpdate={onUpdate}/>
        <DefenceForm defence={data.ms_data.defence} onUpdate={onUpdate} />
      </div>
      <div className="form-section">
        <BodyPartForm bodyPart={data.ms_data.body_part} onUpdate={onUpdate} />
      </div>
      <div className="form-section">
        <BodySpecsForm bodySpecs={data.ms_data.body_specs} onUpdate={onUpdate} />
      </div>
    </form>
  );
};

export default DataForm;
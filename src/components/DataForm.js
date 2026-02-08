import React from 'react';
import BasicInfo from './BasicInfo';
import SpecForm from './SpecForm';
import ArrayForm from './ArrayForm';
import ShootingTypesForm from './ShootingTypesForm';
import AvoidanceForm from './AvoidanceForm';
import DefenceForm from './DefenceForm';
import BodyPartForm from './BodyPartForm';
import BodySpecsForm from './BodySpecsForm';
import labels from '../labels';
import './DataForm.css';

const DataForm = ({
  data,
  onBasicChange,
  onSpecChange,
  onAddItem,
  onUpdateItem,
  onRemoveItem,
  onUpdate
}) => {
  return (
    <form className="data-form">
      <div className="form-section">
        <div className="form-row">
          <BasicInfo data={data} onChange={onBasicChange} />
          <SpecForm spec={data.ms_data.spec} onChange={onSpecChange} />
        </div>
      </div>
      <div className="form-section">
        <h3>{labels.typesAndSpecs}</h3>
        <div className="form-grid">
          <ArrayForm
            title={labels.thrusters}
            items={data.ms_data.thrusters}
            fields={['name', 'value', 'direction', 'fuel']}
            onAdd={() => onAddItem('thrusters')}
            onUpdate={(index, field, value) => onUpdateItem('thrusters', index, field, value)}
            onRemove={(index) => onRemoveItem('thrusters', index)}
          />
          <ArrayForm
            title={labels.receiveTypes}
            items={data.ms_data.receive_types}
            fields={['nama', 'value']}
            onAdd={() => onAddItem('receive_types')}
            onUpdate={(index, field, value) => onUpdateItem('receive_types', index, field, value)}
            onRemove={(index) => onRemoveItem('receive_types', index)}
          />
          <ArrayForm
            title={labels.grappleTypes}
            items={data.ms_data.grapple_types}
            fields={['name', 'value', 'power', 'destructive_power']}
            onAdd={() => onAddItem('grapple_types')}
            onUpdate={(index, field, value) => onUpdateItem('grapple_types', index, field, value)}
            onRemove={(index) => onRemoveItem('grapple_types', index)}
          />
        </div>
      </div>
      <div className="form-section">
        <h3>{labels.shootingAndWeapons}</h3>
        <ShootingTypesForm
          shootingTypes={data.ms_data.shooting_types}
          onAdd={() => onAddItem('shooting_types')}
          onUpdate={(index, field, value) => onUpdateItem('shooting_types', index, field, value)}
          onRemove={(index) => onRemoveItem('shooting_types', index)}
          className="shooting-weapon-spacing"
        />
        <ArrayForm
          title={labels.weaponSpecs}
          items={data.ms_data.weapon_specs}
          fields={['name', 'armor', 'dcp', 'hp']}
          onAdd={() => onAddItem('weapon_specs')}
          onUpdate={(index, field, value) => onUpdateItem('weapon_specs', index, field, value)}
          onRemove={(index) => onRemoveItem('weapon_specs', index)}
        />
      </div>
      <div className="form-section">
        <AvoidanceForm avoidance={data.ms_data.avoidance} onUpdate={onUpdate} className="avoidance-defence-spacing" />
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
import React from 'react';
import labels from '../../labels';
import './DataViewer.css';
import BasicInfoViewer from './BasicInfoViewer';
import SpecViewer from './SpecViewer';
import ThrustersViewer from './ThrustersViewer';
import ReceiveTypesViewer from './ReceiveTypesViewer';
import GrappleTypesViewer from './GrappleTypesViewer';
import ShootingTypesViewer from './ShootingTypesViewer';
import WeaponSpecsViewer from './WeaponSpecsViewer';
import AvoidanceViewer from './AvoidanceViewer';
import DefenceViewer from './DefenceViewer';
import BodyPartViewer from './BodyPartViewer';
import BodySpecsViewer from './BodySpecsViewer';

const DataViewer = ({ data }) => {
  return (
    <div className="data-viewer">
      <h1>{labels.dataViewer}</h1>
      <BasicInfoViewer data={data} />
      <SpecViewer spec={data.ms_data.spec} />
      <ThrustersViewer items={data.ms_data.thrusters} />
      <ReceiveTypesViewer items={data.ms_data.receive_types} />
      <GrappleTypesViewer items={data.ms_data.grapple_types} />
      <div className="viewer-section">
        <ShootingTypesViewer items={data.ms_data.shooting_types} />
        <WeaponSpecsViewer items={data.ms_data.weapon_specs} />
      </div>
      <div className="viewer-section">
        <AvoidanceViewer avoidance={data.ms_data.avoidance} />
        <DefenceViewer defence={data.ms_data.defence} />
      </div>
      <BodyPartViewer bodyPart={data.ms_data.body_part} />
      <BodySpecsViewer bodySpecs={data.ms_data.body_specs} />
    </div>
  );
};

export default DataViewer;
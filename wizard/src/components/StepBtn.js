import React from 'react';
import './StepBtn.css';

const StepBtn = ({stepName, stepNumber, isCurrent, goToStep}) => (
    <button 
        className={`stepBtn ${isCurrent && 'current'}`}
        onClick={() => goToStep(stepNumber)}
    >
        Step {stepNumber + 1} - {stepName}
    </button>                                        
);

export default StepBtn;
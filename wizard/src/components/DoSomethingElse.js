import React from 'react';

const DoSomethingElse = ({markAsComplete, currentIdx, currentStep}) => (
    <div>
        <h1>{currentStep.name}</h1>
        <p>{currentStep.status}</p>
        <button onClick={() => markAsComplete(currentIdx)}>Mark as complete</button>
    </div>  
);

export default DoSomethingElse;
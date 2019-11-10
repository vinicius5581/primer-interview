import React from 'react';
import StepBtn from './StepBtn';
import './StepsNav.css';

const StepsNav = ({
    steps, 
    currentStepIdx, 
    handlePrevStepBtn, 
    handleNextStepBtn, 
    goToStep
}) => (   
    <nav className='stepsNav'>          
        <button className='previous' onClick={handlePrevStepBtn}>{'<<'}</button>  
        <div className='stepsBtns'>
            {steps.map((step, idx) => {
                return (                
                    <StepBtn 
                        key={step.id}
                        isCurrent={currentStepIdx === idx}
                        stepName={step.name}
                        stepNumber={idx}
                        goToStep={goToStep}                    
                    />
                )
            })} 
        </div>                         
        <button className='next' onClick={handleNextStepBtn}>{'>>'}</button>                             
    </nav>
)

export default StepsNav;
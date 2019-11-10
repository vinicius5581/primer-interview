import React from 'react';
import StepsNav from './StepsNav';
import StepRenderer from './StepRenderer';
import Alert from './Alert';
import './Wizard.css';

class Wizard extends React.Component {
    state = {
        currentStepIdx: 0,
        steps: this.props.steps.map(step => ({status: 'pending', ...step})),
        error: null
    }

    goToStep = stepNumber => {
        const {steps} = this.state;
        if (
                stepNumber >= 0 && 
                stepNumber < steps.length  && 
                (steps[stepNumber].status !== 'pending' || (
                    stepNumber > 0 && 
                    steps[stepNumber - 1].status !== 'pending'
                ))
            ) {
            this.setState({currentStepIdx: stepNumber})
        } else {
            this.setState({error: 'You need to complete this step prior to jump to next one'})
        }
    }

    handleNextStepBtn = () => { 
        this.goToStep(this.state.currentStepIdx + 1)
    }

    handlePrevStepBtn = () => {
        this.goToStep(this.state.currentStepIdx - 1)
    }    

    markAsComplete = stepNumber => {
        this.setState(prevState => ({steps: prevState.steps.map((step,idx) => {
            if (stepNumber === idx) {
                return {...step, status: 'complete'}
            }
            return step
        }),
        error: null
    }))
    }

    clearError = () => {
        this.setState({error: null})
    }

    render() {
        const {steps, currentStepIdx, error} = this.state;
        return (
            <div className='wizard'>
                <header>
                    <StepsNav 
                        steps={steps}
                        handlePrevStepBtn={this.handlePrevStepBtn}
                        handleNextStepBtn={this.handleNextStepBtn}
                        goToStep={this.goToStep}
                        currentStepIdx={currentStepIdx}
                    />
                </header>
                <StepRenderer>
                    {React.cloneElement(this.props.steps[currentStepIdx].component, {
                        markAsComplete: this.markAsComplete,
                        currentStep: steps[currentStepIdx],
                        currentIdx: currentStepIdx
                    })}
                </StepRenderer>
                {error && (<Alert msg={error} clear={this.clearError} />)}
            </div>
        )
    }
}

export default Wizard;
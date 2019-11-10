import React from 'react';

class StepRenderer extends React.Component {
    render() {
        return (            
            <main>
                {this.props.children}
            </main>
        )
    }
}

export default StepRenderer;
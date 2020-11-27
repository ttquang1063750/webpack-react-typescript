import React from 'react';
import Hello from './components/hello/Hello';
import Counter from './components/counter/Counter';

export interface Props {
    name: string;
}

export interface States {
    count: number;
}

class App extends React.Component<Props, States> {
    state = {
        count: 0
    };

    handleClick = (count: number) => {
        this.setState(state => {
            return { count: state.count + count }
        });
    };

    render(): React.ReactElement {
        return (
            <div className={'app'}>
                <Hello name={this.props.name}/>
                <Counter
                    step={10}
                    displayCount={this.state.count}
                    onDecrease={(count) => this.handleClick(count)}
                    onIncrease={(count) => this.handleClick(count)}
                />
                {this.props.children}
            </div>
        )
    }
}

export default App;

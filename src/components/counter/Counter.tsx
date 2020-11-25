import React from 'react';

interface Props {
    step: number;
    displayCount: number;
    onIncrease: (count: number) => void;
    onDecrease: (count: number) => void;
}

const Counter = (props: Props) => {
    return (
        <div className={'counter'}>
            <h3>Counter: {props.displayCount}</h3>
            <button className={'btn btn-x2'} onClick={() => props.onDecrease(-props.step)}>-</button>
            <button className={'btn btn-x2'} onClick={() => props.onIncrease(props.step)}>+</button>
        </div>
    );
};

export default Counter;

import React from 'react';
import App, {Props} from './App';
import {fireEvent, render} from '@testing-library/react';

function renderApp(props: Props) {
    return render(<App {...props}>Loading Screen...</App>);
}
describe('<App />', () => {
    xtest('should created component', async () => {
        const { findByText, container } = renderApp({name: 'Toto'});
        const title = await findByText('Hello: Toto');
        const counter = container.querySelector('.counter');

        expect(title).toBeTruthy();
        expect(counter).toBeTruthy();
    });

    test('should click btn increase', async () => {
        const { container } = renderApp({name: 'Toto'});

        const btnIncrease = container.querySelector('.counter__btn-increase');
        fireEvent.click(btnIncrease);

        const counterTitle = container.querySelector('.counter__title');
        expect(counterTitle.textContent).toBe('Counter: 10');
    });
});

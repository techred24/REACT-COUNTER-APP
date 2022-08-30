import { render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';
import React from 'react';

describe('Pruebas en <CounterApp />', () => {
    test('Debe hacer match con el snapshot', () => {
        const { container } = render( <CounterApp value={0} />);
        expect( container ).toMatchSnapshot();
    });
    test('Debe mostrar el valor inicial de 100', () => {
        const initialValue = 100;
        render( <CounterApp value={initialValue} />);
        expect( screen.getByText(initialValue).innerHTML ).toContain(initialValue.toString());

        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain(initialValue.toString());
    })
});
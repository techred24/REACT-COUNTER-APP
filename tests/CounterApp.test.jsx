import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';
import React from 'react';

describe('Pruebas en <CounterApp />', () => {
    const initialValue = 100;
    test('Debe hacer match con el snapshot', () => {
        const { container } = render( <CounterApp value={0} />);
        expect( container ).toMatchSnapshot();
    });
    test('Debe mostrar el valor inicial de 100', () => {
        render( <CounterApp value={initialValue} />);
        expect( screen.getByText(initialValue).innerHTML ).toContain(initialValue.toString());

        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain(initialValue.toString());
    });
    test('Debe incrementar con el botón +1', () => {
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText(initialValue+1).innerHTML ).toContain((initialValue+1).toString());
    });
    test('Debe decrementar con el botón -1', () => {
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText(initialValue-1).innerHTML ).toContain((initialValue-1).toString());
    });
    test('Debe funcionar el botón reset', () => {
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );

        expect( screen.getByText(initialValue).innerHTML ).toContain( (initialValue).toString() );
        // screen.debug();
    })
});
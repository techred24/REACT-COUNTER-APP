import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";
import React from 'react';

describe('Pruebas en <FirstApp />', () => {
    const title = 'Hi there';

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title={ title } />);
        expect( container ).toMatchSnapshot();
    });
    test('Debe mostrar el mensaje "Flubberson"', () => {
        render( <FirstApp title={ title } /> );
        expect( screen.getByText(title) ).toBeTruthy();
    });
    test('Debe mostrar el titulo en un h1', () => {
        render( <FirstApp title={ title } />);
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
    });
    test('Debe mostrar el subtitulo enviado por props', () => {
        const title = 'Hi, there';
        const subtitle = 'Hi, I am a subtitle';
        render( <FirstApp title={ title } subtitle={ subtitle } /> );
        expect( screen.getAllByText(subtitle).length ).toBe(2);
    });
});
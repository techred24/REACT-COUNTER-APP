import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";
import React from 'react';

describe('Pruebas en <FirstApp />', () => {
    // test('debe hacer match con el snapshot', () => {
    //     const title = 'Hola Mundo';
    //     const { container } = render( <FirstApp customObj={{name:'Flubber'}} title={title}/> );
    //     expect(container).toMatchSnapshot();
    // });

    test('Debe mostrar el título en un h1', () => {
        const title = 'Hola Mundo';
        const { container, getByText, getByTestId } = render( <FirstApp customObj={{name:'Flubber'}} title={title}/> );
        expect( getByText(title) ).toBeTruthy();

        expect( getByTestId('test-title').innerHTML ).toContain(title);
        // const h1 = container.querySelector('h2');
        // expect(h1.innerHTML).toContain(title);
    });

    test('Debe mostrar el subtitulo enviado por props', () => {
        const title = 'Hola Mundo';
        const subtitle = 'subtitulo';
        const { getAllByText } = render( <FirstApp customObj={{name:'Flubber'}} title={title} subtitle={subtitle}/> );
        expect( getAllByText(subtitle).length ).toBe(2);
    });
});
import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objecto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
    }
    const user = getUser();
    // expect( testUser ).toBe( user );
    // expect( testUser ).toStrictEqual( user );
    expect( testUser ).toEqual( user );
    });

    test('getUsuario debe retornar un objecto', () => {
        const name = 'Rafael';

        const user = getUsuarioActivo(name);

        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
    });

});
import { render, screen, fireEvent } from "@testing-library/react"
import { describe, expect, test } from "vitest";
import Form from '../components/Form'
import { vi } from "vitest";

describe('Test formulario mesa 17',( ) => {

    test('Verificar el titulo', () => { 
        render(<Form/>)
        const titulo = screen.getAllByText('Formulario de Inscripción')
        expect(titulo).equals
     })

    test('Verificar que no ingresen valores numéricos',()=>{
        const {getByLabelText} = render(<Form/>)
        const inputNombre = getByLabelText(/Ingrese su Nombre/i)
        const inputApellido = getByLabelText(/Ingrese su Apellido/i)

        fireEvent.change(inputNombre,{target : {value: "Pepito"}})
        fireEvent.change(inputApellido,{target : {value: "Gutierrez"}})

        expect(inputNombre.value).toMatch(/^[a-zA-Z]+$/)
        expect(inputApellido.value).toMatch(/^[a-zA-Z]+$/)

        // expect(inputNombre.value).toBe('Pepito')
        // expect(inputApellido.value).toBe('Gutierrez')

        console.log('Los valores ingresados son solo letras')
    })

    test('Envío con Botón', () => { 
        const handleClick = vi.fn()
        render(<Form handleClick={handleClick}/>)
        const button = screen.getByText('Enviar')
        fireEvent.click(button)
        expect(handleClick).toBeCalledTimes(1)
     })


})
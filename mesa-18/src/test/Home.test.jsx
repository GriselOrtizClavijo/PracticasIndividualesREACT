import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Card from "../components/Card";
import Home from "../pages/Home";
import Details from "../pages/Details"
import { Link } from 'react-router-dom';

describe('Hoteles en pantalla de inicio', () => {
    test('Muestra lista de hoteles', () => { 
        render(<Home/>)
        const listaHoteles =  screen.getByText('Lista de Hoteles', <Card/>)
        expect(listaHoteles).toBeDefined()
    })

    test('Card como botón de envío a detalles', () => {
        render(<Home />)
        const card = screen.getByTestId("card")
        fireEvent.click(card)
        expect(window.location.pathname).toBe('/details/id')
    })
})

describe('Detalles de Hotel en pantalla', () => {
    test('Muestra el hotel seleccionado', () => { 
        render(<Details/>)
        const hotelSeleccionado =  screen.getByTestId("hotelSelected")
        expect(hotelSeleccionado).toBeDefined()
    })

   
})
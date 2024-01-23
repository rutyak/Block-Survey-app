import React from "react";
import { MemoryRouter } from "react-router-dom";
import {render, screen} from '@testing-library/react';
import Form from "./Form";


it('testing video component rendering',()=>{
    render(<MemoryRouter><Form/></MemoryRouter>);
    const testid = screen.getByTestId('form-container')
    expect(testid).toBeInTheDocument();
})
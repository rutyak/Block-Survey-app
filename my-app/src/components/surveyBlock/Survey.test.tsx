import React from "react";
import { MemoryRouter } from "react-router-dom";
import {render, screen} from '@testing-library/react';
import Survey from "./Survey";


it('testing video component rendering',()=>{
    render(<MemoryRouter><Survey/></MemoryRouter>);
    const testid = screen.getByTestId('survey-container')
    expect(testid).toBeInTheDocument();
})
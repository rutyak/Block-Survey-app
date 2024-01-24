import React from "react";
import { MemoryRouter } from "react-router-dom";
import {render, screen} from '@testing-library/react';
import Image from "./Image";


it('testing Image component rendering',()=>{
    render(<MemoryRouter><Image/></MemoryRouter>);
    const testid = screen.getByTestId('image-container')
    expect(testid).toBeInTheDocument();
})
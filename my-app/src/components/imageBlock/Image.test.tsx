import React from "react";
import { MemoryRouter } from "react-router-dom";
import {fireEvent, render, screen} from '@testing-library/react';
import Image from "./Image";
const BaseUrl = 'http://localhost:5000';
import axios from 'axios';
import userEvent from "@testing-library/user-event";
jest.mock('axios');

it('testing Image component rendering',()=>{
    render(<MemoryRouter><Image/></MemoryRouter>);
    const testid = screen.getByTestId('image-container')
    expect(testid).toBeInTheDocument();
})


it('Testing inputs',async()=>{
    userEvent.setup();
    render(<MemoryRouter><Image/></MemoryRouter>);
    const inputBox1 = screen.getByPlaceholderText('Image title');
    const inputBox2= screen.getByPlaceholderText('Description');
    await userEvent.type(inputBox1, 'Nature');
    await userEvent.type(inputBox2, 'nature lover');
    expect(inputBox1).toHaveValue('Nature');
    expect(inputBox2).toHaveValue('nature lover');
})

it('Checking choose image button', async() => {
    const user = userEvent.setup()
    const files = new File(['hello'],'hello.png',{type: 'image/png'});
    render(<MemoryRouter><Image/></MemoryRouter>);
    const input = screen.getByTestId(/image-choose/i) as any;
    await user.upload(input, files);
    expect(input.files[0]).toStrictEqual(files)
});

it('Testing submit button',()=>{
    render(<MemoryRouter><Image/></MemoryRouter>);
    const btn = screen.getByTestId('image-submit');
    fireEvent.click(btn);
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
})
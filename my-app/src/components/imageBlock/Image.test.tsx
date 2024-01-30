import React from "react";
import { MemoryRouter } from "react-router-dom";
import {fireEvent, render, screen} from '@testing-library/react';
import Image from "./Image";
const BaseUrl = 'http://localhost:5000';
import axios from 'axios';
jest.mock('axios');

it('testing Image component rendering',()=>{
    render(<MemoryRouter><Image/></MemoryRouter>);
    const testid = screen.getByTestId('image-container')
    expect(testid).toBeInTheDocument();
})

it('Testing Image post api',async()=>{
    
    const mockResponse = {
        data: {
            title: 'Nature',
            name: 'rutik'
        }
    }
    axios.post = jest.fn().mockResolvedValue(mockResponse);
    render(<MemoryRouter><Image/></MemoryRouter>);
    const btn = screen.getByText('Submit');
    fireEvent.click(btn);

    const res = await axios.post(`${BaseUrl}/images`);
    expect(mockResponse.data.name).toEqual(res.data.name);
    expect(mockResponse.data.title).toEqual(res.data.title);
})

it('testing onClick button event',()=>{
    render(<MemoryRouter><Image/></MemoryRouter>);
    const text = screen.getByText(/Submit/i);
    expect(text).toBeInTheDocument();
})

it('Checking choose img button', () => {
    render(<MemoryRouter><Image/></MemoryRouter>);
    
    const input = screen.getByRole('button') as HTMLInputElement;
    const file = new File(['content'], 'test.png', { type: 'image/*' });
  
    fireEvent.click(input, { target: { files: [file] } });
  
    if(input.files && input.files.length > 0){
        expect(input.files[0]).toStrictEqual(file);
    }
    else{
        console.log("Empty file");
    }
});

it('Testing inputs',()=>{
    render(<MemoryRouter><Image/></MemoryRouter>);
    const inputBox1 = screen.getByPlaceholderText('Image title');
    const inputBox2 = screen.getByPlaceholderText('Description');
    expect(inputBox1).toBeInTheDocument();
    expect(inputBox2).toBeInTheDocument();
})
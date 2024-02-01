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


it('Testing inputs',()=>{
    render(<MemoryRouter><Image/></MemoryRouter>);
    const inputBox1 = screen.getByPlaceholderText('Image title');
    const inputBox2 = screen.getByPlaceholderText('Description');
    expect(inputBox1).toBeInTheDocument();
    expect(inputBox2).toBeInTheDocument();
})

it('Checking choose image button', () => {
    render(<MemoryRouter><Image/></MemoryRouter>);
    const input = screen.getByTestId('image-choose');
    fireEvent.change(input);
    expect(screen.getByText('Image selected')).toBeInTheDocument();

  });

it('Testing submit button',()=>{
    render(<MemoryRouter><Image/></MemoryRouter>);
    const btn = screen.getByTestId('image-submit');
    fireEvent.click(btn);
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
})
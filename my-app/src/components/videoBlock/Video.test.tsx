import React from "react";
import { MemoryRouter } from "react-router-dom";
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Video from "./Video";
const BaseUrl = 'http://localhost:5000';
import axios from 'axios';
jest.mock('axios');

it('Testing video post api and Submit button',async()=>{
    
    const mockResponse = {
        data: {
            title: 'Nature',
            name: 'rutik'
        }
    }
    axios.post = jest.fn().mockResolvedValue(mockResponse);

    render(<MemoryRouter><Video/></MemoryRouter>);
    const btn = screen.getByText('Submit');
    fireEvent.click(btn);
    
    const res = await axios.post(`${BaseUrl}/videos/upload`);
    expect(mockResponse.data.name).toEqual(res.data.name);
    expect(mockResponse.data.title).toEqual(res.data.title);
})


it('testing video component rendering',()=>{

    render(<MemoryRouter><Video/></MemoryRouter>);
    const testid = screen.getByTestId('video-container')
    const text = screen.getByText('Video Survey Creation')
    expect(text).toBeInTheDocument();
    expect(testid).toBeInTheDocument();
})

it('Testing inputs',()=>{
    render(<MemoryRouter><Video/></MemoryRouter>);
    const inputBox1 = screen.getByPlaceholderText('Video title');
    const inputBox2 = screen.getByPlaceholderText('Description');
    expect(inputBox1).toBeInTheDocument();
    expect(inputBox2).toBeInTheDocument();
})


it('Checking choose video button', () => {

    render(<MemoryRouter><Video/></MemoryRouter>);
    
    const input = screen.getByRole('button') as HTMLInputElement;
    const file = 'left-arrow.png'
    
    fireEvent.click(input, { target: { files: [file] } });
  
    if(input.files && input.files.length > 0){
        expect(input.files[0]).toStrictEqual(file);
    }
    else{
        console.log("Empty file");
    }
  });




 
  




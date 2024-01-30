import React from "react";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from '@testing-library/react';
import Form from "./Form";
import axios from "axios";
const BaseUrl = 'http://loaclhost:5000';
jest.mock('axios');

it('testing Form component rendering', () => {
    render(<MemoryRouter><Form /></MemoryRouter>);
    const testid = screen.getByTestId('form-container');
    const text = screen.getByText('Survey Form Creation');
    expect(testid).toBeInTheDocument();
})

it('Teesting Form fetching api', async () => {

    const mockData = {
        data: {
            title: 'NatureLover',
            name: 'rutik'
        }
    }

    axios.post = jest.fn().mockResolvedValue(mockData);
    const res = await axios.post(`${BaseUrl}/forms`);
    expect(mockData.data.name).toEqual(res.data.name);
    expect(mockData.data.title).toEqual(res.data.title);
})

// it('testing onClick button event',()=>{
//     render(<MemoryRouter><Form/></MemoryRouter>);
//     const title = screen.getByTitle('Add-que-img');
//     expect(title).toBeInTheDocument();
// })

it('Testing Form inputs', () => {
    render(<MemoryRouter><Form /></MemoryRouter>);
    const inputBox1 = screen.getByPlaceholderText(/Add title/i);
    const inputBox2 = screen.getByPlaceholderText(/Add Description/i);
    expect(inputBox1).toBeInTheDocument();
    expect(inputBox2).toBeInTheDocument();
})

describe('Question Input testing', () => {
    it('Testing single Question', () => {
        render(<MemoryRouter><Form /></MemoryRouter>);

        const addButton = screen.getByText('Add question');
        fireEvent.click(addButton);

        const inputBox = screen.getByPlaceholderText('Enter your question?');
        expect(inputBox).toBeInTheDocument();
    })

    it('Testing Multiple Question', () => {
        render(<MemoryRouter><Form/></MemoryRouter>);

        const addMultiButton = screen.getByText('Add multi choice question');
        fireEvent.click(addMultiButton);

        const inputBox = screen.getByPlaceholderText('Enter your question?');
        expect(inputBox).toBeInTheDocument();
    })

    it('Testing checkbox Question', () => {
        render(<MemoryRouter><Form/></MemoryRouter>);

        const addCheckButton = screen.getByText('Add checkbox question');
        fireEvent.click(addCheckButton);

        const inputBox = screen.getByPlaceholderText('Enter your question?');
        expect(inputBox).toBeInTheDocument();
        
    }) 
})
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from '@testing-library/react';
import Form from "./Form";
import axios from "axios";
import userEvent from "@testing-library/user-event";
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


it('Testing Form inputs', async() => {
    userEvent.setup();
    render(<MemoryRouter><Form /></MemoryRouter>);
    const inputBox1 = screen.getByPlaceholderText(/Add title/i);
    const inputBox2 = screen.getByPlaceholderText(/Add Description/i);
    await userEvent.type(inputBox1, 'Nature')
    await userEvent.type(inputBox2, 'Nature lover')
    expect(inputBox1).toHaveValue('Nature');
    expect(inputBox2).toHaveValue('Nature lover');
})

describe('Question Input testing', () => {
    it('Testing single Question', async() => {
        userEvent.setup();
        render(<MemoryRouter><Form /></MemoryRouter>);
        const addButton = screen.getByTestId('Add question');
        await userEvent.click(addButton);
        const input = screen.getByPlaceholderText('Enter your question?');
        await userEvent.type(input, 'I love travelling')
        expect(input).toHaveValue('I love travelling');
    })

    it('Testing Multiple Question', async() => {
        userEvent.setup();
        render(<MemoryRouter><Form/></MemoryRouter>);
        const addMultiButton = screen.getByTestId('Add multi choice question');
        await userEvent.click(addMultiButton);
        const input = screen.getByPlaceholderText('Enter your question?');
        await userEvent.type(input, 'Music')
        expect(input).toHaveValue('Music');
    })

    it('Testing checkbox Question',async() => {
        render(<MemoryRouter><Form/></MemoryRouter>);
        const addCheckButton = screen.getByTestId('Add checkbox question');
        await userEvent.click(addCheckButton);
        const input = screen.getByPlaceholderText('Enter your question?');
        await userEvent.type(input, 'Nature')
        expect(input).toHaveValue('Nature');
    }) 
})

it('Submit but onClick test ',async()=>{
    render(<MemoryRouter><Form/></MemoryRouter>)
    const btn = screen.getByTestId('form-submit');
    await userEvent.click(btn);
    expect(await screen.findByText('Please wait...')).toBeInTheDocument();
})
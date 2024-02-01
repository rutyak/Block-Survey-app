import { act, fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import Questions from "./Questions";
import { ChangeEvent } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
jest.mock('axios');
const BaseUrl = 'http://localhost:5000';

it("Checking Que Component", () => {
    render(<MemoryRouter>
        <Questions questions={[]} heading={{
            title: "",
            desc: ""
        }} handleQuestions={function (e: ChangeEvent<HTMLInputElement>, index: number, optionIndex?: number | undefined): void {
        }} />
    </MemoryRouter>);
    const testId = screen.getByTestId('questions');
    expect(testId).toBeInTheDocument()
})

it('Teesting Form Posting api', async () => {

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

it('Testing Form submit button', async () => {

    render(<MemoryRouter>
        <Questions questions={[]} heading={{
            title: "",
            desc: ""
        }} handleQuestions={function (e: ChangeEvent<HTMLInputElement>, index: number, optionIndex?: number | undefined): void {
        }} />
    </MemoryRouter>);

    const mockData = {
        data: {
            status: 200,
            title: 'NatureLover',
            name: 'rutik'
        }
    }
    axios.post = jest.fn().mockResolvedValue(mockData);

    const btn = screen.getByText('Submit');
    fireEvent.click(btn);
    const res = await axios.post(`${BaseUrl}/forms`);
    expect(200).toEqual(res.data.status);

})

it('Testing submit button',()=>{
    render(<MemoryRouter><Questions questions={[]} heading={{
        title: "",
        desc: ""
    }} handleQuestions={function (e: ChangeEvent<HTMLInputElement>, index: number, optionIndex?: number | undefined): void {
    } }/></MemoryRouter>);
    const btn = screen.getByTestId('form-submit');
    fireEvent.click(btn);
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
})
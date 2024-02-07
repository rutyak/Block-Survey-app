import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Analysis from './Analysis';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import ImageRes from './ResBlock/ImageRes';
import FormRes from './ResBlock/FormRes';
import VideoRes from './ResBlock/VideoRes';


it("Checking Analysis component ", () => {
    render(<MemoryRouter><Analysis /></MemoryRouter>);
    const testId = screen.getByTestId('analysis-container');
    expect(testId).toBeInTheDocument();
})

it("Ckecking Input box onchange", async () => {
    userEvent.setup()
    render(<MemoryRouter><Analysis /></MemoryRouter>);
    const input = screen.getByPlaceholderText(/Search block survey.../i);
    await userEvent.type(input, 'nature survey');
    expect(input).toHaveValue('nature survey');
})



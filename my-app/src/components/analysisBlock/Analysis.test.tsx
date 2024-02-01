import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Analysis from './Analysis';


it("Checking Analysis component ", () => {
    render(<MemoryRouter><Analysis /></MemoryRouter>);
    const testId = screen.getByTestId('analysis-container');
    expect(testId).toBeInTheDocument();
})

it("Ckecking Input box present or not", () => {
    render(<MemoryRouter><Analysis /></MemoryRouter>);
    const inputbox = screen.getByRole('textbox');
    const placeholder = screen.getByPlaceholderText('Search block survey...');
    expect(inputbox).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
    expect(inputbox).toHaveAttribute('name', 'name')
})

it("OnChange event testing",()=>{
    render(<MemoryRouter><Analysis/></MemoryRouter>);
    const inputbox = screen.getByRole('textbox');
    fireEvent.change(inputbox,{target:{value:'a'}});
    expect(inputbox).toHaveValue('a')
})



// it('Testing video blocks and handles click', () => {

//     render(<MemoryRouter><Analysis/></MemoryRouter>);
//     const videoBlocks = screen.getAllByTestId(/video-\d+/);
//     expect(videoBlocks.length).toBeGreaterThan(0);
// });

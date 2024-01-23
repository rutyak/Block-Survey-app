import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Analysis from './Analysis';

it("Checking Analysis component ",()=>{
    render(<MemoryRouter><Analysis/></MemoryRouter>);
    const testId = screen.getByTestId('analysis-container');
    expect(testId).toBeInTheDocument();
})
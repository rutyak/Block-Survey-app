import { MemoryRouter } from "react-router-dom";
import { render,screen } from "@testing-library/react";
import Video from "./components/videoBlock/Video";
import Survey from "./components/surveyBlock/Survey";
import Image from "./components/imageBlock/Image";
import Analysis from "./components/analysisBlock/Analysis";
import FormRes from "./components/analysisBlock/ResBlock/FormRes";
import ImageRes from "./components/analysisBlock/ResBlock/ImageRes";
import VideoRes from "./components/analysisBlock/ResBlock/VideoRes";
import Form from "./components/formBlock/Form";


it("Testing Video Component Rendering",()=>{
    render(<MemoryRouter><Video/></MemoryRouter>);
    const testId = screen.getByTestId('video-container');
    expect(testId).toBeInTheDocument();
})

it("Testing Image Component Rendering",()=>{
    render(<MemoryRouter><Image/></MemoryRouter>);
    const testId = screen.getByTestId('image-container');
    expect(testId).toBeInTheDocument();
})

it("Testing Survey Component Rendering",()=>{
    render(<MemoryRouter><Survey/></MemoryRouter>);
    const testId = screen.getByTestId('survey-container');
    expect(testId).toBeInTheDocument();
})

it("Testing Form Component Rendering",()=>{
    render(<MemoryRouter><Form/></MemoryRouter>);
    const testId = screen.getByTestId('form-container');
    expect(testId).toBeInTheDocument();
})

it("Testing Analysis Component Rendering",()=>{
    render(<MemoryRouter><Analysis/></MemoryRouter>);
    const testId = screen.getByTestId('analysis-container');
    expect(testId).toBeInTheDocument();
})

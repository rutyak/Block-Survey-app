import React from "react";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Survey from "./Survey";
const BaseUrl = 'http://localhost:5000';
import axios from 'axios';
import userEvent from "@testing-library/user-event";
jest.mock('axios');


it('testing survey component rendering', () => {
    render(<MemoryRouter><Survey /></MemoryRouter>);
    const testid = screen.getByTestId('survey-container')
    expect(testid).toBeInTheDocument();
    expect(testid).toHaveClass('survey-container');
    expect(screen.getByText('Forms')).toBeInTheDocument();
    expect(screen.getByText('Videos')).toBeInTheDocument();
    expect(screen.getByText('Images')).toBeInTheDocument();
})

describe('IMAGE survey testing', () => {

    it('testing image survey title ', async () => {

        const imageMockData = {
            data: [{
                desc: "segpo5ktp",
                imageFile: ['http://res.cloudinary.com/daguvaxyh/image/upload/v1706851289/Images/x2arlufys6umsgrnf2wp.png',
                    'http://res.cloudinary.com/daguvaxyh/image/upload/v1706851289/Images/robmt9oktftaxq50rtrm.webp',
                    'http://res.cloudinary.com/daguvaxyh/image/upload/v1706851289/Images/tcyjzlwnnvjrrpi1tlto.png',
                    'http://res.cloudinary.com/daguvaxyh/image/upload/v1706851290/Images/twpgtmabajv7ztdheezi.png'
                ],
                stage: "published",
                title: "IMag3 natuer",
                type: "Image",
                _id: "65bc7bbc204919eb7b8d4107"
            }]
        }
    
        axios.get = jest.fn().mockResolvedValue({ data: imageMockData });

        render(<MemoryRouter initialEntries={['/']}>
            <Survey/>
        </MemoryRouter>)

        await waitFor(() => {
            const imgTitle = screen.getAllByTestId('img-survey');
            expect(screen.getByTestId('iBlock')).toBeInTheDocument();
            expect(imgTitle[0]).toBeInTheDocument();
        })
    })
})


describe('Form survey testing', () => {
    it('testing form survey title ', async () => {
        const formMockData = {
            data: [{
                _id: '65bc7b61204919eb7b8d4103',
                type: "Survey",
                title: "Malum hamko tumhe",
                desc: "Kis bat ka intte jar hai",
                questions: [
                  {
                    type: "",
                    question: "",
                    options: []
                  },
                  {
                    type: "single",
                    question: "Ka ho na pyarr hai",
                    options: []
                  },
                  {
                    type: "radio",
                    question: "Kaha na ptya hai",
                    options: ["gertg", "xrdget"]
                  },
                  {
                    type: "checkbox",
                    question: "sddfetgf",
                    options: ["dgdt", "sgrthr"]
                  },
                  {
                    type: "single",
                    question: "sdfgt",
                    options: []
                  }
                ],
                stage: "published",
                status: "Answered"
            }]
        }
    
        axios.get = jest.fn().mockResolvedValue({ data: formMockData });
        render(<MemoryRouter initialEntries={['/']}>
            <Survey />
        </MemoryRouter>)

        await waitFor(() => {
            const Title = screen.getAllByText(/Malum hamko tumhe/i);
            expect(screen.getByTestId('fBlock')).toBeInTheDocument();
            expect(Title[0]).toBeInTheDocument();
        })
    })
})

describe('Video survey testing', () => {
    it('testing video survey title ', async () => {
        const videoMockData = {
            data: [{
                desc: "Ne video",
                stage: "published",
                title: "Nature Lover",
                type: "Video",
                videoType: "mp4",
                videoUrl: "http://res.cloudinary.com/daguvaxyh/video/upload/v1706851244/Videos/ke9gqizgh01vfv7ymqyj.mp4",
                _id: "65bc7b8f204919eb7b8d4105"
              }]
        }
    
        axios.get = jest.fn().mockResolvedValue({ data: videoMockData });
        render(<MemoryRouter initialEntries={['/']}>
            <Survey />
        </MemoryRouter>)

        await waitFor(() => {
            const Title = screen.getAllByText(/Nature Lover/i);
            expect(screen.getByTestId('vBlock')).toBeInTheDocument();
            expect(Title[0]).toBeInTheDocument();
        })
    })
})



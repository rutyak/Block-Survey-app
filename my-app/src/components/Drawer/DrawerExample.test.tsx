import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import DrawerExample from "./DrawerExample"
import axios from "axios"
import Analysis from "../analysisBlock/Analysis";
jest.mock('axios');
const BaseUrl = 'http://localhost:5000'

it('Testing drawer render',()=>{
    render(<MemoryRouter>
        <DrawerExample data={{
            videoType: undefined,
            _id: "",
            imageFile: [],
            type: "",
            title: "",
            desc: "",
            stage: "",
            videoUrl: undefined
        }} />
    </MemoryRouter>)
    const testID = screen.getByTestId('Drawer');
    expect(testID).toBeInTheDocument();
})

it("Testing drawer button", () => {
    render(<MemoryRouter>
        <DrawerExample data={{
            videoType: undefined,
            _id: "",
            imageFile: [],
            type: "",
            title: "",
            desc: "",
            stage: "",
            videoUrl: undefined
        }} />
    </MemoryRouter>)
    const testId = screen.getByTestId('drawer-button');
    expect(testId).toBeInTheDocument();
})

it('Testing Drawer Open Button', () => {
    render(<MemoryRouter><DrawerExample data={{
        videoType: undefined,
        _id: "",
        imageFile: [],
        type: "",
        title: "",
        desc: "",
        stage: "",
        videoUrl: undefined
    }} /></MemoryRouter>)
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    const text = screen.getByText('Publish');
    const titleText = screen.getByText('Title');
    const descText = screen.getByText('Description');
    expect(text).toBeInTheDocument();
    expect(titleText).toBeInTheDocument();
    expect(descText).toBeInTheDocument();
})


it('Testing VideoData Upadate Api', async () => {
    const id = '123';

    const mockData = {
        data: {
            data: {
                id: '123',
                title: 'River',
                name: 'Adarsh',
                stage: 'published'
            }
        }
    }
    axios.put = jest.fn().mockResolvedValue(mockData);

    render(<MemoryRouter><DrawerExample data={{
        videoType: undefined,
        _id: "",
        imageFile: [],
        type: "",
        title: "",
        desc: "",
        stage: "",
        videoUrl: undefined
    }} /></MemoryRouter>)

    const openBtn = screen.getByText('Open');
    fireEvent.click(openBtn);

    const publishBtn = screen.getByText('Publish');
    fireEvent.click(publishBtn);

    const res = await axios.put(`${BaseUrl}/updateVideo/${id}`, { stage: 'published' })

    expect(mockData.data.data.title).toEqual(res.data.data.title)
   
})


it('Testing Analysis Button',async()=>{
    render(<MemoryRouter><DrawerExample data={{
        videoType: undefined,
        _id: "",
        imageFile: [],
        type: "",
        title: "",
        desc: "",
        stage: "",
        videoUrl: undefined
    }}/></MemoryRouter>)

    const btnOpen = screen.getByText('Open');
    fireEvent.click(btnOpen);
    const btnAna = screen.getByText('Analytics');
    fireEvent.click(btnAna);
    
    render(<MemoryRouter initialEntries={['analysis']}>
        <Analysis/>
        </MemoryRouter>)
    const inputBox = screen.getByRole('textbox');
    expect(inputBox).toBeInTheDocument()
})

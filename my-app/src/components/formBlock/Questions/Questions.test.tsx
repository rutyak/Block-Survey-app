import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Questions from "./Questions";
import Form from "../Form";
import { ChangeEvent } from "react";


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

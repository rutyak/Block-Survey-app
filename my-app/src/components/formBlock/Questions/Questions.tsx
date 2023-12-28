import { useDispatch } from 'react-redux';
import { formSurvey } from '../../../Slice/formSlice';
import { imageSurvey } from '../../../Slice/imageSlice';
import './Questions.css'
import { toast } from 'react-toastify';

type entryTypes = {
    que: any,
    setQue: any,
    heading: any
};

const Questions = (({ que, setQue, heading}: entryTypes) => {
    
    const dispatch = useDispatch();
    let count = que.addQue.length + que.addSingle.length + que.addMulti.length;
    console.log(count);

    function handleFormSubmit(){
        try {
        console.log("HandleSubmit Click");
        const formInfo = [
           {titleDesc: heading},
           {questions: que}
        ]
        dispatch(formSurvey(formInfo))
        toast.success("Survey uploaded successfully!!")
        } catch (error) {
            toast.error("Uploding fail")
        }
    }

    return (
        <div className="questions-add">
            {que.addQue.length > 0 &&
                que.addQue.map((singleQueue: any, index: number) => {
                    return (
                        <div key={index}>
                            <input
                                type="text"
                                className="input question surveyQue"
                                placeholder="Enter your question?"
                                value={singleQueue || ""} //read time update
                                onChange={(e) => {
                                    const _queue = [...que.addQue]; //taking copy of addQue array
                                    _queue[index] = e.target.value; // update the value of input
                                    setQue({ ...que, addQue: [..._queue] }); // adding into que
                                }}
                            />
                        </div>
                    );
                })}
            {que.addSingle.length > 0 &&
                que.addSingle.map((radio: any, index: number) => {
                    return (
                        <div key={index}>
                            <input
                                type="text"
                                className="input mcq surveyQue"
                                placeholder="Enter your mcq question?"
                                value={radio || ""}
                                onChange={(e) => {
                                    const mcq = [...que.addSingle];
                                    mcq[index] = e.target.value;
                                    setQue({ ...que, addSingle: [...mcq] });
                                }
                                }
                            />
                            <div>
                                <div className="input-radio-check">
                                    <input type="radio" className="radio-check-width" />
                                    <input
                                        type="text"
                                        className="radio-check-opacity"
                                        placeholder="Option 1"
                                    />
                                </div>
                                <div className="input-radio-check">
                                    <input type="radio" className="radio-check-width" />
                                    <input
                                        type="text"
                                        className="radio-check-opacity"
                                        placeholder="Option 2"
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            {que.addMulti.length > 0 &&
                que.addMulti.map((check: any, index: number) => {
                    return (
                        <div key={index}>
                            <input
                                type="text"
                                className="input checkQue surveyQue"
                                placeholder="Enter your checkbox question?"
                                value={check || ""}
                                onChange={(e) => {
                                    const _check = [...que.addMulti]
                                    _check[index] = e.target.value
                                    setQue({ ...que, addMulti: [..._check] })
                                }}
                            />

                            <div>
                                <div className="input-radio-check">
                                    <input type="checkbox" className="radio-check-width" />
                                    <input
                                        type="text"
                                        className="radio-check-opacity"
                                        placeholder="Option 1"
                                    />
                                </div>
                                <div className="input-radio-check">
                                    <input type="checkbox" className="radio-check-width" />
                                    <input
                                        type="text"
                                        className="radio-check-opacity"
                                        placeholder="Option 2"
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            {count === 5 && 
                <div className="submit-btn">
                    <button onClick={handleFormSubmit}>
                        Submit
                    </button>
                </div>
            }

        </div>
    )
})

export default Questions

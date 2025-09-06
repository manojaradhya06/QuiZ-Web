import React, { useState, useRef } from 'react'
import './Quiz.css'

const Quiz = ({ questions, setCategory }) => {
    let [index, setIndex] = useState(0)
    let [lock, setLock] = useState(false)
    const [score, setScore] = useState(0)
    const [result, setResult] = useState(false)

    let option1 = useRef(null)
    let option2 = useRef(null)
    let option3 = useRef(null)
    let option4 = useRef(null)

    const question = questions[index]

    let option_array = [option1, option2, option3, option4]

    const checkAns = (e, ans) => {
        if (!lock) {
            if (question.answer == ans) {
                e.target.classList.add("correct")
                setScore(s => s + 1)
                setLock(true)
            }
            else {
                e.target.classList.add("wrong")
                setLock(true)
                option_array[question.answer - 1].current.classList.add("correct")
            }
        }
    }

    const next = () => {
        if (lock == true) {
            if (index === questions.length - 1) {
                setResult(true)
                return 0;
            }
            setIndex(i => i + 1);
            setLock(false)
            option_array.map((option) => {
                option.current.classList.remove("wrong")
                option.current.classList.remove("correct")
                // return null;
            })
        }
    }

    const reset = () => {
        setIndex(0);
        setScore(0);
        setLock(false);
        setResult(false)
    }

    return (
        < div className='container' >
            <h1>QuiZ</h1>
            <hr />
            {result ? <></> : <>
                <h2>{index + 1}. {question.question}</h2>
                <ul>
                    <li ref={option1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
                    <li ref={option2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
                    <li ref={option3} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
                    <li ref={option4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
                </ul>
                <button onClick={next}>Next</button>
                <div className='index'>{index + 1} of {questions.length} questions</div>
            </>}
            {result ? <><h2>You Scored {score} out of {questions.length}</h2>
                <button onClick={reset}>Reset</button>
                <button onClick={() => setCategory(null)}>Back to Categories</button>
            </> : <></>}


        </div >
    )
}

export default Quiz

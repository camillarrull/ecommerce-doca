import React from "react"
import "./questionContainer.modules.css"

//para ir recorriendo el objeto de answers: un estado que empiece con un [] y q ene l futuro va a ser un array de objetos y con useState con el for in, ir recorriendo answers

const QuestionContainer = ({ question, answers, correctAnswer, increaseIndex}) => {
    const handleAnswer = () => {
        increaseIndex()
    }
    return (
        <div>
            <div id="questionDiv">
                <h3 id='question'>{question}</h3>
                <div id="answersDiv">
                <p>opcion 1</p>
                <p>opcion 2</p>
                <p>opcion 3</p>
                </div>
            </div>
            <div id="nextQuestionDiv"><button id='next' onClick={()=>handleAnswer()}>SIGUIENTE PREGUNTA</button></div>
            
        </div>
    )
}

export default QuestionContainer
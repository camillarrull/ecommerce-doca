import React from "react"
import "./duringGame.modules.css"
import QuestionContainer from "../../components/QuestionContainer/QuestionContainer"

export const DuringGame = ({ randomQuestions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0)
    const increaseIndex = () => {
        setCurrentQuestionIndex(currentQuestionIndex+1)
    }
    return (
        <div id="contenedorPreguntas">
            {
                randomQuestions.map((element, index) => {
                    return (
                        (currentQuestionIndex === index) &&
                        <QuestionContainer
                            question={element.question}
                            answers={element.answers}
                            correctAnswer={element.correctAnswer}
                            increaseIndex={increaseIndex}
                        />
                   ) 
                })
            }
        </div>
    )
}
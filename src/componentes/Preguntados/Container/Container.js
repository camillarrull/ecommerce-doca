import React from "react"
import "./container.modules.css";
import questionsData from "../data.json"

//INFORMACION QUE VAMOS A ALMACENAR ACA: 
//1) un estado que cuando inicia la partida se traiga 10 preguntas random no repetidas
//2) un estado que vaya almacenando el resultado
//3) un estado que almacene la pregunta actual
//4) una pantalla que contenga un componente que le de inicio a la partida (INICIAR PARTIDA)
//5) idem cuando finaliza
//6) un ultimo estado que almacene en que momento del juego estamos 


const Container = () => {
    const [randomQuestions, setRandomQuestions] = React.useState([])
    React.useEffect(() => {
        let preguntasSeleccionadasAux = [] //variable auxiliar
        let indexSeleccionados = [] 
        while (preguntasSeleccionadasAux.length < 3) {
            let questionDataLength = questionsData.length
            let randomIndex = Math.floor(Math.random() * questionDataLength)
            let selectedQuestion = questionsData[randomIndex]
            if (indexSeleccionados.indexOf(randomIndex) === -1) {
                preguntasSeleccionadasAux.push(selectedQuestion)
                indexSeleccionados.push(randomIndex)
            }
            
        }
        setRandomQuestions(preguntasSeleccionadasAux)
    }, [])
    return (
        <div className='background'>
            <p>holus</p>
            {
                randomQuestions.map(question => {
                    return (
                        <div>
                            <p>{question.question}</p>
                        </div>
                        
                    )
                }
                )
            }
        </div>
    )
}

export default Container


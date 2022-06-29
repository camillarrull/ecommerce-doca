import React from "react"
import "./postGame.modules.css"

export const PostGame = ({ resultadoRta, changeGameStatus }) => {
    const changeStatus = () => {
        changeGameStatus('preGame')
    }
    return (
        <div>
                <p>FELICITACIONES!</p>
                <h3>OBTUVISTE {resultadoRta} RESPUESTAS CORRECTAS</h3>
                <button class='button' onClick={() =>{changeStatus()}}>VOLVER A JUGAR</button>
        </div>
    )
}

//TAREA: QUE MUESTRE CUANTAS RESPONDI  O SEA TRAERME RESULTADORTA QUE ESTA EN EL CONTAINER Y VOLVER A JUGAR : VOLVER A CAMBIAR EL ESTADO A PREGAME
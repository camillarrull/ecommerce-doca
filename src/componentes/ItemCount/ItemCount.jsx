import { React, useState } from "react";
import "./style.css";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState([initial]);
    console.log(count);

    onAdd = 1;
    const sumarCount = () => {
        if (count <= stock) {
            setCount(count + onAdd);
        } else alert("no hay mas");
    };
    const restarCount = () => {
        setCount(count - onAdd);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                background: "white",
                border: "solid 1px black",
                margin: "5px",
            }}
        >
            <button
                onClick={sumarCount}
                style={{
                    border: "none",
                    width: "30%",
                    background: "white",
                    color: "red",
                    fontSize: "25px",
                }}
            >
                +
            </button>
            <p
                style={{
                    display: "flex",
                    textAlign: "center",
                    margin: "0px",
                }}
            >
                {count}
            </p>
            <button
                onClick={restarCount}
                style={{
                    border: "none",
                    width: "30%",
                    background: "white",
                    color: "green",
                    fontSize: "25px",
                }}
            >
                -
            </button>
        </div>
    );
};
export default ItemCount;

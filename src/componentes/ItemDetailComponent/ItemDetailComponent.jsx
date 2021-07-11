import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";
function ItemDetailComponent({ item }) {
    return (
        /*   <div>
            <div className="contenedorFoto">
              
            </div>
            <div>
                
            </div>
            <div>
               
            </div>
            <div style={{ width: "40%" }}>
                <p>Precio : ${item.price}</p>
                <p>Stock :{item.stock} unidades</p>
                <p>
                    Descripcion:
                    {item.description}
                </p>
            </div>
        </div>
       
         */

        /*   <Carousel fade style={{ width: "50%", display: "flex" }}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={"/images/" + item.image}
                    alt="aros"
                />
                <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ display: "flex" }}>
                <img
                    className="d-flex w-auto"
                    alt="aros"
                    src={"/images/" + item.image2}
                />

                <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    alt="aros"
                    src={"/images/" + item.image3}
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel> */
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <h1
                style={{
                    color: "black",
                    alignSelf: "center",
                    marginTop: "5%",
                    color: "#a69f91",
                    fontStyle: "italic",
                }}
            >
                {item.name}
            </h1>
            <div
                style={{
                    width: "55rem",
                    height: "32rem",
                    backgroundColor: "#efe7d6",
                    border: "solid 1px",
                    marginBottom: "5%",
                    marginTop: "5%",
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <div style={{ width: "100%", height: "100%", display: "flex" }}>
                    <div style={{ width: "50%", height: "100%" }}>
                        <img
                            src={"/images/" + item.image}
                            alt="aro"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>

                    <div
                        style={{
                            width: "50%",
                            height: "100%",
                            padding: "10%",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <h5>{item.description}</h5>
                        <p style={{ alignSelf: "center" }}>
                            Stock : {item.stock}
                        </p>
                        <h3 style={{ alignSelf: "center" }}> $ {item.price}</h3>
                        <Button
                            style={{
                                backgroundColor: "#a69f91",
                                borderColor: "#a69f91",
                                marginTop: "30%",
                            }}
                        >
                            Comprar
                        </Button>
                    </div>
                </div>
                {/*  <div style={{ width: "100%", height: "100%", display: "flex" }}>
                    <div>
                        <img src={"/images/" + item.image} alt="aro" />
                    </div>
                    <div>
                        <img src={"/images/" + item.image2} alt="aro" />
                    </div>
                    <div>
                        <img src={"/images/" + item.image3} alt="aro" />
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default ItemDetailComponent;

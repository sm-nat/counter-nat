
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


import "../styles/index.css";


function SecondCounter() {
   
    const [counter, setCounter] = useState(0);

    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);

        
        return () => clearInterval(intervalId);
    }, []);

    
    const cuatro = Math.floor(counter / 1000) % 10;
    const tres = Math.floor(counter / 100) % 10;
    const dos = Math.floor(counter / 10) % 10;
    const uno = Math.floor(counter / 1) % 10;

    
    return (
        <div className="container">
            <div className="reloj">
                <i className="fas fa-clock"></i>
            </div>
            <div className="cuatro">{cuatro}</div>
            <div className="tres">{tres}</div>
            <div className="dos">{dos}</div>
            <div className="uno">{uno}</div>
        </div>
    );
};

SecondCounter.propTypes = {
    cuatro: PropTypes.number,
    tres: PropTypes.number,
    dos: PropTypes.number,
    uno: PropTypes.number,
};

const Footer = () => {
    return (
        <div className="footer">
            <p>Made with ❤️ by <a href="https://github.com/sm-nat" target="_blank" rel="noopener noreferrer">Natalia Silva Medina</a></p>
        </div>
    );
};


ReactDOM.render(
    <div>
        <SecondCounter />
        <Footer />
    </div>,
    document.querySelector("#app")
);




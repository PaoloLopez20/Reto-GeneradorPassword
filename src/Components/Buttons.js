import React from 'react';
import styled from 'styled-components';

//En este archivo de botones le damos el diseño de iconos con la guia de boostrap
export const BotonDisminuir = ({click}) => {
	return (
		<Boton onClick={click}>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
				<path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"/>
			</svg>
		</Boton>
	);
}

export const BotonIncrementar = ({click}) => {
	return (
		<Boton onClick={click}>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
				<path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
			</svg>
		</Boton>
	);
}

export const BotonCheck = ({seleccionado, click}) => {
	//Condicional para verificar si el boton esta seleccionado
	if(seleccionado){
		return (
			//Y si esta seleccionado muestras el codigo
			<Boton onClick={click}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
					<path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
				</svg>
			</Boton>
		);
	//Y si no esta seleccionado el boton
	} else {
		return (
			//mostramos el codigo con el boton no seleccionado
			<BotonNoSeleccionado onClick={click}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
					<path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
				</svg>
			</BotonNoSeleccionado>
		);
	}
}

export const BotonGenerar = () => {
	return (
		<BtnGenerar type="submit">
			Generar
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
				<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
			</svg>
		</BtnGenerar>
	);
}

const Boton = styled.button`
	width: 100%;
	background: whithe;
	color: black;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	vertical-align: top;
	font-size: 18px;
	text-align: center;
	border: 1px	solid black;
	border-radius: 30px;
	cursor: random;
	transition: all .3s ease;

	&:hover {
		background: #F9D85B;
		box-shadow: 0 0 20px rgba(0,0,0,5);

	}
`;

const BtnGenerar = styled(Boton)`
	svg {
		margin-left: 10px;		//margen a la izquierda
	}
`;

const BotonNoSeleccionado = styled(Boton)`
	background: #FFC8C8;

	&:hover {
		background: #C8FEFF;
		box-shadow: 4 7 50px rgba(0,0,0,5);
	}
`;

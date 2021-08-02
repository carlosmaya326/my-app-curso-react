import React, {useState} from 'react';

const Formulario = () => {
	const [datos, setDatos] = useState({
		nombre: "",
		apellido: ""
	});

	const handleInputChange = (event) => {
		setDatos({
			...datos,
			[event.target.name]: event.target.value
		});
	}

	const enviarDatos = (event) => {
		event.preventDefault();
		console.log(datos.nombre + ' ' + datos.apellido)
	}

	return (
		<div>
			<h2>Formulario</h2>
			<form className="row" onSubmit={enviarDatos}>
				<div className="col-md-3">
					<input
						placeholder = "Ingrese su Nombre"
						className = "form-control"
						type = "text"
						name = "nombre"
						onChange = {handleInputChange}
					/>
				</div>
				<div className="col-md-3">
					<input
						placeholder = "Ingrese su Apellido"
						className = "form-control"
						type = "text"
						name = "apellido"
						onChange = {handleInputChange}
					/>
				</div>
				<div className="col-md-3">
					<button className = "btn btn-primary" type = "submit">Enviar</button>
				</div>
			</form>
			<h3>{datos.nombre} {datos.apellido}</h3>
		</div>
	);
}

export default Formulario;
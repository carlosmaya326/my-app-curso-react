import React from 'react';
import { useForm } from 'react-hook-form';

const FormHook = () => {
	const { register, errors, handleSubmit } = useForm();

	const onSubmit = (data, e) => {
		console.log(data);
		e.target.reset();
	}

	return (
		<div>
			<h2>Form Hook</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					name = "titulo"
					className = "form-control my-2"
					{
						...register("titulo", {
							required: { 
								value: true, 
								message: 'Titulo obligatorio' 
							}
						})
					}
				/>
				<span className="text-danger text-small d-block mb-2">
					{ errors?.titulo?.message }
				</span>
				<button className="btn btn-primary">
					Enviar
				</button>
			</form>
		</div>
	);
}

export default FormHook;
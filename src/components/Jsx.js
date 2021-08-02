import React from 'react';

const Jsx = () => {
	const temperatura = 21;
	return (
		<div>
			<h2>Frío o Calor</h2>
			<h4>
				{
					temperatura > 20 ? "Calor" : "Frío"
				}
			</h4>
		</div>
	);
}

export default Jsx;
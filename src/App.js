import { useState } from "react";
import dados from "./datasource";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {
	
	const [times, setTimes] = useState(dados.times)
	const [colaboradores, setColaboradores] = useState(dados.colaboradores)

  	function deletarColaborador() {
    	console.log('Deletando colaborador...')
  	}

	function mudarCorTime(cor, nome) {
		setTimes(times.map(time => {
			if (time.nome === nome) {
				time.cor = cor				
			}
			return time
		}))
	}

  	return (
		<div>
			<Banner />
			<Formulario 
				times={times.map(time => time.nome)} 
				aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
			<section className="times">
				<h1>Minha organização</h1>
				{times.map((time, indice) => 
				<Time 
					key={indice} 
					time={time} 
					colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
					mudarCor={mudarCorTime}
					aoDeletar={deletarColaborador}
				/>
				)}
			</section>
			<Rodape />
		</div>
	)
}

export default App;

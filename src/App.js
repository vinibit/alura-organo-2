import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import dados from "./datasource"
import Banner from "./componentes/Banner"
import Formulario from "./componentes/Formulario"
import Rodape from "./componentes/Rodape"
import Time from "./componentes/Time"

function App() {
	
	const [times, setTimes] = useState(dados.times)
	const [colaboradores, setColaboradores] = useState(dados.colaboradores)

  	function deletarColaborador(id) {
    	setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  	}

	function mudarCorTime(cor, id) {
		setTimes(times.map(time => {
			if (time.id === id) {
				time.cor = cor				
			}
			return time
		}))
	}

	function cadastrarTime(novoTime) {
		setTimes([ ...times, { ...novoTime, id: uuidv4() }])
	}

  	return (
		<div>
			<Banner />
			<Formulario 
				times={times} 
				aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
				aoCadastrarTime={cadastrarTime} />
			<section className="times">
				<h1>Minha organização</h1>
				{times.map((time, indice) => 
				<Time 
					key={indice} 
					time={time} 
					colaboradores={colaboradores.filter(colaborador => colaborador.time === time.id)}
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

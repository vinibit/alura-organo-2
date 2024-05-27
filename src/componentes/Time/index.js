import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba'

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    return (
        colaboradores.length > 0 && 
            <section className='time' 
                style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
                <div className='input-cor'>
                    <label>Cor do time: </label>
                    <input type='color'                         
                        value={time.cor} 
                        onChange={event => mudarCor(event.target.value, time.id)} />
                </div>
                <h3 style={{ color: time.corSecundaria, borderColor: time.cor }}>{time.nome}</h3>
                <div className='colaboradores'>
                    {
                        colaboradores.map((colaborador, indice) => 
                            <Colaborador 
                                key={indice} 
                                colaborador={colaborador} 
                                corDeFundo={time.cor}
                                aoDeletar={aoDeletar}
                            />
                    )}
                </div>
            </section>
    )
}

export default Time
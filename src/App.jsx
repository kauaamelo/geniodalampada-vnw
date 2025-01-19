import { useState } from 'react'
import './app.scss'
import lampadaMagica from '../src/assets/image/lampadaMagica.png'
import genioLampada from '../src/assets/image/genioLampada.png'
import pedidoFeito from '../src/assets/image/pedidoFeito.png'
import acabouPedido from '../src/assets/image/acabouPedido.png'
import luzBrilhante from '../src/assets/image/luzBrilhante.png'

export default function App(){
  const [imagem, setImagem] = useState(lampadaMagica)
  //Guardei no useState a imagem lampadaMagica
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);

  const magica = () => {
    if (imagem === lampadaMagica) {
      setImagem(genioLampada);
    } else if  (imagem === genioLampada) {
      setImagem(pedidoFeito);
    } else if (imagem === pedidoFeito) {
      setImagem(luzBrilhante)
    } else {
      setImagem(acabouPedido);
      setPedidoFinalizado(true);
  };

}

  return (
    <main>
      <p>"Liberte a magia da programação com a lâmpada de Aladim."</p>
      <img src={imagem} alt="Imagem da sequência mágica"/>
      {!pedidoFinalizado && (
        <button onClick={magica}>Clique aqui!</button>
      )}
      {pedidoFinalizado && <p>Os três pedidos foram realizados. 🎉</p>}
    </main>
  )
}

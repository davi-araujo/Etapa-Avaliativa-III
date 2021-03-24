import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Check from './check.jpg';
import { Link } from 'react-router-dom';

export const CompraFinalizada = () =>{
  return(
    <div className="App">
      <header className="App-header">
      <h1>
        BOM CHEIRO PERFUMES
      </h1>
        <div className='divisoria'>
          <img src={Check} class="check"/><br/>
          <h2>Obrigado por comprar na Bom Cheiro Perfumes</h2>
          <p>
            Seu pedido foi efetuado e, assim que as informações do cartão<br/>
            forem confirmadas, será entregue no destino marcado em até 10<br/>
            dias úteis. Obrigado e volte sempre.
          </p>
          <br/><br/>
          <Link className="divisoria1" to='/'> Continuar Comprando </Link>
        </div>
      </header>
    </div>
  )
}
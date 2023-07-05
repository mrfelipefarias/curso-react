import reactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'


const tag = <strong>Olá, mundo</strong> 

reactDOM.render(
<div>
 <Primeiro></Primeiro>
 <ComParametro titulo="segundo componente" subtitulo="supimpa"/>
</div>,
 document.getElementById('root')
)


 

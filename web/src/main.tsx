import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// O ReactDOM chama a função createRoot que tem como parâmetro a div com id #root no index.html e faz com que renderize (exiba na tela) nessa div o componente App (aplicação)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Se eu abro o componente App no App.tsx, consigo visualizar o que tem nesse componente.*/}
    <App />
  </React.StrictMode>,
)

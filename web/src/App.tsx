// Importando o CSS
import './styles/global.css'
// Importando o componente Habit da pasta 'components'
import { Habit } from "./components/Habit"

// Essa função é a aplicação
function App() {
  //Dentro da aplicação, retornamos um componente com o nome Habit
  return (
    <div>
    <Habit completed={3} />
    <Habit completed={30} />
    <Habit completed={300} />
    <Habit completed={3000} />
    </div>

  )
}

export default App

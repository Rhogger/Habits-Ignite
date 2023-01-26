// Criando a prop completed do tipo HabitProps 
type HabitProps = {
  completed: number
}

// Essa função é um componente
export function Habit(props: HabitProps){
  return (
    // O Tailwind é usado nas classes html e a sintaxe não é tão diferente das propriedades css. Por exemplo:
    // bg-zinc-900 = background-color: #18181B
    // w-10 e h-10 = width: 40px; height: 40px
    // Todas as medidas são multiplicadas por 4px ou 0.25rem
    // text-white = color: white
    // rounded = border-radius: 0.25rem (4px)
    // m-2 = margin: 8px
    // flex = display: flex
    // items-center = align-items: center
    // justify-center = justify-content: center
    <div className="bg-zinc-900 w-10 h-10 text-white rounded m-2 flex items-center justify-center">
      {props.completed}
    </div>
    // No React utilizamos className em vez de class.
  )
}
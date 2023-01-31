// Importando a logo do projeto (svg)
import logoImage from '../assets/logo.svg'

// Importando QUALQUER ícone da lib Phosphor Icon
import { Plus } from 'phosphor-react'

export function Header() {
	return (
		<div className="w-full max-w-3xl mx-auto flex items-center justify-between">
			<img src={logoImage} alt="" />

			<button
				type="button"
				className="border border-violet-500 rounded-lg  font-semibold px-6 py-4 flex items-center gap-3 hover:border-violet-300">
				<Plus size={20} className="text-violet-500" />
				Novo Hábito
			</button>
		</div>
	)
}

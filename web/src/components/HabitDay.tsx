// Libs
import clsx from 'clsx'

// Components
import { ProgressBar } from './ProgressBar'
import * as Popover from '@radix-ui/react-popover'

import dayjs from 'dayjs'
import { HabitsList } from './HabitsList'
import { useState } from 'react'

interface HabitDayProps {
	date: Date
	defaultCompleted?: number
	defaultAmount?: number
}

export function HabitDay({ defaultCompleted = 0, defaultAmount = 0, date }: HabitDayProps) {
	const [completed, setCompleted] = useState(defaultCompleted)
	const [amount, setAmount] = useState(defaultAmount)

	const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0

	const dayAndMonth = dayjs(date).format('DD/MM')
	const dayOfWeek = dayjs(date).format('dddd')

	function handleCompletedChanged(completed: number) {
		setCompleted(completed)
	}

	return (
		<Popover.Root>
			<Popover.Trigger
				className={clsx(
					'w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-violet-900 focus:ring-offset-2 focus:ring-offset-background',
					{
						'bg-zinc-900 border-zinc-800': completedPercentage === 0,
						'bg-violet-900 border-violet-700': completedPercentage > 0 && completedPercentage < 20,
						'bg-violet-800 border-violet-600':
							completedPercentage >= 20 && completedPercentage < 40,
						'bg-violet-700 border-violet-500':
							completedPercentage >= 40 && completedPercentage < 60,
						'bg-violet-600 border-violet-400':
							completedPercentage >= 60 && completedPercentage < 80,
						'bg-violet-500 border-violet-300': completedPercentage >= 80,
					}
				)}
			/>
			<Popover.Portal>
				<Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 border border-violet-500 flex flex-col focus:outline-none focus:ring-2 focus:ring-violet-900 focus:ring-offset-2 focus:ring-offset-background">
					<span className="font-semibold text-zinc-400">{dayOfWeek}</span>
					<span className="mt-1 font-extrabold leading-tight text-3xl">{dayAndMonth}</span>

					<ProgressBar progress={completedPercentage} />

					<HabitsList
						date={date}
						setAmount={setAmount}
						onCompletedChanged={handleCompletedChanged}
					/>

					<Popover.Arrow
						height={8}
						width={16}
						className="fill-zinc-900"
					/>
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	)
}

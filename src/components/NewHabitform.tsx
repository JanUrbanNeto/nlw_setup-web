import { Check } from "phosphor-react";

export function NewHabitForm() {
	return (
		<form className="w-full flex flex-col mt-6">
			<label htmlFor="title" className="font-semibold leading-tight">
				Qual o hábito será criado?
			</label>

			<input
				type="text"
				id="title"
				className="rounded-lg mt-3 p-4 bg-zinc-700 font-bold text-white placeholder:text-zinc-400"
				placeholder="ex.: Fazer exercícios, dormir bem, etc."
				autoFocus
			/>

			<label htmlFor="" className="font-semibold leading-tight mt-5">
				Qual frequência do hábito?
			</label>

			<button
				type="submit"
				className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500"
			>
				<Check size={20} weight="bold"/>
				Confirmar
			</button>
		</form>
	);
}

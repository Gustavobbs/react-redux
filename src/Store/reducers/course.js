const INITIAL_STATE = {
	activeModule: {},
	activeLesson: {},
	modules: [
		{
			id:1,
			title: "iniciando com React",
			lessons: [
				{ id: 1, title: "Primeira aula" },
				{ id: 2, title: "Segunda aula" },
			],
		},
		{
			id:2,
			title: "iniciando com Redux",
			lessons: [
				{ id: 3, title: "Terceira aula" },
				{ id: 4, title: "Quarta aula" },
			],
		}
	]
}

export default function course(state =  INITIAL_STATE, action) {
	console.log(action)
	switch (action.type) {
		case "TOGGLE_LESSON":
			return {
				...state, 
				activeModule: action.lesson, 
				activeLesson: action.module
			};
		default:
			return state;
	}
}
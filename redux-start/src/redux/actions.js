// action type 은 대문자 & _ 사용
export const ADD_TODO = "ADD_TODO";

export function addTodo(todo) {
	return {
		type: ADD_TODO,
		todo,
	};
}

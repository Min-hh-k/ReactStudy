import { ADD_TODO } from "./actions";
//state
// ['코딩','밥']

// 아래 방법 사용시 previousState = initialState 인자 적용)
const initialState = [];

export function todoApp(previousState = initialState, action) {
	// 초기값 설정해주는 부분
	// if (previousState === undefined) {
	//   return []
	// }

	if (action.type === ADD_TODO) {
		return [...previousState, action.todo];
	}

	previousState.push("");
	return previousState;
}

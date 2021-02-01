import short from 'short-uuid'

export interface ITodoListItem {
  id: string;
  task: string;
  completed: boolean;
}

export type TodoListItemState = ITodoListItem[]

interface AddAction {
  type: "add";
  task: string;
}
interface EditAction {
  type: "edit";
  id: string;
  task: string;
}
interface DeleteAction {
  type: "delete";
  id: string;
}
interface CompleteAction {
  type: "complete";
  id: string;
}

export type TodoListAction =
    AddAction
  | EditAction
  | DeleteAction
  | CompleteAction;

export function todoReducer(state: TodoListItemState, action: TodoListAction): TodoListItemState {
  switch(action.type) {
    case "add":
      return [...state, { id: short.uuid(),  task: action.task, completed: false }]
    case "complete":
      return state.map((todo) => todo.id === action.id ? { ...todo, completed: true } : todo)
    case "delete":
      return state.filter((todo) => todo.id !== action.id);
    case "edit":
      return state.map((todo) => todo.id === action.id ? { ...todo, task: action.task } : todo)
    default:
      return state;
  }
}

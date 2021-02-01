import React, {
  FC, useReducer, useMemo,
  createContext,
  Dispatch,
} from "react";
import { todoReducer, TodoListItemState, TodoListAction } from './todoReducer'

const initialState: TodoListItemState = []
export const TodoContext = createContext<{
  state: TodoListItemState;
  dispatch: Dispatch<TodoListAction>;
}>({
  state: initialState,
  dispatch: () => null
});


const TodoProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(() => ({ state, dispatch }), [
    state,
    dispatch,
  ]);

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider

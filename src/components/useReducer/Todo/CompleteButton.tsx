import React, { ReactElement, useContext } from 'react'
import Button from '@material-ui/core/Button';
import { TodoContext } from './TodoProvider'

interface Props {
  id: string,
  completed: boolean
}

export default function CompleteButton({ id, completed }: Props): ReactElement | null {
  const { dispatch } = useContext(TodoContext);

  return !completed ? (
    <Button 
      variant="contained" 
      color="primary" 
      onClick={() => dispatch({ type: "complete", id })}
    >
      Complete
    </Button>
  ) : null
}

import React, { ReactElement, useContext } from 'react'
import Button from '@material-ui/core/Button';
import { TodoContext } from './TodoProvider'

interface Props {
  id: string
}

export default function DeleteButton({ id }: Props): ReactElement {
  const { dispatch } = useContext(TodoContext);

  return (
    <Button 
      variant="contained" 
      color="primary" 
      onClick={() => dispatch({ type: "delete", id })}
    >
      Delete
    </Button>
  )
}

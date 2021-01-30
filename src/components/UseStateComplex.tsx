import React, { useState, ReactElement } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

interface UserI {
  name: string,
  email: string
}

const defaultValues = {
  name: '',
  email: ''
};

// https://stackoverflow.com/questions/60647976/using-textfield-component-from-material-ui-with-react-hook-form-shows-warnin
export default function UseStateComplex(): ReactElement {
  const { reset, control, handleSubmit, errors } = useForm<UserI>({ defaultValues });
  const [user, setUserInfo] = useState<UserI[] | []>([])

  const submitHandler = handleSubmit(({ name, email }) => {
    setUserInfo(user => [...user, { name, email }]);
    reset();
  });

  // ALT VERSION OF THE CONTROLLER
  {/* <Controller as={<input />} name="name" control={control} /> */}

  return (
    <div className="container">
      <h3 style={{ marginTop: '5rem' }}>TS useState Array var example</h3>
      <div style={{ marginTop: '5rem' }} className="column">
        <div className="column">
          <form onSubmit={submitHandler}>
            <label>First Name</label>
            <Controller
              as={<TextField />}
              name="name"
              label="First Name"
              control={control}
            />
            <label>First Name</label>
            <Controller
              as={<TextField />}
              name="email"
              label="Email"
              control={control}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
import React, { ReactElement, useState } from 'react'

interface UserI {
  name: string,
  email: string
}

export default function UseStateComplex(): ReactElement {
  const [user, setUserInfo] = useState<UserI[] | []>([])

  return (
    <div className="container">
      <h3 style={{ marginTop: '5rem' }}>TS useState Array var</h3>
      <div style={{ marginTop: '5rem' }} className="row">
        <div className="column">
          <div><h3>React Hook Form + MUI</h3></div>
          <div className="row">
          </div>
        </div>
      </div>
    </div>
  )
}

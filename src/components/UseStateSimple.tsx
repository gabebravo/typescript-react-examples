import { ReactElement, useState } from 'react'

interface Props {
  startCount: number
}

export default function UseStateSimple({ startCount }: Props): ReactElement {
  const [count, setCount] = useState(startCount)

  return (
    <div className="container">
      <h3 style={{ marginTop: '5rem' }}>TS useEffect Single Var</h3>
      <div style={{ marginTop: '5rem' }} className="row">
        <div className="column">
          <div><h3>{`Count is: ${count}`}</h3></div>
          <div className="row">
            <div style={{ marginRight: 10 }}><button onClick={() => setCount(count => count + 1)}>Inc</button></div>
            <div style={{ marginLeft: 10 }}><button onClick={() => setCount(count => count - 1)}>Dec</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

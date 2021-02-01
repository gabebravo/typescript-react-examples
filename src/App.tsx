import { useState, useEffect, lazy, Suspense, ReactElement } from 'react'
import { BrowserRouter as RouterWrapper, Switch, Route } from 'react-router-dom';

const Header = lazy(() => import('./components/Header'));
const Home = lazy(() => import('./components/Home'));
const UseStateSimple = lazy(() => import( './components/UseStateSimple'));
const UseStateComplex = lazy(() => import( './components/UseStateComplex'));
const UseReducerTodo = lazy(() => import( './components/useReducer/Todo/TodoList'));
const UseContextComp = lazy(() => import( './components/UseContextComp'));
const NoMatch = () => <>'There is nothing to see here'</>;

const links = [
  { text: 'UseState Simple', url: '/use-state-simple' },
  { text: 'UseState Complex', url: '/use-state-complex' },
  { text: 'UseReducer Todo', url: '/use-reducer-todo' },
  { text: 'UseContext Simple', url: '/use-context' },
]

export default function App(): ReactElement {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let timeout = setTimeout(() => setShow(true), 100)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <RouterWrapper>
      <Suspense fallback={show ? <Header /> : <p></p>}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home links={links} />
          </Route>
          <Route exact path="/use-state-simple">
            <UseStateSimple startCount={3} />
          </Route>
          <Route exact path="/use-state-complex">
            <UseStateComplex />
          </Route>
          <Route path="/use-reducer-todo">
            <UseReducerTodo />
          </Route>
          <Route path="/use-context">
            <UseContextComp />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Suspense>
    </RouterWrapper>
  )
}

import { useState, useEffect, lazy, Suspense, ReactElement } from 'react'
import { BrowserRouter as RouterWrapper, Switch, Route } from 'react-router-dom';

const Header = lazy(() => import('./components/Header'));
const Home = lazy(() => import('./components/Home'));
const UseStateSimple = lazy(() => import( './components/useState/Counter'));
const UseStateComplex = lazy(() => import( './components/useState/PersonForm'));
const UseReducerTodo = lazy(() => import( './components/useReducer/Todo/TodoList'));
const UseReducerDadJokes = lazy(() => import( './components/useReducer/DadJoke/DadJoke'));
const NoMatch = () => <>'There is nothing to see here'</>;

const links = [
  { text: 'UseState Counter', url: '/use-state-simple' },
  { text: 'UseState Form', url: '/use-state-complex' },
  { text: 'UseContext/UseReducer Todo', url: '/use-reducer-todo' },
  { text: 'UseReducer DadJokes API', url: '/use-reducer-dad-jokes' },
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
          <Route path="/use-reducer-dad-jokes">
            <UseReducerDadJokes />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Suspense>
    </RouterWrapper>
  )
}

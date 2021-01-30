import { lazy, Suspense, ReactElement } from 'react'
import { BrowserRouter as RouterWrapper, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const UseStateSimple = lazy(() => import( './components/UseStateSimple'));
const UseStateComplex = lazy(() => import( './components/UseStateComplex'));
const UseContextComp = lazy(() => import( './components/UseContextComp'));
const UseReducerComp = lazy(() => import( './components/UseReducerComp'));
const NoMatch = () => <>'There is nothing to see here'</>;

const links = [
  { text: 'UseState Simple Example', url: '/use-state-simple' },
  { text: 'UseState Complex Example', url: '/use-state-complex' },
  { text: 'UseContext Example', url: '/use-context' },
  { text: 'UseReducer Example', url: '/use-reducer' }
]

export default function routes(): ReactElement {
  return (
    <RouterWrapper>
      <Suspense fallback={<p>Loading...</p>}>
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
          <Route path="/use-context">
            <UseContextComp />
          </Route>
          <Route path="/use-reducer">
            <UseReducerComp />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Suspense>
    </RouterWrapper>
  )
}

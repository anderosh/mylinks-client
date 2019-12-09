import React from "react"
import { Provider } from "react-redux"
import store from "./store.js"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Header from "./components/Header/Header.js"
import Login from "./components/Login/Login.js"
import Main from "./components/Main/Main.js"

const App = () => (
  <Provider store={store}>
    <Router history={Router}>
      <Header />
      <Route path="/Login" component={Login} />
      <Route path="/Main" component={Main} />
    </Router>
  </Provider>
)

export default App

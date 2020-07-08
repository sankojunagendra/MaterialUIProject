import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './ui/Header'
import theme from './ui/Theme'

function App() {
  return (
      <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>}/>
            <Route exact path="/services" component={() => <div>Services</div>}/>
            <Route exact path="/electrical" component={() => <div>Electrical Services</div>}/>
            <Route exact path="/solar" component={() => <div>Solar Services</div>}/>
            <Route exact path="/other" component={() => <div>Other Services</div>}/>
            <Route exact path="/about" component={() => <div>About</div>}/>
            <Route exact path="/contact" component={() => <div>Contact</div>}/>
            <Route exact path="/login" component={() => <div>Login</div>}/>
            <Route exact path="/payment" component={() => <div>PayOnline</div>}/>
            <Route exact path="/estimate" component={() => <div>Estimate</div>}/>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
      </>
  );
}

export default App;

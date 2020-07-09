import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './ui/Header'
import Footer from './ui/Footer'
import theme from './ui/Theme'

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0)

  return (
      <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header 
            value={value} 
            setValue={setValue} 
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}/>
          <Switch>
            <Route exact path="/" component={() => <div style={{ height: "900px"}}>Home</div>}/>
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
          <Footer 
            value={value} 
            setValue={setValue} 
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}/>
        </BrowserRouter>
      </ThemeProvider>
      </>
  );
}

export default App;

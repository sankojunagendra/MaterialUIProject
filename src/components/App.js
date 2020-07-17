import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './ui/Header'
import Footer from './ui/Footer'
import theme from './ui/Theme'
// importing Pages
import LandingPage from './LandingPage';
import ServicesPage from './ServicesPage';
import AboutUs from './AboutUs';
import ElectricalPage from '../components/Services/ElectricalPage'

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
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/services" component={ServicesPage}/>
            <Route exact path="/electrical" component={ElectricalPage}/>
            <Route exact path="/solar" component={() => <div>Solar Services</div>}/>
            <Route exact path="/other" component={() => <div>Other Services</div>}/>
            <Route exact path="/about" component={AboutUs}/>
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

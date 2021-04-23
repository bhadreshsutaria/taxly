import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from '../src/Component/Home/Index'
import AboutUs from '../src/Component/AboutUs/Index'
import FAQ from './Component/FAQ/Index'
import HowItWorks from './Component/HowItWorks/Index'
import Insights from './Component/Insights/Index'
import MobileApp from './Component/MobileApp/Index'
import API from './Component/API/Index'
import Charity from './Component/Charity/Index'
import TaxAccount from './Component/TaxAccount/Index'
import Community from './Component/Community/Index'
import TaxDictionary from './Component/TaxDictionary/Index'
import Careers from './Component/Careers/Index'
import Privacy from './Component/Privacy/Index'
import TermsOfService from './Component/TermsOfService/Index'
import ContactUs from './Component/ContactUs/Index'
import TaxExtension from './Component/TaxExtension/Index';
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/faq" component={FAQ}/>
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/how-it-works" component={HowItWorks} />
          <Route exact path="/insights" component={Insights} />
          <Route exact path="/app" component={MobileApp} />
          <Route exact path="/api" component={API} />
          <Route exact path="/social-impact" component={Charity} />
          <Route exact path="/tax-accountants" component={TaxAccount} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/tax-dictionary" component={TaxDictionary} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/terms-of-service" component={TermsOfService} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/tax-extension" component={TaxExtension} />
        </Switch>
      </Router>
  );
}

export default App;

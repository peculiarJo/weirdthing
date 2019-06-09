import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import Dashboard from './Components/dashboard/Dashboard'
import ProjectDetails from './Components/projects/ProjectDetails'
import CreateProject from './Components/projects/CreateProject'
import About from './Components/layout/About'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route path='/signin' component={SignIn}></Route>
          <Route path='/signup' component={SignUp}></Route>
          <Route path='/project/:id' component={ProjectDetails}></Route>
          <Route path='/create' component={CreateProject}></Route>
          <Route path='/about' component={About}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

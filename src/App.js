import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound'
import Services from './Components/Services/Services';
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import Login from './Components/Login/Login';
import AuthProvider from './context/AuthProvider';
import Register from './Components/Register/Register';
import ServiceDetail from './Components/Service/ServiceDetail';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SuccessAppointment from './Components/Appointment/SuccessAppointment';
import Appoinment from './Components/Appointment/Appoinment';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/service/:serviceId'>
              <ServiceDetail></ServiceDetail>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/getappointment'>
              <Appoinment></Appoinment>
            </PrivateRoute>
            <PrivateRoute path='/success-apointment'>
              <SuccessAppointment></SuccessAppointment>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

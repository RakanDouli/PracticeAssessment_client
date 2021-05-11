import { Route, Switch } from "react-router";
import DoctorSchedule from "./pages/DoctorSchedule";
import Home from "./pages/Home";
import PatientDatabase from "./pages/PatientDatabase";
import PatientSignup from "./pages/PatientSignup";
import "./style/App.scss";
import Nav from "./components/Nav";
import PatientDetails from "./pages/PatientDetails";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/PatientDatabase/:id" component={PatientDetails} />
        <Route exact path="/PatientDatabase" component={PatientDatabase} />
        <Route exact path="/patientsignup" component={PatientSignup} />
        <Route exact path="/doctorschedule" component={DoctorSchedule} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;

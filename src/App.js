import "./App.scss";
import Routes from "./Router/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function App() {
  return <Routes />;
}

AOS.init({
  duration:700
});

export default App;

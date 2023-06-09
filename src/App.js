import { Route, Routes } from "react-router-dom";
import "./App.css";
import banner from "./assets/banner.jpg";
import NavigationBar from "./components/NavigationBar";
import TermsAndConditionsComponent from "./components/TermsAndConditionsComponent";
import CashGamesComponent from "./components/CashGamesComponent";
import SpringSeriesComponent from "./components/SpringSeriesComponent";
import OtherDealsComponent from "./components/OtherDealsComponent";
import FinalStageComponent from "./components/FinalStageComponent";
import SignInComponent from "./components/SignInComponent";
import SlotsComponent from "./components/SlotsComponent";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <SignInComponent />
      <img className="banner" src={banner} alt="banner" />
      <SlotsComponent />
      <div className="main-content-container">
        <div>
          <h2>მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი</h2>
          <p>მოხვდი პოკერის ფესტივალზე მალტაში</p>
        </div>
        <div>
          <NavigationBar />
          <div className="routed-component-container">
            <Routes>
              <Route path="/CashGames" element={<CashGamesComponent />} />
              <Route path="/SpringSeries" element={<SpringSeriesComponent />} />
              <Route path="/FinalStage" element={<FinalStageComponent />} />
              <Route path="*" element={<CashGamesComponent />} />
            </Routes>
          </div>
        </div>
        <TermsAndConditionsComponent />
        <OtherDealsComponent />
      </div>
    </div>
  );
}

export default App;

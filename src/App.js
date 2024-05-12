import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/MyNavbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hassan from './Components/Hassan';
import MiniProjects from './Components/MiniProjects'
import Counter from './Components/MiniProjectsList/Counter';
import Parag from './Components/MiniProjectsList/ParaToggle';
import Random from './Components/MiniProjectsList/RandomNumGen';
import Interest from './Components/MiniProjectsList/InterestCalc';
import PollingSystem from './Components/MiniProjectsList/PollingSystem';
import Clock from './Components/MiniProjectsList/Clock';
import SelectCheckbox from './Components/MiniProjectsList/SelectCheckbox';
import Timer from './Components/MiniProjectsList/Timer';
import CharacterCounter from './Components/MiniProjectsList/CharacterCounter';
import RatingComp from './Components/MiniProjectsList/RatingComp';
import HoverCounter from './Components/MiniProjectsList/HoverCounter';
import TipCalc from './Components/MiniProjectsList/TipCalc';
import DistanceConverter from './Components/MiniProjectsList/DistanceConverter';
import ColorPalletGenerator from './Components/MiniProjectsList/ColorPalletGenerator';
import CurrencyConverter from './Components/MiniProjectsList/CurrencyConverter';
import FaqComponent from './Components/MiniProjectsList/FaqComponent';
import LoanCalculator from './Components/MiniProjectsList/LoanCalc';
import Pagination from './Components/MiniProjectsList/Pagination';
import MultiplicationTableGenerator from './Components/MiniProjectsList/MultiplicationTableGenerator';
import CounterLocalStorage from './Components/MiniProjectsList/CounterLocalStorage';
import ClickMe from './Components/MiniProjectsList/ClickMe';
import DaysUntilElement from './Components/MiniProjectsList/DaysUntilElement';
import RaffleDraw from './Components/MiniProjectsList/RaffleDraw';
// import ValidateSignUpForm from 'Components/MiniProjects/ValidateSignUpForm';


function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />


        <Routes>

          <Route path='/' element={<Hassan />}></Route>

          <Route path='/hassan' element={<Hassan />}></Route>

          <Route path='/miniprojects' element={<MiniProjects />}>
            <Route path='clickme' element={<ClickMe />} />
            <Route path='paratoggle' element={<Parag />} />
            <Route path='counter' element={<Counter />} />
            <Route path='random' element={<Random />} />
            <Route path='interestcalc' element={<Interest />} />
            <Route path='pollingsystem' element={<PollingSystem />} />
            <Route path='clock' element={<Clock />} />
            <Route path='selectcheckboxes' element={<SelectCheckbox />} />
            <Route path='timer' element={<Timer />} />
            <Route path='charactercounter' element={<CharacterCounter />} />
            <Route path='ratingcomponent' element={<RatingComp />} />
            <Route path='hovercomponent' element={<HoverCounter />} />
            <Route path='tipcalculator' element={<TipCalc />} />
            <Route path='distancecalculator' element={<DistanceConverter />} />
            <Route path='colorpalletgenerator' element={<ColorPalletGenerator />} />
            <Route path='currencyconverter' element={<CurrencyConverter />} />
            <Route path='faqcomponent' element={<FaqComponent />} />
            <Route path='loancalculator' element={<LoanCalculator />} />
            <Route path='pagination' element={<Pagination />} />
            <Route path='multiplicationtablegenerator' element={<MultiplicationTableGenerator />} />
            <Route path='localstoragesync' element={<CounterLocalStorage />} />
            {/* <Route path='validatesignupform' element={<ValidateSignUpForm />} /> */}
            <Route path='daysuntilelement' element={<DaysUntilElement />} />
            <Route path='raffledraw' element={<RaffleDraw />} />

          </Route>


        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;

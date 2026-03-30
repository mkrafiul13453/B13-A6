import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import NumberRating from './components/NumberRating/NumberRating'
import Step3 from './components/Step3/Step3'
import PricingCard from './components/PricingCard/PricingCard'
import WorkFlow from './components/WorkFlow/WorkFlow'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <NumberRating></NumberRating>
    <Step3></Step3>
    <PricingCard></PricingCard>
    <WorkFlow></WorkFlow>
    <Footer></Footer>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App

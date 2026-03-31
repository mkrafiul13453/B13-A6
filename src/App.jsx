import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import NumberRating from './components/NumberRating/NumberRating'
import Step3 from './components/Step3/Step3'
import PricingCard from './components/PricingCard/PricingCard'
import WorkFlow from './components/WorkFlow/WorkFlow'
import Footer from './components/Footer/Footer'
import ProductCard from './components/ProductCard/ProductCard'



const promiseData = fetch("data.json").then(res => res.json());
function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <NumberRating></NumberRating>


    {/* Pricing heading */}
    <div className='text-center mt-10 '>
        <h1 className='text-4xl font-bold'>Premium Digital Tools</h1>
        <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
    </div>


      {/* Two tabs here */}
      <div className="tabs tabs-box justify-center mt-14">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 bg-transparent text-2xl font-semibold " aria-label="Products" defaultChecked />
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 bg-transparent text-2xl font-semibold" aria-label="Cart (0)"  />
      </div>

      <ProductCard promiseData={promiseData}></ProductCard>


    <Step3></Step3>
    <PricingCard ></PricingCard>
    <WorkFlow></WorkFlow>
    <Footer></Footer>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App

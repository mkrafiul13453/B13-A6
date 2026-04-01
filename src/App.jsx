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
import { useState } from 'react'
import Cart from './components/ProductCard/Cart'



const promiseData = fetch("data.json").then(res => res.json());
function App() {

const [activeTab,setActiveTab]=useState("products");
const [carts,setCarts]=useState([]);
  return (
    <>
    <Navbar carts={carts}></Navbar>
    <Banner></Banner>
    <NumberRating></NumberRating>

    {/* THis is the heading of product card section. */}
    <div className='text-center mt-10 '>
        <h1 className='text-4xl font-bold'>Premium Digital Tools</h1>
        <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
    </div>

      {/* This is the tab section. */}
      <div className="tabs tabs-box justify-center mt-14">
        <input onClick={()=>setActiveTab("products")} type="radio" name="my_tabs_1" className="tab rounded-full w-40 bg-transparent text-2xl font-semibold " aria-label="Products" defaultChecked />
        <input onClick={()=>setActiveTab("carts")} type="radio" name="my_tabs_1" className="tab rounded-full w-40 bg-transparent text-2xl font-semibold" aria-label={`Cart ${carts.length}`}  />
      </div>
       

      
      {activeTab == "products" && <ProductCard promiseData={promiseData} carts={carts} setCarts={setCarts}></ProductCard>}
      {activeTab == "carts" && <Cart carts={carts} setCarts={setCarts}></Cart>}


    <Step3></Step3>
    <PricingCard ></PricingCard>
    <WorkFlow></WorkFlow>
    <Footer></Footer>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App

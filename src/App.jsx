import './App.css'
import {Button, Navbar} from "@nextui-org/react";
import NavberArea from './Component/Header';
import Herro from './Component/Herro';
import Vision from './Component/Vision';
import Offfer from './Component/Offfer';
import David from './Component/David';
import PerfectCard from './Component/PerfectCard';
import FeedbackSection from './Component/FeedbackSection';
import Faq from './Component/Faq';
import Navber2 from './Component/Navber';
// import  Navbar from "./Component/Navber"


function App() {
  

  return (
    <>
    <main  className='overflow-x-hidden'>
<NavberArea></NavberArea>
<Herro></Herro> 

<Vision></Vision>
<Offfer></Offfer>
<David></David>
<PerfectCard></PerfectCard>
<FeedbackSection></FeedbackSection>
<Faq></Faq>
<Navber2></Navber2>

 </main>


    </>
  )
}

export default App

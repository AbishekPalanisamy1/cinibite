import { ToastContainer } from "react-toastify"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { AllRoutes } from "./routes/AllRoutes"




function App() {


  return (
    <>
    <ToastContainer/>
      <Header/>

      <AllRoutes/>
      
      <Footer/>

    </>
  )
}

export default App

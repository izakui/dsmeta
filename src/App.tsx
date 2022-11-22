import { ToastContainer } from "react-toastify"
import Header from "./components/Header"
//import NotificationButton from "./components/NotificationButton"
import Salescard from "./components/SalesCard"


function App() {
  
  return (
    <>    
      <ToastContainer />      
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <Salescard />
          </div>
        </section>
      </main>
    </>
  )
}
//chifit + alt + f organiza o codigo

export default App

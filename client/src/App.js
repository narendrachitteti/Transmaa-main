import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LandingPage from "./Component/Landing/LandingPage";
import ContactUs from "./Component/Landing/ContactUs";
import PreLoader from "./Component/Landing/PreLoader";
import MasterLogin from "./Component/Login/MasterLogin";
import Blogpage from "./Component/Landing/Blogpage";
import NewAboutUs from "./Component/Landing/NewAboutUs";
import Services from "./Component/Landing/Services";
import PrivateRoute from "./ProtectedRoute/ProtectedRoute.js";
import TruckForm from "./Component/Truck/TruckForm.js";
import MasterCustomer from "./Component/Master/MasterCustomerForm.js";
import MasterTruckForm from "./Component/Master/MasterTruckForm.js";
import CustomerDelete from "./Component/Delete/CustomerDelete.jsx";
import CustomerDetails from "./Component/Customer/CustomerDetails.js";
import Register from "./Component/Login/Register.js";
import LoginDetails from "./Component/Login/LoginDetails.js";
import MasterNavbar from "./Component/Master/MasterNavbar.js";
import TruckDelete from "./Component/Delete/TruckDelete.jsx";
import NotFound from "./Pages/NotFound.js";
import '../src/Styles/all.css'
import CardsSwipeslan from "./Component/Landing/functions/CardsSwipeslan.js";
import Services2 from "./Component/Landing/Services2.js";
import DeleteLoginDetails from "./Component/Login/DeleteLoginDetails.js";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <Router>
          <Routes>
          <Route path="/cardswiperlan" element={<CardsSwipeslan />} />
          <Route path="/register" element={<Register />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/login" element={<MasterLogin />} />
             <Route path="/AboutUS" element={<NewAboutUs />} />
             <Route path="/Blog" element={<Blogpage/>} />
            
             {/* <Route path="/services" element={<Services/>} /> */}
             <Route path="/services" element={<Services2/>} />


            <Route element={<PrivateRoute/>}>
            <Route path="/deleteusers" element={<DeleteLoginDetails/>} />

            <Route path="/Truck" element={<TruckForm/>} />
            <Route path="/MasterCustomer" element={<MasterCustomer/>}/>
            <Route path="/MasterTruckForm" element={<MasterTruckForm/>}/>
            <Route path="/CustomerDetailess" element={<CustomerDetails />} />
           
            <Route path="/LoginDetails" element={<LoginDetails/>}/>
            <Route path="/MasterNavbar" element={<MasterNavbar/>}/>
            <Route path="/TruckDelete" element={<TruckDelete/>}/>
            <Route path="/CustomerDelete" element={<CustomerDelete/>}/>

            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;

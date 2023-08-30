import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notification from './components/Notification/Notification'
import Login from './components/Login/Login'
import SignUp from './components/Sign_up/Sign_up'
import InstantConsultation from './components/InstantConsultation/InstantConsultation'
import ReviewForm from './components/ReviewForm/ReviewForm'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Notification>
              <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                <Route path='/review-form' element={<ReviewForm />} />
                <Route path="<component_route>" element={<component_name/>}/> 
              </Routes>
          </Notification>
        </BrowserRouter>
        </div>
  );
}

export default App;

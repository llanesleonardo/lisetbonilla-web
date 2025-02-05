import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Layout/Layout.jsx"
import HomePage from "./Views/HomePage.jsx"
import BusinessCard from "./Views/BusinessCard.jsx"
import WeeklyCoffeePage from "./Views/WeeklyCoffeePage"
import Webinar1 from './Views/Webinar1.jsx';
import Webinar1Success from './Views/Webinar1Success.jsx';
import BuyBooks from './Views/BuyBooks.jsx';

function App() {

  return (
    <>
          <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/business-card" element={<BusinessCard />} />
            <Route exact path="/webinar-1" element={<Webinar1 />} />
            <Route exact path="/weeklycoffee" element={<WeeklyCoffeePage />} />
            <Route exact path="/webinar-1-success" element={<Webinar1Success />} />
            <Route exact path="/buybooks" element={<BuyBooks />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App

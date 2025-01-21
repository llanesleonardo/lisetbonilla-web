import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Layout/Layout.jsx"
import HomePage from "./Views/HomePage.jsx"
import BusinessCard from "./Views/BusinessCard.jsx"
import WeeklyCoffeePage from "./Views/WeeklyCoffeePage"
import registerLinkAndMore from "./Views/registerLinkAndMore"

function App() {

  return (
    <>
          <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/business-card" element={<BusinessCard />} />
            <Route exact path="/weeklycoffee" element={<WeeklyCoffeePage />} />
            <Route exact path="/webinar" element={<WeeklyCoffeePage />} />
            <Route exact path="/registerLinkAndMore" element={<registerLinkAndMore />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App

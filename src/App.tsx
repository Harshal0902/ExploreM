import React from 'react'
import { motion } from "framer-motion"
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero"
import Details from "./components/Details/Details"
import Rover from "./components/Rover/Rover"
import Footer from "./components/Footer/Footer"
import "./App.css"

function App() {

  const fadeNav = {
    hidden: {
      opacity: 0,
      y: -80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: .4,
      }
    },
  }

  const fadeFooter = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: .4,
      }
    },
  }

  return (
    <>
      <motion.div variants={fadeNav} initial="hidden" animate="visible">
        <Navbar />
      </motion.div>

      <Hero />
      <Details />
      <Rover />

      <motion.div variants={fadeFooter} initial="hidden" animate="visible" >
        <Footer />
      </motion.div>

    </>
  )
}

export default App

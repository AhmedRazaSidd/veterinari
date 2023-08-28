'use client'
import Footer from './Components/template/layout/Footer'
import { Header } from './Components/template/layout/Header'
import styles from './page.module.css'
import HomePage from './pages/home'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js';
import './globals.css'


export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  )
}

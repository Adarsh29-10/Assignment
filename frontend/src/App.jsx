import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ContactForm from './components/landing/ContactForm'
import ProjectCard from './components/landing/ProjectCard'
import ProjectsSection from './components/sections/ProjectsSection'
import ClientsSection from './components/sections/ClientsSection'
import Newsletter from './components/sections/NewsLetter'
import AdminDashboard from './components/admin/AdminDashboard'
import AddProject from './components/admin/AddProject'
import ShowProjects from './components/admin/ShowProjects'
import AddClient from './components/admin/AddClient'
import ShowClients from './components/admin/ShowClients'
import ContactTable from './components/admin/ContactTable'
import NewsletterTable from './components/admin/NewsletterTable'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/contact' element={<ContactForm/>} />
        <Route path='/project' element={<ProjectsSection/>} />
        <Route path='/client' element={<ClientsSection/>} />
        <Route path='/news' element={<Newsletter/>} />


        <Route path='/admin' element={<AdminDashboard/>} />
        <Route path="/admin/projects/add" element={<AddProject />} />
        <Route path="/admin/projects/view" element={<ShowProjects />} />
        <Route path="/admin/clients/add" element={<AddClient />} />
        <Route path="/admin/clients/view" element={<ShowClients />} />
        <Route path="/admin/contacts" element={<ContactTable />} />
        <Route path="/admin/newsletter" element={<NewsletterTable />} />
        


      </Routes>
    </>
  )
}

export default App

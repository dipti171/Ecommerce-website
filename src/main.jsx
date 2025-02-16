import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact US/Contact.jsx'
import User from './components/user/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout/>}>    
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/> 
         {/* // oute path="about/about/dipti" element={<About/>}>  
         <Route path='dipti'/>
      </Route> */}
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:id" element={<User/>}/>
      <Route 
         loader={githubInfoLoader}
         path="github" 
         element={<Github/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)



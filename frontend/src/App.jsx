

import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Login from './login';
import Reg from './Reg';
import Home from './home';
import Online from './online';
import Yoga from './yoga1';
import Nav from './Nav';
import Profile from './profile';
import Yoga2 from './yoga2';
import Courses from './Courses';
import Admin from './Admin';
import Ahome from './Ahome';
import Dashboard from './Dash';
import AboutUs from './AboutUs';
import Apply from './Apply';
import Aonline from './Aonline';
import Atrain from './Atrain';
import Cou from './Cou';


function App() {
  const router= createBrowserRouter([
    {
      path: '/',
      element: <Login/>
    },
    {
      path:'/reg',
      element:<Reg/>
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/online',
      element:<Online/>
    },
    {
      path:'/yoga1',
      element:<Yoga/>
    },
    {
      path:'/nav',
      element:<Nav/>
    },
    {
      path:'/profile',
      element:<Profile/>
    },
    {
      path:'/yoga2',
      element:<Yoga2/>
    },
    {
      path:'/courses',
      element:<Courses/>
    },
    {
      path:'/admin',
      element:<Admin/>
    },
    {
      path:'/ahome',
      element:<Ahome/>
    },
    {
      path:'/dash',
      element:<Dashboard/>
    },
    {
      path:'/aboutus',
      element:<AboutUs/>
    },
    {
      path:'/Apply',
      element:<Apply/>
    },
    {
      path:'/Aonline',
      element:<Aonline/>
    },
    {
      path:'/Atrain',
      element:<Atrain/>
    },
    {
      path:'/Cou',
      element:<Cou/>
    }


  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
    
  )
}
export default App
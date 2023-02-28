import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import AllStudentsHome from './components/dashboard/allstudents/allstudents-home';
import DashboardHome from './components/dashboard/dashboard-home';
import StudentInformation from './components/dashboard/students-information/students-information';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing'

const AppRoutes = () => {
  
const routes = useRoutes([
    {
      path: '/',
      element: <Landing />
    },
    {
      path: '/dashboard',
      children: [
        {
          path: 'home',
          element: <Dashboard>
            <DashboardHome />
          </Dashboard>
        },
        {
          path: 'allstudents',
          element: <Dashboard>
            <AllStudentsHome />
          </Dashboard>
        },
        {
          path: 'studentsinformation',
          element: <Dashboard>
            <StudentInformation />
          </Dashboard>
        }
      ] 
    }
  ]);

  return routes;
}

function App() {

  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App

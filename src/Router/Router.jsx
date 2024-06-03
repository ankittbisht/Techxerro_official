import { Navigate, useRoutes } from 'react-router-dom';
import Home from '../views/pages/Home/Home';
import About from '../views/pages/About/About';
import Layout from '../views/layouts/Layout.jsx';
import PrivacyPolicy from '../views/pages/PrivacyPolicy/index.jsx';
import ContactUs from '../views/pages/Contact/Contact.jsx';
import Career from '../views/pages/Career/index.jsx';
import Ourblogs from '../views/pages/Blog/index.jsx';
import TechnologiesPage from '../views/pages/Technologies/index.jsx';
import Singleblog from '../views/pages/singleblog/Singleblog.jsx';
import Team from '../views/pages/Team/Team.jsx';

const Routes = () =>{
    const element = useRoutes([
        {
            path:'/',
            element:<Layout/>,
            children:[
                {
                    path:'/',
                    element: <Home/>
                },
                {
                    path:'/about',
                    element:<About/>
                },
                {
                    path:'/privacy-policy',
                    element:<PrivacyPolicy/>
                },
                {
                    path:'/contact',
                    element:<ContactUs/>
                },
                {
                    path:'/career',
                    element:<Career/>
                },
                {
                    path:'/blogs',
                    element:<Ourblogs/>
                },
                {
                    path:'/blog',
                    element:<Singleblog/>
                },
                {
                    path:'/team',
                    element:<Team/>
                },
                {
                    path:'/technology',
                    element:<TechnologiesPage/>
                }
            ]
        },
        // {
        //   path: "*",
        //   element: <Navigate to="404" replace />,
        // },
    ])
    return element;
}

export default Routes;
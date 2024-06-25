import { Navigate, useRoutes } from "react-router-dom";
import Home from "../views/pages/Home/Home";
import About from "../views/pages/About/About";
import Layout from "../views/layouts/Layout.jsx";
import PrivacyPolicy from "../views/pages/PrivacyPolicy/index.jsx";
import ContactUs from "../views/pages/Contact/Contact.jsx";
import Career from "../views/pages/Career/index.jsx";
import Ourblogs from "../views/pages/Blog/index.jsx";
import TechnologiesPage from "../views/pages/Technologies/index.jsx";
import Singleblog from "../views/pages/singleblog/Singleblog.jsx";
import Team from "../views/pages/Team/Team.jsx";
import { Suspense, lazy } from "react";

// const Lazyhome = lazy(() => import("../views/pages/Home/Home"));
// function Loading() {
//   return <h2>🌀 Loading...</h2>;
// }

// const LazyAbout = lazy(() => import("../views/pages/About/About"));
// const LazyPrivacy = lazy(() =>
//   import("../views/pages/PrivacyPolicy/index.jsx")
// );
// const Lazycontactus = lazy(() => import("../views/pages/Contact/Contact.jsx"));
// const Lazyourblog = lazy(() => import("../views/pages/Blog/index.jsx"));
// const Lazycareer = lazy(() => import("../views/pages/Career/index.jsx"));
// const Lazytechnologypage = lazy(() =>
//   import("../views/pages/Technologies/index.jsx")
// );
// const Lazysingleblog = lazy(() =>
//   import("../views/pages/singleblog/Singleblog.jsx")
// );
// const Lazyteam = lazy(() => import("../views/pages/Team/Team.jsx"));

const Routes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          //   element: (
          //     <Suspense fallback={<Loading />}>
          //       <Lazyhome />
          //     </Suspense>
          //   ),
        },
        {
          path: "/about",
            element: <About />,
        //   element: (
        //     <Suspense fallback={<div>loading.... </div>}>
        //       <LazyAbout />
        //     </Suspense>
        //   ),
        },
        {
          path: "/privacy-policy",
            element: <PrivacyPolicy />,
        //   element: (
        //     <Suspense fallback={<div>loading.... </div>}>
        //       <LazyPrivacy />
        //     </Suspense>
        //   ),
        },
        {
          path: "/contact",
            element: <ContactUs />,
        //   element: (
        //     <Suspense fallback={<div>loading.... </div>}>
        //       <Lazycontactus />
        //     </Suspense>
        //   ),
        },
        {
          path: "/career",
            element: <Career />,
        //   element: (
        //     <Suspense fallback={<div>loading.... </div>}>
        //       <LazyAbout />
        //     </Suspense>
        //   ),
        },
        {
          path: "/blogs",
            element: <Ourblogs />,
        //   element: (
        //     <Suspense fallback={<div>loading.... </div>}>
        //       <Lazyourblog />
        //     </Suspense>
        //   ),
        },
        {
          path: "/blog",
            element: <Singleblog />,
        //   element: (
        //     <Suspense fallback={<div>loading.... </div>}>
        //       <Lazysingleblog />
        //     </Suspense>
        //   ),
        },
        {
          path: "/team",
            element: <Team />,
        //   element: (
        //     <Suspense fallback={<div>loading.... </div>}>
        //       <Lazyteam />
        //     </Suspense>
        //   ),
        },
        {
          path: "/technology",
            element: <TechnologiesPage />,
        //   element: (
        //     <Suspense fallback={<div>loading.... </div>}>
        //       <Lazytechnologypage />
        //     </Suspense>
        //   ),
        },
      ],
    },
    // {
    //   path: "*",
    //   element: <Navigate to="404" replace />,
    // },
  ]);

  return element;
};

export default Routes;

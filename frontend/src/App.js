import React from "react";

import Page1 from "./pages/page1/Page1";
import Page2 from "./pages/page2/Page2";
import Page3 from "./pages/page3/Page3";
import Page4 from "./pages/page4/Page4";
import Page5 from "./pages/page5/Page5";
import Page6 from "./pages/Page6/Page6";
import Page7 from "./pages/page7/Page7";
import Page8 from "./pages/page8/Page8";
import Page9 from "./pages/page9/Page9";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./helper/ProtectedRoutes";
import { ToastContainer } from "react-toastify";
function App() {
  const [info, setInfo] = React.useState({});

  function collectPageInfo(name, value) {
    setInfo({ ...info, [name.split(" ").join("")]: value });
  }

  console.log(info);

  const pages = [
    {
      path: "/",
      element: <Page1 />,
    },
    {
      path: "/page-2",
      element: (
        <ProtectedRoutes>
          <Page2 fn={collectPageInfo} />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/page-3",
      element: (
        <ProtectedRoutes>
          <Page3 fn={collectPageInfo} />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/page-4",
      element: (
        <ProtectedRoutes>
          <Page4 fn={collectPageInfo} />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/page-5",
      element: (
        <ProtectedRoutes>
          <Page5 fn={collectPageInfo} />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/page-6",
      element: (
        <ProtectedRoutes>
          <Page6 fn={collectPageInfo} />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/page-7",
      element: (
        <ProtectedRoutes>
          <Page7 fn={collectPageInfo} />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/page-8",
      element: (
        <ProtectedRoutes>
          <Page8 />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/page-9",
      element: <Page9 />,
    },
  ];

  return (
    <>
      <Routes>
        {pages.map((page, index) => {
          return <Route path={page.path} element={page.element} />;
        })}
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;

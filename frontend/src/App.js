import React from "react";

import {
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  Page7,
  Page8,
  Page9,
} from "./pages";

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
    <div>
      <Routes>
        {pages.map((page, index) => {
          return <Route path={page.path} element={page.element} />;
        })}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import MiniLexico from './components/AnalizadorLexico/mini/MiniLexico';
import CompleteLexico from './components/AnalizadorLexico/complete/CompleteLexico';
import Error from './pages/Error.jsx';
import Sintactic from './components/AnalizadorSintactico/Mini/sintactic';
import CsvLoader from './components/AnalizadorSintactico/complete/CsvLoader';
import SintacticPage from './components/AnalizadorSintactico/complete/SintacticPage';

// create the browser router and configure the routes of the app
//using a queue of routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/mini",
    element: <MiniLexico />,
    errorElement: <Error />,
  },
  {
    path: "/complete",
    element: <CompleteLexico />,
    errorElement: <Error />,
  },
  {
    path: "/sintactic",
    element: <Sintactic />,
    errorElement: <Error />,
  },
  {
    path: "/csv-loader",
    element: <CsvLoader/>
  },
  {
    path: "/sintactic-complete",
    element: <SintacticPage />,
    errorElement: <Error />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* injecting the routes to render the pages, using the browserRouter */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)

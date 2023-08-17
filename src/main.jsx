import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import MiniLexico from './pages/MiniLexico.jsx';
import CompleteLexico from './pages/CompleteLexico.jsx';
import Error from './pages/Error.jsx';

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* injecting the routes to render the pages, using the browserRouter */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)

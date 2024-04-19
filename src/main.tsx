import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './pages/ErrorPage'
import MainPage from './pages/MainPage'
import UploadPage from './pages/UploadPage'
import ResultPage from './pages/ResultPage'
import RootLayout from './routes/RootLayout'

import './global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'main',
        element: <MainPage />
      },
      {
        path: 'upload',
        element: <UploadPage />
      },
      {
        path: 'result',
        element: <ResultPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

import * as React from "react"
import * as ReactDOM from "react-dom/client"
import Root from "../src/routes/routes.jsx"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import "../src/index.css"
import ClientList from "./pages/ClientList.jsx"
import { ChakraProvider } from "@chakra-ui/react"
import Client from "./pages/Client.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Navigate to="clients" replace={true} />, // Redirigir automáticamente a /clients
      },
      {
        path: "clients",
        element: <ClientList />,
      },
      {
        path: "clients/:code",
        element: <Client />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)

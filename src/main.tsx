import React from "react";
import ReactDOM from "react-dom/client";
import {
  HomePage,
  VirtualizedListPage,
  DragAndDropPage,
} from "./routes/index.tsx";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/virtualized-list",
    element: <VirtualizedListPage />,
  },
  {
    path: "/drag-and-drop",
    element: <DragAndDropPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

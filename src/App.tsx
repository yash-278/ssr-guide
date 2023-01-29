import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/Home.page";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* Provide the client to your App */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default App;

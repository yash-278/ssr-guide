import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="w-full grid grid-cols-2 place-items-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p className="mt-10">
            Static Shift Racing Guide is under construction. Please check back later.
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </div>
    </QueryClientProvider>
  );
}

export default App;

import "./common.css";
import { routers } from "./app/routers";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;

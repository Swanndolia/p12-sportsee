import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router.js"
import "./assets/css/index.css"

/**
 * The root component of the React application.
 * 
 * @returns {JSX.Element} The React element that represents the application.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  );
}

// Render the application to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

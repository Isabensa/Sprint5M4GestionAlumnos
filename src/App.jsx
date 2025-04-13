import AppRouter from "./Router/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-white">
      <Header />
      <main className="flex-grow p-4">
        <AppRouter />
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={4000} />
    </div>
  );
}

export default App;

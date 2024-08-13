import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes/RoutesMain";
import "react-toastify/dist/ReactToastify.min.css";
import { useContext } from "react";
// import Loading from "./components/Loading"; // Certifique-se de importar o componente Loading

const App = () => {
  // const { loading } = useContext(Context);
  return (
    <>
      {loading ? <Loading /> : <RoutesMain />}
      <ToastContainer autoClose={3 * 1000} />
    </>
  );
};

export default App;


import { useContext } from "react";
import { AppContextProv } from "./context/AppContext";
import AppRouter from "./route/AppRouter";


function App() {
  const { theme } = useContext(AppContextProv)
  return (
    <div data-theme={theme} >
      <AppRouter />
    </div>
  );
}

export default App;

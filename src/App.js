import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../src/theme/theme";
import { Home } from "./pages/home/home.component";
import { GlobalHeader } from "./components/header/header.component";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalHeader />
      <Home />
    </ThemeProvider>
  </>
);

export default App;

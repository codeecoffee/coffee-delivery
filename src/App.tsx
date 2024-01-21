import { ThemeProvider } from "styled-components";
import { defaultColors } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export function App (){
  return(
    <ThemeProvider theme={defaultColors}>
      <GlobalStyle/>
      <Header/>
      <Outlet/>
    
    </ThemeProvider>
  )
}

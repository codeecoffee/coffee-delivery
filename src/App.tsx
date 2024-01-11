import { ThemeProvider } from "styled-components";
import { defaultColors } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";

export function App (){
  return(
    <ThemeProvider theme={defaultColors}>
      <GlobalStyle/>
      <Home/>
    
    </ThemeProvider>
  )
}

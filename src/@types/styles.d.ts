import 'styled-components'
import { defaultColors } from "../styles/themes/default";

type ThemeType = typeof defaultColors

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType {}
}
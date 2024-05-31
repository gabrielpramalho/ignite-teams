import 'styled-components/native';
import { themeDefault } from '@/themes'

type ThemeType = typeof themeDefault;

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType { }
}

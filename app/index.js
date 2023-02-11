import { Redirect } from "expo-router";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./infrastructure/theme";

export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <Redirect href={'/home'} />
    </ThemeProvider>
  )

}

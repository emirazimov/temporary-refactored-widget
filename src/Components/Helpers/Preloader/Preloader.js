import { CircularProgress } from "@material-ui/core"
import React from "react"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import styles from "./Preloader.module.scss"

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#4F4F4F",
    },
  },
})
class PreloaderComponent extends React.Component {
  render() {
    return (
      <div
        // style={{
        //   margin: "0 auto",
        //   width: "100%",
        //   height: "90%",
        //   display: "flex",
        //   flexDirection: "row ",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   backgroundColor: "black",
        //   // marginTop: "40px",
        // }}
        class={styles.loaderContainer}
      >
        <div class={styles.loader}></div>
      </div>
    )
  }
}

export const Preloader = PreloaderComponent

//#region styled-components

// const Container = styled.div`
//     margin: 0 auto;
//     width: 100%;
//     /* @media (max-width: 500px) {
//         width: 94%;
//     } */
// `;

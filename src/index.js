import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./App"
import ThemeContext from "./context"
import store from "./Redux/redux-store"
import reportWebVitals from "./reportWebVitals"

var divForReact = document.createElement("div")

divForReact.setAttribute("id", "widget-by-bookinglane")
document.getElementsByTagName("body")[0].appendChild(divForReact)
var head = document.getElementsByTagName("head")[0]

head.innerHTML += `<link
      rel="stylesheet"
      href="https://bookinglane-widgets.s3.us-east-2.amazonaws.com/Global-widget-files/widget.css"
    />`

var ThemeProviderAppBackgroundColor = "grey"

var fontColor = "white"

var borderRadiuses = "0"

var carsTypeColor = "green"

var hoverColor = "purple"

var iconsColor = "white"

var backAndNextButtonsColor = "blue"
var innerTextOnHover = "black"
// font-color-for-customize

function Main() {
  return (
    <Provider store={store}>
      <ThemeContext.Provider
        value={{
          ThemeProviderAppBackgroundColor,
          fontColor,
          borderRadiuses,
          carsTypeColor,
          hoverColor,
          iconsColor,
          backAndNextButtonsColor,
          innerTextOnHover,
        }}
      >
        <App />
      </ThemeContext.Provider>
    </Provider>
  )
}

ReactDOM.render(<Main />, document.getElementById("widget-by-bookinglane"))

reportWebVitals()

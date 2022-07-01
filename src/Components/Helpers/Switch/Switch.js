import { useContext, useState } from "react"
import styles from "./Switch.module.scss"
import styled from "styled-components"
import ThemeContext from "../../../context"

export const Switch = (props) => {
  const {
    ThemeProviderAppBackgroundColor,
    fontColor,
    borderRadiusesForInnerElements,
    borderRadiusesForWholeApp,
    borderColorForInnerElements,
    borderColorForOuterApp,
    carsTypeColor,
    hoverColor,
    iconsColor,
    backAndNextButtonsColor,
    innerTextOnHover,
    inputsFontColor,
    inputsBackground,
    bookNowIconFontAndCircleBorderColor,
    bookNowIconBackgroundColor,
    switchesBorderColor,
    switchesCircleColor,
    switchesBackgroundColor,
    switchesBorderColorEnabled,
    switchesCircleColorEnabled,
    switchesBackgroundColorEnabled,
  } = useContext(ThemeContext)
  return (
    <SwitchWrapper
      switchesBorderColor={switchesBorderColor}
      switchesCircleColor={switchesCircleColor}
      switchesBackgroundColor={switchesBackgroundColor}
      switchesBorderColorEnabled={switchesBorderColorEnabled}
      switchesCircleColorEnabled={switchesCircleColorEnabled}
      switchesBackgroundColorEnabled={switchesBackgroundColorEnabled}
    >
      <SwitchInput
        type="checkbox"
        name={`switch${props.numberToIdentify}`}
        className={styles.switchSelf}
        id={`switch${props.numberToIdentify}`}
        defaultChecked={props.checked}
        // onClick={props.onClick}

        {...props}
      />
      <label
        htmlFor={`switch${props.numberToIdentify}`}
        className={styles.siwtchsLabel}
      ></label>
    </SwitchWrapper>
  )
}
const SwitchInput = styled.input``

const SwitchLabel = styled.label``

const SwitchWrapper = styled.div`
  // margin: auto;
  // padding: 20px;
  // width: 55px;
  // border: 1px solid $lightgray;
  // margin-top: 20px;
  // border-radius: 5px;
  // background: white;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

  input {
    &${SwitchInput} {
      opacity: 0 !important; // hides checkbox
      position: absolute !important;
      // & + label {
      //   background: white;
      // }

      & + label {
        position: relative !important;
        display: inline-block !important;
        user-select: none !important;
        transition: 0.4s ease !important;
        height: 22px !important;
        width: 34px !important;
        border: 1px solid ${(props) => props.switchesBorderColor}!important;
        background: ${(props) => props.switchesBackgroundColor}!important;
        border-radius: 11px !important;
        box-sizing: border-box !important;
        &:hover {
          cursor: pointer !important;
          // border: 1px solid white;
          transition: 0.1s ease !important;
        }
        &:before {
          content: "" !important;
          position: absolute !important;
          display: block !important;
          transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1) !important;
          height: 20px !important;
          width: 32px !important;
          top: 0 !important;
          left: 0 !important;
          border-radius: 30px !important;
        }
        &:after {
          content: "" !important;
          position: absolute !important;
          display: block !important;
          box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1),
            0 4px 0px 0 hsla(0, 0%, 0%, 0.04), 0 4px 9px hsla(0, 0%, 0%, 0.13),
            0 3px 3px hsla(0, 0%, 0%, 0.05) !important;
          transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1) !important;
          background: ${(props) => props.switchesCircleColor}!important;
          height: 13px !important;
          width: 13px !important;
          top: 3px !important;
          left: 2px !important;
          border-radius: 60px !important;
          // &:hover {
          //   background: white;
          //   transition: 0.1s ease;
          // }
        }
        &:hover::after {
          // @include inactiveMixin;
          // @include afterAnimation;
          background: ${(props) => props.switchesCircleColorEnabled}!important;
          // height: 15px;
          // width: 15px;
          // top: 1px;
          // left: 0px;
          // border-radius: 60px;
          // &:hover {
          //   background: white;
          //   transition: 0.1s ease;
          // }
        }
      }
      // When Active
      &:checked {
        & + label {
          border: 1px solid
            ${(props) => props.switchesBorderColorEnabled}!important;
          background: ${(props) =>
            props.switchesBackgroundColorEnabled}!important;
        }

        & + label:after {
          left: 51% !important;

          background: ${(props) => props.switchesBorderColorEnabled}!important;
        }
      }
    }
  }
`

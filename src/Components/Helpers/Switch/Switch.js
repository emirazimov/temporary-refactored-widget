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
      <label htmlFor={`switch${props.numberToIdentify}`}></label>
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
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    &${SwitchInput} {
      opacity: 0; // hides checkbox
      position: absolute;
      // & + label {
      //   background: white;
      // }

      & + label {
        position: relative;
        display: inline-block;
        user-select: none;
        transition: 0.4s ease;
        height: 22px;
        width: 34px;
        border: 1px solid ${(props) => props.switchesBorderColor};
        background: ${(props) => props.switchesBackgroundColor};
        border-radius: 11px;
        box-sizing: border-box;
        &:hover {
          cursor: pointer;
          // border: 1px solid white;
          transition: 0.1s ease;
        }
        &:before {
          content: "";
          position: absolute;
          display: block;
          transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);
          height: 20px;
          width: 32px;
          top: 0;
          left: 0;
          border-radius: 30px;
        }
        &:after {
          content: "";
          position: absolute;
          display: block;
          box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1),
            0 4px 0px 0 hsla(0, 0%, 0%, 0.04), 0 4px 9px hsla(0, 0%, 0%, 0.13),
            0 3px 3px hsla(0, 0%, 0%, 0.05);
          transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
          background: ${(props) => props.switchesCircleColor};
          height: 13px;
          width: 13px;
          top: 3px;
          left: 2px;
          border-radius: 60px;
          // &:hover {
          //   background: white;
          //   transition: 0.1s ease;
          // }
        }
        &:hover::after {
          // @include inactiveMixin;
          // @include afterAnimation;
          background: ${(props) => props.switchesCircleColorEnabled};
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
          border: 1px solid ${(props) => props.switchesBorderColorEnabled};
          background: ${(props) => props.switchesBackgroundColorEnabled};
        }

        & + label:after {
          left: 51%;

          background: ${(props) => props.switchesBorderColorEnabled};
        }
      }
    }
  }
`

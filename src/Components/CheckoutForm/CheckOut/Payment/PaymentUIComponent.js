import React, { useState, useEffect, useContext } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { CustomMaskInput } from "../CustomFormInput/CustomFormInput"
import styled from "styled-components"
import PrivacyPolicy from "../../../TermsOfUse/PrivacyPolicy/PrivacyPolicy"
import TermsOfUse from "../../../TermsOfUse/TermOfUse/TermOfUse"
import Cleave from "cleave.js/react"
import "./PaymentStyles.css"
import styles from "./Payment.module.scss"
import { Switch } from "../../../Helpers/Switch/Switch"
import ThemeContext from "../../../../context"
import Autocomplete from "@mui/material/Autocomplete"

const PaymentUIComponent = ({
  next,
  back,
  total,
  formSummary,
  setPaymentForm,
  SignupSchema,
  states,
  setStates,
  cities,
  setCities,
  statesId,
  setStatesId,
  citiesId,
  setCitiesId,
  checked,
  setChecked,
  register,
  handleSubmit,
  formState,
  errors,
  methods,
  riderDetails,
  setRiderDetails,
  statesIdError,
  setStatesIdError,
  citiesIdError,
  setCitiesIdError,
  cardForPaymentSubmit,
  setCardForPaymentSubmit,
  cardForPaymentSubmitError,
  setCardForPaymentSubmitError,
  restrictAmex,
  setRestrictAmex,
  onSubmit,
  cardType,
  setCardType,
  creditCardNum,
  setCreditCardNum,
  handleNum,
  handleType,
  extractStateId,
  extractCityId,
  stateName,
  cityName,
  selectedCar,
  round,
}) => {
  const inputStyle = {
    WebkitBoxShadow: "0 0 0 1000px transparent inset",
    height: "0px",
  }

  const {
    ThemeProviderAppBackgroundColor,
    fontColor,
    borderRadiuses,
    carsTypeColor,
    hoverColor,
    iconsColor,
    backAndNextButtonsColor,
    backAndNextButtonsFontColor,
    backAndNextButtonsBorderColor,
    innerTextOnHover,
    inputsFontColor,
    borderRadiusesForInnerElements,
    borderRadiusesForWholeApp,
    borderColorForInnerElements,
    borderColorForOuterApp,
    inputsBackground,
  } = useContext(ThemeContext)

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.formWrapper}
        style={{ background: ThemeProviderAppBackgroundColor }}
      >
        <div className={styles.paymentWrapper}>
          <div className={styles.paymentContainer}>
            <div className={styles.paymentTitleContainer}>
              <span
                className={styles.paymentTitleSelf}
                style={{ color: fontColor }}
              >
                Payment
              </span>
            </div>
            <div className={styles.isPassengerCardholderContainer}>
              <div className={styles.isPassengerCardholderTitleContainer}>
                <span
                  className={
                    riderDetails
                      ? styles.isPassengerCardholderTitleWhiteSelf
                      : styles.isPassengerCardholderTitleGreySelf
                  }
                  style={{
                    color: fontColor,
                    opacity: riderDetails ? "1" : "0.3",
                  }}
                >
                  Is passenger a cardholder?
                </span>
              </div>
              <div className={styles.isPassengerCardholderSwitchContainer}>
                <Switch
                  checked={riderDetails}
                  onClick={() => setRiderDetails(!riderDetails)}
                  numberToIdentify={4}
                />
              </div>
            </div>
            {!riderDetails && (
              <div className={styles.passengerDetailWrapper}>
                <div className={styles.passengerDetailTitleContainer}>
                  <span
                    className={styles.passengerDetailTitleSelf}
                    style={{ color: fontColor }}
                  >
                    Passenger Detail
                  </span>
                </div>
                <div className={styles.cardholderInformationInputsWrapper}>
                  <div
                    className={styles.cardholderInformationInputSelfContainer}
                    style={{ width: "50%" }}
                  >
                    <CardholderInformationInputSelfContainerJustForFirstAndLastName
                      // className={
                      //   styles.cardholderInformationInputSelfContainerJustForFirstAndLastName
                      // }
                      inputsFontColor={inputsFontColor}
                    >
                      <InputFirstAndLastName
                        name="greetClientInfo.firstName"
                        autoComplete="off"
                        placeholder="First Name"
                        defaultValue={formSummary.greetClientInfo.firstName}
                        className={
                          styles.cardholderInformationInputSelfFirstName
                        }
                        style={{
                          color: inputsFontColor,
                          borderLeft: `1px solid ${borderColorForInnerElements}`,
                          borderTop: `1px solid ${borderColorForInnerElements}`,
                          borderBottom: `1px solid ${borderColorForInnerElements}`,
                          background: inputsBackground,
                          borderTopLeftRadius: borderRadiusesForInnerElements,
                          borderBottomLeftRadius:
                            borderRadiusesForInnerElements,
                        }}
                        ref={register}
                        inputsFontColor={inputsFontColor}
                      />
                    </CardholderInformationInputSelfContainerJustForFirstAndLastName>
                  </div>
                  <div
                    className={styles.cardholderInformationInputSelfContainer2}
                    style={{ width: "50%" }}
                  >
                    <InputFirstAndLastName
                      name="greetClientInfo.lastName"
                      autoComplete="off"
                      defaultValue={formSummary.greetClientInfo.lastName}
                      placeholder="Last Name"
                      className={styles.cardholderInformationInputSelfLastName}
                      style={{
                        color: inputsFontColor,
                        borderRight: `1px solid ${borderColorForInnerElements}`,
                        borderTop: `1px solid ${borderColorForInnerElements}`,
                        borderBottom: `1px solid ${borderColorForInnerElements}`,
                        background: inputsBackground,
                        borderTopRightRadius: borderRadiusesForInnerElements,
                        borderBottomRightRadius: borderRadiusesForInnerElements,
                      }}
                      ref={register}
                      inputsFontColor={inputsFontColor}
                    />
                  </div>
                </div>
                <div className={styles.cardholderInformationInputsWrapper}>
                  <div
                    className={styles.cardholderInformationInputSelfContainer1}
                  >
                    <InputsDivided
                      name="greetClientInfo.email"
                      autoComplete="off"
                      placeholder="Email"
                      defaultValue={formSummary.greetClientInfo.email}
                      className={styles.cardholderInformationInputSelf}
                      style={{
                        color: inputsFontColor,
                        border: `1px solid ${borderColorForInnerElements}`,

                        background: inputsBackground,
                        borderRadius: borderRadiusesForInnerElements,
                      }}
                      ref={register}
                      inputsFontColor={inputsFontColor}
                    />
                  </div>
                  <div
                    className={styles.cardholderInformationInputSelfContainer2}
                  >
                    <InputsDivided
                      name="greetClientInfo.phoneNumber"
                      autoComplete="off"
                      defaultValue={formSummary.greetClientInfo.phoneNumber}
                      placeholder="Phone Number"
                      className={styles.cardholderInformationInputSelf}
                      style={{
                        color: inputsFontColor,
                        border: `1px solid ${borderColorForInnerElements}`,

                        background: inputsBackground,
                        borderRadius: borderRadiusesForInnerElements,
                      }}
                      ref={register}
                      inputsFontColor={inputsFontColor}
                    />
                  </div>
                </div>
              </div>
            )}
            <div className={styles.cardholderInformationWrapper}>
              <div className={styles.cardholderInformationTitleContainer}>
                <span
                  className={styles.cardholderInformationTitleSelf}
                  style={{ color: fontColor }}
                >
                  Cardholder Information
                </span>
              </div>
              <div className={styles.cardholderInformationInputsWrapper}>
                <div
                  className={styles.cardholderInformationInputSelfContainer}
                  style={{ width: "50%" }}
                >
                  <CardholderInformationInputSelfContainerJustForFirstAndLastName
                    // className={
                    //   styles.cardholderInformationInputSelfContainerJustForFirstAndLastName
                    // }
                    inputsFontColor={inputsFontColor}
                    style={{ width: "100%" }}
                  >
                    <InputFirstAndLastName
                      name="client.firstName"
                      autoComplete="off"
                      defaultValue={formSummary.client.firstName}
                      placeholder="First Name"
                      error={errors.client?.firstName ? true : false}
                      className={styles.cardholderInformationInputSelfFirstName}
                      ref={register}
                      style={{
                        width: "100%",
                        color: inputsFontColor,
                        borderLeft: `1px solid ${borderColorForInnerElements}`,
                        borderTop: `1px solid ${borderColorForInnerElements}`,
                        borderBottom: `1px solid ${borderColorForInnerElements}`,
                        background: inputsBackground,
                        borderTopLeftRadius: borderRadiusesForInnerElements,
                        borderBottomLeftRadius: borderRadiusesForInnerElements,
                      }}
                      inputsFontColor={inputsFontColor}
                    />
                  </CardholderInformationInputSelfContainerJustForFirstAndLastName>
                  {errors.client?.firstName && (
                    <p className={styles.errorInputs}>
                      {errors.client?.firstName.message}
                    </p>
                  )}
                </div>
                <div
                  className={styles.cardholderInformationInputSelfContainer}
                  style={{ width: "50%" }}
                >
                  <InputFirstAndLastName
                    name="client.lastName"
                    autoComplete="off"
                    placeholder="Last Name"
                    defaultValue={formSummary.client.lastName}
                    error={errors.client?.lastName ? true : false}
                    className={styles.cardholderInformationInputSelfLastName}
                    ref={register}
                    style={{
                      width: "100%",
                      color: inputsFontColor,
                      borderRight: `1px solid ${borderColorForInnerElements}`,
                      borderTop: `1px solid ${borderColorForInnerElements}`,
                      borderBottom: `1px solid ${borderColorForInnerElements}`,
                      background: inputsBackground,
                      borderTopRightRadius: borderRadiusesForInnerElements,
                      borderBottomRightRadius: borderRadiusesForInnerElements,
                    }}
                    inputsFontColor={inputsFontColor}
                  />
                  {errors.client?.lastName && (
                    <p className={styles.errorInputs}>
                      {errors.client?.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className={styles.cardholderInformationInputsWrapper}>
                <div
                  className={styles.cardholderInformationInputSelfContainer1}
                >
                  <InputsDivided
                    name="client.email"
                    autoComplete="off"
                    placeholder="Email"
                    defaultValue={formSummary.client.email}
                    error={errors.client?.email ? true : false}
                    className={styles.cardholderInformationInputSelf}
                    style={{
                      color: inputsFontColor,
                      border: `1px solid ${borderColorForInnerElements}`,
                      background: inputsBackground,
                      borderRadius: borderRadiusesForInnerElements,
                    }}
                    ref={register}
                    inputsFontColor={inputsFontColor}
                  />
                  {errors.client?.email && (
                    <p className={styles.errorInputs}>
                      {errors.client?.email.message}
                    </p>
                  )}
                </div>
                <div
                  className={styles.cardholderInformationInputSelfContainer2}
                >
                  <InputsDivided
                    name="client.phoneNumber"
                    autoComplete="off"
                    defaultValue={formSummary.client.phoneNumber}
                    placeholder="Phone Number"
                    error={errors.client?.phoneNumber ? true : false}
                    className={styles.cardholderInformationInputSelf}
                    style={{
                      color: inputsFontColor,
                      border: `1px solid ${borderColorForInnerElements}`,
                      background: inputsBackground,
                      borderRadius: borderRadiusesForInnerElements,
                    }}
                    ref={register}
                    inputsFontColor={inputsFontColor}
                  />
                  {errors.client?.phoneNumber && (
                    <p className={styles.errorInputs}>
                      {errors.client?.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>
              <div className={styles.cardholderInformationInputsWrapper}>
                <div
                  className={
                    styles.cardholderInformationInputsContainerForPositionErrorMessage
                  }
                >
                  <InputFullWidth
                    name="client.address"
                    autoComplete="off"
                    placeholder="Address"
                    defaultValue={formSummary.client.address}
                    ref={register}
                    error={errors.client?.address ? true : false}
                    className={
                      styles.cardholderInformationInputWithFullWidthSelf
                    }
                    style={{
                      width: "100%",
                      paddingRight: "0",
                      color: inputsFontColor,
                      border: `1px solid ${borderColorForInnerElements}`,
                      background: inputsBackground,
                      borderRadius: borderRadiusesForInnerElements,
                    }}
                    inputsFontColor={inputsFontColor}
                  />
                  {errors.client?.address && (
                    <p className={styles.errorInputs}>
                      {errors.client?.address.message}
                    </p>
                  )}
                </div>
              </div>

              <div className={styles.cardholderInformationInputsWrapper}>
                <div
                  className={
                    styles.cardholderInformationInputsContainerForPositionErrorMessageState
                  }
                  style={{ color: inputsFontColor }}
                >
                  <Autocomplete
                    disablePortal
                    onChange={(event, newValue) => {
                      // console.log(newValue)
                      newValue ? extractStateId(newValue) : setStatesId(null)
                    }}
                    options={states.map((state) => state.name)}
                    renderInput={(params) => (
                      <div ref={params.InputProps.ref}>
                        <InputFullWidth
                          type="text"
                          {...params.inputProps}
                          placeholder="State"
                          className={
                            styles.cardholderInformationInputWithFullWidthSelfState
                          }
                          style={{
                            width: "100%",
                            paddingRight: "0",
                            color: inputsFontColor,
                            border: `1px solid ${borderColorForInnerElements}`,
                            background: inputsBackground,
                            borderRadius: borderRadiusesForInnerElements,
                          }}
                          inputsFontColor={inputsFontColor}
                        />
                      </div>
                    )}
                  />

                  {statesIdError && (
                    <p className={styles.errorInputs}>Required</p>
                  )}
                </div>
              </div>
              <div className={styles.cardholderInformationInputsWrapper}>
                <div
                  className={
                    styles.cardholderInformationInputSelfContainer1City
                  }
                  style={{ color: inputsFontColor }}
                >
                  <Autocomplete
                    disablePortal
                    onChange={(event, newValue) => {
                      // console.log(cities)
                      newValue ? extractCityId(newValue) : setCitiesId(null)
                    }}
                    options={cities.map((city) => city.name)}
                    renderInput={(params) => (
                      <div ref={params.InputProps.ref}>
                        <InputsDivided
                          type="text"
                          {...params.inputProps}
                          className={styles.cardholderInformationInputSelf}
                          placeholder="City"
                          style={{
                            width: "100%",
                            paddingRight: "25px",
                            boxSizing: "border-box",
                            color: inputsFontColor,
                            border: `1px solid ${borderColorForInnerElements}`,
                            background: inputsBackground,
                            borderRadius: borderRadiusesForInnerElements,
                          }}
                          inputsFontColor={inputsFontColor}
                        />
                      </div>
                    )}
                  />

                  {citiesIdError && (
                    <p className={styles.errorInputs}>Required</p>
                  )}
                </div>
                <div
                  className={styles.cardholderInformationInputSelfContainer2}
                >
                  <InputsDivided
                    name="client.zip"
                    autoComplete="off"
                    placeholder="ZIP"
                    ref={register}
                    defaultValue={formSummary.client.zip}
                    error={errors.client?.address ? true : false}
                    className={styles.cardholderInformationInputSelf}
                    style={{
                      color: inputsFontColor,
                      border: `1px solid ${borderColorForInnerElements}`,
                      background: inputsBackground,
                      borderRadius: borderRadiusesForInnerElements,
                    }}
                    inputsFontColor={inputsFontColor}
                  />
                  {errors.client?.zip && (
                    <p className={styles.errorInputs}>
                      {errors.client?.zip.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.cardInformationWrapper}>
              <div className={styles.cardInformationTitleContainer}>
                <span
                  className={styles.cardInformationTitleSelf}
                  style={{ color: fontColor }}
                >
                  Card information
                </span>
              </div>
              <div className={styles.cardholderInformationInputsWrapper}>
                <div
                  className={
                    styles.cardholderInformationInputsContainerForPositionErrorMessage
                  }
                >
                  <Cleave
                    delimiter="-"
                    options={{
                      creditCard: true,
                      onCreditCardTypeChanged: handleType,
                    }}
                    name="paymentInfo.cardNumber"
                    error={errors.paymentInfo?.cardNumber ? true : false}
                    onChange={handleNum}
                    placeholder="Card number"
                    className={
                      styles.cardholderInformationInputWithFullWidthSelf
                    }
                    style={{
                      color: inputsFontColor,
                      border: `1px solid ${borderColorForInnerElements}`,
                      background: inputsBackground,
                      borderRadius: borderRadiusesForInnerElements,
                    }}
                  />

                  {cardForPaymentSubmitError && (
                    <p className={styles.errorInputs}>Required</p>
                  )}
                </div>
              </div>
              <div className={styles.cardholderInformationInputsWrapper}>
                <div
                  className={styles.cardholderInformationInputSelfContainer1}
                >
                  <CustomMaskInput
                    name="paymentInfo.month"
                    ref={register}
                    mask="99/99"
                    autoComplete="off"
                    defaultValue={`${formSummary.paymentInfo.month}/${formSummary.paymentInfo.year}`}
                  >
                    {() => (
                      <input
                        placeholder="mm/yy"
                        autoComplete="off"
                        error={errors.paymentInfo?.month ? true : false}
                        className={styles.cardholderInformationInputSelf}
                        style={{
                          color: inputsFontColor,
                          border: `1px solid ${borderColorForInnerElements}`,
                          background: inputsBackground,
                          borderRadius: borderRadiusesForInnerElements,
                        }}
                      />
                    )}
                  </CustomMaskInput>
                  {errors.paymentInfo?.month && (
                    <p className={styles.errorInputs}>
                      {errors.paymentInfo?.month.message}
                    </p>
                  )}
                </div>
                <div
                  className={styles.cardholderInformationInputSelfContainer2}
                >
                  <CustomMaskInput
                    name="paymentInfo.cvc"
                    ref={register}
                    mask={cardType == "amex" ? "9999" : "999"}
                    autoComplete="off"
                    defaultValue={formSummary.paymentInfo.cvc}
                  >
                    {() => (
                      <InputsDivided
                        placeholder="CVV/CVC"
                        autoComplete="off"
                        error={errors.paymentInfo?.cvc ? true : false}
                        className={styles.cardholderInformationInputSelf}
                        style={{
                          color: inputsFontColor,
                          border: `1px solid ${borderColorForInnerElements}`,
                          background: inputsBackground,
                          borderRadius: borderRadiusesForInnerElements,
                        }}
                        inputsFontColor={inputsFontColor}
                      />
                    )}
                  </CustomMaskInput>
                  {errors.paymentInfo?.cvc && (
                    <p className={styles.errorInputs}>
                      {errors.paymentInfo?.cvc.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.checkboxWrapper}>
              <CheckboxLabel id="input">
                <CheckboxInput
                  type="checkbox"
                  onClick={() => setChecked(!checked)}
                  htmlFor="input"
                />
                <CheckboxSpan fontColor={fontColor}></CheckboxSpan>
              </CheckboxLabel>
              <TermsOfUse />
              <PrivacyPolicy />
            </div>
            <div className={styles.buttonGroupBlock}>
              <div className={styles.buttonGroupBlockContainer}>
                <button
                  variant="contained"
                  color="primary"
                  onClick={back}
                  className={styles.buttonBackSelf}
                  style={{
                    background: backAndNextButtonsColor,
                    color: backAndNextButtonsFontColor,
                    border: `1px solid ${backAndNextButtonsBorderColor}`,
                    borderRadius: borderRadiusesForInnerElements,
                  }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!checked}
                  className={styles.buttonNextSelf}
                  style={{
                    opacity: !checked ? "0.5" : "1",
                    background: backAndNextButtonsColor,
                    color: backAndNextButtonsFontColor,
                    border: `1px solid ${backAndNextButtonsBorderColor}`,
                    borderRadius: borderRadiusesForInnerElements,
                  }}
                >
                  Pay ${round(total + selectedCar.transactionFee, 2)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default PaymentUIComponent

const CardholderInformationInputSelfContainerJustForFirstAndLastName = styled.div`
  /* width: 50%; */
  position: relative !important;
  &:after {
    position: absolute !important;
    content: "" !important;
    border-right: 1px solid ${(props) => props.inputsFontColor}!important;
    top: 28% !important;
    right: 0 !important;
    width: 1px !important;
    height: 44% !important;
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: flex-start !important;
`

const CheckboxLabel = styled.label`
  position: relative !important;
  // padding-left: 35px;
  display: initial !important;
  margin-bottom: 12px !important;
  cursor: pointer !important;
  font-size: 22px !important;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
  margin-right: 40px !important;
  &:hover {
    span {
      -webkit-box-shadow: 0px 0px 5px -1px #ffffff !important;
      box-shadow: 0px 0px 5px -1px #ffffff !important;
    }
  }
  input:checked ~ span {
    background-color: transparent !important;
  }

  input:checked ~ span:after {
    display: block !important;
  }
`
const CheckboxSpan = styled.span`
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  height: 25px !important;
  width: 25px !important;
  background-color: transparent !important;
  border: 1px solid ${(props) => props.fontColor}!important;
  border-radius: 5px !important;
  &:after {
    content: "" !important;
    position: absolute !important;
    display: none !important;
  }
  &:after {
    left: 9px !important;
    top: 5px !important;
    width: 5px !important;
    height: 10px !important;
    border: solid ${(props) => props.fontColor}!important;
    border-width: 0 3px 3px 0 !important;
    -webkit-transform: rotate(45deg) !important;
    -ms-transform: rotate(45deg) !important;
    transform: rotate(45deg) !important;
  }
`

const CheckboxInput = styled.input`
  position: absolute !important;
  opacity: 0 !important;
  cursor: pointer !important;
  height: 0 !important;
  width: 0 !important;

  &:checked + ${CheckboxSpan} {
    &:after {
      display: block !important;
    }
  }
  &:checked + ${CheckboxSpan} {
    background-color: transparent !important;
  }
`

const InputFirstAndLastName = styled.input`
  box-sizing: border-box !important;
  width: 100% !important;
  height: 35px !important;
  padding: 0 !important;
  text-indent: 20px !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  font-size: 13.5px !important;
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-size: 13.5px !important;
    color: ${(props) => props.inputsFontColor}!important;
    opacity: 1 !important; /* Firefox */
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    font-size: 13.5px !important;
    color: ${(props) => props.inputsFontColor}!important;
  }
  &::-ms-input-placeholder {
    /* Microsoft Edge */
    font-size: 13.5px !important;
    color: ${(props) => props.inputsFontColor}!important;
  }
  &:focus {
    outline: none !important;
  }
`
const InputsDivided = styled.input`
  box-sizing: border-box !important;
  width: 100% !important;
  height: 35px !important;
  padding: 0 !important;
  text-indent: 20px !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  font-size: 13.5px !important;
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-size: 13.5px !important;
    color: ${(props) => props.inputsFontColor}!important;
    opacity: 1 !important; /* Firefox */
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    font-size: 13.5px;
    color: ${(props) => props.inputsFontColor};
  }
  &::-ms-input-placeholder {
    /* Microsoft Edge */
    font-size: 13.5px !important;
    color: ${(props) => props.inputsFontColor}!important;
  }
  &:focus {
    outline: none;
  }
`

const InputFullWidth = styled.input`
  box-sizing: border-box !important;
  width: 100% !important;
  height: 35px !important;
  padding: 0 !important;
  text-indent: 20px !important;
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.inputsFontColor}!important;
    opacity: 1 !important; /* Firefox */
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${(props) => props.inputsFontColor}!important;
  }
  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${(props) => props.inputsFontColor}!important;
  }
  &:focus {
    outline: none !important;
  }
`

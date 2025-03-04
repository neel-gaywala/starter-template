/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from "classnames";
import { Simplify } from "conditional-render-simplify";
import React from "react";
import CurrencyInput from "react-currency-input-field";
import { GroupBase, Options, OptionsOrGroups, PropsValue } from "react-select";
import Icons from "@/components/Icons";
import { FilterOptions, InputIcon, SelectOptions } from "@/utils/types/common";
import InputLabel from "../InputLabel";
import PhoneInput from "../PhoneInput";
import Select from "../Select";
import styles from "./Input.module.scss";

function Input({
  label = "",
  isRequired = false,
  showColon = false,
  placeholder = "",
  selectValue = null,
  value = "",
  onChange = () => {},
  isError = false,
  errorMessage = "",
  showErrorMessage = false,
  showHelperText = false,
  helperText = "",
  inputType = "string",
  startIcon = {},
  endIcon = {},
  isTextArea = false,
  options = [],
  getOptionLabel = undefined,
  getOptionValue = undefined,
  isSearchable = false,
  isMulti = false,
  isClearable = false,
  isDisabled = false,
  filterOption,
  size = "lg",
  labelSize = "md",
  rows = 4,
  maxTextLength = 2048,
  decimalScale = undefined,
  isDisableGroupSeparators = false,
  isOptionDisabled = undefined,
  isOptional = false,
  selectOptions = {},
  isAutoCompleteOff = false,
  testId = "",
  iconTestId = "",
  selectTestId = "",
  inputTestId = "",
  isTargetValue = false,
  isSupportOnlyNumber = false,
  className = "",
}: {
  label?: string;
  isRequired?: boolean;
  showColon?: boolean;
  placeholder?: string;
  selectValue?: PropsValue<object> | null;
  value?: string | number;
  onChange?: (v: any) => void;
  isError?: boolean;
  errorMessage?: string;
  showErrorMessage?: boolean;
  showHelperText?: boolean;
  helperText?: string;
  inputType?:
    | "string"
    | "number"
    | "amount"
    | "select"
    | "phone"
    | "password"
    | "percentage";
  startIcon?: InputIcon;
  endIcon?: InputIcon;
  isTextArea?: boolean;
  options?: OptionsOrGroups<object, GroupBase<object>>;
  getOptionLabel?: (o: any) => string;
  getOptionValue?: (o: any) => string;
  isSearchable?: boolean;
  isMulti?: boolean;
  isClearable?: boolean;
  isDisabled?: boolean;
  filterOption?: (option: FilterOptions, inputValue: string) => boolean;
  size?: "sm" | "md" | "lg";
  labelSize?: "sm" | "md";
  rows?: number;
  maxTextLength?: number;
  decimalScale?: number;
  isDisableGroupSeparators?: boolean;
  isOptionDisabled?: (option: object, selectValue: Options<object>) => boolean;
  isOptional?: boolean;
  selectOptions?: SelectOptions;
  isAutoCompleteOff?: boolean;
  testId?: string;
  iconTestId?: string;
  selectTestId?: string;
  inputTestId?: string;
  isTargetValue?: boolean;
  isSupportOnlyNumber?: boolean;
  className?: string;
}) {
  const isNumberInput = inputType === "number";
  const isAmountInput = inputType === "amount";
  const isSelectInput = inputType === "select";
  const isPhoneInput = inputType === "phone";
  const isPasswordInput = inputType === "password";
  const isPercentageInput = inputType === "percentage";

  function handleChange(e: any) {
    const value = e.target.value;
    if (inputType === "string" || (isPasswordInput && !isSupportOnlyNumber)) {
      onChange(isTargetValue ? e : value);
    } else if (isPercentageInput || isNumberInput) {
      if (isNaN(+value) || +value < 0 || (isPercentageInput && +value > 100)) {
        return;
      }
      onChange(+value);
    }
  }

  const inputClassName = classNames([
    styles.input,
    styles[size],
    {
      [styles.isError]: isError,
      [styles.startIcon]: !!startIcon.show,
      [styles.endIcon]: !!endIcon.show,
      [styles.textarea]: !!isTextArea,
    },
  ]);

  return (
    <div
      className={classNames(styles.mainContainer, className)}
      data-testid={testId}
    >
      {label && (
        <InputLabel
          label={label}
          isError={isError}
          type={labelSize}
          isRequired={isRequired}
          isOptional={isOptional}
          showColon={showColon}
        />
      )}
      <div className={styles.inputContainer}>
        <Simplify
          conditions={{
            select: isSelectInput,
            textarea: isTextArea,
            phoneNumber: isPhoneInput,
            amount: isAmountInput,
            percentage: isPercentageInput || isNumberInput,
            input: true,
          }}
          select={
            <Select
              options={options}
              value={selectValue}
              onChange={onChange}
              getOptionLabel={getOptionLabel}
              getOptionValue={getOptionValue}
              isSearchable={isSearchable}
              isClearable={isClearable}
              placeholder={placeholder}
              isError={isError}
              size={size}
              isDisabled={isDisabled}
              isMulti={isMulti}
              filterOption={filterOption}
              isOptionDisabled={isOptionDisabled}
              selectOptions={selectOptions}
              testId={selectTestId}
            />
          }
          textarea={
            <textarea
              rows={rows}
              className={inputClassName}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              disabled={isDisabled}
              maxLength={maxTextLength}
              required={isRequired}
              data-testid={inputTestId}
            />
          }
          phoneNumber={
            <PhoneInput
              value={value as string}
              onChange={onChange}
              isError={isError}
              isDisabled={isDisabled}
              size={size}
              testId={inputTestId}
            />
          }
          amount={
            <CurrencyInput
              value={value}
              onValueChange={(v) => {
                onChange(v);
              }}
              allowDecimals={!!decimalScale}
              decimalScale={decimalScale}
              className={inputClassName}
              placeholder={placeholder}
              disabled={isDisabled}
              disableGroupSeparators={isDisableGroupSeparators}
              required={isRequired}
              maxLength={maxTextLength}
            />
          }
          percentage={
            <input
              className={inputClassName}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              disabled={isDisabled}
              type="number"
              {...(isPercentageInput && {
                min: "0",
                max: "100",
              })}
              data-testid={inputTestId}
            />
          }
          input={
            <input
              className={inputClassName}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              disabled={isDisabled}
              type={isPasswordInput ? "password" : "text"}
              autoComplete={isAutoCompleteOff ? "off" : undefined}
              data-testid={inputTestId}
              maxLength={maxTextLength}
            />
          }
        />
        {!isSelectInput && startIcon.show && startIcon.type && (
          <Icons
            type={startIcon.type}
            size={startIcon.size}
            className={classNames(
              [
                styles.inputIcon,
                styles.startIcon,
                styles[size],
                startIcon.className,
              ],
              { "opacity-20": isDisabled }
            )}
            onClick={startIcon.onClick}
            id={iconTestId}
          />
        )}
        {!isSelectInput && endIcon.show && endIcon.type && (
          <Icons
            type={endIcon.type}
            size={endIcon.size}
            className={classNames(
              [
                styles.inputIcon,
                styles.endIcon,
                styles[size],
                endIcon.className,
              ],
              { "opacity-20": isDisabled }
            )}
            onClick={endIcon.onClick}
            id={iconTestId}
          />
        )}
        {showHelperText && helperText && (
          <InputLabel label={helperText} type="helper" />
        )}
        {isError && showErrorMessage && errorMessage && (
          <InputLabel label={errorMessage} type="error" />
        )}
      </div>
    </div>
  );
}

export default Input;

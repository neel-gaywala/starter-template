/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import RSelect, {
  ActionMeta,
  GroupBase,
  MultiValue,
  Options,
  OptionsOrGroups,
  PropsValue,
  SingleValue,
} from "react-select";
import { FilterOptions, SelectOptions } from "@/utils/types/common";

function Select({
  className = "",
  value = null,
  onChange = undefined,
  options = [],
  getOptionLabel = undefined,
  getOptionValue = undefined,
  filterOption = undefined,
  isSearchable = false,
  placeholder = "Select",
  isError = false,
  size = "lg",
  isDisabled = false,
  isMulti = false,
  isClearable = false,
  isOptionDisabled = undefined,
  selectOptions = {},
  testId = "",
}: {
  className?: string;
  value?: PropsValue<object>;
  onChange?: (
    newValue: MultiValue<object> | SingleValue<object>,
    actionMeta: ActionMeta<object>
  ) => void;
  options?: OptionsOrGroups<object, GroupBase<object>>;
  getOptionLabel?: (o: any) => string;
  getOptionValue?: (o: any) => string;
  filterOption?: (option: FilterOptions, inputValue: string) => boolean;
  isSearchable?: boolean;
  placeholder?: string;
  isError?: boolean;
  size?: "mxs" | "sm" | "md" | "lg";
  isDisabled?: boolean;
  isMulti?: boolean;
  isClearable?: boolean;
  isOptionDisabled?: (option: object, selectValue: Options<object>) => boolean;
  selectOptions?: SelectOptions;
  testId?: string;
}) {
  const color = "#ffffff";
  const borderColor = isError ? "#d63131" : "#ffffff67";
  const optionBgColor = "#333333";

  const fontSize =
    size === "lg"
      ? "16px"
      : size === "md"
        ? "13px"
        : size === "sm"
          ? "12px"
          : "10px";
  const height =
    size === "lg"
      ? "56px"
      : size === "md"
        ? "35px"
        : size === "sm"
          ? "30px"
          : "26px";
  const controlPadding =
    size === "lg"
      ? "3px 0px"
      : size === "md"
        ? "1px 0px"
        : size === "sm"
          ? "0 0px"
          : "0";
  const indicatorPadding =
    size === "lg"
      ? "8px"
      : size === "md"
        ? "6px"
        : size === "sm"
          ? "4px"
          : "2px";

  return (
    <RSelect
      options={options}
      value={value}
      onChange={onChange}
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      className={className}
      maxMenuHeight={200}
      placeholder={placeholder}
      isSearchable={isSearchable}
      isClearable={isClearable}
      isDisabled={isDisabled}
      isMulti={isMulti}
      closeMenuOnSelect={!isMulti}
      filterOption={filterOption}
      isOptionDisabled={isOptionDisabled}
      aria-label={testId}
      styles={{
        control: (base, { isFocused }) => ({
          ...base,
          backgroundColor: "#ffffff1e",
          border: "none",
          borderBottom: isFocused
            ? `1px solid #ffffff`
            : `1px solid ${borderColor}`,
          borderRadius: "8px",
          fontSize: selectOptions.fontSize ? selectOptions.fontSize : fontSize,
          fontWeight: selectOptions.fontWeight
            ? selectOptions.fontWeight
            : "400",
          boxShadow: isFocused ? "" : "",
          padding: controlPadding,
          minHeight: height,
          color: color,
          "&:hover": {
            borderBottom: `1px solid #ffffff`,
          },
        }),
        placeholder: (base) => ({
          ...base,
          color: "#9ca3af",
        }),
        indicatorSeparator: (base) => ({
          ...base,
          background: "none",
        }),
        dropdownIndicator: (base) => ({
          ...base,
          padding: indicatorPadding,
        }),
        clearIndicator: (base) => ({
          ...base,
          padding: indicatorPadding,
        }),
        singleValue: (base) => ({
          ...base,
          color: selectOptions.color ? selectOptions.color : color,
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: optionBgColor,
          zIndex: 5,
        }),
        menuList: (base) => ({
          ...base,
          "::-webkit-scrollbar": {
            width: "4px",
            height: "4px",
            borderRadius: "6px",
          },
          "::-webkit-scrollbar-track": {
            background: "#3e3e3e",
          },
          "::-webkit-scrollbar-thumb": {
            background: "#DAAB61",
            borderRadius: "6px",
          },
          WebkitOverflowScrolling: "touch",
          maxHeight: "200px",
          overflowY: "auto",
          padding: "1rem",
        }),
        option: (
          base,
          { isFocused, isSelected, isDisabled: isOptionDisabled }
        ) => ({
          ...base,
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "500",
          borderBottom: "1px solid #3e3e3e",
          background: isSelected || isFocused ? "none" : "none",
          color: isOptionDisabled
            ? "#b1b5c3"
            : isSelected || isFocused
              ? "#DAAB61"
              : color,
        }),
        multiValue: (base) => ({
          ...base,
          backgroundColor: "#DAAB61",
          borderRadius: "6px",
          color: "#333333",
        }),
        multiValueLabel: (base) => ({
          ...base,
          color: "#333333",
        }),
        multiValueRemove: (base) => ({
          ...base,
          color: "#333333",
          ":hover": {
            backgroundColor: "#DAAB61",
            color: "#ffffff",
          },
        }),
      }}
    />
  );
}

export default Select;

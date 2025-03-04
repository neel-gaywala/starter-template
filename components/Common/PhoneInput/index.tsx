"use client";
import classNames from "classnames";
import dynamic from "next/dynamic";
import React from "react";
import "react-phone-input-2/lib/style.css";

const MuiPhoneInput = dynamic(() => import("react-phone-input-2"), {
  ssr: false,
});

interface PhoneInputProps {
  value?: string;
  onChange?: (v: string) => void;
  isError?: boolean;
  isDisabled?: boolean;
  size?: "sm" | "md" | "lg";
  testId?: string;
}

function PhoneInput({
  value = "",
  onChange = () => {},
  isError = false,
  isDisabled = false,
  size = "lg",
  testId = "",
}: PhoneInputProps) {
  const defaultCountryCode = "us";
  return (
    <MuiPhoneInput
      country={defaultCountryCode}
      onlyCountries={["us"]}
      value={value}
      onChange={onChange}
      containerClass={classNames(
        "pp-phoneNumber",
        {
          "pp-phoneNumber-error": isError,
        },
        `pp-phoneNumber-${size}`,
      )}
      inputProps={{ "data-testid": testId }}
      disabled={isDisabled}
    />
  );
}

export default PhoneInput;

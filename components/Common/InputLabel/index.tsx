"use client";
import classNames from "classnames";
import React from "react";
import styles from "./InputLabel.module.scss";

function InputLabel({
  label,
  className = "",
  isRequired = false,
  type = "sm",
  isError = false,
  isOptional = false,
  showColon = false,
}: {
  label: string;
  className?: string;
  isRequired?: boolean;
  type?: "sm" | "md" | "error" | "helper";
  isError?: boolean;
  isOptional?: boolean;
  showColon?: boolean;
}) {
  return (
    <span
      className={classNames([
        className,
        styles.inputLabel,
        {
          [styles.sm]: type === "sm",
          [styles.md]: type === "md",
          [styles.errorText]: type === "error",
          [styles.helperText]: type === "helper",
          [styles.error]: isError,
        },
      ])}
    >
      {`${label}${showColon ? ":" : ""}`}
      {isRequired && <sup className="text-red">{"*"}</sup>}
      {isOptional && <span className="opacity-80">{" (optional)"}</span>}
    </span>
  );
}

export default InputLabel;

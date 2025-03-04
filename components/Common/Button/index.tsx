"use client";
 
import classNames from "classnames";
import React from "react";
import ButtonLoader from "@/components/Common/ButtonLoader";
import Icons from "@/components/Icons";
import { IconType } from "@/utils/types/common";
import styles from "./Button.module.scss";

function Button({
  className = "",
  label,
  onClick,
  isLoading = false,
  isDisabled = false,
  type = "primary",
  showStartIcon = false,
  showEndIcon = false,
  iconType,
  iconSize = "sm",
  testId = "",
  showFocusEffect = false,
}: {
  className?: string;
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  isDisabled?: boolean;
  type?: "primary" | "underlined-text" | "yellow" | "borderText";
  showStartIcon?: boolean;
  showEndIcon?: boolean;
  iconType?: IconType;
  iconSize?:
    | "xxs"
    | "mxs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl";
  testId?: string;
  showFocusEffect?: boolean;
}) {
  return (
    <button
      className={classNames(
        className,
        "relative",
        styles.button,
        {
          [styles.buttonFocus]: !!showFocusEffect,
        },
        {
          [styles.primary]: type === "primary",
          [styles.underlinedText]: type === "underlined-text",
          [styles.yellow]: type === "yellow",
          [styles.borderText]: type === "borderText",
        },
      )}
      type="button"
      onClick={onClick}
      disabled={isLoading || isDisabled}
      data-testid={testId}
    >
      <div
        className={classNames(styles.label, {
          "opacity-0": isLoading,
        })}
      >
        {showStartIcon && iconType && <Icons type={iconType} size={iconSize} />}
        {label}
        {showEndIcon && iconType && <Icons type={iconType} size={iconSize} />}
      </div>
      {isLoading && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ButtonLoader thick="3" />
        </div>
      )}
    </button>
  );
}

export default Button;

"use client";
import classNames from "classnames";
import React from "react";
import styles from "./ButtonLoader.module.scss";

function ButtonLoader({
  className = "",
  size = "16",
  thick = "2",
}: {
  className?: string;
  size?: "12" | "14" | "16" | "18" | "20" | "22" | "24" | "26";
  thick?: "2" | "3" | "4" | "5" | "6";
}) {
  return (
    <div
      className={classNames(
        styles.loader,
        className,
        styles[`size-${size}`],
        styles[`thick-${thick}`]
      )}
    />
  );
}

export default ButtonLoader;

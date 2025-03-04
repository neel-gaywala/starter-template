"use client";
import {
  ControlledMenu,
  MenuAlign,
  MenuDirection,
  MenuState,
  RectElement,
  useMenuState,
} from "@szhsin/react-menu";
import classNames from "classnames";
import React, { Fragment, useRef, useEffect } from "react";
import Icons from "@/components/Icons";

function Tooltip({
  verticalPosition = "top",
  horizontalPosition = "center",
  showDefaultIcon = false,
  menuButton = null,
  message = "",
  messageClassName = "",
  showChildren = false,
  children = null,
  size = "sm",
  isDisabled = false,
  customClasses = "",
  isAlwaysShow = false,
  boundingBoxRef = undefined,
  boundingBoxPadding = "",
  menuButtonClassName = "",
  testId = "",
  iconTypeId = "",
}: {
  verticalPosition?: MenuDirection | undefined;
  horizontalPosition?: MenuAlign | undefined;
  showDefaultIcon?: boolean;
  menuButton?: React.ReactNode;
  message?: string;
  messageClassName?: string;
  showChildren?: boolean;
  children?: React.ReactNode;
  size?: "sm" | "lg";
  isDisabled?: boolean;
  customClasses?: string;
  isAlwaysShow?: boolean;
  boundingBoxRef?: React.RefObject<Element> | undefined;
  boundingBoxPadding?: string;
  menuButtonClassName?: string;
  testId?: string;
  iconTypeId?: string;
}) {
  const isMobile = false;
  const ref = useRef<HTMLDivElement>(null);
  const [menuProps, toggleMenu] = useMenuState({ transition: false });

  useEffect(() => {
    toggleMenu(isAlwaysShow);
  }, [isAlwaysShow]);

  const handleToggle = (value: boolean) => () => {
    if (isMobile || isDisabled || isAlwaysShow) return;
    toggleMenu(value);
  };

  const handleClick = (value: MenuState | undefined) => () => {
    if (!isMobile || isDisabled || isAlwaysShow) return;
    toggleMenu(value === "closed");
  };

  return (
    <Fragment>
      <div
        ref={ref}
        onMouseEnter={handleToggle(true)}
        onMouseLeave={handleToggle(false)}
        onClick={handleClick(menuProps.state)}
        className={menuButtonClassName}
        data-testid={testId}
      >
        {showDefaultIcon ? <Icons id={iconTypeId} type="info" /> : menuButton}
      </div>
      <ControlledMenu
        direction={verticalPosition}
        align={horizontalPosition}
        arrow
        className={
          customClasses ||
          classNames({
            "react-menu-tooltip-primary": size === "lg",
            "react-menu-tooltip-primary-sm": size === "sm",
          })
        }
        anchorRef={ref as React.RefObject<Element | RectElement>}
        boundingBoxRef={boundingBoxRef}
        boundingBoxPadding={boundingBoxPadding}
        portal
        {...menuProps}
      >
        {showChildren ? (
          children
        ) : (
          <div
            className={classNames("px-2 text-center", messageClassName, {
              "typo-15-500": size === "lg",
              "typo-13-500": size === "sm",
            })}
          >
            {message}
          </div>
        )}
      </ControlledMenu>
    </Fragment>
  );
}

export default Tooltip;

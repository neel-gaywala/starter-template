import {
  Menu,
  MenuAlign,
  MenuButton,
  MenuDirection,
  MenuItem,
} from "@szhsin/react-menu";
import React from "react";
import Icons from "@/components/Icons";
import { IconSize, IconType } from "@/utils/types/common";

interface ActionItem {
  title: string;
  onClick?: () => void;
  className?: string;
  hide?: boolean;
  disabled?: boolean;
  showIcon?: boolean;
  iconType?: IconType;
  iconSize?: IconSize;
  iconClassName?: string;
}

function ActionMenu({
  children = null,
  className = "",
  actions = [],
  align = "end",
  direction = "bottom",
  isDisabled = false,
  showChildren = false,
  menuButton = null,
}: {
  children?: React.ReactNode;
  className?: string;
  actions: ActionItem[];
  align?: MenuAlign;
  direction?: MenuDirection;
  isDisabled?: boolean;
  showChildren?: boolean;
  menuButton?: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Menu
        align={align}
        direction={direction}
        arrow
        className="react-action-menu-options w-full typo-14-500 capitalize bg-lightGray text-white"
        menuButton={
          <MenuButton
            aria-label="menu-button"
            disabled={isDisabled}
            className="w-full"
          >
            {showChildren ? menuButton : children}
          </MenuButton>
        }
      >
        {showChildren ? children : null}
        {actions.map((item, index) => {
          if (item.hide) return;
          return (
            <MenuItem
              disabled={item.disabled}
              onClick={item.onClick}
              key={`menu-item-${index}`}
              className={item.className}
            >
              <div className="flex items-center gap-2">
                {item?.showIcon && item?.iconType && (
                  <div className="h-6 w-6 flex items-center justify-center bg-gray rounded-sm">
                    <Icons
                      type={item?.iconType}
                      size={item?.iconSize}
                      className={item?.iconClassName}
                    />
                  </div>
                )}
                {item.title}
              </div>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}

export default ActionMenu;

import classNames from "classnames";
import React from "react";
import Icons from "@/components/Icons";

function Checkbox({
  isChecked = false,
  onChange = () => {},
  title = "",
  containerClassName = "",
  titleClassName = "text-white opacity-80",
  isDisabled = false,
  id = "",
}: {
  isChecked?: boolean;
  onChange?: () => void;
  title?: string;
  containerClassName?: string;
  titleClassName?: string;
  isDisabled?: boolean;
  id?: string;
}) {
  return (
    <div className={classNames("flex items-center gap-2", containerClassName)}>
      <Icons
        id={id}
        onClick={!isDisabled ? () => onChange() : () => {}}
        type={isChecked ? "checkedOn" : "checkedOff"}
        className={classNames("flex-shrink-0", {
          "cursor-pointer": !isDisabled,
          "text-yellow": isChecked,
          "text-[#D4D5D6]": !isChecked,
          "opacity-20": isDisabled,
        })}
        size="5xl"
      />
      {title && <span className={titleClassName}>{title}</span>}
    </div>
  );
}

export default Checkbox;

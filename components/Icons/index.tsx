"use client";

import classNames from "classnames";
import { Simplify } from "conditional-render-simplify";
import React from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUpload,
} from "react-icons/ai";
import {
  FaBuilding,
  FaCloudDownloadAlt,
  FaPhoneAlt,
  FaSave,
  FaShareAlt,
  FaUserCog,
} from "react-icons/fa";
import { FaRegFileExcel, FaRegFilePdf } from "react-icons/fa6";
import { GoShieldLock } from "react-icons/go";
import { GrUserAdmin } from "react-icons/gr";
import {
  IoChevronBackOutline,
  IoChevronDownOutline,
  IoChevronForwardOutline,
  IoCloseCircleOutline,
  IoDocumentTextOutline,
  IoLocation,
} from "react-icons/io5";
import { LuMailX } from "react-icons/lu";
import {
  MdCheckBox,
  MdOutgoingMail,
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineSearchOff,
  MdRadioButtonChecked,
  MdRadioButtonUnchecked,
  MdUnfoldMore,
  MdVerified,
} from "react-icons/md";
import { RiProhibitedLine } from "react-icons/ri";
import {
  TbHome,
  TbUser,
  TbChevronRight,
  TbRosetteDiscountCheckFilled,
  TbMenu2,
  TbLogout2,
  TbLayoutSidebarLeftCollapseFilled,
  TbInfoSquareRounded,
  TbDotsVertical,
  TbUserFilled,
  TbMailFilled,
  TbArrowNarrowRight,
  TbCurrencyDollar,
  TbCopy,
  TbMail,
  TbEdit,
  TbTrash,
  TbMailPlus,
} from "react-icons/tb";
import { VscPercentage } from "react-icons/vsc";
import { IconType, IconSize } from "@/utils/types/common";
import styles from "./Icon.module.scss";

function Icons({
  type,
  size = "xs",
  className = "",
  onClick,
  id = "",
}: {
  type: IconType;
  size?: IconSize;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  id?: string;
}) {
  const commonClass = classNames([
    className,
    styles.icon,
    styles[`size-${size}`],
  ]);

  const iconProps = {
    className: commonClass,
    onClick: onClick,
    "data-testid": id,
  };

  return (
    <Simplify
      conditions={type}
      dashboard={<TbHome {...iconProps} />}
      user={<TbUser {...iconProps} />}
      user-fill={<TbUserFilled {...iconProps} />}
      right-arrow={<TbChevronRight {...iconProps} />}
      right-arrow-long={<TbArrowNarrowRight {...iconProps} />}
      verified={<TbRosetteDiscountCheckFilled {...iconProps} />}
      menu={<TbMenu2 {...iconProps} />}
      logout={<TbLogout2 {...iconProps} />}
      close={<IoCloseCircleOutline {...iconProps} />}
      collapse={<TbLayoutSidebarLeftCollapseFilled {...iconProps} />}
      info={<TbInfoSquareRounded {...iconProps} />}
      actionsMenu={<TbDotsVertical {...iconProps} />}
      moreArrows={<MdUnfoldMore {...iconProps} />}
      eyeClose={<AiOutlineEyeInvisible {...iconProps} />}
      eyeOpen={<AiOutlineEye {...iconProps} />}
      mail={<TbMailFilled {...iconProps} />}
      phone={<FaPhoneAlt {...iconProps} />}
      dollar={<TbCurrencyDollar {...iconProps} />}
      percentage={<VscPercentage {...iconProps} />}
      radioOff={<MdRadioButtonUnchecked {...iconProps} />}
      radioOn={<MdRadioButtonChecked {...iconProps} />}
      copy={<TbCopy {...iconProps} />}
      email={<TbMail {...iconProps} />}
      document={<IoDocumentTextOutline {...iconProps} />}
      edit={<TbEdit {...iconProps} />}
      delete={<TbTrash {...iconProps} />}
      back={<IoChevronBackOutline {...iconProps} />}
      forward={<IoChevronForwardOutline {...iconProps} />}
      down={<IoChevronDownOutline {...iconProps} />}
      pdf={<FaRegFilePdf {...iconProps} />}
      excel={<FaRegFileExcel {...iconProps} />}
      save={<FaSave {...iconProps} />}
      checkedOff={<MdOutlineCheckBoxOutlineBlank {...iconProps} />}
      checkedOn={<MdCheckBox {...iconProps} />}
      years={
        <span className={commonClass} data-testid={id}>
          {"Years"}
        </span>
      }
      building={<FaBuilding {...iconProps} />}
      userSettings={<FaUserCog {...iconProps} />}
      shield={<GoShieldLock {...iconProps} />}
      verify={<MdVerified {...iconProps} />}
      upload={<AiOutlineUpload {...iconProps} />}
      searchOff={<MdOutlineSearchOff {...iconProps} />}
      invite={<TbMailPlus {...iconProps} />}
      role={<GrUserAdmin {...iconProps} />}
      deactivate={<RiProhibitedLine {...iconProps} />}
      cancelInvite={<LuMailX {...iconProps} />}
      resend={<MdOutgoingMail {...iconProps} />}
      share={<FaShareAlt {...iconProps} />}
      download={<FaCloudDownloadAlt {...iconProps} />}
      location={<IoLocation {...iconProps} />}
    />
  );
}

export default Icons;

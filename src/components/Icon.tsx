import Icons from "@/assets";
import Image from "next/image";
import { HTMLAttributes } from "react";

type TIconProps = {
  iconName: keyof typeof Icons;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const Icon = ({ iconName, className, ...props }: TIconProps) => {
  const SvgIcon = Icons[iconName];

  if (SvgIcon) {
    return (
      <Image
        src={SvgIcon.src}
        alt={iconName}
        width={SvgIcon.width}
        height={SvgIcon.height}
        className={className}
        {...props}
      />
    );
  }

  console.warn(`Icon "${iconName}" not found in Icons collection.`);
  return (
    <div className={className} {...props}>
      {iconName} not found
    </div>
  );
};

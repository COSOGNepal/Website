import Icons from "@assets/index";
import { HTMLAttributes, ReactNode } from "react";


type TIconProps = {
    iconName: keyof typeof Icons,
    className?: string,
} & HTMLAttributes<ReactNode>

export const Icon = ({ iconName, className, ...props }: TIconProps) => {
    const SvgIcon = Icons[iconName];

    if (SvgIcon) return (
        <SvgIcon className={className} {...props} />
    )
    return <div> {iconName} not found </div>
}

import Icons from "@assets/index";


type TIconProps = {
    iconName: keyof typeof Icons,
    className?: string,
}


export const Icon = ({ iconName, className }: TIconProps) => {
    const SvgIcon = Icons[iconName];

    if (SvgIcon) return (
        <SvgIcon className={className} />
    )
    return <div> {iconName} not found </div>
}

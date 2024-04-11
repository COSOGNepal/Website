import * as Icons from "../../public/assets/icons/index";

type TpropIcons = {
    iconName: string,
    classname: string,
    [key: string]: string
}
const Icon = ({ iconName: string, classname = "", ...props }: TpropIcons) => {
    const Icon = Icons[iconName];
    if (Icon === null) return;
    return <Icon classname={classname} {...props} />
}


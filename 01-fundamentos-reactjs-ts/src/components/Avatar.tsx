import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: IAvatarProps) {
    return (
        <img
            className={`${styles.avatar} ${hasBorder ? styles.avatarWithBorder : ""
                }`}
            {...props}
        />
    );
}

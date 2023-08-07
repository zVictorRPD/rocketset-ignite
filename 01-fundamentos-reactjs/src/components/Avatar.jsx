import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src }) {
    return (
        <img
            className={`${styles.avatar} ${
                hasBorder ? styles.avatarWithBorder : ""
            }`}
            src={src}
        />
    );
}

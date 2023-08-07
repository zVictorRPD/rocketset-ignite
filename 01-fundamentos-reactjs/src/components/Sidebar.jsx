import React from "react";
import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.card}>
                <img
                    className={styles.header}
                    src="https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                />
                <div className={styles.content}>
                    <Avatar src="https://github.com/zvictorrpd.png" />
                    <div className={styles["profile-info"]}>
                        <strong>Victor Martins</strong>
                        <span>Developer</span>
                    </div>
                </div>
                <footer className={styles.footer}>
                    <button>
                        <PencilLine size={20} />
                        Editar seu perfil
                    </button>
                </footer>
            </div>
        </aside>
    );
}

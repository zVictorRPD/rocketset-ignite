import { useState } from "react";
import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";

interface ICommentProps {
    content: string;
    onDeleteComment: (commentToDelete: string) => void;
}

export function Comment({ content, onDeleteComment }: ICommentProps) {
    const [likeCount, setLikeCount] = useState(0);
    function handleDeleteComment() {
        onDeleteComment(content);
    }
    function handleLikeComment() {
        setLikeCount((state) => state + 1);
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/zvictorrpd.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Victor Martins</strong>
                            <time
                                dateTime="2023-08-06 09:40"
                                className={styles.time}
                            >
                                Públicado há 1h
                            </time>
                        </div>
                        <button
                            title="Deletar comentário"
                            onClick={handleDeleteComment}
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}

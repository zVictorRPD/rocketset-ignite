import React, { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState(["Post muito legal!!"]);
    const [newComment, setNewComment] = useState("");
    const publishedDateFormated = format(
        publishedAt,
        "d 'de' LLLL 'às' HH:mm'h'",
        {
            locale: ptBR,
        }
    );
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment(event) {
        event.preventDefault();
        setComments([...comments, newComment]);
        setNewComment("");
    }

    function handleOnChangeNewComment(event) {
        event.target.setCustomValidity("");
        setNewComment(event.target.value);
    }

    function deleteComment(commentToDelete) {
        const commentsFiltered = comments.filter(
            (comment) => comment !== commentToDelete
        );
        setComments(commentsFiltered);
    }

    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity("Escreva um comentário...");
    }

    const isNewCommentEmpty = newComment.length === 0;

    return (
        <div className={styles.card}>
            <header>
                <div className={styles.user}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.info}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time
                    dateTime={publishedAt.toISOString()}
                    title={publishedDateFormated}
                    className={styles.time}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <main>
                {content.map((item) => {
                    if (item.type === "paragraph") {
                        return <p key={item.content}>{item.content}</p>;
                    } else if (item.type === "link") {
                        return (
                            <p key={item.content}>
                                <a href={"#"} target="_blank" rel="noreferrer">
                                    {item.content}
                                </a>
                            </p>
                        );
                    }
                })}
            </main>
            <footer>
                <form onSubmit={handleCreateNewComment} className={styles.form}>
                    <p>Deixe seu feedback</p>
                    <textarea
                        name="comment"
                        placeholder="Escreva um comentário..."
                        value={newComment}
                        onChange={handleOnChangeNewComment}
                        required
                        onInvalid={handleNewCommentInvalid}
                    ></textarea>
                    <button disabled={isNewCommentEmpty}>Publicar</button>
                </form>
                <div className={styles.commentList}>
                    {comments.map((comment) => (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    ))}
                </div>
            </footer>
        </div>
    );
}

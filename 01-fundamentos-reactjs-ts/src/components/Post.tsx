import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

interface IAuthor {
    name: string;
    role: string;
    avatarUrl: string;
}

interface IContent {
    type: "paragraph" | "link";
    content: string;
}

export interface IPost {
    id: number;
    author: IAuthor;
    content: IContent[];
    publishedAt: Date;
}

interface IPostProps {
    post: IPost
}

export function Post({ post }: IPostProps) {
    const [comments, setComments] = useState(["Post muito legal!!"]);
    const [newComment, setNewComment] = useState("");
    const publishedDateFormated = format(
        post.publishedAt,
        "d 'de' LLLL 'às' HH:mm'h'",
        {
            locale: ptBR,
        }
    );
    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        setComments([...comments, newComment]);
        setNewComment("");
    }

    function handleOnChangeNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("");
        setNewComment(event.target.value);
    }

    function deleteComment(commentToDelete: string) {
        const commentsFiltered = comments.filter(
            (comment) => comment !== commentToDelete
        );
        setComments(commentsFiltered);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("Escreva um comentário...");
    }

    const isNewCommentEmpty = newComment.length === 0;

    return (
        <div className={styles.card}>
            <header>
                <div className={styles.user}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.info}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time
                    dateTime={post.publishedAt.toISOString()}
                    title={publishedDateFormated}
                    className={styles.time}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <main>
                {post.content.map((item) => {
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

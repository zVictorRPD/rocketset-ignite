import { Post, IPost } from "./components/Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
export function App() {
    const posts: IPost[] = [
        {
            id: 1,
            author: {
                avatarUrl: "https://github.com/diego3g.png",
                name: "Diego Fernandes",
                role: "CTO @Rocketseat",
            },
            content: [
                { type: "paragraph", content: "Fala galera 👋" },
                {
                    type: "paragraph",
                    content:
                        "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
                },
                { type: "link", content: "jane.design/doctorcare" },
            ],
            publishedAt: new Date("2022-05-03 20:00:00"),
        },
        {
            id: 2,
            author: {
                avatarUrl: "https://github.com/maykbrito.png",
                name: "Mayk Brito",
                role: "Educator @Rocketseat",
            },
            content: [
                { type: "paragraph", content: "Fala galera 👋" },
                {
                    type: "paragraph",
                    content:
                        "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
                },
                { type: "link", content: "jane.design/doctorcare" },
            ],
            publishedAt: new Date("2022-05-10 20:00:00"),
        },
    ];
    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            post={post}
                        />
                    ))}
                </main>
            </div>
        </>
    );
}

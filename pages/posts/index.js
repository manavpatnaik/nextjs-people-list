import Link from "next/link";
import styles from "../../styles/People.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Link href={"/posts/" + post.id} key={post.id}>
          <a className={styles.single}>
            <h3>{post.title}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Posts;

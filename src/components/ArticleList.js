import Article from "./Article";

function ArticleList ({posts}) {
    return (
        <main>
            {posts.map((post, index) => (
                <Article
                key={post.id}
                title={post.title}
                date={post.date}
                preview={post.preview}
                minutesToRead={post.minutesToRead}
              />
                ))}
        </main>
        );
}

export default ArticleList;
// const getPosts = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//     if(!res.ok){
//         throw new Error('failed to fetch posts')
//     }

//     return res.json();
// }

const getPosts = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        console.log(res);
        return res.json();
    }
    catch (err) {
        throw new Error('Failed to fetch data');
    }
};

const PostsPage = async () => {

    const posts = await getPosts();

    return (
        <div>
            <h2 className="text-4xl">Posts : {posts.length}</h2>
        </div>
    );
};

export default PostsPage;
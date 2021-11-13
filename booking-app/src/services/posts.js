export const fetchPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = response.json();
        return data;
    } catch (error) {
        // console.error(error);
        // https://sentry.io/welcome/
    }
}
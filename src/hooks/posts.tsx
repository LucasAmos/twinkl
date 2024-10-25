import { useState, useEffect } from 'react';
import { Post } from '../types';
import Requests from '../requests';

/**
 * Filter array of posts to posts that have a titcle containing the searchString
 * @param posts
 * @param searchString
 * @returns array of posts
 */
function filterPostsByTitle(posts: Post[], searchString: string): Post[] {
  return posts.filter((post) => post.title.toLowerCase().includes(searchString.toLowerCase()));
}

export function usePosts(input: string) {
  const [posts, setPosts] = useState<Post[]>([]);
  const requestClient = new Requests('https://jsonplaceholder.typicode.com');

  useEffect(() => {
    async function fetchPosts() {
      const posts = await requestClient.getPosts();
      setPosts(posts);
    }
    fetchPosts();
  }, []);

  /**
   * Delete post by ID and remove from state
   * @param id Post id
   */
  async function deletePost(id: number) {
    await requestClient.deletePost(id);
    const updatedPosts = posts.filter((item) => item.id !== id);
    setPosts(updatedPosts);
  }
  if (input) {
    return { posts: filterPostsByTitle(posts, input), deletePost };
  }

  return { posts, deletePost };
}

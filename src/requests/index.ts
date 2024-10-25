import { Post } from '../types';

class Requests {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Get all posts
   * @returns Array of post data
   */
  async getPosts(): Promise<Post[]> {
    const res = await fetch(`${this.baseUrl}/posts`);
    return res.json();
  }

  /**
   * Delete post by ID
   * @param id
   */
  async deletePost(id: number) {
    return fetch(`${this.baseUrl}/posts/${id}`, {
      method: 'DELETE',
    });
  }
}

export default Requests;

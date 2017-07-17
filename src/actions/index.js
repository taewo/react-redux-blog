import axios from 'axios';
import { API_URL, API_KEY} from '../../config';
export const FETCH_POSTS = 'fetch_posts';

export function fetchPosts() {
  const request = axios.get(`${API_URL}/posts${API_KEY}`);
  
  return {
    type: FETCH_POSTS,
    payload: request,
  }
}

import { washerPosts } from './posts-washer.mjs';
import { airconPosts } from './posts-aircon.mjs';
import { fridgePosts } from './posts-fridge.mjs';
import { commonPosts } from './posts-common.mjs';

export const posts = [...washerPosts, ...airconPosts, ...fridgePosts, ...commonPosts]
  // 최신순
  .sort((a, b) => b.date.localeCompare(a.date));

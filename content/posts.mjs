import { washerPosts } from './posts-washer.mjs';
import { airconPosts } from './posts-aircon.mjs';
import { fridgePosts } from './posts-fridge.mjs';
import { commonPosts } from './posts-common.mjs';
import { tvPosts } from './posts-tv.mjs';
import { cleanerPosts } from './posts-cleaner.mjs';
import { kitchenPosts } from './posts-kitchen.mjs';
import { digitalPosts } from './posts-digital.mjs';

export const posts = [
  ...washerPosts,
  ...airconPosts,
  ...fridgePosts,
  ...commonPosts,
  ...tvPosts,
  ...cleanerPosts,
  ...kitchenPosts,
  ...digitalPosts,
]
  // 최신순
  .sort((a, b) => b.date.localeCompare(a.date));


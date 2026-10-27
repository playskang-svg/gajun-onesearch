// One publication decision for every build surface; a character count alone is not a quality review.
export const REDIRECTS = {
  '/guide/humidifier-types-comparison-guide/': '/guide/humidifier-types-guide/',
};
export const plainLength = html => String(html).replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim().length;
export const isPublicPost = post => !REDIRECTS[`/guide/${post.slug}/`] && plainLength(post.body) >= 1000;

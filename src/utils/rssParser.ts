// utils/rssParser.js
const Parser = require('rss-parser');
const parser = new Parser();

export async function fetchRSS(url) {
  try {
    const feed = await parser.parseURL(url);
    return feed.items;
  } catch (error) {
    console.error('Error parsing RSS feed:', error);
    return [];
  }
}
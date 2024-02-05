import OpenAI from "openai";
import { useEffect, useState } from 'react';
import { fetchRSS } from '../../utils/rssParser';

const openai = new OpenAI({
    apiKey: "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", dangerouslyAllowBrowser: true  // Replace with your OpenAI API key
});

export default async function handler() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const rssUrl = 'https://esportsinsider.com/feed'; // Replace with your RSS feed URL
      const fetchedPosts = await fetchRSS(rssUrl);
      setPosts(fetchedPosts);
    }
    
    console.log(setPosts);
    fetchPosts();
  }, []);

  // const prompt = `Summarise the following article: ${title}\n\n${content}`;

  // const chatCompletion = await openai.chat.completions.create({
  //   messages: [
  //     {
  //       role: 'user',
  //       content: prompt,
  //     },
  //   ],
  //   model: 'gpt-3.5-turbo',
  // });

  // const summary = chatCompletion.choices[0].message.content;
}
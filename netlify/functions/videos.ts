import { Handler } from '@netlify/functions';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const handler: Handler = async () => {
  try {
    const contentDir = path.join(process.cwd(), 'content', 'videos');
    
    if (!fs.existsSync(contentDir)) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([])
      };
    }

    const files = fs.readdirSync(contentDir);
    const videos = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const filePath = path.join(contentDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(content);
        
        return {
          title: data.title || '',
          description: data.description || '',
          videoFile: data.videoFile || '',
          thumbnail: data.thumbnail || '',
          category: data.category || '',
          duration: data.duration || '',
          date: data.date || '',
          nsfw: data.nsfw || false,
          tags: data.tags || []
        };
      });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(videos)
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Failed to load videos' })
    };
  }
};

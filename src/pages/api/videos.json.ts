import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const GET: APIRoute = async () => {
  try {
    const contentDir = path.join(process.cwd(), 'content', 'videos');
    
    // Check if directory exists
    if (!fs.existsSync(contentDir)) {
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
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

    return new Response(JSON.stringify(videos), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error reading videos:', error);
    return new Response(JSON.stringify([]), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const GET: APIRoute = async () => {
  const videosDirectory = path.join(process.cwd(), 'src/content/videos');
  const filenames = fs.readdirSync(videosDirectory);

  const videos = filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(videosDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return data;
    });

  return new Response(JSON.stringify(videos), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

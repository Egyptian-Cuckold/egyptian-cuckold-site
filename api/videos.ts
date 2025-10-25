import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const config = {
  runtime: 'nodejs',
};

export default async function handler(req: NextRequest) {
  try {
    const contentDir = path.join(process.cwd(), 'public/content/videos');
    
    if (!fs.existsSync(contentDir)) {
      return NextResponse.json([]);
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

    return NextResponse.json(videos);
  } catch (error) {
    console.error('Error reading videos:', error);
    return NextResponse.json(
      { error: 'Failed to read videos' },
      { status: 500 }
    );
  }
}

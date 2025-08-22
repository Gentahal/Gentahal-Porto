import { writeFile } from 'fs/promises';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const tags = JSON.parse(formData.get('tags') as string);
  const year = formData.get('year') as string;
  const link = formData.get('link') as string;
  const github = formData.get('github') as string;

  const image = [];
  const imageFiles = formData.getAll('images');

  for (const file of imageFiles) {
    if (file instanceof Blob) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = `${Date.now()}-${file.name}`;
      const path = join(process.cwd(), 'public/uploads', filename);
      await writeFile(path, buffer);
      image.push(`/uploads/${filename}`);
    }
  }

  const project = await prisma.porto.create({
    data: {
      title,
      description,
      tags,
      image, 
      link,
      github,
      year,
    }
  });

  return NextResponse.json({ success: true, project });
}
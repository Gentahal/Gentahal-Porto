import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const data = await prisma.porto.create({
      data: {
        title: body.title,
        description: body.description,
        tags: body.tags, // array
        image: body.image,
        link: body.link,
        github: body.github,
        year: body.year,
      },
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('❌ Failed to create portfolio:', error);
    return NextResponse.json({ success: false, error: 'Failed to create portfolio' }, { status: 500 });
  }
}

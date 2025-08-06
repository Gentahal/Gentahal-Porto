// // app/api/projects/route.ts
// import { NextResponse } from 'next/server'
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// // GET all projects
// export async function GET() {
//   const projects = await prisma.project.findMany()
//   return NextResponse.json(projects)
// }

// // POST create new project
// export async function POST(req: Request) {
//   const body = await req.json()
//   const project = await prisma.project.create({
//     data: {
//       title: body.title,
//       description: body.description,
//       link: body.link,
//     },
//   })
//   return NextResponse.json(project)
// }

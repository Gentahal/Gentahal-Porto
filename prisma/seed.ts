// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
  await prisma.porto.createMany({
    data: [
      {
        title: "E-Commerce Platform Redesign",
        description: "Complete redesign of legacy e-commerce platform with modern UX patterns and improved conversion flow.",
        tags: ["UI/UX Design", "React", "Node.js"],
        image: "/project-ecommerce.jpg",
        link: "https://example.com",
        github: "https://github.com/yourrepo/ecommerce",
        year: "2023"
      },
      {
        title: "Health & Wellness Mobile App",
        description: "End-to-end design and development of a health tracking application with personalized recommendations.",
        tags: ["Mobile Design", "Flutter", "Firebase"],
        image: "/project-health.jpg",
        link: "https://example.com",
        github: "https://github.com/yourrepo/healthapp",
        year: "2022"
      },
      {
        title: "Corporate Design System",
        description: "Created a comprehensive design system for enterprise use across multiple products and platforms.",
        tags: ["Design System", "Figma", "Storybook"],
        image: "/project-design-system.jpg",
        link: "https://example.com",
        github: "https://github.com/yourrepo/designsystem",
        year: "2022"
      }
    ]
  })
}

main()
  .then(() => console.log("✅ Seeding complete"))
  .catch((e) => {
    console.error("❌ Seeding failed", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

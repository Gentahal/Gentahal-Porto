import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'] // Aktifkan logging
})

async function main() {
  try {
    console.log('🔍 Memeriksa koneksi database...')
    await prisma.$connect()
    console.log('✅ Terhubung ke database')

    console.log('🧹 Membersihkan data lama...')
    const deleteCount = await prisma.porto.deleteMany()
    console.log(`🗑️ ${deleteCount.count} data lama dihapus`)

    console.log('🌱 Memulai proses seeding...')
    
    const projects = [
      {
        title: "Project 1",
        description: "Deskripsi project 1",
        tags: ["React", "Node.js"],
        image: ["/uploads/project1.jpg"],
        link: "https://example.com/1",
        github: "https://github.com/example/1",
        year: "2023"
      },
      {
        title: "Project 2", 
        description: "Deskripsi project 2",
        tags: ["Flutter", "Firebase"],
        image: ["/uploads/project2.jpg"],
        link: "https://example.com/2", 
        github: "https://github.com/example/2",
        year: "2022"
      }
    ]

    for (const project of projects) {
      console.log(`➕ Menambahkan project: ${project.title}`)
      try {
        const result = await prisma.porto.create({ 
          data: project 
        })
        console.log(`✔️ Berhasil: ID ${result.id}`)
      } catch (e) {
        console.error(`❌ Gagal menambahkan ${project.title}:`, e)
      }
    }

    const total = await prisma.porto.count()
    console.log('🎉 Seeding selesai!')
    console.log(`📊 Total data sekarang: ${total}`)
    
    if (total === 0) {
      throw new Error('Seeding gagal - tidak ada data yang ditambahkan')
    }
  } catch (e) {
    console.error('💥 ERROR UTAMA:', e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  useEffect(() => {
    const isAuth = localStorage.getItem('admin_auth')
    if (!isAuth) {
      router.push('/admin/login')
    } else {
      // Simpan cookie untuk dibaca middleware
      document.cookie = 'admin_auth=true; path=/'
    }
  }, [])

  return <>{children}</>
}

// app/work/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Projects | Genta Halilintar - Fullstack Developer',
  description: 'Showcase of professional projects by Genta Halilintar',
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
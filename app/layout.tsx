import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';

// RootLayoutコンポーネント。全ページで共通のレイアウトを定義する。
export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className = {`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

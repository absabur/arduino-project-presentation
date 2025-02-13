import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Parking Slot & Distance Management System",
  description: "Parking Slot & Distance Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav className="navbar">
          <Link href="/">Home</Link>
          {/* <Link href="/project-plan">Plan</Link> */}
          {/* <Link href="/project-process">Process</Link> */}
          {/* <Link href="/images">Images</Link> */}
          <Link href="/display">Display</Link>
          <Link href="/admin">Admin</Link>
        </nav>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}

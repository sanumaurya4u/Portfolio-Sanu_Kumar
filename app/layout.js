import './globals.css';

export const metadata = {
  title: 'Sanu Kumar — Full-Stack Developer & Software Engineer',
  description: 'Portfolio of Sanu Kumar — Computer Science undergraduate at UIET-MDU Rohtak, Full Stack Web Developer, and AI Automation Enthusiast. Clean, editorial developer portfolio.',
  keywords: ['Sanu Kumar', 'Portfolio', 'Full Stack Developer', 'Software Engineer', 'React', 'Next.js', 'React Router', 'Tailwind CSS', 'Node.js', 'Python', 'C++'],
  authors: [{ name: 'Sanu Kumar' }],
  icons: {
    icon: '/portfolio_icon.svg.svg',
  },
  openGraph: {
    title: 'Sanu Kumar — Full-Stack Developer & Software Engineer',
    description: 'B.Tech CSE Undergraduate · UIET MDU Rohtak · Full-Stack Developer & Freelancer',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif' }} className="min-h-screen bg-[#FAF7F2] text-[#1F1712] antialiased">
        {children}
      </body>
    </html>
  );
}

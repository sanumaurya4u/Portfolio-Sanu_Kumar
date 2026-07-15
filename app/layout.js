import './globals.css';

export const metadata = {
  title: 'Sanu Kumar | Portfolio - B.Tech CSE Student & Full Stack Developer',
  description: 'Portfolio of Sanu Kumar - B.Tech CSE student at UIET-MDU Rohtak, Full Stack Web Developer, DSA Enthusiast, and Freelancer. Explore my projects, skills, and get in touch.',
  keywords: ['Sanu Kumar', 'Portfolio', 'Full Stack Developer', 'B.Tech CSE', 'Web Developer', 'React', 'Next.js', 'Python', 'Java', 'C++'],
  authors: [{ name: 'Sanu Kumar' }],
  icons: {
    icon: '/portfolio_icon.svg.svg',
  },
  openGraph: {
    title: 'Sanu Kumar | Portfolio',
    description: 'B.Tech CSE Student & Full Stack Developer',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Inter, sans-serif' }} className="antialiased">
        {children}
      </body>
    </html>
  );
}

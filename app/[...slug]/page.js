import PortfolioApp from '@/components/portfolio/PortfolioApp';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const slug = params?.slug?.[0] || '';
  const pageTitle = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : 'Portfolio';

  return {
    title: `${pageTitle} — Sanu Kumar | Full-Stack Developer`,
    description: `Sanu Kumar — ${pageTitle} page. Computer Science undergraduate at UIET MDU Rohtak, Full Stack Web Developer.`,
  };
}

export default function CatchAllPage() {
  return <PortfolioApp />;
}

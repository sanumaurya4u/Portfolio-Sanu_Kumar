'use client';

import { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';
import ClientRouter from './ClientRouter';

export default function PortfolioApp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <span className="w-11 h-11 rounded-full bg-[#F2ECE2] border border-[#E0D5C3] flex items-center justify-center text-[#E45D25]">
            <Code2 className="w-5 h-5 stroke-[2.25]" />
          </span>
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold tracking-tight text-[#1F1712]">Sanu Kumar</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E45D25]" />
          </div>
        </div>
      </div>
    );
  }

  return <ClientRouter />;
}

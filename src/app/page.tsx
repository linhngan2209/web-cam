'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { checkToken } from '../utils/check_token';
import { useHardwareQuery } from '@/hooks/useHardwareQuery';
import Loading from '@/components/Loading';

export default function HomePage() {
  const router = useRouter();
  const { hardwares, isLoading: isHardwareLoading } = useHardwareQuery(true);

  useEffect(() => {
    checkToken(router, hardwares);
  }, [router, hardwares]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Loading />
    </div>
  );
}
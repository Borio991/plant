'use client';
import AlertModal from '@/components/modals/alert-modal';
import React, { useEffect, useState } from 'react';

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return <AlertModal isOpen={true} onClose={() => null} loading={false} onConfirm={() => {}} />;
}

export default ModalProvider;

'use client';

export default function ErrorBoundary({ error }) {
  return <>{error.message}</>;
}

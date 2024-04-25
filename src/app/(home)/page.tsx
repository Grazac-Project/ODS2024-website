import dynamic from 'next/dynamic';

export const runtime = 'edge';

const LandingPage = dynamic(() => import('./home'), {
  ssr: false,
  loading: () => <>..loading</>
});

export default async function Home() {
  return <LandingPage />;
}
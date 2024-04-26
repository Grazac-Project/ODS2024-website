import dynamic from "next/dynamic";
import SplashScreen from "@/components/SplashScreen";

export const runtime = "edge";

const LandingPage = dynamic(() => import("./home"), {
  ssr: false,
  loading: () => <SplashScreen />,
});

export default async function Home() {
  return <LandingPage />;
}

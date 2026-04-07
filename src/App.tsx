import { Analytics } from '@vercel/analytics/react';
import PhonipinoWebsite from "./components/PhonipinoWebsite";

export default function App() {
  return (
    <>
      <PhonipinoWebsite />
      <Analytics />
    </>
  );
}
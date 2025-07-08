import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <footer style={{ background: '#f8f8f8', color: '#222', padding: '32px 0', marginTop: 64, borderTop: '1px solid #eee', textAlign: 'center', fontSize: '1rem' }}>
        <div style={{ marginBottom: 8 }}>
          <a href="https://www.instagram.com/casafioresigacik/" target="_blank" rel="noopener noreferrer" style={{ color: '#e59236', textDecoration: 'none', fontWeight: 600 }}>
            @casafioresigacik
          </a>
        </div>
        <div style={{ marginBottom: 4 }}>
          Sığacık, 127. Sk. No: 21, 35460 Seferihisar/İzmir
        </div>
        <div>
          0536 449 11 12
        </div>
      </footer>
    </>
  );
}

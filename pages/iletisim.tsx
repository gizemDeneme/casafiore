import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const cafeImages = [
  '/images/cafe/1.jpg',
  '/images/cafe/2.jpg',
  '/images/cafe/3.jpg',
  '/images/cafe/4.jpg',
  '/images/cafe/5.jpg',
];

export default function Iletisim() {
  return (
    <>
      <Head>
        <title>Casa Fiore İletişim | Sığacık</title>
        <meta name="description" content="Casa Fiore Sığacık ile iletişime geçmek için adres, telefon ve e-posta bilgilerine ulaşabilir, form aracılığıyla mesaj bırakabilirsiniz." />
      </Head>
      {/* Header */}
      <header style={{ backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', position: 'sticky', top: 0, zIndex: 100, width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: 100, maxWidth: 1400, margin: '0 auto', padding: '0 1cm' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" legacyBehavior>
              <a style={{ textDecoration: 'none' }}>
                <Image src="/images/about/about-image.jpg" alt="Casa Fiore Logo" width={64} height={64} style={{ borderRadius: '50%', border: '2px solid #e59236', background: '#fff', objectFit: 'contain', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }} loading="eager" />
              </a>
            </Link>
          </div>
          <nav style={{ display: 'flex', gap: 36, flex: 1, justifyContent: 'center' }}>
            <Link href="/konaklama" legacyBehavior><a style={{ textDecoration: 'none', color: '#e59236', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '8px 0', borderBottom: '2px solid transparent', transition: 'color 0.2s, border-bottom 0.2s' }}>Konaklama</a></Link>
            <Link href="/kahvalti" legacyBehavior><a style={{ textDecoration: 'none', color: '#e59236', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '8px 0', borderBottom: '2px solid transparent', transition: 'color 0.2s, border-bottom 0.2s' }}>Kahvaltımız</a></Link>
            <Link href="/kahve" legacyBehavior><a style={{ textDecoration: 'none', color: '#e59236', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '8px 0', borderBottom: '2px solid transparent', transition: 'color 0.2s, border-bottom 0.2s' }}>Kahve & Daha Fazlası</a></Link>
            <Link href="/iletisim" legacyBehavior><a style={{ textDecoration: 'none', color: '#e59236', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '8px 0', borderBottom: '2px solid #e59236', transition: 'color 0.2s, border-bottom 0.2s' }}>İLETİŞİM</a></Link>
          </nav>
        </div>
      </header>
      <div style={{ minHeight: '100vh', backgroundColor: '#fff', fontFamily: 'system-ui, sans-serif', boxSizing: 'border-box', padding: 16 }}>
        <div style={{ maxWidth: 800, margin: '0 auto', boxSizing: 'border-box', padding: '24px 0' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e59236', marginBottom: 16, textAlign: 'center', letterSpacing: '0.01em' }}>
            Bize Ulaşın
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#333', marginBottom: 32, textAlign: 'center', lineHeight: 1.6 }}>
            Casa Fiore ile ilgili her türlü sorunuz, rezervasyon talepleriniz veya iş birlikleriniz için bize ulaşabilirsiniz. Sizi ağırlamaktan mutluluk duyarız.
          </p>
          <div style={{ background: '#faf7f2', borderRadius: 14, boxShadow: '0 2px 12px rgba(0,0,0,0.05)', padding: 24, marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ fontSize: '1.05rem', color: '#222', wordBreak: 'break-word' }}>
              <strong>Adres:</strong> Sığacık, 127. Sk. No: 21, 35460 Seferihisar/İzmir
            </div>
            <div style={{ fontSize: '1.05rem', color: '#222' }}>
              <strong>Telefon:</strong> +90 536 449 11 12
            </div>
          </div>
          {/* Cafe Images Grid */}
          <div style={{ maxWidth: 900, margin: '0 auto 32px auto', padding: '0 8px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
              {cafeImages.map((src, i) => (
                <div key={src} style={{ borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
                  <Image src={src.replace('.webp', '.jpg')} alt={`Casa Fiore Cafe ${i + 1}`} width={400} height={300} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
          <div style={{ width: '100%', height: 1, background: '#eee', margin: '32px 0' }} />
          <div style={{ width: '100%', aspectRatio: '16/9', maxWidth: 800, margin: '0 auto', borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.6733631099105!2d26.782579475713668!3d38.194260771882625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb8d1b7f26bd0d%3A0xce2508ed3898eff0!2sCasa%20Fiore%20Otel%20%26%20Cafe!5e0!3m2!1str!2str!4v1752015032716!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 280 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Casa Fiore Sığacık Harita"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
} 
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ background: '#fff', color: '#111', minHeight: '100vh' }}>
      <header style={{ background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: 100, maxWidth: 1400, margin: '0 auto', padding: '0 1cm' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" legacyBehavior>
              <a style={{ textDecoration: 'none' }}>
                <Image src="/images/about/about-image.jpg" alt="Casa Fiore Logo" width={64} height={64} style={{ borderRadius: '50%', border: '2px solid #e59236', background: '#fff', objectFit: 'contain', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }} />
              </a>
            </Link>
          </div>
          <nav style={{ display: 'flex', gap: 36, flex: 1, justifyContent: 'center' }}>
            <Link href="/konaklama" legacyBehavior><a style={{ textDecoration: 'none', color: '#e59236', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '8px 0', borderBottom: '2px solid transparent', transition: 'color 0.2s, border-bottom 0.2s' }}>Konaklama</a></Link>
            <Link href="/kahvalti" legacyBehavior><a style={{ textDecoration: 'none', color: '#e59236', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '8px 0', borderBottom: '2px solid transparent', transition: 'color 0.2s, border-bottom 0.2s' }}>Kahvaltımız</a></Link>
            <Link href="/kahve" legacyBehavior><a style={{ textDecoration: 'none', color: '#e59236', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '8px 0', borderBottom: '2px solid transparent', transition: 'color 0.2s, border-bottom 0.2s' }}>Kahve & Daha Fazlası</a></Link>
            <Link href="/iletisim" legacyBehavior><a style={{ textDecoration: 'none', color: '#e59236', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '8px 0', borderBottom: '2px solid transparent', transition: 'color 0.2s, border-bottom 0.2s' }}>İLETİŞİM</a></Link>
          </nav>
        </div>
      </header>
      <main>
        <section style={{ width: '100%', height: '60vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <Image src="/images/hero/hero-image.jpg" alt="Hero" fill style={{ objectFit: 'cover', zIndex: 1 }} />
          <div style={{ position: 'absolute', zIndex: 2, top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.45)' }} />
          <div style={{ position: 'absolute', zIndex: 3, width: '100%', color: '#fff', textShadow: '0 4px 24px rgba(0,0,0,0.85), 0 1px 0 #000', fontSize: '2.5rem', fontWeight: 700, letterSpacing: '0.08em', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            Casa Fiore Sığacık
          </div>
        </section>
        {/* Konaklama Section */}
        <section id="konaklama" style={{ maxWidth: 1200, margin: '48px auto', padding: '0 24px' }}>
          <p style={{ color: '#111', fontSize: '1.1rem', marginBottom: 32, textAlign: 'center' }}>
            Casa Fiore Sığacık’ta huzur, konfor ve şıklık bir arada.<br />Her biri özenle tasarlanmış odalarımızda kendinizi evinizde hissedeceksiniz.
          </p>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Alt Oda */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', width: 320, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
              <div style={{ width: '100%', height: 180, background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/images/rooms/alt-oda/1.jpg" alt="Alt Oda" width={320} height={180} style={{ objectFit: 'cover', width: '100%', height: 180 }} />
              </div>
              <div style={{ padding: 20 }}>
                <h3 style={{ fontSize: '1.2rem', color: '#e59236', fontWeight: 600, marginBottom: 8 }}>Alt Oda</h3>
                <p style={{ color: '#111', fontSize: '1rem', marginBottom: 12 }}>
                  Zeminde konumlanan bu huzurlu oda, Casa Fiore’nin bahçesiyle iç içe sakin bir konaklama deneyimi sunar. Serin yaz akşamlarının tadını çıkarabileceğiniz bu oda, sade ve şık detaylarla donatılmıştır.
                </p>
                <button style={{ background: '#e59236', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 20px', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' }}>
                  İncele
                </button>
              </div>
            </div>
            {/* Üst Oda */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', width: 320, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
              <div style={{ width: '100%', height: 180, background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/images/rooms/ust-oda/2.jpg" alt="Üst Oda" width={320} height={180} style={{ objectFit: 'cover', width: '100%', height: 180 }} />
              </div>
              <div style={{ padding: 20 }}>
                <h3 style={{ fontSize: '1.2rem', color: '#e59236', fontWeight: 600, marginBottom: 8 }}>Üst Oda</h3>
                <p style={{ color: '#111', fontSize: '1rem', marginBottom: 12 }}>
                  Casa Fiore’nin üst katında yer alan bu oda, avluya bakan keyifli konumuyla sakinlik arayan misafirler için huzurlu bir seçenek sunar. Doğal dokular, özenle seçilmiş detaylar ve sade şıklığıyla sade ama zarif bir atmosfer yaratır.
                </p>
                <button style={{ background: '#e59236', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 20px', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' }}>
                  İncele
                </button>
              </div>
            </div>
            {/* Aile Odası */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', width: 320, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
              <div style={{ width: '100%', height: 180, background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/images/rooms/aile-odasi/4.jpg" alt="Aile Odası" width={320} height={180} style={{ objectFit: 'cover', width: '100%', height: 180 }} />
              </div>
              <div style={{ padding: 20 }}>
                <h3 style={{ fontSize: '1.2rem', color: '#e59236', fontWeight: 600, marginBottom: 8 }}>Aile Odası</h3>
                <p style={{ color: '#111', fontSize: '1rem', marginBottom: 12 }}>
                  Geniş ve kullanışlı yapısıyla aileler için ideal olan bu oda, hem ebeveynler hem çocuklar için konforlu bir konaklama sağlar. Çoklu yatak düzeniyle, ev sıcaklığında ama Casa Fiore şıklığında bir deneyim sunar.
                </p>
                <button style={{ background: '#e59236', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 20px', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' }}>
                  İncele
                </button>
              </div>
            </div>
          </div>
        </section>
        <div style={{ width: '100%', height: 1, background: '#eee', margin: '48px 0' }} />
        {/* Kahvaltımız Section */}
        <section id="kahvalti" style={{ maxWidth: 1200, margin: '48px auto', padding: '0 24px' }}>
          <p style={{ color: '#111', fontSize: '1.1rem', marginBottom: 32, textAlign: 'center', whiteSpace: 'normal', wordWrap: 'break-word', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
            Yeni güne Ege'nin dinginliğinde, taptaze lezzetlerle başlamak ister misiniz? Casa Fiore'de her sabah, özenle hazırlanan yerel ürünler ve mevsimlik tatlarla kurulan sofralar sizi bekliyor.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 48 }}>
            <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <Image src="/images/breakfast/1.jpg" alt="Kahvaltı Sofrası" width={400} height={300} style={{ width: '100%', height: 250, objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <Image src="/images/breakfast/2.jpg" alt="Kahvaltı Lezzetleri" width={400} height={300} style={{ width: '100%', height: 250, objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <Image src="/images/breakfast/3.jpg" alt="Kahvaltı Menüsü" width={400} height={300} style={{ width: '100%', height: 250, objectFit: 'cover' }} />
            </div>
          </div>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <a href="/kahvalti" style={{ 
              background: '#e59236', 
              color: '#fff', 
              textDecoration: 'none', 
              padding: '12px 24px', 
              borderRadius: 8, 
              fontWeight: 600, 
              fontSize: '1rem',
              display: 'inline-block',
              transition: 'background-color 0.2s'
            }}>
              👉 Kahvaltımıza göz atın
            </a>
          </div>
          <div style={{ width: '100vw', height: 1, background: '#eee', margin: '48px 0', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }} />
          <div style={{ marginBottom: 48 }}>
            <p style={{ color: '#111', fontSize: '1.1rem', marginBottom: 32, textAlign: 'center', whiteSpace: 'normal', wordWrap: 'break-word', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
              Casa Fiore'de kahve sadece içecek değil, bir ritüel. Espresso'dan matcha latte'ye, sumaklı limonatadan cicibebe milkshake'e kadar her damak zevkine hitap eden zengin menümüzle günün her anına eşlik ediyoruz. Sıcak ve soğuk içecek seçeneklerimizi keşfedin, bir fincan mutluluğa davetlisiniz.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                <Image src="/images/coffee_more/1.jpg" alt="Kahve ve İçecekler" width={400} height={300} style={{ width: '100%', height: 250, objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                <Image src="/images/coffee_more/2.jpg" alt="Kahve ve İçecekler" width={400} height={300} style={{ width: '100%', height: 250, objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                <Image src="/images/coffee_more/6.jpg" alt="Kahve ve İçecekler" width={400} height={300} style={{ width: '100%', height: 250, objectFit: 'cover' }} />
              </div>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}

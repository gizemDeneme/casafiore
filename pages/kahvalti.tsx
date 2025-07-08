import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function Kahvalti() {
  return (
    <>
      <Head>
        <title>Casa Fiore Kahvaltısı - Sığacık</title>
        <meta name="description" content="Casa Fiore Sığacık'ta geleneksel tatlarıyla dolu kahvaltı deneyimi" />
      </Head>
      <div style={{ background: '#fff', color: '#111', minHeight: '100vh' }}>
        <header style={{ background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', position: 'sticky', top: 0, zIndex: 100, width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
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
              <Link href="/kahvalti" legacyBehavior><a style={{ textDecoration: 'none', color: '#e59236', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '8px 0', borderBottom: '2px solid #e59236', transition: 'color 0.2s, border-bottom 0.2s' }}>Kahvaltımız</a></Link>
              <Link href="/kahve" legacyBehavior><a style={{ textDecoration: 'none', color: '#e59236', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '8px 0', borderBottom: '2px solid transparent', transition: 'color 0.2s, border-bottom 0.2s' }}>Kahve & Daha Fazlası</a></Link>
              <Link href="/iletisim" legacyBehavior><a style={{ textDecoration: 'none', color: '#e59236', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '8px 0', borderBottom: '2px solid transparent', transition: 'color 0.2s, border-bottom 0.2s' }}>İLETİŞİM</a></Link>
            </nav>
          </div>
        </header>
        
        <main style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          {/* Header Image */}
          <div style={{ width: '100%', maxWidth: '100vw', height: '50vh', position: 'relative', marginBottom: 48, borderRadius: 16, overflow: 'hidden' }}>
            <Image src="/images/breakfast/10.jpg" alt="Casa Fiore Kahvaltısı" width={1920} height={600} style={{ objectFit: 'cover', width: '100%', height: '100%' }} priority />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h1 style={{ fontSize: '2.5rem', color: '#fff', fontWeight: 700, letterSpacing: '0.04em', textAlign: 'center', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                Casa Fiore Kahvaltısı – Sığacık'ta Geleneksel Tatlarla Dolu Bir Başlangıç
              </h1>
            </div>
          </div>
          
          <div style={{ maxWidth: 800, margin: '0 auto 48px auto', lineHeight: 1.8 }}>
            <p style={{ color: '#111', fontSize: '1.1rem', marginBottom: 24 }}>
              Casa Fiore'de sabahlar, lezzetli dokunuşlarla başlar. Ege'nin sade ruhunu taşıyan kahvaltı soframızda; el yapımı pişiler, günlük hazırlanan çıtır sigara börekleri, çeşit çeşit peynirler, zeytinler, reçeller ve mevsim sebzeleriyle dolu geniş bir sunum sizi bekliyor. Her tabakta tazelik ve özen hissedilir.
            </p>
            <p style={{ color: '#111', fontSize: '1.1rem', marginBottom: 24 }}>
              Kahvaltımıza eşlik eden ince belli bardakta çayımızla birlikte, gününüze hem dingin hem keyifli bir başlangıç yaparsınız.
            </p>
            <p style={{ color: '#111', fontSize: '1.1rem', marginBottom: 24 }}>
              Sığacık'ta gerçek bir kahvaltı deneyimi arıyorsanız, Casa Fiore'de masa zaten hazır.
            </p>
            <p style={{ color: '#111', fontSize: '1.1rem', marginBottom: 32, fontWeight: 600 }}>
              📞 Rezervasyon ve detaylı bilgi için bize 0536 449 11 12 üzerinden ulaşabilir, Casa Fiore'de sizi bekleyen bu sofranın bir parçası olabilirsiniz.
            </p>
          </div>

          {/* SEO-optimized Kahvaltı Menüsü + Görsel */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 40,
            maxWidth: 1200,
            margin: '0 auto 48px auto',
            padding: '32px 0',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}>
            <div style={{ flex: '1 1 350px', minWidth: 280, maxWidth: 600 }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: 16 }}>
                Casa Fiore Sığacık Serpme Kahvaltı Menüsü
              </h2>
              <p style={{ textAlign: 'center', color: '#444', marginBottom: 32 }}>
                Casa Fiore’de her sabah taptaze serpme kahvaltı sizi bekliyor. İşte menümüz:
              </p>
              <section style={{ marginBottom: 40 }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: 12 }}>
                  Serpme Kahvaltı
                </h3>
                <ul style={{ marginLeft: 24, marginBottom: 16, color: '#222', lineHeight: 1.7 }}>
                  <li>Peynir Tabağı (çeçil, İzmir tulum, beyaz peynir, armola)</li>
                  <li>Söğüş tabağı</li>
                  <li>Anne acukası</li>
                  <li>Zeytin çeşitleri (yeşil, siyah, pancarlı)</li>
                  <li>Reçeller (acı biber, süt, portakal, karadut)</li>
                  <li>Zeytinyağında kekikli kuru domates</li>
                  <li>Bal ve tereyağı</li>
                  <li>Pişi</li>
                  <li>Patates-sosis kızartması</li>
                  <li>Sigara böreği</li>
                  <li>Sahanda sucuk</li>
                  <li>Sahanda yumurta</li>
                </ul>
                <p style={{ fontWeight: 500, marginBottom: 0 }}>
                  <strong>Fiyat:</strong> <span className="price">650₺</span> (Kişi başı)
                </p>
                <meta name="description" content="Sığacık'ta kahvaltı, Casa Fiore serpme kahvaltı, Ege kahvaltısı, Sığacık’ta nerede kahvaltı yapılır? Casa Fiore Sığacık serpme kahvaltı menüsü ve fiyatları." />
              </section>
              <section>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: 12 }}>
                  Ekstralar
                </h3>
                <ul style={{ marginLeft: 24, color: '#222', lineHeight: 1.7 }}>
                  <li>Patatesli yumurta <span className="price">210₺</span></li>
                  <li>Beyaz peynirli yumurta <span className="price">210₺</span></li>
                  <li>Sucuklu yumurta <span className="price">250₺</span></li>
                  <li>Fiore pancake <span className="price">230₺</span></li>
                  <li>Menemen <span className="price">230₺</span></li>
                  <li>Salçalı sosis <span className="price">250₺</span></li>
                  <li>Sigara böreği <span className="price">180₺</span></li>
                  <li>Söğüş tabağı <span className="price">130₺</span></li>
                  <li>Pişi tabağı <span className="price">180₺</span></li>
                  <li>Patates tabağı <span className="price">180₺</span></li>
                  <li>Peynir tabağı <span className="price">180₺</span></li>
                </ul>
                <meta name="description" content="Casa Fiore Sığacık kahvaltı menüsü ekstralar, Sığacık’ta kahvaltı, Ege kahvaltısı, Casa Fiore serpme kahvaltı fiyatları." />
              </section>
            </div>
            <div style={{ flex: '1 1 320px', minWidth: 260, maxWidth: 420, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '100%', gap: 24 }}>
              <Image src="/images/breakfast/11.jpg" alt="Casa Fiore Sığacık Serpme Kahvaltı" width={420} height={600} style={{ width: '100%', height: 'auto', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }} />
              <Image src="/images/breakfast/12.jpg" alt="Casa Fiore Kahvaltı Sunumu" width={420} height={300} style={{ width: '100%', height: 'auto', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
              <Image src="/images/breakfast/13.jpg" alt="Casa Fiore Kahvaltı Detayı" width={420} height={300} style={{ width: '100%', height: 'auto', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
            </div>
          </div>

          {/* Kahvaltı Fotoğrafları */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 32, marginTop: 48 }}>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}>
              <Image src="/images/breakfast/1.jpg" alt="Kahvaltı Sofrası" width={400} height={300} style={{ width: '100%', height: 280, objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}>
              <Image src="/images/breakfast/2.jpg" alt="Kahvaltı Lezzetleri" width={400} height={300} style={{ width: '100%', height: 280, objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}>
              <Image src="/images/breakfast/3.jpg" alt="Kahvaltı Menüsü" width={400} height={300} style={{ width: '100%', height: 280, objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}>
              <Image src="/images/breakfast/4.jpg" alt="Kahvaltı Detayları" width={400} height={300} style={{ width: '100%', height: 280, objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}>
              <Image src="/images/breakfast/5.jpg" alt="Kahvaltı Sunumu" width={400} height={300} style={{ width: '100%', height: 280, objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}>
              <Image src="/images/breakfast/6.jpg" alt="Kahvaltı Atmosferi" width={400} height={300} style={{ width: '100%', height: 280, objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}>
              <Image src="/images/breakfast/7.jpg" alt="Kahvaltı Detayları" width={400} height={300} style={{ width: '100%', height: 280, objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}>
              <Image src="/images/breakfast/8.jpg" alt="Kahvaltı Sunumu" width={400} height={300} style={{ width: '100%', height: 280, objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}>
              <Image src="/images/breakfast/9.jpg" alt="Kahvaltı Atmosferi" width={400} height={300} style={{ width: '100%', height: 280, objectFit: 'cover' }} />
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a href="/" style={{ 
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
              ← Ana Sayfaya Dön
            </a>
          </div>
        </main>
      </div>
    </>
  );
} 
import Image from 'next/image';
import Link from 'next/link';

const altOdaImages = [
  '/images/rooms/alt-oda/1.jpg',
  '/images/rooms/alt-oda/2.jpg',
  '/images/rooms/alt-oda/3.jpg',
  '/images/rooms/alt-oda/4.jpg',
  '/images/rooms/alt-oda/5.jpg',
  '/images/rooms/alt-oda/6.jpg',
  '/images/rooms/alt-oda/7.jpg',
  '/images/rooms/alt-oda/8.jpg',
];
const ustOdaImages = [
  '/images/rooms/ust-oda/1.jpg',
  '/images/rooms/ust-oda/2.jpg',
  '/images/rooms/ust-oda/3.jpg',
  '/images/rooms/ust-oda/4.jpg',
  '/images/rooms/ust-oda/5.jpg',
  '/images/rooms/ust-oda/6.jpg',
  '/images/rooms/ust-oda/7.jpg',
  '/images/rooms/ust-oda/8.jpg',
  '/images/rooms/ust-oda/9.jpg',
];
const aileOdasiImages = [
  '/images/rooms/aile-odasi/1.jpg',
  '/images/rooms/aile-odasi/2.jpg',
  '/images/rooms/aile-odasi/3.jpg',
  '/images/rooms/aile-odasi/4.jpg',
  '/images/rooms/aile-odasi/5.jpg',
  '/images/rooms/aile-odasi/6.jpg',
  '/images/rooms/aile-odasi/7.jpg',
  '/images/rooms/aile-odasi/8.jpg',
  '/images/rooms/aile-odasi/9.jpg',
];

export default function Konaklama() {
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
      {/* Header Image */}
      <div style={{ width: '100%', maxWidth: '100vw', height: '50vh', position: 'relative', marginBottom: 48, borderRadius: 16, overflow: 'hidden' }}>
        <Image src="/images/hero/hero-image2.jpg" alt="Casa Fiore Konaklama" width={1920} height={600} style={{ objectFit: 'cover', width: '100%', height: '100%' }} priority />
      </div>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 0 24px', textAlign: 'left' }}>
        {/* Alt Oda */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ width: '100%', whiteSpace: 'normal', wordWrap: 'break-word', textAlign: 'left', padding: 0, boxSizing: 'border-box', margin: 0, color: '#222', fontSize: '1.05rem', lineHeight: 1.6 }}>
            <strong>Alt Odalar – Avlunun Enerjisini Hissedin</strong><br />
            Casa Fiore’nin avluya açılan alt odaları, hareketli atmosferi seven misafirler için ideal bir konumda. Girişe yakın yapısıyla günün temposunu yakından hissedebilir, otelin canlılığına doğrudan dahil olabilirsiniz.<br /><br />
            Her biri özenle dekore edilen bu odalarda, sade detaylar ve kompakt yerleşim sayesinde ihtiyacınız olan konfor düşünülerek tasarlandı. Küçük ama işlevsel yapısıyla hem kısa konaklamalar hem de pratik bir tatil planı için ideal bir tercihtir.
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {altOdaImages.map((src, i) => (
              <Image key={src} src={src.replace('.webp', '.jpg')} alt={`Alt Oda ${i+1}`} width={320} height={180} style={{ objectFit: 'cover', borderRadius: 12 }} />
            ))}
          </div>
        </div>
        <div style={{ width: '100%', height: 1, background: '#eee', margin: '32px 0' }} />
        {/* Üst Oda */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ width: '100%', whiteSpace: 'normal', wordWrap: 'break-word', textAlign: 'left', padding: 0, boxSizing: 'border-box', margin: 0, color: '#222', fontSize: '1.05rem', lineHeight: 1.6 }}>
            <strong>Üst Odalar – Sade, Şık ve Kendinize Ait Bir Alan</strong><br />
            Casa Fiore’nin üst katında yer alan bu odalar, avluya bakan konumlarıyla otelin enerjisini yukarıdan izlemek isteyenler için keyifli bir alternatif sunar. Doğal dokularla sade bir şıklıkla tasarlanan üst odalar, günün yorgunluğunu geride bırakmak isteyen misafirler için sessiz, dingin ve kendine ait bir alan sunar.<br /><br />
            Minimal detaylarla döşenmiş bu odalar, sadelikten hoşlanan çiftler ya da yalnız seyahat edenler için idealdir. Casa Fiore’nin zarif atmosferiyle uyumlu bu odalar, huzurlu bir uyku ve sade bir konfor arayanları bekliyor.
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {ustOdaImages.map((src, i) => (
              <Image key={src} src={src.replace('.webp', '.jpg')} alt={`Üst Oda ${i+1}`} width={320} height={180} style={{ objectFit: 'cover', borderRadius: 12 }} />
            ))}
          </div>
        </div>
        <div style={{ width: '100%', height: 1, background: '#eee', margin: '32px 0' }} />
        {/* Aile Odası */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ width: '100%', whiteSpace: 'normal', wordWrap: 'break-word', textAlign: 'left', padding: 0, boxSizing: 'border-box', margin: 0, color: '#222', fontSize: '1.05rem', lineHeight: 1.6 }}>
            <strong>Aile Odası – Hep Birlikte, Konfor İçinde</strong><br />
            Casa Fiore’nin geniş aile odası, birlikte seyahat eden misafirler için hem konforlu hem de pratik bir konaklama alternatifi sunar. İkiden fazla kişi için düzenlenmiş bu oda, özel alan ihtiyacını göz önünde bulundurarak tasarlanmıştır.<br /><br />
            Oturma alanı, çoklu yatak düzeni ve sade dekorasyonu sayesinde hem ebeveynler hem çocuklar rahatça konaklayabilir. Işık alan pencere detayları, doğal tonlarda dekore edilmiş iç mekân ve işlevsel yerleşimiyle ailece geçirilecek huzurlu bir tatilin kapılarını aralar.<br /><br />
            Casa Fiore’nin sıcak atmosferinde, sevdiklerinizle birlikte konaklayabileceğiniz bir alan arıyorsanız, aile odamız sizi bekliyor.
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {aileOdasiImages.map((src, i) => (
              <Image key={src} src={src.replace('.webp', '.jpg')} alt={`Aile Odası ${i+1}`} width={320} height={180} style={{ objectFit: 'cover', borderRadius: 12 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
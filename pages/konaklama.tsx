import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const orange = "#E07A1B";

const altOdaImages = [
  "/images/rooms/alt-oda/1.jpg",
  "/images/rooms/alt-oda/2.jpg",
  "/images/rooms/alt-oda/3.jpg",
  "/images/rooms/alt-oda/4.jpg",
  "/images/rooms/alt-oda/5.jpg",
  "/images/rooms/alt-oda/6.jpg",
  "/images/rooms/alt-oda/7.jpg",
  "/images/rooms/alt-oda/8.jpg",
];
const ustOdaImages = [
  "/images/rooms/ust-oda/1.jpg",
  "/images/rooms/ust-oda/2.jpg",
  "/images/rooms/ust-oda/3.jpg",
  "/images/rooms/ust-oda/4.jpg",
  "/images/rooms/ust-oda/5.jpg",
  "/images/rooms/ust-oda/6.jpg",
  "/images/rooms/ust-oda/7.jpg",
  "/images/rooms/ust-oda/8.jpg",
  "/images/rooms/ust-oda/9.jpg",
];
const aileOdasiImages = [
  "/images/rooms/aile-odasi/1.jpg",
  "/images/rooms/aile-odasi/2.jpg",
  "/images/rooms/aile-odasi/3.jpg",
  "/images/rooms/aile-odasi/4.jpg",
  "/images/rooms/aile-odasi/5.jpg",
  "/images/rooms/aile-odasi/6.jpg",
  "/images/rooms/aile-odasi/7.jpg",
  "/images/rooms/aile-odasi/8.jpg",
  "/images/rooms/aile-odasi/9.jpg",
];

export default function Konaklama() {
  return (
    <div style={{ background: "#fff", color: "#222", fontFamily: "sans-serif" }}>
      <Head>
        <title>Casa Fiore Odalarımız | Sığacık Konaklama</title>
        <meta name="description" content="Casa Fiore Sığacık'ta alt odalar, üst odalar ve aile odası ile konforlu konaklama seçenekleri. Ege'de huzurlu bir tatil için ideal odalar." />
        <meta name="keywords" content="Sığacık konaklama, Casa Fiore odalar, alt oda, üst oda, aile odası, Ege'de otel, Sığacık'ta nerede kalınır" />
      </Head>
      {/* Header & Menü */}
      <header style={{ borderBottom: `2px solid ${orange}`, background: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1200, margin: "0 auto", padding: "1rem 2rem" }}>
          <Link href="/">
            <Image src="/images/about/about-image.jpg" alt="Casa Fiore Logo" width={70} height={70} style={{ borderRadius: "50%" }} />
          </Link>
          <nav>
            <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
              <li><Link href="/konaklama" style={{ color: orange, fontWeight: 600, fontSize: 18, textDecoration: "none" }}>Konaklama</Link></li>
              <li><Link href="/kahvalti" style={{ color: orange, fontWeight: 600, fontSize: 18, textDecoration: "none" }}>Kahvaltımız</Link></li>
              <li><Link href="/kahve" style={{ color: orange, fontWeight: 600, fontSize: 18, textDecoration: "none" }}>Kahve & Daha Fazlası</Link></li>
              <li><Link href="/iletisim" style={{ color: orange, fontWeight: 600, fontSize: 18, textDecoration: "none" }}>İletişim</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Hero */}
      <section style={{ position: "relative", width: "100%", height: "40vw", maxHeight: 400, minHeight: 220, overflow: "hidden" }}>
        <Image src="/images/hero/hero-image2.jpg" alt="Casa Fiore Odalarımız" fill style={{ objectFit: "cover", filter: "brightness(0.7)" }} />
        <h1 style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#fff", fontSize: "2.5rem", fontWeight: 700, letterSpacing: 1, textShadow: "0 2px 16px #000" }}>
          Odalarımız
        </h1>
      </section>
      {/* Alt Odalar */}
      <section style={{ maxWidth: 900, margin: "2.5rem auto 0 auto", padding: "0 1rem" }}>
        <h2 style={{ color: orange, fontSize: 26, fontWeight: 700, marginBottom: 10 }}>Alt Odalar – Avlunun Enerjisini Hissedin</h2>
        <p style={{ fontSize: 17, marginBottom: 18, lineHeight: 1.7 }}>
          Casa Fiore’nin avluya açılan alt odaları, hareketli atmosferi seven misafirler için ideal bir konumda. Girişe yakın yapısıyla günün temposunu yakından hissedebilir, otelin canlılığına doğrudan dahil olabilirsiniz.<br /><br />
          Her biri özenle dekore edilen bu odalarda, sade detaylar ve kompakt yerleşim sayesinde ihtiyacınız olan konfor düşünülerek tasarlandı. Küçük ama işlevsel yapısıyla hem kısa konaklamalar hem de pratik bir tatil planı için ideal bir tercihtir.<br /><br />
          Alt odalar, çiftler ya da tek konaklayan misafirler için konforlu ve pratik bir seçenek sunarken, Casa Fiore’nin sıcak misafirperverliğiyle tamamlanır.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 18, justifyContent: "center" }}>
          {altOdaImages.map((src, i) => (
            <div key={src} style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px #0001", width: 220, height: 140, background: "#faf7f2" }}>
              <Image src={src} alt={`Alt Oda ${i + 1}`} width={220} height={140} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>
          ))}
        </div>
      </section>
      <div style={{ width: '100%', maxWidth: 900, margin: '2.5rem auto', borderBottom: `2px solid #ececec`, height: 0 }} />
      {/* Üst Odalar */}
      <section style={{ maxWidth: 900, margin: "2.5rem auto 0 auto", padding: "0 1rem" }}>
        <h2 style={{ color: orange, fontSize: 26, fontWeight: 700, marginBottom: 10 }}>Üst Odalar – Sade, Şık ve Kendinize Ait Bir Alan</h2>
        <p style={{ fontSize: 17, marginBottom: 18, lineHeight: 1.7 }}>
          Casa Fiore’nin üst katında yer alan bu odalar, avluya bakan konumlarıyla otelin enerjisini yukarıdan izlemek isteyenler için keyifli bir alternatif sunar. Doğal dokularla sade bir şıklıkla tasarlanan üst odalar, günün yorgunluğunu geride bırakmak isteyen misafirler için sessiz, dingin ve kendine ait bir alan sunar.<br /><br />
          Minimal detaylarla döşenmiş bu odalar, sadelikten hoşlanan çiftler ya da yalnız seyahat edenler için idealdir. Casa Fiore’nin zarif atmosferiyle uyumlu bu odalar, huzurlu bir uyku ve sade bir konfor arayanları bekliyor.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 18, justifyContent: "center" }}>
          {ustOdaImages.map((src, i) => (
            <div key={src} style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px #0001", width: 220, height: 140, background: "#faf7f2" }}>
              <Image src={src} alt={`Üst Oda ${i + 1}`} width={220} height={140} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>
          ))}
        </div>
      </section>
      <div style={{ width: '100%', maxWidth: 900, margin: '2.5rem auto', borderBottom: `2px solid #ececec`, height: 0 }} />
      {/* Aile Odası */}
      <section style={{ maxWidth: 900, margin: "2.5rem auto 2rem auto", padding: "0 1rem" }}>
        <h2 style={{ color: orange, fontSize: 26, fontWeight: 700, marginBottom: 10 }}>Aile Odası – Hep Birlikte, Konfor İçinde</h2>
        <p style={{ fontSize: 17, marginBottom: 18, lineHeight: 1.7 }}>
          Casa Fiore’nin geniş aile odası, birlikte seyahat eden misafirler için hem konforlu hem de pratik bir konaklama alternatifi sunar. Birden fazla kişi için düzenlenmiş bu oda, özel alan ihtiyacını göz önünde bulundurarak tasarlanmıştır.<br /><br />
          Çoklu yatak düzeni ve sade dekorasyonu sayesinde hem ebeveynler hem çocuklar rahatça konaklayabilir. Işık alan pencere detayları, doğal tonlarda dekore edilmiş iç mekân ve işlevsel yerleşimiyle ailece geçirilecek huzurlu bir tatilin kapılarını aralar.<br /><br />
          Casa Fiore’nin sıcak atmosferinde, sevdiklerinizle birlikte konaklayabileceğiniz bir alan arıyorsanız, aile odamız sizi bekliyor.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 18, justifyContent: "center" }}>
          {aileOdasiImages.map((src, i) => (
            <div key={src} style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px #0001", width: 220, height: 140, background: "#faf7f2" }}>
              <Image src={src} alt={`Aile Odası ${i + 1}`} width={220} height={140} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>
          ))}
        </div>
      </section>
      <style jsx>{`
        h2 {
          margin-top: 0;
        }
        @media (max-width: 600px) {
          section {
            padding: 0 2px !important;
          }
          div[style*="height: 40px"] {
            height: 20px !important;
          }
        }
      `}</style>
    </div>
  );
} 
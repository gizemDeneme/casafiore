import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const breakfastImages = [
  "/images/breakfast/1.jpg",
  "/images/breakfast/2.jpg",
  "/images/breakfast/3.jpg",
  "/images/breakfast/4.jpg",
  "/images/breakfast/5.jpg",
  "/images/breakfast/6.jpg",
  "/images/breakfast/7.jpg",
  "/images/breakfast/8.jpg",
  "/images/breakfast/9.jpg",
  "/images/breakfast/10.jpg",
  "/images/breakfast/11.jpg",
  "/images/breakfast/12.jpg",
  "/images/breakfast/13.jpg",
];

const orange = "#E07A1B";

export default function Kahvalti() {
  return (
    <div style={{ background: "#fff", color: "#222", fontFamily: "sans-serif" }}>
      <Head>
        <title>Casa Fiore Kahvaltısı | Sığacık Kahvaltı & Ege Serpme Kahvaltı</title>
        <meta name="description" content="Sığacık’ta geleneksel Ege kahvaltısı, serpme kahvaltı ve taptaze lezzetler Casa Fiore’de. Sığacık’ta nerede kahvaltı yapılır? Casa Fiore’de masa hazır!" />
        <meta name="keywords" content="Sığacık kahvaltı, serpme kahvaltı, Ege kahvaltısı, Casa Fiore, Sığacık’ta nerede kahvaltı yapılır" />
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
        <Image src="/images/breakfast/2.jpg" alt="Casa Fiore Kahvaltısı" fill style={{ objectFit: "cover", filter: "brightness(0.7)" }} />
        <h1 style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#fff", fontSize: "2.5rem", fontWeight: 700, letterSpacing: 1, textShadow: "0 2px 16px #000" }}>
          Casa Fiore Kahvaltısı
        </h1>
      </section>
      {/* Açıklama */}
      <section style={{ maxWidth: 900, margin: "2.5rem auto 0 auto", padding: "0 1rem" }}>
        <h2 style={{ color: orange, fontSize: 26, fontWeight: 700, marginBottom: 16 }}>Sığacık’ta Geleneksel Tatlarla Dolu Bir Başlangıç</h2>
        <p style={{ fontSize: 17, marginBottom: 18, lineHeight: 1.7 }}>
          Casa Fiore’de sabahlar, lezzetli dokunuşlarla başlar. Ege’nin sade ruhunu taşıyan kahvaltı soframızda; el yapımı pişiler, günlük hazırlanan çıtır sigara börekleri, çeşit çeşit peynirler, zeytinler, reçeller ve mevsim sebzeleriyle dolu geniş bir sunum sizi bekliyor. Her tabakta tazelik ve özen hissedilir.<br /><br />
          Kahvaltımıza eşlik eden ince belli bardakta çayımızla birlikte, gününüze hem dingin hem keyifli bir başlangıç yaparsınız.<br /><br />
          Sığacık’ta gerçek bir kahvaltı deneyimi arıyorsanız, Casa Fiore’de masa zaten hazır.<br /><br />
          <b>📞 Rezervasyon ve detaylı bilgi için bize <a href="tel:05316117176" style={{ color: orange, textDecoration: "underline" }}>0 (531) 611 71 76</a> üzerinden ulaşabilir, Casa Fiore’de sizi bekleyen bu sofranın bir parçası olabilirsiniz.</b>
        </p>
      </section>
      {/* Kahvaltı görselleri */}
      <section style={{ maxWidth: 1100, margin: "2rem auto 0 auto", padding: "0 1rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 18, justifyContent: "center" }}>
          {breakfastImages.map((src, i) => (
            <div key={src} style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px #0001", width: 220, height: 140, background: "#faf7f2" }}>
              <Image src={src} alt={`Casa Fiore Kahvaltı ${i + 1}`} width={220} height={140} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>
          ))}
        </div>
      </section>
      <div style={{ width: '100%', maxWidth: 900, margin: '2.5rem auto', borderBottom: `2px solid #ececec`, height: 0 }} />
      {/* Menü */}
      <section style={{ maxWidth: 900, margin: "2.5rem auto 2rem auto", padding: "0 1rem" }}>
        <h2 style={{ color: orange, fontSize: 24, fontWeight: 700, margin: "2rem 0 1rem 0" }}>Casa Fiore Serpme Kahvaltı Menüsü</h2>
        <p style={{ fontSize: 16, marginBottom: 18 }}>
          Casa Fiore’de her sabah taptaze serpme kahvaltı sizi bekliyor. İşte menümüz:
        </p>
        <section className="menu-section">
          <h3>Serpme Kahvaltı</h3>
          <ul className="menu-list" style={{ marginBottom: 0 }}>
            <li><span className="item">Peynir Tabağı (çeçil, İzmir tulum, beyaz peynir, armola)</span></li>
            <li><span className="item">Söğüş tabağı</span></li>
            <li><span className="item">Anne acukası</span></li>
            <li><span className="item">Zeytin çeşitleri (yeşil, siyah, pancarlı)</span></li>
            <li><span className="item">Reçeller (acı biber, süt, portakal, karadut)</span></li>
            <li><span className="item">Zeytinyağında kekikli kuru domates</span></li>
            <li><span className="item">Bal ve tereyağı</span></li>
            <li><span className="item">Pişi</span></li>
            <li><span className="item">Patates-sosis kızartması</span></li>
            <li><span className="item">Sigara böreği</span></li>
            <li><span className="item">Sahanda sucuk</span></li>
            <li><span className="item">Sahanda yumurta</span></li>
          </ul>
        </section>
        <section className="menu-section">
          <h3>Ekstralar</h3>
          <ul className="menu-list" style={{ marginBottom: 0 }}>
            <li><span className="item">Patatesli yumurta</span></li>
            <li><span className="item">Beyaz peynirli yumurta</span></li>
            <li><span className="item">Sucuklu yumurta</span></li>
            <li><span className="item">Fiore pancake</span></li>
            <li><span className="item">Menemen</span></li>
            <li><span className="item">Salçalı sosis</span></li>
            <li><span className="item">Sigara böreği</span></li>
            <li><span className="item">Söğüş tabağı</span></li>
            <li><span className="item">Pişi tabağı</span></li>
            <li><span className="item">Patates tabağı</span></li>
            <li><span className="item">Peynir tabağı</span></li>
          </ul>
        </section>
      </section>
      <style jsx>{`
        .price {
          color: ${orange};
          font-weight: 700;
          margin-left: 16px;
          font-size: 1.08rem;
          letter-spacing: 0.5px;
        }
        .menu-section {
          background: #faf7f2;
          border-radius: 14px;
          box-shadow: 0 2px 8px #0001;
          padding: 24px 18px 12px 18px;
          margin-bottom: 28px;
        }
        .menu-section h3 {
          color: ${orange};
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .menu-list {
          list-style: none;
          padding: 0;
          margin: 0 0 12px 0;
        }
        .menu-list li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.08rem;
          padding: 10px 0;
          border-bottom: 1px solid #ececec;
          transition: background 0.2s;
        }
        .menu-list li:last-child {
          border-bottom: none;
        }
        .menu-list li:hover {
          background: #fff5e6;
        }
        .item {
          font-weight: 500;
        }
        @media (max-width: 600px) {
          header div {
            flex-direction: column;
            gap: 12px;
            padding: 1rem 0.5rem;
          }
          .menu-section {
            padding: 14px 4px 8px 4px;
          }
          .menu-list li {
            font-size: 0.98rem;
            padding: 8px 0;
          }
        }
      `}</style>
    </div>
  );
} 
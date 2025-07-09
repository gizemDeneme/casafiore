import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const orange = "#E07A1B";

export default function Hikayemiz() {
  return (
    <div style={{ fontFamily: "sans-serif", background: "#fff" }}>
      <Head>
        <title>Casa Fiore Hikayemiz | Sığacık</title>
        <meta name="description" content="Casa Fiore'nin Seferihisar'da başlayan, yavaş ve anlamlı yaşam arayışıyla doğan hikayesi. Samimi bir aile işletmesinin öyküsü." />
      </Head>
      {/* Header & Menü */}
      <header style={{ borderBottom: `2px solid ${orange}`, background: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1200, margin: "0 auto", padding: "1rem 2rem" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image src="/images/about/about-image.jpg" alt="Casa Fiore Logo" width={80} height={80} style={{ borderRadius: "50%" }} />
          </Link>
          <nav>
            <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
              <li><Link href="/hikayemiz" style={{ color: orange, fontWeight: 600, fontSize: 18, textDecoration: "none" }}>Hikayemiz</Link></li>
              <li><Link href="/konaklama" style={{ color: orange, fontWeight: 600, fontSize: 18, textDecoration: "none" }}>Konaklama</Link></li>
              <li><Link href="/kahvalti" style={{ color: orange, fontWeight: 600, fontSize: 18, textDecoration: "none" }}>Kahvaltımız</Link></li>
              <li><Link href="/kahve" style={{ color: orange, fontWeight: 600, fontSize: 18, textDecoration: "none" }}>Kahve & Daha Fazlası</Link></li>
              <li><Link href="/iletisim" style={{ color: orange, fontWeight: 600, fontSize: 18, textDecoration: "none" }}>İletişim</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 1rem 1rem" }}>
        <h1 style={{ color: orange, fontSize: 32, fontWeight: 700, marginBottom: 24 }}>Hikayemiz</h1>
        <div style={{ background: "#faf7f2", borderRadius: 12, boxShadow: "0 2px 8px #0001", padding: 22, fontSize: 17, color: "#222", lineHeight: 1.7 }}>
          <p>Bazen insan, sadece yavaşlamak ister.<br />
Biz de tam bu ihtiyaçla çıktık yola.<br />
İstanbul’un karmaşasından uzaklaşmak, sade ama anlamlı bir hayat kurmak istedik.<br />
Büyük kararlar verdik ve kalabalığı geride bıraktık.<br />
Yolumuz Seferihisar’a, Kaleiçi’nin taş sokaklarına düştü.</p>
          <p>O sokakların arasında, zamanın neredeyse durduğu bir ev bulduk.<br />
Yorgundu ama güzeldi.<br />
Ona dokunduk, dinledik ve dönüştürdük.<br />
Casa Fiore, işte böyle doğdu.</p>
          <p>Bugün 5 odalı, küçük bir butik oteliz.<br />
Ama sadece bir konaklama yeri değiliz.<br />
Geniş avlumuzda kurulan geniş kahvaltı soframızla, sabahları bir buluşma noktasına dönüştük.<br />
Ege’nin en güzel domatesleri, zeytinleri, taze otları…<br />
Her şey özenle hazırlanıyor.</p>
          <p>Ve mutfağın kalbinde annem, Sevgi var.<br />
Adı gibi, yaptığı her tabakta o sevgiyi hissettiriyor.<br />
Pişileri sabah sabah kızartırken mutfağa sinen koku, çocukluğumuza dair bir şeyler taşıyor.<br />
Kahvaltı onun ellerinden çıktığı için, bu sofraya oturan herkes kendini biraz evinde hissediyor.</p>
          <p>Bize özel kavrulan kahve çekirdeklerinden yaptığımız kahve çeşitlerimiz ise bizden size bir davet. <br />
Hangisini seçerseniz seçin, size eşlik eden şey mutlaka bir dinginlik oluyor.</p>
          <p>Casa Fiore, bizim yeniden başladığımız yer.<br />
Sade, sessiz ama içi dolu bir hayatın mümkün olduğunu hatırladığımız yer. </p>
          <p>Belki bir sabah siz de burada uyanırsınız.<br />
Ve Sevgi’nin pişisiyle, Ege’nin tazelikleriyle kurulmuş sofrada yerinizi alırsınız.<br />
O zaman bu hikâyenin bir parçası da siz olursunuz…</p>
        </div>
      </main>
      {/* Footer */}
      <footer style={{ background: "#222", color: "#fff", marginTop: 48, padding: "2rem 1rem", textAlign: "center" }}>
        <div style={{ fontWeight: 700, color: orange, fontSize: 20, marginBottom: 8 }}>@casafioresigacik</div>
        <div>Sığacık, 127. Sk. No: 21, 35460 Seferihisar/İzmir</div>
        <div>0536 449 11 12</div>
        <div style={{ marginTop: 8 }}>
          <a href="https://www.instagram.com/casafioresigacik/" target="_blank" rel="noopener noreferrer" style={{ color: orange, textDecoration: "underline" }}>
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
} 
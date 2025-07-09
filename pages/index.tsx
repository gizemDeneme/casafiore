import Image from "next/image";
import Link from "next/link";

const orange = "#E07A1B";

const rooms = [
  {
    name: "Alt Odalar",
    image: "/images/rooms/alt-oda/1.jpg",
    desc:
      "Zeminde konumlanan bu huzurlu oda, Casa Fiore’nin bahçesiyle iç içe sakin bir konaklama deneyimi sunar. Serin yaz akşamlarının tadını çıkarabileceğiniz bu oda, sade ve şık detaylarla donatılmıştır. Doğrudan bahçeye açılan kapısıyla, doğayla baş başa bir atmosfer arayanlar için idealdir.",
  },
  {
    name: "Üst Odalar",
    image: "/images/rooms/ust-oda/1.jpg",
    desc:
      "Casa Fiore’nin üst katında yer alan bu oda, avluya bakan keyifli konumuyla sakinlik arayan misafirler için huzurlu bir seçenek sunar. Doğal dokular, özenle seçilmiş detaylar ve sade şıklığıyla sade ama zarif bir atmosfer yaratır. Sessizlik ve dinginlik isteyen çiftler için idealdir.",
  },
  {
    name: "Aile Odası",
    image: "/images/rooms/aile-odasi/1.jpg",
    desc:
      "Geniş ve kullanışlı yapısıyla aileler için ideal olan bu oda, hem ebeveynler hem çocuklar için konforlu bir konaklama sağlar. Çoklu yatak düzeniyle, ev sıcaklığında ama Casa Fiore şıklığında bir deneyim sunar.",
  },
];

export default function Home() {
  return (
    <div style={{ fontFamily: "sans-serif", background: "#fff" }}>
      {/* Header & Menü */}
      <header style={{ borderBottom: `2px solid ${orange}`, background: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1200, margin: "0 auto", padding: "1rem 2rem" }}>
          <Image src="/images/about/about-image.jpg" alt="Casa Fiore Logo" width={80} height={80} style={{ borderRadius: "50%" }} />
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
      <section style={{ position: "relative", width: "100%", height: "50vw", maxHeight: 500, minHeight: 300, overflow: "hidden" }}>
        <Image src="/images/hero/hero-image.jpg" alt="Casa Fiore Hero" fill style={{ objectFit: "cover", filter: "brightness(0.7)" }} />
        <h1 style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#fff", fontSize: "3rem", fontWeight: 700, letterSpacing: 2, textShadow: "0 2px 16px #000" }}>
          Casa Fiore Sığacık
        </h1>
      </section>

      {/* Konaklama */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 1rem 1rem 1rem" }}>
        <h2 style={{ color: orange, fontSize: 32, fontWeight: 700, marginBottom: 32 }}>Konaklama</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center" }}>
          {rooms.map((room) => (
            <div key={room.name} style={{ background: "#faf7f2", borderRadius: 16, boxShadow: "0 2px 8px #0001", maxWidth: 340, flex: "1 1 300px", padding: 24, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Image src={room.image} alt={room.name} width={300} height={200} style={{ borderRadius: 12, objectFit: "cover" }} />
              <h3 style={{ color: orange, fontSize: 22, fontWeight: 700, margin: "1rem 0 0.5rem 0" }}>{room.name}</h3>
              <p style={{ color: "#333", fontSize: 16, textAlign: "center" }}>{room.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Kahvaltımız */}
      <section style={{ maxWidth: 900, margin: "3rem auto 0 auto", padding: "1rem" }}>
        <h2 style={{ color: orange, fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Kahvaltımız</h2>
        <p style={{ color: "#333", fontSize: 17, textAlign: "center", marginBottom: 24 }}>
          Yeni güne Ege’nin dinginliğinde, taptaze lezzetlerle başlamak ister misiniz? Casa Fiore’de her sabah, özenle hazırlanan yerel ürünler ve mevsimlik tatlarla kurulan sofralar sizi bekliyor.<br />
          Gelin, kahvaltıyı sadece bir öğün değil, bir ritüel haline getirelim.
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image src="/images/breakfast/1.jpg" alt="Kahvaltı" width={400} height={250} style={{ borderRadius: 12, objectFit: "cover" }} />
          <Link href="/kahvalti" style={{ marginTop: 16, color: orange, fontWeight: 600, fontSize: 18, textDecoration: "none" }}>
            👉 Kahvaltı sayfasına göz atın
          </Link>
        </div>
      </section>

      {/* Kahve & Daha Fazlası */}
      <section style={{ maxWidth: 900, margin: "3rem auto 0 auto", padding: "1rem" }}>
        <h2 style={{ color: orange, fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Kahve & Daha Fazlası</h2>
        <p style={{ color: "#333", fontSize: 17, textAlign: "center", marginBottom: 24 }}>
          Casa Fiore’de kahve sadece içecek değil, bir ritüel. Espresso’dan matcha latte’ye, sumaklı limonatadan cicibebe milkshake’e kadar her damak zevkine hitap eden zengin menümüzle günün her anına eşlik ediyoruz. Sıcak ve soğuk içecek seçeneklerimizi keşfedin, bir fincan mutluluğa davetlisiniz.
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image src="/images/coffee_more/15.jpg" alt="Kahve ve Daha Fazlası" width={400} height={250} style={{ borderRadius: 12, objectFit: "cover" }} />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#222", color: "#fff", marginTop: 48, padding: "2rem 1rem", textAlign: "center" }}>
        <div style={{ fontWeight: 700, color: orange, fontSize: 20, marginBottom: 8 }}>@casafioresigacik</div>
        <div>Sığacık, 127. Sk. No: 21, 35460 Seferihisar/İzmir</div>
        <div>0 (531) 611 71 76</div>
        <div style={{ marginTop: 8 }}>
          <a href="https://www.instagram.com/casafioresigacik/" target="_blank" rel="noopener noreferrer" style={{ color: orange, textDecoration: "underline" }}>
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}

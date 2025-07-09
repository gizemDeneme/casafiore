import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const orange = "#E07A1B";

const menu = [
  {
    title: "Sıcak Kahveler",
    items: [
      { name: "Espresso", price: "90₺" },
      { name: "Doppio", price: "100₺" },
      { name: "Americano", price: "130₺" },
      { name: "Cafe latte", price: "140₺" },
      { name: "Cappucino", price: "140₺" },
      { name: "Flat white", price: "140₺" },
      { name: "Cortado", price: "130₺" },
      { name: "Mocha", price: "150₺" },
      { name: "White mocha", price: "150₺" },
      { name: "Türk kahvesi", price: "100₺" },
      { name: "Duble Türk kahvesi", price: "200₺" },
    ],
  },
  {
    title: "Soğuk Kahveler",
    items: [
      { name: "Ice americano", price: "150₺" },
      { name: "Ice latte", price: "170₺" },
      { name: "Ice mocha", price: "180₺" },
      { name: "Ice white mocha", price: "180₺" },
    ],
  },
  {
    title: "Fresh & More",
    items: [
      { name: "Fiore refresher", price: "170₺" },
      { name: "Sumaklı limonata", price: "170₺" },
      { name: "Limonata", price: "140₺" },
      { name: "Naneli limonata", price: "160₺" },
      { name: "Green light tea", price: "150₺" },
      { name: "Orman meyveli frozen", price: "170₺" },
      { name: "Mango ananas frozen", price: "170₺" },
      { name: "Cicibebe milkshake", price: "220₺" },
      { name: "Oreo milkshake", price: "220₺" },
      { name: "Berry milkshake", price: "220₺" },
      { name: "Tropical milkshake", price: "220₺" },
      { name: "Espresso milkshake", price: "220₺" },
    ],
  },
  {
    title: "Tea & More",
    items: [
      { name: "Demleme çay", price: "40₺" },
      { name: "Fincan çay", price: "70₺" },
      { name: "Bitki çayları", price: "130₺" },
      { name: "Matcha latte", price: "160₺" },
      { name: "Ice matcha latte", price: "180₺" },
    ],
  },
  {
    title: "Soft",
    items: [
      { name: "Su", price: "40₺" },
      { name: "Soda", price: "70₺" },
      { name: "Coca cola/zero", price: "90₺" },
      { name: "Ice tea", price: "90₺" },
    ],
  },
  {
    title: "Ekstralar",
    items: [
      { name: "Ekstra shot", price: "50₺" },
      { name: "Ekstra şurup (vanilya, karamel, frambuaz)", price: "30₺" },
      { name: "Bitkisel süt", price: "40₺" },
    ],
  },
];

export default function Kahve() {
  return (
    <div style={{ background: "#fff", color: "#222", fontFamily: "sans-serif" }}>
      <Head>
        <title>Kahve & Daha Fazlası | Casa Fiore Sığacık</title>
        <meta name="description" content="Casa Fiore Sığacık’ta kahve, serpme kahvaltı ve Ege kahvaltısı menüsü. Sığacık’ta nerede kahvaltı yapılır, en iyi kahve ve serpme kahvaltı Casa Fiore’de!" />
        <meta name="keywords" content="Sığacık kahvaltı, serpme kahvaltı, Ege kahvaltısı, Casa Fiore, Sığacık’ta nerede kahvaltı yapılır, kahve menüsü" />
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
        <Image src="/images/coffee_more/15.jpg" alt="Casa Fiore Kahve & Daha Fazlası" fill style={{ objectFit: "cover", filter: "brightness(0.7)" }} />
        <h1 style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#fff", fontSize: "2.5rem", fontWeight: 700, letterSpacing: 1, textShadow: "0 2px 16px #000" }}>
          Kahve & Daha Fazlası
        </h1>
      </section>
      {/* Açıklama */}
      <section style={{ maxWidth: 900, margin: "2.5rem auto 0 auto", padding: "0 1rem" }}>
        <h2 style={{ color: orange, fontSize: 26, fontWeight: 700, marginBottom: 16 }}>Kahve & Daha Fazlası – Casa Fiore’de Her Damak Tadına Uygun Bir Mola</h2>
        <p style={{ fontSize: 17, marginBottom: 18, lineHeight: 1.7 }}>
          Casa Fiore’de kahve, sadece bir içecek değil, anın tadını çıkarma biçimidir. Sığacık’ın sıcak ritmine eşlik eden menümüzde, klasik kahve çeşitlerinden özgün karışımlara, ferahlatıcı içeceklerden tatlı dokunuşlara kadar her zevke uygun bir seçenek bulacaksınız.<br /><br />
          Espresso, cappuccino, latte gibi sıcak kahvelerimizle güne güçlü bir başlangıç yapabilir; iced latte, white mocha, cold brew gibi soğuk kahvelerimizle serinleyebilirsiniz. Kahve dışında, ev yapımı limonatalar, sumaklı ferahlatıcı karışımlar ve orman meyveli frozen’larla içecek deneyiminizi zenginleştirebilirsiniz.<br /><br />
          Tatlı bir kaçamak arayanlar için cicibebe, oreo veya berry milkshake’ler; bitki çayı sevenler için ise doğal demlemeler ve matcha latte seçenekleri menümüzde sizi bekliyor.<br /><br />
          Casa Fiore’nin samimi atmosferinde, ister yalnız başınıza bir fincan kahveyle, ister sevdiklerinizle keyifli sohbetler eşliğinde içeceğinizle bu anı özel kılabilirsiniz.
        </p>
      </section>
      <div style={{ width: '100%', maxWidth: 900, margin: '2.5rem auto', borderBottom: `2px solid #ececec`, height: 0 }} />
      {/* Menü */}
      <section style={{ maxWidth: 700, margin: "2.5rem auto 2rem auto", padding: "0 1rem" }}>
        <h2 style={{ color: orange, fontSize: 24, fontWeight: 700, margin: "2rem 0 1rem 0" }}>Casa Fiore Sığacık Kahve & Serpme Kahvaltı Menüsü</h2>
        <p style={{ fontSize: 16, marginBottom: 18 }}>
          Casa Fiore’de her sabah taptaze serpme kahvaltı ve gün boyu kahve keyfi sizi bekliyor. Sığacık’ta kahvaltı ve kahve için en iyi adres!
        </p>
        <div className="menu-cards">
          {menu.map((cat) => (
            <div className="menu-card" key={cat.title}>
              <h3>{cat.title}</h3>
              <ul>
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <span className="item">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <style jsx>{`
          .menu-cards {
            display: flex;
            flex-direction: column;
            gap: 28px;
          }
          .menu-card {
            background: #faf7f2;
            border-radius: 14px;
            box-shadow: 0 2px 8px #0001;
            padding: 24px 18px 12px 18px;
            margin-bottom: 0;
          }
          .menu-card h3 {
            color: ${orange};
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 12px;
          }
          .menu-card ul {
            list-style: none;
            padding: 0;
            margin: 0 0 12px 0;
          }
          .menu-card li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1.08rem;
            padding: 10px 0;
            border-bottom: 1px solid #ececec;
            transition: background 0.2s;
          }
          .menu-card li:last-child {
            border-bottom: none;
          }
          .menu-card li:hover {
            background: #fff5e6;
          }
          .item {
            font-weight: 500;
          }
          .price {
            color: ${orange};
            font-weight: 700;
            margin-left: 16px;
            font-size: 1.08rem;
            letter-spacing: 0.5px;
          }
          @media (max-width: 600px) {
            .menu-card {
              padding: 14px 4px 8px 4px;
            }
            .menu-card li {
              font-size: 0.98rem;
              padding: 8px 0;
            }
          }
        `}</style>
      </section>
    </div>
  );
} 
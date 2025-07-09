import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const orange = "#E07A1B";

export default function Iletisim() {
  return (
    <div style={{ fontFamily: "sans-serif", background: "#fff" }}>
      <Head>
        <title>Casa Fiore İletişim | Sığacık</title>
        <meta name="description" content="Casa Fiore Sığacık ile iletişime geçmek için adres, telefon ve e-posta bilgilerine ulaşabilir, form aracılığıyla mesaj bırakabilirsiniz." />
      </Head>
      {/* Header & Menü */}
      <header className="header-flex">
        <Link href="/" className="logo-flex">
          <Image src="/images/about/about-image.jpg" alt="Casa Fiore Logo" width={80} height={80} style={{ borderRadius: "50%" }} />
        </Link>
        <div className="menu-group">
          <nav>
            <ul className="nav-menu">
              <li><Link href="/konaklama">Konaklama</Link></li>
              <li><Link href="/kahvalti">Kahvaltımız</Link></li>
              <li><Link href="/kahve">Kahve & Daha Fazlası</Link></li>
              <li><Link href="/iletisim">İletişim</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <style jsx>{`
        .header-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid ${orange};
          background: #fff;
          max-width: 1200px;
          margin: 0 auto;
          padding: 16px 32px;
        }
        .logo-flex {
          align-self: flex-start;
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        .menu-group {
          margin-left: auto;
          display: flex;
          align-items: center;
        }
        .nav-menu {
          display: flex;
          gap: 24px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-menu li a {
          color: ${orange};
          font-weight: 600;
          font-size: 18px;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-menu li a:hover {
          color: #b85d0d;
        }
        @media (max-width: 700px) {
          .header-flex {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            padding: 12px 8px;
          }
          .menu-group {
            width: 100%;
            margin-left: 0;
          }
          .nav-menu {
            flex-direction: column;
            gap: 10px;
            width: 100%;
            align-items: flex-start;
          }
        }
      `}</style>
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 1rem 1rem" }}>
        <h1 style={{ color: "#111", fontSize: 32, fontWeight: 700, marginBottom: 16 }}>Bize Ulaşın</h1>
        <p style={{ fontSize: 17, color: "#111", marginBottom: 24 }}>
          Casa Fiore ile ilgili her türlü sorunuz, rezervasyon talepleriniz veya iş birlikleriniz için bize ulaşabilirsiniz. Sizi ağırlamaktan mutluluk duyarız.
        </p>
        <div style={{ background: "#faf7f2", borderRadius: 12, boxShadow: "0 2px 8px #0001", padding: 18, fontSize: 17, marginBottom: 24, color: "#111" }}>
          <div><b>Adres:</b> Sığacık, 127. Sk. No: 21, 35460 Seferihisar/İzmir</div>
          <div><b>Telefon:</b> <a href="tel:05316117176" style={{ color: orange, textDecoration: "underline" }}>0 (531) 611 71 76</a></div>
          <div><b>E-posta:</b> <a href="mailto:casafioresigacik@gmail.com" style={{ color: orange, textDecoration: "underline" }}>casafioresigacik@gmail.com</a></div>
        </div>
        <div style={{ width: "100%", borderRadius: 12, overflow: "hidden", marginBottom: 24 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.6733631099105!2d26.782579475713668!3d38.194260771882625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb8d1b7f26bd0d%3A0xce2508ed3898eff0!2sCasa%20Fiore%20Otel%20%26%20Cafe!5e0!3m2!1str!2str!4v1752093724777!5m2!1str!2str"
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: 12 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Casa Fiore Sığacık Harita"
          ></iframe>
        </div>
      </main>
      {/* Footer */}
    </div>
  );
} 
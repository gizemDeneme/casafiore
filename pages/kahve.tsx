import Image from 'next/image';
import Head from 'next/head';

const coffeeImages = [
  '/images/coffee_more/1.jpg',
  '/images/coffee_more/2.jpg',
  '/images/coffee_more/3.jpg',
  '/images/coffee_more/4.jpg',
  '/images/coffee_more/5.jpg',
  '/images/coffee_more/6.jpg',
  '/images/coffee_more/7.jpg',
  '/images/coffee_more/8.jpg',
  '/images/coffee_more/9.jpg',
  '/images/coffee_more/10.jpg',
  '/images/coffee_more/11.jpg',
  '/images/coffee_more/12.jpg',
  '/images/coffee_more/13.Jjpg.JPG',
  '/images/coffee_more/14.jpg',
  '/images/coffee_more/16.jpg',
  '/images/coffee_more/17.jpg',
  '/images/coffee_more/18.jpg',
  '/images/coffee_more/19.jpg',
];

export default function Kahve() {
  return (
    <div style={{ background: '#fff', color: '#111', minHeight: '100vh' }}>
      <Head>
        <title>Kahve & Daha Fazlası | Casa Fiore Sığacık</title>
        <meta name="description" content="Casa Fiore Sığacık içecek menüsü: Sıcak kahveler, soğuk kahveler, milkshake, demleme çay, matcha latte ve Ege’de kahve molası için en iyi seçenekler." />
        <meta name="keywords" content="Sığacık kahve, Ege’de kahve molası, Casa Fiore içecek menüsü, soğuk kahve, milkshake, demleme çay, matcha latte" />
      </Head>
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        {/* Header Image */}
        <div style={{ width: '100%', maxWidth: '100vw', height: '50vh', position: 'relative', marginBottom: 48, borderRadius: 16, overflow: 'hidden' }}>
          <Image src="/images/coffee_more/15.jpg" alt="Kahve & Daha Fazlası" width={1920} height={600} style={{ objectFit: 'cover', width: '100%', height: '100%' }} priority />
        </div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, textAlign: 'center', marginBottom: 24, color: '#7c4a1a' }}>
          Kahve & Daha Fazlası – Casa Fiore’de Her Damak Tadına Uygun Bir Mola
        </h1>
        <p style={{ color: '#222', fontSize: '1.1rem', marginBottom: 32, textAlign: 'center', lineHeight: 1.7 }}>
          Casa Fiore’de kahve, sadece bir içecek değil, anın tadını çıkarma biçimidir. Sığacık’ın sıcak ritmine eşlik eden menümüzde, klasik kahve çeşitlerinden özgün karışımlara, ferahlatıcı içeceklerden tatlı dokunuşlara kadar her zevke uygun bir seçenek bulacaksınız.<br /><br />
          Espresso, cappuccino, latte gibi sıcak kahvelerimizle güne güçlü bir başlangıç yapabilir; iced latte, white mocha, cold brew gibi soğuk kahvelerimizle serinleyebilirsiniz. Kahve dışında, ev yapımı limonatalar, sumaklı ferahlatıcı karışımlar ve orman meyveli frozen’larla içecek deneyiminizi zenginleştirebilirsiniz.<br /><br />
          Tatlı bir kaçamak arayanlar için cicibebe, oreo veya berry milkshake’ler; bitki çayı sevenler için ise doğal demlemeler ve matcha latte seçenekleri menümüzde sizi bekliyor.<br /><br />
          Casa Fiore’nin samimi atmosferinde, ister yalnız başınıza bir fincan kahveyle, ister sevdiklerinizle keyifli sohbetler eşliğinde içeceğinizle bu anı özel kılabilirsiniz.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 48 }}>
          {coffeeImages.map((src, i) => (
            <div key={src} style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <Image src={src.replace('.webp', '.jpg')} alt={`Casa Fiore Kahve ve Daha Fazlası ${i + 1}`} width={400} height={300} style={{ width: '100%', height: 250, objectFit: 'cover' }} />
            </div>
          ))}
        </div>
        {/* MENU SECTION */}
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '32px 0' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: 24 }}>Menü</h2>
          <p style={{ textAlign: 'center', marginBottom: 32 }}>
            Casa Fiore Sığacık’ta Ege’de kahve molası vermek isteyenler için özenle hazırladığımız içecek menümüzü keşfedin. Sıcak ve soğuk kahveler, milkshake çeşitleri, demleme çaylar, matcha latte ve daha fazlası ile Casa Fiore içecek menüsü her damak zevkine hitap ediyor.
          </p>
          <section>
            <h2>Sıcak Kahveler</h2>
            <ul>
              <li>Espresso <span className="price">90₺</span></li>
              <li>Doppio <span className="price">100₺</span></li>
              <li>Americano <span className="price">130₺</span></li>
              <li>Cafe latte <span className="price">140₺</span></li>
              <li>Cappucino <span className="price">140₺</span></li>
              <li>Flat white <span className="price">140₺</span></li>
              <li>Cortado <span className="price">130₺</span></li>
              <li>Mocha <span className="price">150₺</span></li>
              <li>White mocha <span className="price">150₺</span></li>
              <li>Türk kahvesi <span className="price">100₺</span></li>
              <li>Duble Türk kahvesi <span className="price">200₺</span></li>
            </ul>
          </section>
          <section>
            <h2>Soğuk Kahveler</h2>
            <ul>
              <li>Ice americano <span className="price">150₺</span></li>
              <li>Ice latte <span className="price">170₺</span></li>
              <li>Ice mocha <span className="price">180₺</span></li>
              <li>Ice white mocha <span className="price">180₺</span></li>
            </ul>
          </section>
          <section>
            <h2>Fresh & More</h2>
            <ul>
              <li>Fiore refresher <span className="price">170₺</span></li>
              <li>Sumaklı limonata <span className="price">170₺</span></li>
              <li>Limonata <span className="price">140₺</span></li>
              <li>Naneli limonata <span className="price">160₺</span></li>
              <li>Green light tea <span className="price">150₺</span></li>
              <li>Orman meyveli frozen <span className="price">170₺</span></li>
              <li>Mango ananas frozen <span className="price">170₺</span></li>
              <li>Cicibebe milkshake <span className="price">220₺</span></li>
              <li>Oreo milkshake <span className="price">220₺</span></li>
              <li>Berry milkshake <span className="price">220₺</span></li>
              <li>Tropical milkshake <span className="price">220₺</span></li>
              <li>Espresso milkshake <span className="price">220₺</span></li>
            </ul>
          </section>
          <section>
            <h2>Tea & More</h2>
            <ul>
              <li>Demleme çay <span className="price">40₺</span></li>
              <li>Fincan çay <span className="price">70₺</span></li>
              <li>Bitki çayları <span className="price">130₺</span></li>
              <li>Matcha latte <span className="price">160₺</span></li>
              <li>Ice matcha latte <span className="price">180₺</span></li>
            </ul>
          </section>
          <section>
            <h2>Soft</h2>
            <ul>
              <li>Su <span className="price">40₺</span></li>
              <li>Soda <span className="price">70₺</span></li>
              <li>Coca cola/zero <span className="price">90₺</span></li>
              <li>Ice tea <span className="price">90₺</span></li>
            </ul>
          </section>
          <section>
            <h2>Ekstralar</h2>
            <ul>
              <li>Ekstra shot <span className="price">50₺</span></li>
              <li>Ekstra şurup (vanilya, karamel, frambuaz) <span className="price">30₺</span></li>
              <li>Bitkisel süt <span className="price">40₺</span></li>
            </ul>
          </section>
        </div>
      </main>
      <style jsx>{`
        section {
          margin-bottom: 32px;
        }
        h2 {
          font-size: 1.5rem;
          margin-bottom: 8px;
          font-weight: 600;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          display: flex;
          justify-content: space-between;
          padding: 6px 0;
          border-bottom: 1px solid #eaeaea;
          font-size: 1.08rem;
        }
        .price {
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        @media (max-width: 600px) {
          main {
            padding: 20px 4px;
          }
          h1 {
            font-size: 1.3rem;
          }
          h2 {
            font-size: 1.1rem;
          }
          li {
            font-size: 0.98rem;
          }
        }
      `}</style>
    </div>
  );
} 
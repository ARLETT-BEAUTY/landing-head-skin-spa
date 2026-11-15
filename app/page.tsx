import Effects from '@/components/Effects';
import { contacto, faq, rituales } from '@/lib/rituales';

const frase =
  'Cierra los ojos. El agua tibia cae despacio, las manos trabajan sin prisa y durante un rato, solo toca disfrutar.'.split(' ');
const DORADAS = 3; // últimas palabras en dorado

function Logo({ size, priority }: { size: number; priority?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/img/logo-arlett.webp"
      alt="Arlett Beauty & Health"
      width={size}
      height={size}
      className="logo"
      fetchPriority={priority ? 'high' : undefined}
    />
  );
}

export default function Home() {
  return (
    <main className="page">
      {/* 1 · Hero */}
      <section className="hero">
        <div className="hero-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/hs-hero.webp" alt="Ritual Skin & Head Spa en camilla" fetchPriority="high" />
        </div>
        <div className="hero-shade" aria-hidden />
        <header className="hero-top">
          <Logo size={104} priority />
          <a href="#rituales" className="btn btn-glass">
            Reservar
          </a>
        </header>
        <div className="hero-text">
          <div className="eyebrow intro" style={{ ['--i' as string]: 0 }}>
            Arlett Beauty &amp; Health
          </div>
          <div className="hero-group">
            <h1 className="intro" style={{ ['--i' as string]: 1 }}>
              Skin &amp; Head
              <br />
              <span className="gold">Japanese Spa</span>
            </h1>
            <p className="hero-sub intro" style={{ ['--i' as string]: 2 }}>
              Un ritual de agua, masaje y cuidado de piel y cabello. De una a dos horas, solo para ti.
            </p>
            <a href="#rituales" className="btn btn-solid btn-hero intro" style={{ ['--i' as string]: 3 }}>
              Reservar cita
              <span className="btn-arrow" aria-hidden>
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <div style={{ height: 52 }} />

      {/* 2 · Carrusel */}
      <section aria-labelledby="t-tres">
        <div className="sec-head row">
          <h2 id="t-tres">
            Tres <em>rituales</em>
          </h2>
          <div className="swipe">Desliza →</div>
        </div>
        <div className="carousel" data-reveal>
          {rituales.map((r) => (
            <a key={r.id} href={`#${r.id}`} className="c-card">
              <div className="photo" style={{ height: 250 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.foto} alt={`Ritual ${r.nombre}`} loading="lazy" />
              </div>
              <div className="c-body">
                <div className="c-name">{r.nombre}</div>
                <div className="c-meta">
                  <span className="gold">{r.duracion}</span>
                  <span className="c-price">{r.precio}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 3 · Frase */}
      <p className="phrase" data-blur>
        {frase.map((w, i) => (
          <span key={i} className={i >= frase.length - DORADAS ? 'gold' : undefined} style={{ ['--i' as string]: i }}>
            {w}
          </span>
        ))}
      </p>

      {/* 4 · En detalle */}
      <section id="rituales" aria-labelledby="t-detalle">
        <div className="sec-head">
          <h2 id="t-detalle">
            En <em>detalle</em>
          </h2>
        </div>
        <div className="detail-list" data-reveal>
          {rituales.map((r, i) => (
            <article key={r.id} id={r.id} className="d-card" style={{ ['--i' as string]: i }}>
              <div className="photo" style={{ height: 230 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.foto} alt={`Ritual ${r.nombre}`} loading="lazy" />
              </div>
              <div className="d-body">
                <div className="d-dur">
                  {r.duracion}
                  {r.etiqueta ? ` · ${r.etiqueta}` : ''}
                </div>
                <h3 className="d-name">{r.nombre}</h3>
                <p className="d-inc">{r.incluye.join(' · ')}</p>
                <div className="d-foot">
                  <div className="d-price">{r.precio}</div>
                  <a
                    href={r.urlPago}
                    className={`btn btn-sm ${r.destacado ? 'btn-solid' : 'btn-line'}`}
                    aria-label={`Reservar ${r.nombre}, ${r.duracion}, ${r.precio}`}
                  >
                    Reservar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5 · FAQ */}
      <section className="faq" aria-labelledby="t-faq">
        <h2 id="t-faq">
          Preguntas <em>frecuentes</em>
        </h2>
        {faq.map((f) => (
          <details key={f.q} data-reveal>
            <summary>
              <span className="faq-q">{f.q}</span>
              <span className="faq-i" aria-hidden>
                +
              </span>
            </summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>

      {/* 6 · Contacto */}
      <section className="contact" data-reveal aria-labelledby="t-contacto">
        <h2 id="t-contacto" className="contact-title">
          ¿Cuándo <em>vienes</em>?
        </h2>
        <div className="contact-data">
          {contacto.direccion && (
            <>
              {contacto.direccion}
              <br />
            </>
          )}
          {contacto.telefono && (
            <>
              <a href={`tel:${contacto.telefono.replace(/\s/g, '')}`}>{contacto.telefono}</a> ·{' '}
            </>
          )}
          <a className="gold" href={`https://www.instagram.com/${contacto.instagram}/`} target="_blank" rel="noopener">
            @{contacto.instagram}
          </a>
        </div>
        <a href="#rituales" className="btn btn-solid btn-block">
          Reservar cita
        </a>
      </section>

      {/* 7 · Pie */}
      <footer className="foot">
        <Logo size={150} />
      </footer>

      <Effects />
    </main>
  );
}

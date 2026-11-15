import Effects from './Effects';

const IG = 'https://www.instagram.com/arlett__beauty/';

const packs = [
  {
    id: 'esencial',
    name: 'Esencial',
    time: '60 min',
    price: '89 €',
    items: ['Peeling', 'Mascarilla', 'Masaje'],
    href: 'https://buy.stripe.com/cNieVd2j75xw6eH5m01Jm00',
  },
  {
    id: 'delicatesse',
    name: 'Delicatesse',
    time: '90 min',
    price: '129 €',
    items: ['Limpieza facial especializada', 'Peeling capilar y mascarilla', 'Masaje, secado e infusión'],
    href: 'https://buy.stripe.com/aFa9AT6zn4ts1Yr01G1Jm02',
  },
  {
    id: 'bloom',
    name: 'Bloom',
    time: '120 min',
    price: '169 €',
    items: ['Masaje corporal', 'Tratamiento Resurface y capilar', 'Secado e infusión'],
    href: 'https://buy.stripe.com/eVqeVd8Hv4ts46z8yc1Jm01',
  },
];

const steps = [
  {
    n: 'I',
    title: 'Limpieza y peeling',
    text: 'Retiramos restos de producto, grasa y células muertas del cuero cabelludo y, según la experiencia, también de la piel del rostro.',
    img: 'facial',
    alt: 'Tratamiento facial con la clienta tumbada y el pelo recogido en una toalla',
    pos: '50% 50%',
  },
  {
    n: 'II',
    title: 'Masaje',
    text: 'Presión lenta sobre el cuero cabelludo, la nuca y el rostro para soltar la tensión acumulada. Es la parte que más se nota al salir.',
    img: 'f7857180',
    alt: 'Masaje de cabeza a una clienta tumbada boca arriba',
    pos: '60% 50%',
  },
  {
    n: 'III',
    title: 'Mascarilla, secado e infusión',
    text: 'Una mascarilla nutre el cabello o la piel, secamos el pelo con calma y terminas con una infusión antes de irte.',
    img: 'f16098846',
    alt: 'Cabina en penumbra con velas encendidas y la camilla preparada',
    pos: '42% 60%',
  },
];

const faqs = [
  {
    q: '¿En qué se diferencia de un lavado de peluquería?',
    a: 'Dura más y busca otra cosa: limpiar el cuero cabelludo en profundidad y relajar con masaje, no peinar. Se hace en camilla y sin prisa.',
  },
  {
    q: '¿Qué experiencia elijo?',
    a: 'Esencial es una hora de peeling, mascarilla y masaje. Delicatesse añade una limpieza facial especializada. Bloom es la más larga, con masaje corporal y tratamiento Resurface.',
  },
  {
    q: '¿Cómo elijo el día de la sesión?',
    // PROVISIONAL: pendiente de que Arlett confirme el proceso de reserva tras el pago
    a: 'Después del pago te escribimos para cerrar contigo el día y la hora.',
  },
  {
    q: '¿Es seguro pagar aquí?',
    a: 'Sí. Cada botón abre la página de pago de Stripe, que procesa la tarjeta; nosotros no vemos ni guardamos sus datos.',
  },
];

function Brand() {
  return (
    <span className="brand">
      <img src="/img/arlett-mark.webp" alt="" width={36} height={50} />
      <span className="brand__txt">
        <span className="brand__name">Arlett</span>
        <span className="brand__sub">Beauty &amp; Health</span>
      </span>
    </span>
  );
}

/** The gold water halo of a Japanese head spa basin: a ring with fine jets falling towards the centre. */
function Halo() {
  const jets = Array.from({ length: 44 }, (_, i) => {
    const a = Math.PI * (0.06 + (0.88 * i) / 43) + Math.PI; // upper arc
    const x1 = 200 + Math.cos(a) * 168;
    const y1 = 210 + Math.sin(a) * 168;
    const x2 = 200 + Math.cos(a) * 60;
    const y2 = 210 + Math.sin(a) * 60;
    return { x1, y1, x2, y2, d: (i * 137) % 23 };
  });
  return (
    <svg className="halo" viewBox="0 0 400 400" aria-hidden="true">
      <defs>
        <linearGradient id="g-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6e3ae" />
          <stop offset="0.45" stopColor="#c9a24e" />
          <stop offset="1" stopColor="#6f5220" />
        </linearGradient>
      </defs>
      <circle className="halo__glow" cx="200" cy="210" r="176" />
      <circle className="halo__ring" cx="200" cy="210" r="176" />
      <circle className="halo__ring halo__ring--thin" cx="200" cy="210" r="188" />
      <g className="halo__jets">
        {jets.map((j, i) => (
          <line
            key={i}
            x1={j.x1.toFixed(1)}
            y1={j.y1.toFixed(1)}
            x2={j.x2.toFixed(1)}
            y2={j.y2.toFixed(1)}
            style={{ animationDelay: `${(-(j.d / 23) * 2.4).toFixed(2)}s` }}
          />
        ))}
      </g>
    </svg>
  );
}

function Lines({ className }: { className: string }) {
  return (
    <svg className={`lines ${className}`} viewBox="0 0 600 300" aria-hidden="true" preserveAspectRatio="none">
      <path d="M-20 280 C 160 250, 330 150, 420 -20" />
      <path d="M-20 300 C 200 280, 400 180, 520 -20" />
      <path d="M-20 240 C 120 220, 250 130, 320 -20" />
    </svg>
  );
}

const Check = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 8.5l3.2 3.2L13 4.8" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Effects />
      <a className="skip" href="#top">Saltar al contenido</a>

      <header className="top">
        <a href="#top" aria-label="Arlett Beauty &amp; Health, inicio">
          <Brand />
        </a>
        <a className="btn btn--line top__cta" href="#packs">Reservar</a>
      </header>

      <main id="top">
        {/* ───────── Hero ───────── */}
        <section className="hero" aria-labelledby="hero-h">
          <Lines className="lines--tl" />
          <span className="bokeh bokeh--a" aria-hidden="true" />
          <span className="bokeh bokeh--b" aria-hidden="true" />

          <div className="hero__visual" aria-hidden="true">
            <Halo />
            {/* FOTO PROVISIONAL (Wikimedia): sustituir por la foto real del head spa de Arlett */}
            <img
              className="hero__orchid"
              src="/img/orchid-hero.webp"
              srcSet="/img/orchid-hero-500.webp 500w, /img/orchid-hero.webp 1280w"
              sizes="(max-width: 900px) 90vw, 50vw"
              width={1280}
              height={1176}
              alt=""
              fetchPriority="high"
            />
          </div>

          <div className="hero__copy">
            <p className="eyebrow">Head &amp; Skin Spa · Ritual japonés</p>
            <h1 id="hero-h">
              Head spa japonés
              <em>para tu cabello y tu piel</em>
            </h1>
            <p className="hero__lead">
              Limpieza profunda del cuero cabelludo, masaje y cuidado de la piel del rostro. En camilla, con agua
              templada y sin prisa.
            </p>
            <div className="hero__actions">
              <a className="btn btn--gold" href="#packs">Elegir mi experiencia</a>
              <a className="btn btn--ghost" href="#ritual">Cómo es la sesión</a>
            </div>
            <dl className="facts">
              <div><dt>Duración</dt><dd>60 a 120 min</dd></div>
              <div><dt>Experiencias</dt><dd>Tres</dd></div>
              <div><dt>Desde</dt><dd>89 €</dd></div>
            </dl>
          </div>
        </section>

        {/* ───────── Qué es ───────── */}
        <section className="section ritual" id="ritual" aria-labelledby="ritual-h">
          <div className="wrap">
            <div className="head" data-reveal>
              <p className="eyebrow eyebrow--ruled">El ritual</p>
              <h2 id="ritual-h">Qué es un <em>head spa japonés</em></h2>
              <p className="head__lead">
                Un tratamiento nacido en los salones de Japón que cuida el cabello desde la raíz y relaja cabeza, cuello
                y rostro. Cada sesión tiene tres momentos.
              </p>
            </div>
            <ol className="steps">
              {steps.map((s, i) => (
                <li className="step" key={s.n} data-reveal style={{ transitionDelay: `${i * 120}ms` }}>
                  <div className="arch">
                    {/* FOTO PROVISIONAL (Wikimedia) */}
                    <img
                      src={s.img === 'facial' ? '/img/step-facial.webp' : `/img/photo-${s.img}-960.webp`}
                      sizes="(max-width: 900px) 80vw, 30vw"
                      alt={s.alt}
                      loading="lazy"
                      style={{ objectPosition: s.pos }}
                    />
                  </div>
                  <span className="step__n" aria-hidden="true">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────── Packs ───────── */}
        <section className="section packs" id="packs" aria-labelledby="packs-h">
          <span className="bokeh bokeh--c" aria-hidden="true" />
          <div className="wrap">
            <div className="head" data-reveal>
              <p className="eyebrow eyebrow--ruled">Nuestras experiencias</p>
              <h2 id="packs-h">Elige tu <em>Skin &amp; Head</em></h2>
              <p className="head__lead">Reserva online y paga con tarjeta en la página segura de Stripe.</p>
            </div>
            <div className="cards">
              {packs.map((p, i) => (
                <article className={`card card--${p.id}`} key={p.id} data-reveal style={{ transitionDelay: `${i * 120}ms` }}>
                  <p className="card__kicker">Skin &amp; Head</p>
                  <h3>{p.name}</h3>
                  <p className="card__meta">
                    <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="8" /><path d="M10 5.5V10l3 2" /></svg>
                    <span>{p.time}</span>
                    <span className="card__dot" aria-hidden="true">·</span>
                    <strong>{p.price}</strong>
                  </p>
                  <ul>
                    {p.items.map((it) => (
                      <li key={it}><Check />{it}</li>
                    ))}
                  </ul>
                  <a className="btn btn--line" href={p.href}>
                    Reservar {p.name}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Preguntas ───────── */}
        <section className="section faq" id="preguntas" aria-labelledby="faq-h">
          <div className="wrap wrap--narrow">
            <div className="head" data-reveal>
              <p className="eyebrow eyebrow--ruled">Antes de reservar</p>
              <h2 id="faq-h">Preguntas <em>frecuentes</em></h2>
            </div>
            <div className="faq__list" data-reveal>
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>
                    {f.q}
                    <span className="faq__plus" aria-hidden="true" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
            <p className="faq__more" data-reveal>
              ¿Otra duda? <a href={IG}>Escríbenos por Instagram</a>
            </p>
          </div>
        </section>
      </main>

      {/* ───────── Cierre y pie ───────── */}
      <footer className="close">
        <Lines className="lines--br" />
        {/* FOTO PROVISIONAL (Wikimedia) */}
        <img className="close__orchid" src="/img/orchid-close.webp" alt="" width={960} height={720} loading="lazy" />
        <div className="wrap close__in">
          <div className="close__cta" data-reveal>
            <h2>Tu momento de bienestar <em>empieza aquí</em></h2>
            <p className="head__lead">Esencial 89&nbsp;€ · Delicatesse 129&nbsp;€ · Bloom 169&nbsp;€</p>
            <a className="btn btn--gold" href="#packs">Elegir mi experiencia</a>
          </div>
          <div className="foot">
            <Brand />
            <a className="foot__ig" href={IG}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.4" cy="6.6" r="1" className="fill" />
              </svg>
              @arlett__beauty
            </a>
            <p className="foot__legal">
              © 2026 Arlett Beauty &amp; Health · <a href="/credits.html">Créditos de las fotografías</a>
            </p>
          </div>
        </div>
      </footer>

      <div className="buybar" role="region" aria-label="Reserva rápida">
        <span>Head spa japonés <b>desde 89 €</b></span>
        <a className="btn btn--gold" href="#packs">Ver experiencias</a>
      </div>
    </>
  );
}

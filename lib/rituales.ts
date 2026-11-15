export type Ritual = {
  id: string;
  nombre: string;
  duracion: string;
  etiqueta?: string;
  precio: string;
  incluye: string[];
  destacado?: boolean;
  foto: string;
  urlPago: string;
};

export const rituales: Ritual[] = [
  {
    id: 'esencial',
    nombre: 'Esencial',
    duracion: '60 min',
    precio: '89 €',
    incluye: ['Peeling', 'Mascarilla', 'Masaje'],
    foto: '/img/hs-r1.webp',
    urlPago: 'https://buy.stripe.com/cNieVd2j75xw6eH5m01Jm00',
  },
  {
    id: 'delicatesse',
    nombre: 'Delicatesse',
    duracion: '90 min',
    precio: '129 €',
    incluye: ['Limpieza facial especializada', 'Peeling capilar y mascarilla', 'Masaje, secado e infusión'],
    foto: '/img/hs-r2.webp',
    urlPago: 'https://buy.stripe.com/aFa9AT6zn4ts1Yr01G1Jm02',
  },
  {
    id: 'bloom',
    nombre: 'Bloom',
    duracion: '120 min',
    etiqueta: 'el más completo',
    precio: '169 €',
    incluye: ['Masaje corporal', 'Tratamiento Resurface y capilar', 'Secado e infusión'],
    destacado: true,
    foto: '/img/hs-r3.webp',
    urlPago: 'https://buy.stripe.com/eVqeVd8Hv4ts46z8yc1Jm01',
  },
];

export const faq = [
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
    a: 'Después del pago te escribimos para cerrar contigo el día y la hora.',
  },
  {
    q: '¿Es seguro pagar aquí?',
    a: 'Sí. Cada botón abre la página de pago de Stripe, que procesa la tarjeta; nosotros no vemos ni guardamos sus datos.',
  },
];

/** Rellenar cuando el cliente los confirme; si están vacíos no se muestran. */
export const contacto = {
  direccion: '',
  telefono: '',
  instagram: 'arlett__beauty',
};

import React, { useEffect } from "react";

export default function App() {
  // WhatsApp del negocio (código de país + número, sin + ni espacios)
  const whatsapp = "573007705341";
  const whatsappMsg = encodeURIComponent(
    "¡Hola! Estoy interesado en el servicio de páginas web (sin e‑commerce). ¿Me compartes un diagnóstico gratis y una cotización?"
  );
  const whatsappLink = `https://wa.me/${whatsapp}?text=${whatsappMsg}`;

  // Cargar Tailwind y fuente Inter para previsualizar
  useEffect(() => {
    const tw = document.createElement("script");
    tw.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(tw);
    const inter = document.createElement("link");
    inter.rel = "stylesheet";
    inter.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap";
    document.head.appendChild(inter);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Estilos inline extra (animaciones + botón) */}
      <style>{`
        .btn-primary { background-image: linear-gradient(to right, #4CAF50 0%, #66BB6A 100%); transition: all .3s ease-in-out; color:#fff }
        .btn-primary:hover { background-image: linear-gradient(to right, #66BB6A 0%, #4CAF50 100%); transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,0,0,.2) }
        .animate-fade-in-down { animation: fadeInDown 1s ease-out }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out }
        @keyframes fadeInDown { from { opacity:0; transform:translateY(-20px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeInUp { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
      `}</style>

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org","@type":"WebSite","url":"https://tusitio.com/","name":"Servicios Web",
        potentialAction:{"@type":"SearchAction","target":"https://tusitio.com/?s={search_term_string}","query-input":"required name=search_term_string"}
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Inicio","item":"https://tusitio.com/"},
          {"@type":"ListItem","position":2,"name":"Servicios","item":"https://tusitio.com/servicios/"},
          {"@type":"ListItem","position":3,"name":"Diseño y Rediseño Web","item":"https://tusitio.com/servicio/diseno-redisenio/"}
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org","@type":"Service","name":"Diseño y Rediseño de Páginas Web","serviceType":"WebDesign",
        description:"Páginas web informativas y corporativas (sin e‑commerce), rápidas, seguras y optimizadas para SEO.",
        areaServed:{"@type":"Country","name":"Colombia"},
        provider:{"@type":"ProfessionalService","name":"Servicios Web","telephone":"+57 300 770 5341","email":"freddylobo7a@gmail.com"},
        offers:[
          {"@type":"Offer","name":"Plan Básico","price":"400000","priceCurrency":"COP"},
          {"@type":"Offer","name":"Plan Profesional","price":"700000","priceCurrency":"COP"},
          {"@type":"Offer","name":"Plan Corporativo","price":"1000000","priceCurrency":"COP"}
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"¿Cuánto tarda mi página web?","acceptedAnswer":{"@type":"Answer","text":"Entre 7 y 15 días hábiles según alcance y contenidos."}},
          {"@type":"Question","name":"¿Incluye SEO?","acceptedAnswer":{"@type":"Answer","text":"Sí, SEO técnico: H1‑H3, metas, sitemap, robots, optimización de velocidad."}},
          {"@type":"Question","name":"¿Puedo administrar el contenido?","acceptedAnswer":{"@type":"Answer","text":"Sí, entregamos acceso y una breve capacitación para autogestión."}}
        ]
      })}} />

      {/* Header (sin marcas personales) */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg py-4">
        <nav className="container mx-auto flex justify-center items-center px-4">
          <span className="text-2xl font-bold">Servicios Web</span>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-700 to-purple-800 text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="pattern-squares" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="5" height="5" fill="rgba(255,255,255,0.1)" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-squares)" />
          </svg>
        </div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg animate-fade-in-down">
            Páginas Web Profesionales que Venden (sin e‑commerce)
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 animate-fade-in-up">
            Transformamos ideas en presencia digital potente: sitios informativos, corporativos y landings optimizadas para crecer y posicionar en Google. Auditoría <strong>GRATIS</strong> y respuesta en <strong>15 minutos</strong> por WhatsApp.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
            ¡Solicita tu cotización por WhatsApp!
          </a>
        </div>
      </section>

      {/* Servicio detallado */}
      <section id="servicio-web-detalle" className="container mx-auto py-16 px-4">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-blue-800">Diseño y Rediseño de Páginas Web</h2>
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
          <div className="text-6xl text-blue-600 mb-4" aria-hidden>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16"><path d="M19.5 6.75a3 3 0 0 0-3-3h-10.5a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-7.5Z" /><path fillRule="evenodd" d="M2.25 15.75a3 3 0 0 0 3 3H12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V21h-2.25a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75H12V18h-6.75a.75.75 0 0 1-.75-.75V16.5h-.75a.75.75 0 0 1-.75-.75v-1.5ZM.75 6.75A3 3 0 0 1 3.75 3h10.5a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-3.197a.75.75 0 0 0-.614 1.25l1.654 2.115a.75.75 0 0 1-.225 1.084.75.75 0 0 1-1.084-.225L10.5 17.56l-1.42 1.815a.75.75 0 0 1-1.084.225.75.75 0 0 1-.225-1.084l1.654-2.115a.75.75 0 0 0-.614-1.25H3.75a3 3 0 0 1-3-3v-7.5ZM17.25 7.5a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Z" clipRule="evenodd" /></svg>
          </div>
          <h3 className="text-3xl font-bold mb-4 text-gray-900">Tu sitio web ideal, a tu alcance</h3>
          <p className="text-4xl font-extrabold text-blue-600 mb-6">Desde $400.000 COP</p>
          <p className="text-lg leading-relaxed mb-8 max-w-3xl">
            Creamos páginas web modernas, rápidas y 100% responsivas, con énfasis en conversión y SEO: estructura clara, copy orientado a intención de búsqueda y métricas listas para analizar resultados.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left w-full max-w-4xl mb-10">
            {[
              { t: "Diseño responsivo", d: "Perfecto en móviles, tablets y escritorio (UX y SEO móvil)." },
              { t: "SEO integral", d: "Arquitectura de contenidos y metadatos listos para posicionar en Google." },
              { t: "Velocidad superior", d: "Webs rápidas: core web vitals, compresión y buenas prácticas." },
              { t: "Integraciones", d: "Analytics, formularios optimizados, redes sociales y WhatsApp." },
              { t: "Seguridad SSL", d: "Sitios con HTTPS para confianza y mejor ranking." },
              { t: "Contenido administrable", d: "Secciones y blog fáciles de actualizar." },
            ].map((i) => (
              <div key={i.t} className="bg-blue-50 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-xl mb-2 text-blue-800">{i.t}</h4>
                <p className="text-gray-700 text-sm">{i.d}</p>
              </div>
            ))}
          </div>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block px-8 py-4 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">¡Quiero una web optimizada!</a>
        </div>
      </section>

      {/* SEO Esencial */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-blue-800">¿Cómo impulsamos tu SEO?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { t:"SEO técnico sólido", d:"Código limpio, URLs amigables, metadatos, sitemap y robots bien configurados." },
            { t:"Contenido que responde", d:"Secciones enfocadas en intención de búsqueda y palabras clave relevantes." },
            { t:"Core Web Vitals", d:"Velocidad, interactividad y estabilidad visual para experiencia de página." },
          ].map(x => (
            <div key={x.t} className="bg-white rounded-2xl shadow-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-3">{x.t}</h3>
              <p className="text-md opacity-90">{x.d}</p>
            </div>
          ))}
        </div>
        {/* Bloque semántico con ~150 términos long‑tail bien redactados */}
        <div className="mt-10 bg-white rounded-2xl shadow p-6 text-sm leading-7">
          <h3 className="text-xl font-bold mb-2">Cobertura semántica para búsquedas relacionadas</h3>
          <p className="text-gray-700">
            Diseño de páginas web profesionales en Colombia, creación de sitios informativos y corporativos, desarrollo web a medida sin e‑commerce, rediseño de páginas antiguas, optimización SEO on‑page y técnico, arquitectura de información clara, 
            encabezados H1‑H3 optimizados, meta descripciones persuasivas, estructura de URLs amigables, implementación de sitemap y robots.txt, rendimiento y velocidad de carga, 
            mejoras de Core Web Vitals, compresión de imágenes, lazy‑loading, accesibilidad web, diseño responsive mobile‑first, landing pages para campañas, páginas de servicios locales, 
            posicionamiento en Google, intención de búsqueda transaccional e informativa, palabras clave locales (Colombia, Bogotá, Medellín, Cali, Barranquilla), páginas para profesionales 
            (abogados, médicos, arquitectos, consultores), páginas para pymes y emprendimientos, integración con WhatsApp, formularios de contacto optimizados, 
            copywriting orientado a conversión, llamadas a la acción efectivas, analítica con Google Analytics y etiquetado de eventos, 
            blog para estrategia de contenidos, interlinking interno, marcado schema FAQ y Service, breadcrumbs, etiquetas canónicas, 
            seguridad con SSL (HTTPS), hardening básico, hosting recomendado, mantenimiento web, soporte posterior al lanzamiento, 
            migración de contenidos, auditoría SEO gratuita, propuesta en 24 horas, tiempos de entrega 7‑15 días, 
            páginas de portafolio, testimonios y casos de éxito, microcopys para formularios, optimización de tiempo hasta interacción (TTI), 
            reducción de CLS, mejora de LCP y INP, 
            implementación de Open Graph y Twitter Cards (sin imágenes por ahora), 
            buenas prácticas de semántica HTML, títulos claros y escaneables, 
            navegación simple, secciones de preguntas frecuentes, 
            estrategia de palabras clave long‑tail, SEO local con NAP consistente, 
            llamadas, correo y WhatsApp de contacto, 
            auditorías técnicas periódicas, checklist SEO de lanzamiento y capacitación para autogestión.
          </p>
        </div>
        <div className="text-center mt-12">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">¡Conversemos sobre tu estrategia web!</a>
        </div>
      </section>

      {/* Proceso */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-blue-800">Proceso de trabajo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { n: 1, t: "Descubrimiento", d: "Objetivos, público y análisis de competidores." },
            { n: 2, t: "Prototipado UX/UI", d: "Wireframes y diseño visual orientado a conversión." },
            { n: 3, t: "Desarrollo SEO‑friendly", d: "Código optimizado, accesibilidad y rendimiento." },
            { n: 4, t: "QA y lanzamiento", d: "Pruebas, checklist SEO y publicación." },
            { n: 5, t: "Capacitación y soporte", d: "Entrega, guía de uso y mejoras continuas." },
          ].map((x) => (
            <div key={x.n} className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl text-blue-500 mb-4">{x.n}</div>
              <h3 className="text-2xl font-bold mb-3">{x.t}</h3>
              <p className="text-md opacity-90">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="container mx-auto py-16 px-4">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-blue-800">Planes y precios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name:"Básico", price:"Desde $400.000 COP", w:"Plan%20B%C3%A1sico" },
            { name:"Profesional", price:"Desde $700.000 COP", w:"Plan%20Profesional" },
            { name:"Corporativo", price:"Desde $1.000.000 COP", w:"Plan%20Corporativo" },
          ].map(p => (
            <div key={p.name} className="bg-white rounded-2xl shadow-xl p-6 flex flex-col text-center">
              <div className="text-2xl font-extrabold">{p.name}</div>
              <div className="text-3xl font-extrabold text-blue-600 mt-1">{p.price}</div>
              <ul className="mt-3 text-gray-700 list-disc list-inside text-left mx-auto max-w-xs">
                <li>Diseño responsive</li>
                <li>SEO técnico básico</li>
                <li>Soporte inicial</li>
              </ul>
              <a className="btn-primary rounded-full px-6 py-3 mt-6 font-semibold" href={`https://wa.me/${whatsapp}?text=Quiero%20el%20${p.w}`} target="_blank" rel="noreferrer">Cotizar por WhatsApp</a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ visible */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-blue-800">Preguntas frecuentes</h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          {[
            { q:"¿Incluyen textos y imágenes?", a:"Incluimos textos base orientados a SEO. Imágenes libres o de tu marca; sin banco de pago por defecto." },
            { q:"¿Trabajan e‑commerce?", a:"Nuestro foco es web informativa y corporativa. E‑commerce se cotiza aparte si lo necesitas." },
            { q:"¿Qué necesito para empezar?", a:"Nombre del negocio, servicios, referencias visuales y medios de contacto (WhatsApp y correo)." },
          ].map((f,i)=> (
            <details key={i} className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">{f.q}</summary>
              <p className="text-gray-700 mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-gray-900 text-white py-12 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Construyamos la web que tu negocio necesita</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">Consulta gratuita y sin compromiso. Respuesta rápida por WhatsApp.</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">¡Enviar mensaje por WhatsApp!</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-blue-100 py-6 text-center">
        <div className="container mx-auto">
          <p>© 2025 Servicios Web — Contacto: <a className="underline" href="mailto:freddylobo7a@gmail.com">freddylobo7a@gmail.com</a> · <a className="underline" href="tel:+573007705341">+57 300 770 5341</a></p>
        </div>
      </footer>
    </div>
  );
}

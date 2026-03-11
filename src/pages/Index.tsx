import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import CasinoTable from "@/components/CasinoTable";
import FaqSection from "@/components/FaqSection";
import AuthorBox from "@/components/AuthorBox";

import heroCasino from "@/assets/hero-casino.webp";
import casinoBonos from "@/assets/casino-bonos.webp";
import casinoSeguridad from "@/assets/casino-seguridad.webp";
import casinoMovil from "@/assets/casino-movil.webp";
import casinoRanking from "@/assets/casino-ranking.webp";
import juegoResponsableImg from "@/assets/juego-responsable.webp";

const fadeUp = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.3, 0, 0.2, 1] },
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="container py-10 sm:py-16">
        <motion.div {...fadeUp}>
          <p className="font-caps text-xs text-primary mb-3">Guía actualizada · Marzo 2026</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
            Mejores Casinos Sin Licencia en España
            <span className="text-gradient-gold block sm:inline"> - Guía de Experto 2026</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-6 text-base sm:text-lg">
            Tras probar más de 40 plataformas, he seleccionado los 8 casinos online sin licencia DGOJ que ofrecen los mejores bonos, pagos rápidos y experiencia real para jugadores españoles.
          </p>
        </motion.div>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
          <img
            src={heroCasino}
            alt="Elementos de casino online como ruleta, cartas y fichas doradas representando los mejores casinos sin licencia en España en 2026"
            width={1200}
            height={600}
            className="rounded-xl w-full object-cover card-elevated"
            loading="eager"
          />
        </motion.div>
      </section>

      {/* Table of Contents */}
      <section className="container pb-8">
        <motion.div {...fadeUp} className="bg-card rounded-xl p-5 card-elevated">
          <h2 className="font-caps text-xs text-primary mb-3">Contenido</h2>
          <nav>
            <ol className="space-y-1.5 text-sm">
              <li><a href="#ranking" className="text-muted-foreground hover:text-primary transition-colors">1. Top 8 Casinos Sin Licencia en España 2026</a></li>
              <li><a href="#que-son" className="text-muted-foreground hover:text-primary transition-colors">2. ¿Qué son los casinos sin licencia?</a></li>
              <li><a href="#bonos" className="text-muted-foreground hover:text-primary transition-colors">3. Bonos y promociones destacados</a></li>
              <li><a href="#como-elegimos" className="text-muted-foreground hover:text-primary transition-colors">4. Cómo evaluamos cada casino</a></li>
              <li><a href="#seguridad" className="text-muted-foreground hover:text-primary transition-colors">5. Seguridad y métodos de pago</a></li>
              <li><a href="#movil" className="text-muted-foreground hover:text-primary transition-colors">6. Casinos sin licencia desde el móvil</a></li>
              <li><a href="#juego-responsable" className="text-muted-foreground hover:text-primary transition-colors">7. Juego responsable</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">8. Preguntas frecuentes</a></li>
              <li><a href="#autor" className="text-muted-foreground hover:text-primary transition-colors">9. Sobre el autor</a></li>
            </ol>
          </nav>
        </motion.div>
      </section>

      {/* Casino Table */}
      <motion.div {...fadeUp}>
        <CasinoTable />
      </motion.div>

      {/* What are unlicensed casinos */}
      <motion.div {...fadeUp}>
        <section id="que-son" className="container py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">¿Qué son los casinos sin licencia en España?</h2>
          <p className="text-muted-foreground mb-4">
            Cuando hablamos de casinos sin licencia nos referimos a plataformas de juego online que no poseen la autorización de la DGOJ (Dirección General de Ordenación del Juego) de España. Sin embargo, la mayoría de ellas operan bajo licencias internacionales emitidas por reguladores como la Autoridad de Juego de Curazao, la Malta Gaming Authority o la Comisión de Juego de Gibraltar.
          </p>
          <p className="text-muted-foreground mb-4">
            La principal razón por la que muchos jugadores españoles recurren a estas plataformas es la oferta. Los casinos regulados por la DGOJ están sujetos a restricciones publicitarias y límites en los bonos que pueden ofrecer desde el Real Decreto 958/2020. Los casinos internacionales, al no estar bajo esta normativa, pueden presentar bonos de bienvenida más atractivos, mayores catálogos de juegos y, en muchos casos, retiros más rápidos.
          </p>
          <p className="text-muted-foreground">
            En nuestra experiencia analizando el mercado durante más de ocho años, hemos comprobado que la clave no está en si el casino tiene licencia DGOJ, sino en la calidad de su licencia internacional, la transparencia de sus operaciones y la experiencia real de los usuarios.
          </p>
        </section>
      </motion.div>

      {/* Bonuses */}
      <motion.div {...fadeUp}>
        <section id="bonos" className="container py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Bonos y Promociones en Casinos Sin Licencia <span className="text-primary">2026</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-muted-foreground mb-4">
                He activado personalmente cada uno de los bonos que aparecen en esta guía. La diferencia con los casinos DGOJ es notable: mientras que en España los bonos de bienvenida suelen rondar los 200€ con requisitos de apuesta x40, los casinos sin licencia llegan hasta los 600€ con wagering x30 o incluso inferior.
              </p>
              <p className="text-muted-foreground mb-4">
                Bassbet, por ejemplo, ofrece un paquete de hasta 500€ más 200 tiradas gratis repartidas en los tres primeros depósitos. El requisito de apuesta es x35, que está dentro del rango aceptable. Lo probé en enero de 2026 y confirmé que los fondos del bono se acreditaron al instante.
              </p>
              <h3 className="text-lg font-bold text-foreground mb-2">Tipos de bonos habituales</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>Bono de bienvenida (match deposit del 100-200%)</li>
                <li>Tiradas gratis sin depósito (entre 10 y 50 FS)</li>
                <li>Cashback semanal (5-15% de las pérdidas netas)</li>
                <li>Programa VIP con niveles y recompensas exclusivas</li>
                <li>Torneos con premios en efectivo</li>
              </ul>
            </div>
            <div>
              <img
                src={casinoBonos}
                alt="Bonos y promociones de bienvenida en casinos sin licencia en España representados por caja dorada con fichas"
                width={800}
                height={512}
                className="rounded-xl w-full object-cover card-elevated"
                loading="lazy"
              />
            </div>
          </div>

          {/* Bonus comparison table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-card rounded-xl overflow-hidden card-elevated">
              <thead>
                <tr className="bg-accent text-accent-foreground">
                  <th className="text-left p-3 font-caps text-xs">Casino</th>
                  <th className="text-left p-3 font-caps text-xs">Bono</th>
                  <th className="text-left p-3 font-caps text-xs">Wagering</th>
                  <th className="text-left p-3 font-caps text-xs">Dep. mín.</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bassbet", "500€ + 200 FS", "x35", "20€"],
                  ["Alfcasino", "450€ + 150 FS", "x30", "15€"],
                  ["Ludios.io", "1 BTC + 100 FS", "x40", "0.001 BTC"],
                  ["24slots", "600€ + 240 FS", "x35", "20€"],
                  ["Instasino", "400€ + 50 FS", "x30", "10€"],
                  ["22bet", "300€", "x50", "1€"],
                  ["Roibets", "300€ + 100 FS", "x35", "20€"],
                  ["Betobet", "350€ + 100 FS", "x40", "15€"],
                ].map(([name, bonus, wager, dep], i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="p-3 font-medium text-foreground">{name}</td>
                    <td className="p-3 text-primary font-medium">{bonus}</td>
                    <td className="p-3 text-muted-foreground font-tabular">{wager}</td>
                    <td className="p-3 text-muted-foreground font-tabular">{dep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>

      {/* How we evaluate */}
      <motion.div {...fadeUp}>
        <section id="como-elegimos" className="container py-12">
          <div className="grid sm:grid-cols-2 gap-6 items-start">
            <div>
              <img
                src={casinoRanking}
                alt="Proceso de evaluación y ranking de los mejores casinos online sin licencia española en 2026"
                width={800}
                height={512}
                className="rounded-xl w-full object-cover card-elevated"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Cómo Evaluamos Cada Casino</h2>
              <p className="text-muted-foreground mb-4">
                No nos limitamos a copiar la información de las páginas de los propios casinos. Cada plataforma de esta guía ha pasado por un proceso de verificación que incluye registro real, depósito con fondos propios, prueba de juegos y solicitud de retiro.
              </p>
              <h3 className="text-lg font-bold text-foreground mb-2">Criterios de evaluación</h3>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 text-sm">
                <li><strong className="text-foreground">Licencia internacional:</strong> verificamos que el casino posea una licencia válida y activa de un regulador reconocido.</li>
                <li><strong className="text-foreground">Velocidad de retiro:</strong> medimos el tiempo real desde la solicitud hasta la recepción de fondos.</li>
                <li><strong className="text-foreground">Catálogo de juegos:</strong> analizamos la variedad, los proveedores (Pragmatic Play, Evolution, NetEnt) y la calidad.</li>
                <li><strong className="text-foreground">Soporte al cliente:</strong> probamos el chat en vivo, email y tiempo de respuesta en español.</li>
                <li><strong className="text-foreground">Condiciones de bonos:</strong> leemos la letra pequeña para que tú no tengas que hacerlo.</li>
                <li><strong className="text-foreground">Reputación:</strong> consultamos foros, comunidades y quejas de otros jugadores.</li>
              </ol>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Security */}
      <motion.div {...fadeUp}>
        <section id="seguridad" className="container py-12">
          <div className="grid sm:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Seguridad y Métodos de Pago</h2>
              <p className="text-muted-foreground mb-4">
                Una de las preocupaciones más comunes entre los jugadores españoles es la seguridad de sus datos y su dinero en casinos sin licencia DGOJ. Es una pregunta legítima. Después de años analizando estas plataformas, puedo confirmar que la seguridad no depende del sello DGOJ, sino de la infraestructura técnica del casino.
              </p>
              <p className="text-muted-foreground mb-4">
                Todos los casinos de nuestra lista utilizan encriptación SSL de 256 bits, la misma tecnología que emplean los bancos. Además, los juegos están auditados por laboratorios independientes como eCOGRA, iTech Labs o GLI, que certifican la aleatoriedad de los resultados.
              </p>
              <h3 className="text-lg font-bold text-foreground mb-2">Métodos de pago disponibles</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>Tarjetas Visa y Mastercard</li>
                <li>Monederos electrónicos: Skrill, Neteller, ecoPayz</li>
                <li>Criptomonedas: Bitcoin, Ethereum, Litecoin, USDT</li>
                <li>Transferencia bancaria</li>
                <li>Tarjetas prepago: Paysafecard, AstroPay</li>
              </ul>
            </div>
            <div>
              <img
                src={casinoSeguridad}
                alt="Escudo dorado de seguridad que representa la protección de datos en casinos sin licencia fiables"
                width={800}
                height={512}
                className="rounded-xl w-full object-cover card-elevated"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </motion.div>

      {/* Mobile */}
      <motion.div {...fadeUp}>
        <section id="movil" className="container py-12">
          <div className="grid sm:grid-cols-2 gap-6 items-start">
            <div>
              <img
                src={casinoMovil}
                alt="Casino sin licencia jugando desde un smartphone con interfaz optimizada para móvil en 2026"
                width={800}
                height={512}
                className="rounded-xl w-full object-cover card-elevated"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Casinos Sin Licencia desde el Móvil</h2>
              <p className="text-muted-foreground mb-4">
                Más del 70% de los jugadores en España acceden a los casinos online desde su teléfono. Hemos verificado que todas las plataformas de nuestra lista ofrecen una experiencia móvil completa, ya sea a través de aplicaciones nativas para Android o de versiones web responsive.
              </p>
              <p className="text-muted-foreground mb-4">
                Instasino destaca en este aspecto con un diseño mobile-first que permite registrarse y empezar a jugar en menos de 60 segundos. 22bet, por su parte, ofrece una app descargable con acceso a todo su catálogo de apuestas deportivas y casino en vivo.
              </p>
              <p className="text-muted-foreground">
                La ventaja del juego móvil en casinos sin licencia es que no necesitas descargarte apps desde la App Store o Google Play (que a menudo restringen las aplicaciones de gambling). Simplemente accedes desde el navegador de tu móvil y guardas un acceso directo en la pantalla de inicio.
              </p>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Responsible gaming */}
      <motion.div {...fadeUp}>
        <section id="juego-responsable" className="container py-12">
          <div className="grid sm:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Juego Responsable</h2>
              <p className="text-muted-foreground mb-4">
                El juego online debe ser una forma de entretenimiento, nunca una fuente de ingresos. Desde esta guía promovemos activamente las prácticas de juego responsable. Todos los casinos que recomendamos ofrecen herramientas de autoexclusión, límites de depósito y tiempo de juego.
              </p>
              <p className="text-muted-foreground mb-4">
                Si sientes que el juego está afectando a tu vida personal, laboral o financiera, te recomendamos contactar con organizaciones especializadas como Jugarbien.es o la línea de atención 024 en España.
              </p>
              <h4 className="text-sm font-bold text-foreground mb-2">Señales de juego problemático:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>Jugar con dinero que no puedes permitirte perder</li>
                <li>Intentar recuperar las pérdidas apostando más</li>
                <li>Mentir sobre el tiempo o dinero dedicado al juego</li>
                <li>Descuidar responsabilidades por jugar</li>
              </ul>
            </div>
            <div>
              <img
                src={juegoResponsableImg}
                alt="Juego responsable en casinos online representado con señal de precaución y límites de autoprotección"
                width={800}
                height={512}
                className="rounded-xl w-full object-cover card-elevated"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </motion.div>

      {/* FAQ */}
      <motion.div {...fadeUp}>
        <FaqSection />
      </motion.div>

      {/* Author */}
      <motion.div {...fadeUp}>
        <AuthorBox />
      </motion.div>
    </Layout>
  );
};

export default Index;

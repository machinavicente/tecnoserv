<template>
  <section class="faq" id="faq">
    <div class="faq-container">
      <!-- Encabezado -->
      <div class="faq-header">
        <div class="section-badge">
          <i class="ri-question-line badge-icon"></i>
          PREGUNTAS FRECUENTES
        </div>
        <h2 class="section-title">
          RESOLVEMOS <span class="highlight">TUS DUDAS</span>
        </h2>
        <p class="section-subtitle">
          Las preguntas más comunes que nos hacen nuestros clientes.
          Si no encuentras la respuesta, contáctanos directamente.
        </p>
      </div>

      <!-- Grid de FAQ -->
      <div class="faq-grid">
        <!-- FAQ 1 -->
        <div class="faq-item">
          <div class="faq-question" @click="toggleFaq(0)">
            <div class="faq-question-content">
              <span class="faq-number">01</span>
              <h3 class="faq-question-text">¿Cuánto tarda una reparación?</h3>
            </div>
            <div class="faq-toggle">
              <i v-if="activeFaq !== 0" class="ri-add-line toggle-icon"></i>
              <i v-else class="ri-subtract-line toggle-icon"></i>
            </div>
          </div>
          <div class="faq-answer" :class="{ 'faq-answer-open': activeFaq === 0 }">
            <p>
              El tiempo de reparación varía según la complejidad del problema.
              En la mayoría de los casos, realizamos la reparación en un plazo
              de <strong>24 a 48 horas</strong>. Para problemas sencillos,
              podemos tener tu equipo listo el mismo día. Los casos más
              complejos (como recuperación de datos o daños físicos graves)
              pueden tardar entre 3 y 5 días hábiles.
            </p>
            <div class="faq-meta">
              <i class="ri-time-line meta-icon"></i>
              <span>Plazo estándar: 24-48h</span>
            </div>
          </div>
        </div>

        <!-- FAQ 2 -->
        <div class="faq-item">
          <div class="faq-question" @click="toggleFaq(1)">
            <div class="faq-question-content">
              <span class="faq-number">02</span>
              <h3 class="faq-question-text">¿Dan garantía en las reparaciones?</h3>
            </div>
            <div class="faq-toggle">
              <i v-if="activeFaq !== 1" class="ri-add-line toggle-icon"></i>
              <i v-else class="ri-subtract-line toggle-icon"></i>
            </div>
          </div>
          <div class="faq-answer" :class="{ 'faq-answer-open': activeFaq === 1 }">
            <p>
              ¡Sí! Todas nuestras reparaciones cuentan con una garantía de
              <strong>90 días</strong> en mano de obra y piezas instaladas.
              Si el mismo problema vuelve a aparecer dentro de ese período,
              lo solucionamos sin coste adicional. Nuestro compromiso es
              tu total satisfacción.
            </p>
            <div class="faq-meta">
              <i class="ri-shield-check-line meta-icon"></i>
              <span>Garantía 90 días</span>
            </div>
          </div>
        </div>

        <!-- FAQ 3 -->
        <div class="faq-item">
          <div class="faq-question" @click="toggleFaq(2)">
            <div class="faq-question-content">
              <span class="faq-number">03</span>
              <h3 class="faq-question-text">¿Recogen el equipo a domicilio?</h3>
            </div>
            <div class="faq-toggle">
              <i v-if="activeFaq !== 2" class="ri-add-line toggle-icon"></i>
              <i v-else class="ri-subtract-line toggle-icon"></i>
            </div>
          </div>
          <div class="faq-answer" :class="{ 'faq-answer-open': activeFaq === 2 }">
            <p>
              Sí, ofrecemos servicio de <strong>recogida y entrega a domicilio</strong>
              para tu comodidad. Nuestro técnico se desplaza a tu ubicación,
              recoge el equipo y lo devuelve una vez reparado. Este servicio
              tiene un coste adicional, pero te ahorra el desplazamiento.
            </p>
            <div class="faq-meta">
              <i class="ri-truck-line meta-icon"></i>
              <span>Servicio a domicilio disponible</span>
            </div>
          </div>
        </div>

        <!-- FAQ 4 -->
        <div class="faq-item">
          <div class="faq-question" @click="toggleFaq(3)">
            <div class="faq-question-content">
              <span class="faq-number">04</span>
              <h3 class="faq-question-text">¿El diagnóstico es gratuito?</h3>
            </div>
            <div class="faq-toggle">
              <i v-if="activeFaq !== 3" class="ri-add-line toggle-icon"></i>
              <i v-else class="ri-subtract-line toggle-icon"></i>
            </div>
          </div>
          <div class="faq-answer" :class="{ 'faq-answer-open': activeFaq === 3 }">
            <p>
              ¡Completamente gratuito! Realizamos un <strong>diagnóstico inicial
              sin ningún coste</strong> ni compromiso. Evaluamos el problema,
              te explicamos qué sucede y te ofrecemos un presupuesto detallado.
              Solo pagas si decides continuar con la reparación.
            </p>
            <div class="faq-meta">
              <i class="ri-checkbox-circle-line meta-icon"></i>
              <span>100% sin coste</span>
            </div>
          </div>
        </div>

        <!-- FAQ 5 (Extra) -->
        <div class="faq-item faq-item-extra">
          <div class="faq-question" @click="toggleFaq(4)">
            <div class="faq-question-content">
              <span class="faq-number">05</span>
              <h3 class="faq-question-text">¿Trabajan con empresas?</h3>
            </div>
            <div class="faq-toggle">
              <i v-if="activeFaq !== 4" class="ri-add-line toggle-icon"></i>
              <i v-else class="ri-subtract-line toggle-icon"></i>
            </div>
          </div>
          <div class="faq-answer" :class="{ 'faq-answer-open': activeFaq === 4 }">
            <p>
              Sí, ofrecemos servicios especializados para empresas incluyendo
              <strong>mantenimiento de redes, servidores y parques informáticos</strong>.
              Disponemos de planes personalizados y contratos de mantenimiento
              periódico con atención prioritaria.
            </p>
            <div class="faq-meta">
              <i class="ri-building-line meta-icon"></i>
              <span>Servicio empresarial</span>
            </div>
          </div>
        </div>

        <!-- FAQ 6 (Extra) -->
        <div class="faq-item faq-item-extra">
          <div class="faq-question" @click="toggleFaq(5)">
            <div class="faq-question-content">
              <span class="faq-number">06</span>
              <h3 class="faq-question-text">¿Qué métodos de pago aceptan?</h3>
            </div>
            <div class="faq-toggle">
              <i v-if="activeFaq !== 5" class="ri-add-line toggle-icon"></i>
              <i v-else class="ri-subtract-line toggle-icon"></i>
            </div>
          </div>
          <div class="faq-answer" :class="{ 'faq-answer-open': activeFaq === 5 }">
            <p>
              Aceptamos diversos métodos de pago para tu comodidad:
              <strong>efectivo, transferencia bancaria, tarjetas de crédito/débito
              y Bizum</strong>. También ofrecemos financiación en reparaciones
              de alto coste previa aprobación.
            </p>
            <div class="faq-meta">
              <i class="ri-bank-card-line meta-icon"></i>
              <span>Múltiples opciones de pago</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA final -->
      <div class="faq-cta">
        <div class="faq-cta-content">
          <i class="ri-customer-service-2-line faq-cta-icon"></i>
          <div class="faq-cta-text">
            <p class="faq-cta-title">¿Tienes más preguntas?</p>
            <p class="faq-cta-subtitle">Estamos aquí para ayudarte</p>
          </div>
          <a href="https://wa.me/584267379617" target="_blank" class="faq-cta-button">
            <i class="ri-whatsapp-line"></i>
            HABLAR CON SOPORTE
          </a>
        </div>
      </div>
    </div>

    <div class="faq-divider"></div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeFaq = ref(null)

const toggleFaq = (index) => {
  if (activeFaq.value === index) {
    activeFaq.value = null
  } else {
    activeFaq.value = index
  }
}
</script>

<style scoped>
/* ============================================
   SECCIÓN FAQ - NEOBRUTALISMO
   ============================================ */

.faq {
  background-color: #fafafa;
  padding: 80px 40px 40px;
  font-family: 'Inter', 'Space Grotesk', 'DM Sans', -apple-system, sans-serif;
  position: relative;
  overflow: hidden;
}

.faq-container {
  max-width: 1280px;
  margin: 0 auto;
}

/* ============================================
   ENCABEZADO
   ============================================ */

.faq-header {
  text-align: center;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #ccff00;
  color: #000000;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 1.5px;
  padding: 10px 20px;
  border: 3px solid #000000;
  box-shadow: 5px 5px 0px #000000;
  text-transform: uppercase;
}

.badge-icon {
  font-size: 20px;
}

.section-title {
  font-size: clamp(40px, 6vw, 64px);
  font-weight: 900;
  color: #000000;
  margin: 0;
  letter-spacing: -2px;
  line-height: 1.1;
}

.section-title .highlight {
  background-color: #ccff00;
  padding: 0 12px;
  border: 3px solid #000000;
  box-shadow: 6px 6px 0px #000000;
  display: inline-block;
}

.section-subtitle {
  font-size: 18px;
  color: #333333;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ============================================
   GRID DE FAQ
   ============================================ */

.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 50px;
}

/* ============================================
   ITEM DE FAQ
   ============================================ */

.faq-item {
  background-color: #ffffff;
  border: 4px solid #000000;
  box-shadow: 8px 8px 0px #000000;
  overflow: hidden;
  transition: all 0.15s ease;
}

.faq-item:hover {
  transform: translate(3px, 3px);
  box-shadow: 4px 4px 0px #000000;
}

.faq-item-extra {
  grid-column: span 1;
}

/* Pregunta */
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  cursor: pointer;
  background-color: #ffffff;
  border-bottom: 3px solid #000000;
  transition: background-color 0.2s ease;
  user-select: none;
}

.faq-question:hover {
  background-color: #f5f5f5;
}

.faq-question-content {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
}

.faq-number {
  font-weight: 900;
  font-size: 14px;
  color: #ccff00;
  background-color: #000000;
  padding: 4px 12px;
  border: 2px solid #000000;
  flex-shrink: 0;
}

.faq-question-text {
  font-size: 17px;
  font-weight: 700;
  color: #000000;
  margin: 0;
  line-height: 1.3;
}

.faq-toggle {
  flex-shrink: 0;
  margin-left: 12px;
}

.toggle-icon {
  font-size: 24px;
  color: #000000;
  border: 3px solid #000000;
  padding: 2px;
  display: block;
  transition: transform 0.2s ease;
}

/* Respuesta */
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              padding 0.3s ease,
              opacity 0.3s ease;
  opacity: 0;
  padding: 0 24px;
  background-color: #ffffff;
}

.faq-answer-open {
  max-height: 300px;
  opacity: 1;
  padding: 20px 24px;
}

.faq-answer p {
  font-size: 15px;
  line-height: 1.7;
  color: #333333;
  margin: 0 0 12px 0;
}

.faq-answer strong {
  color: #000000;
  background-color: #ccff00;
  padding: 0 4px;
}

.faq-meta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #000000;
  color: #ffffff;
  padding: 6px 16px;
  border: 2px solid #000000;
  font-size: 13px;
  font-weight: 600;
}

.meta-icon {
  font-size: 16px;
  color: #ccff00;
}

/* ============================================
   CTA FINAL
   ============================================ */

.faq-cta {
  background-color: #000000;
  border: 4px solid #000000;
  box-shadow: 8px 8px 0px #ccff00;
  padding: 30px 40px;
}

.faq-cta-content {
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.faq-cta-icon {
  font-size: 48px;
  color: #ccff00;
  flex-shrink: 0;
}

.faq-cta-text {
  flex: 1;
}

.faq-cta-title {
  font-size: 22px;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
}

.faq-cta-subtitle {
  font-size: 16px;
  color: #cccccc;
  margin: 4px 0 0 0;
}

.faq-cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #ccff00;
  color: #000000;
  font-weight: 800;
  font-size: 15px;
  padding: 14px 28px;
  border: 3px solid #ffffff;
  box-shadow: 5px 5px 0px #ffffff;
  cursor: pointer;
  transition: all 0.05s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}

.faq-cta-button:hover {
  transform: translate(3px, 3px);
  box-shadow: 2px 2px 0px #ffffff;
}

.faq-cta-button i {
  font-size: 22px;
}

/* ============================================
   DIVISOR
   ============================================ */

.faq-divider {
  max-width: 1280px;
  margin: 50px auto 0;
  height: 6px;
  background-color: #000000;
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 1024px) {
  .faq-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .faq-item-extra {
    grid-column: span 1;
  }

  .faq-cta-content {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .faq-cta-button {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .faq {
    padding: 50px 20px 30px;
  }

  .faq-header {
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 36px;
  }

  .section-subtitle {
    font-size: 16px;
    padding: 0 10px;
  }

  .faq-question {
    padding: 16px 18px;
  }

  .faq-question-text {
    font-size: 15px;
  }

  .faq-number {
    font-size: 12px;
    padding: 3px 10px;
  }

  .faq-answer-open {
    padding: 16px 18px;
  }

  .faq-answer p {
    font-size: 14px;
  }

  .faq-cta {
    padding: 25px 20px;
  }

  .faq-cta-icon {
    font-size: 36px;
  }

  .faq-cta-title {
    font-size: 18px;
  }

  .faq-cta-subtitle {
    font-size: 14px;
  }

  .faq-cta-button {
    font-size: 13px;
    padding: 12px 20px;
  }

  .faq-cta-button i {
    font-size: 18px;
  }

  .toggle-icon {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 28px;
  }

  .section-title .highlight {
    padding: 0 8px;
    box-shadow: 4px 4px 0px #000000;
  }

  .section-badge {
    font-size: 12px;
    padding: 8px 14px;
  }

  .badge-icon {
    font-size: 16px;
  }

  .faq-question-content {
    gap: 10px;
  }

  .faq-question-text {
    font-size: 14px;
  }

  .faq-answer p {
    font-size: 13px;
  }

  .faq-meta {
    font-size: 12px;
    padding: 4px 12px;
  }

  .meta-icon {
    font-size: 14px;
  }

  .faq-cta-icon {
    font-size: 28px;
  }

  .faq-cta-title {
    font-size: 16px;
  }

  .faq-cta-button {
    font-size: 12px;
    padding: 10px 16px;
  }

  .faq-cta-button i {
    font-size: 16px;
  }
}
</style>
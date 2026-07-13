<template>
  <section class="process" id='process'>
    <div class="process-container">
      <!-- Encabezado -->
      <div class="process-header">
        <div class="section-badge">
          <i class="ri-settings-4-line badge-icon"></i>
          CÓMO TRABAJAMOS
        </div>
        <h2 class="section-title">
          NUESTRO <span class="highlight">PROCESO</span>
        </h2>
        <p class="section-subtitle">
          Un método sencillo, rápido y transparente para reparar tu equipo
          sin complicaciones.
        </p>
      </div>

      <!-- Línea de tiempo del proceso -->
      <div class="process-timeline">
        <!-- Paso 1 -->
        <div class="process-step">
          <div class="step-connector">
            <div class="step-number">1</div>
            <div class="step-line"></div>
          </div>
          <div class="step-content">
            <div class="step-icon-wrapper">
              <i class="ri-chat-1-line step-icon"></i>
            </div>
            <div class="step-text">
              <h3 class="step-title">Contacto / Diagnóstico</h3>
              <p class="step-description">
                Te contactas con nosotros vía WhatsApp, teléfono o formulario.
                Realizamos un diagnóstico inicial gratuito para identificar
                el problema de tu equipo.
              </p>
              <div class="step-meta">
                <span class="meta-tag">
                  <i class="ri-time-line meta-icon"></i>
                  15-30 min
                </span>
                <span class="meta-tag">
                  <i class="ri-checkbox-circle-line meta-icon"></i>
                  Sin costo
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Paso 2 -->
        <div class="process-step">
          <div class="step-connector">
            <div class="step-number">2</div>
            <div class="step-line"></div>
          </div>
          <div class="step-content">
            <div class="step-icon-wrapper">
              <i class="ri-file-paper-2-line step-icon"></i>
            </div>
            <div class="step-text">
              <h3 class="step-title">Presupuesto Aprobado</h3>
              <p class="step-description">
                Te enviamos un presupuesto detallado con el costo de la
                reparación y los componentes necesarios. Solo procedemos
                cuando tú lo apruebas.
              </p>
              <div class="step-meta">
                <span class="meta-tag">
                  <i class="ri-time-line meta-icon"></i>
                  1-2 horas
                </span>
                <span class="meta-tag">
                  <i class="ri-checkbox-circle-line meta-icon"></i>
                  Sin compromiso
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Paso 3 -->
        <div class="process-step">
          <div class="step-connector">
            <div class="step-number">3</div>
            <div class="step-line"></div>
          </div>
          <div class="step-content">
            <div class="step-icon-wrapper">
              <i class="ri-tools-fill step-icon"></i>
            </div>
            <div class="step-text">
              <h3 class="step-title">Reparación</h3>
              <p class="step-description">
                Nuestros técnicos certificados realizan la reparación
                utilizando piezas originales y herramientas especializadas.
                Te mantenemos informado del progreso.
              </p>
              <div class="step-meta">
                <span class="meta-tag">
                  <i class="ri-time-line meta-icon"></i>
                  24-48 horas
                </span>
                <span class="meta-tag">
                  <i class="ri-shield-check-line meta-icon"></i>
                  Garantía incluida
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Paso 4 -->
        <div class="process-step">
          <div class="step-connector">
            <div class="step-number">4</div>
            <div class="step-line"></div>
          </div>
          <div class="step-content">
            <div class="step-icon-wrapper">
              <i class="ri-checkbox-circle-fill step-icon"></i>
            </div>
            <div class="step-text">
              <h3 class="step-title">Pruebas y Entrega</h3>
              <p class="step-description">
                Realizamos pruebas exhaustivas para asegurar que todo
                funciona correctamente. Entregamos tu equipo con un
                informe detallado de las reparaciones realizadas.
              </p>
              <div class="step-meta">
                <span class="meta-tag">
                  <i class="ri-time-line meta-icon"></i>
                  Entrega en 24h
                </span>
                <span class="meta-tag">
                  <i class="ri-star-fill meta-icon"></i>
                  100% satisfacción
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Resumen rápido -->
      <div class="process-summary">
        <div class="summary-item">
          <i class="ri-phone-line summary-icon"></i>
          <span>Contacta</span>
        </div>
        <div class="summary-arrow">
          <i class="ri-arrow-right-s-line"></i>
        </div>
        <div class="summary-item">
          <i class="ri-file-text-line summary-icon"></i>
          <span>Presupuesto</span>
        </div>
        <div class="summary-arrow">
          <i class="ri-arrow-right-s-line"></i>
        </div>
        <div class="summary-item">
          <i class="ri-tools-line summary-icon"></i>
          <span>Reparación</span>
        </div>
        <div class="summary-arrow">
          <i class="ri-arrow-right-s-line"></i>
        </div>
        <div class="summary-item">
          <i class="ri-check-double-line summary-icon"></i>
          <span>Entrega</span>
        </div>
      </div>

      <!-- CTA -->
      <div class="process-cta">
        <p>¿Empezamos con tu reparación?</p>
        <a href="https://wa.me/584267379617" target="_blank" class="cta-button">
          <i class="ri-whatsapp-line cta-icon"></i>
          CONTACTAR AHORA
        </a>
      </div>
    </div>

    <div class="process-divider"></div>
  </section>
</template>

<script setup>
// No se necesitan importaciones con CDN
</script>

<style scoped>
/* ============================================
   SECCIÓN PROCESO - NEOBRUTALISMO
   ============================================ */

.process {
  background-color: #ffffff;
  padding: 80px 40px 40px;
  font-family: 'Inter', 'Space Grotesk', 'DM Sans', -apple-system, sans-serif;
  position: relative;
  overflow: hidden;
}

.process-container {
  max-width: 1280px;
  margin: 0 auto;
}

/* ============================================
   ENCABEZADO
   ============================================ */

.process-header {
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
   LÍNEA DE TIEMPO
   ============================================ */

.process-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 50px;
  position: relative;
  padding-left: 60px;
}

/* ============================================
   PASO INDIVIDUAL
   ============================================ */

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  position: relative;
  padding-bottom: 40px;
}

.process-step:last-child {
  padding-bottom: 0;
}

/* Conector vertical */
.step-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100%;
}

.step-number {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccff00;
  color: #000000;
  font-weight: 900;
  font-size: 18px;
  border: 3px solid #000000;
  box-shadow: 5px 5px 0px #000000;
  flex-shrink: 0;
  z-index: 2;
  position: relative;
}

.step-line {
  width: 4px;
  height: 100%;
  background-color: #000000;
  flex-grow: 1;
  min-height: 40px;
  margin-top: 4px;
  position: relative;
}

.step-line-last {
  background: transparent;
  min-height: 0;
}

/* Contenido del paso */
.step-content {
  display: flex;
  gap: 25px;
  align-items: flex-start;
  flex: 1;
  background-color: #fafafa;
  padding: 25px 30px;
  border: 4px solid #000000;
  box-shadow: 8px 8px 0px #000000;
  transition: all 0.15s ease;
}

.step-content:hover {
  transform: translate(3px, 3px);
  box-shadow: 4px 4px 0px #000000;
}

.step-icon-wrapper {
  background-color: #000000;
  padding: 14px;
  border: 3px solid #000000;
  flex-shrink: 0;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-icon {
  font-size: 30px;
  color: #ccff00;
  display: block;
}

.step-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.step-title {
  font-size: 22px;
  font-weight: 800;
  color: #000000;
  margin: 0;
  letter-spacing: -0.5px;
}

.step-description {
  font-size: 15px;
  line-height: 1.6;
  color: #444444;
  margin: 0;
}

.step-meta {
  display: flex;
  gap: 16px;
  margin-top: 6px;
  flex-wrap: wrap;
}

.meta-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: #ffffff;
  padding: 4px 14px;
  border: 2px solid #000000;
  font-size: 13px;
  font-weight: 600;
  color: #000000;
}

.meta-icon {
  font-size: 14px;
  color: #ccff00;
}

/* ============================================
   RESUMEN RÁPIDO
   ============================================ */

.process-summary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #fafafa;
  padding: 25px 30px;
  border: 4px solid #000000;
  box-shadow: 8px 8px 0px #000000;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.summary-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  padding: 10px 20px;
  border: 3px solid #000000;
  font-weight: 700;
  font-size: 15px;
  color: #000000;
}

.summary-icon {
  font-size: 24px;
  color: #ccff00;
}

.summary-arrow {
  font-size: 24px;
  color: #000000;
  font-weight: 900;
}

/* ============================================
   CTA
   ============================================ */

.process-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  background-color: #ccff00;
  border: 4px solid #000000;
  box-shadow: 8px 8px 0px #000000;
}

.process-cta p {
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin: 0;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #000000;
  color: #ffffff;
  font-weight: 800;
  font-size: 16px;
  padding: 16px 36px;
  border: 3px solid #000000;
  box-shadow: 6px 6px 0px #ccff00;
  cursor: pointer;
  transition: all 0.05s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cta-button:hover {
  transform: translate(3px, 3px);
  box-shadow: 2px 2px 0px #ccff00;
}

.cta-icon {
  font-size: 24px;
  color: #ffffff;
}

/* ============================================
   DIVISOR
   ============================================ */

.process-divider {
  max-width: 1280px;
  margin: 50px auto 0;
  height: 6px;
  background-color: #000000;
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 1024px) {
  .process-timeline {
    padding-left: 40px;
  }

  .step-content {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  .step-icon-wrapper {
    min-width: auto;
  }
}

@media (max-width: 768px) {
  .process {
    padding: 50px 20px 30px;
  }

  .process-header {
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 36px;
  }

  .section-subtitle {
    font-size: 16px;
    padding: 0 10px;
  }

  .process-timeline {
    padding-left: 0;
  }

  .process-step {
    flex-direction: column;
    padding-bottom: 30px;
    gap: 15px;
  }

  .step-connector {
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 10px;
  }

  .step-number {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  .step-line {
    width: 100%;
    height: 4px;
    min-height: 0;
    flex-grow: 1;
  }

  .step-line-last {
    display: none;
  }

  .step-content {
    padding: 18px;
    width: 100%;
  }

  .step-title {
    font-size: 18px;
  }

  .step-description {
    font-size: 14px;
  }

  .step-icon-wrapper {
    padding: 10px;
  }

  .step-icon {
    font-size: 24px;
  }

  .step-meta {
    gap: 10px;
  }

  .meta-tag {
    font-size: 12px;
    padding: 3px 10px;
  }

  .process-summary {
    padding: 20px;
    gap: 4px;
  }

  .summary-item {
    padding: 8px 14px;
    font-size: 13px;
  }

  .summary-icon {
    font-size: 18px;
  }

  .summary-arrow {
    font-size: 18px;
  }

  .process-cta {
    padding: 30px 20px;
  }

  .process-cta p {
    font-size: 18px;
    text-align: center;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
    padding: 14px 24px;
    font-size: 14px;
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

  .step-content {
    padding: 14px;
  }

  .step-title {
    font-size: 16px;
  }

  .step-description {
    font-size: 13px;
  }

  .process-summary {
    flex-direction: column;
    padding: 15px;
  }

  .summary-arrow {
    transform: rotate(90deg);
  }

  .process-cta p {
    font-size: 16px;
  }

  .cta-button {
    font-size: 13px;
    padding: 12px 20px;
  }

  .cta-icon {
    font-size: 20px;
  }
}
</style>
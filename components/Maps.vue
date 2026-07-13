<template>
  <section class="coverage" id="maps">
    <div class="coverage-container">
      <!-- Encabezado -->
      <div class="coverage-header">
        <div class="section-badge">
          <i class="ri-map-pin-line badge-icon"></i>
          COBERTURA Y ZONAS
        </div>
        <h2 class="section-title">
          DONDE <span class="highlight">ESTAMOS</span>
        </h2>
        <p class="section-subtitle">
          Cubrimos toda el área metropolitana y ofrecemos servicios
          especiales para zonas fuera de nuestra cobertura habitual.
        </p>
      </div>

      <div class="coverage-grid">
        <!-- Mapa de Google -->
        <div class="coverage-map">
          <div class="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15747.120498608216!2d-65.36319234862509!3d9.352715448078694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dd317d8bf5fe571%3A0x108a8f9a4f2216d7!2sZaraza%202332%2C%20Gu%C3%A1rico!5e0!3m2!1ses!2sve!4v1783905312076!5m2!1ses!2sve" 
              width="100%" 
              height="400" 
              style="border: 3px solid #000000;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="strict-origin-when-cross-origin"
              class="google-map"
            ></iframe>
          </div>
          
          <!-- Leyenda del mapa -->
          <div class="map-legend">
            <div class="legend-item">
              <span class="legend-dot dot-primary"></span>
              <span class="legend-text">📍 Zaraza - Centro de operaciones</span>
            </div>
            <div class="legend-item">
              <span class="legend-dot dot-secondary"></span>
              <span class="legend-text">🚗 Cobertura en Guárico y estados cercanos</span>
            </div>
            <div class="legend-item">
              <span class="legend-dot dot-travel"></span>
              <span class="legend-text">✈️ Servicio de viaje a todo el país</span>
            </div>
          </div>

          <!-- Información adicional de ubicación -->
          <div class="location-info">
            <div class="location-item">
              <i class="ri-map-pin-2-fill location-icon"></i>
              <span><strong>Zaraza</strong>, Estado Guárico, Venezuela</span>
            </div>
            <div class="location-item">
              <i class="ri-road-map-line location-icon"></i>
              <span>Cobertura principal: <strong>Guárico, Anzoátegui, Miranda</strong></span>
            </div>
          </div>
        </div>

        <!-- Lista de zonas -->
        <div class="coverage-list">
          <div class="coverage-card">
            <h3 class="coverage-title">
              <i class="ri-checkbox-circle-fill title-icon"></i>
              Cobertura Principal
            </h3>
            <div class="coverage-badge-group">
              <span class="zone-badge">Zaraza</span>
              <span class="zone-badge">Valle de la Pascua</span>
              <span class="zone-badge">San José de Guanipa</span>
              <span class="zone-badge">El Tigre</span>
              <span class="zone-badge">Anaco</span>
              <span class="zone-badge">Cantaura</span>
            </div>
            <p class="coverage-detail">
              <i class="ri-time-line detail-icon"></i>
              <span>Tiempo de respuesta: <strong>24-48 horas</strong></span>
            </p>
            <p class="coverage-detail">
              <i class="ri-truck-line detail-icon"></i>
              <span>Recogida y entrega a domicilio <strong>incluida</strong></span>
            </p>
          </div>

          <div class="coverage-card">
            <h3 class="coverage-title">
              <i class="ri-map-pin-2-fill title-icon"></i>
              Cobertura Extendida
            </h3>
            <div class="coverage-badge-group">
              <span class="zone-badge zone-extended">Barcelona</span>
              <span class="zone-badge zone-extended">Puerto La Cruz</span>
              <span class="zone-badge zone-extended">Maturín</span>
              <span class="zone-badge zone-extended">Caracas</span>
              <span class="zone-badge zone-extended">Maracay</span>
              <span class="zone-badge zone-extended">Valencia</span>
            </div>
            <p class="coverage-detail">
              <i class="ri-time-line detail-icon"></i>
              <span>Tiempo de respuesta: <strong>48-72 horas</strong></span>
            </p>
            <p class="coverage-detail">
              <i class="ri-truck-line detail-icon"></i>
              <span>Recogida a domicilio <strong>con coste adicional</strong></span>
            </p>
          </div>

          <div class="coverage-card coverage-travel">
            <div class="travel-badge">
              <i class="ri-plane-line travel-icon"></i>
              SERVICIO DE VIAJE
            </div>
            <h3 class="coverage-title">
              <i class="ri-global-line title-icon"></i>
              Fuera de Cobertura
            </h3>
            <p class="coverage-description">
              ¿Estás fuera de nuestra zona de cobertura? ¡No te preocupes!
              Disponemos de un <strong>servicio de viaje</strong> para atender
              clientes en todo el territorio nacional.
            </p>
            <div class="travel-options">
              <div class="travel-option">
                <i class="ri-train-line option-icon"></i>
                <span>Visitas programadas</span>
              </div>
              <div class="travel-option">
                <i class="ri-car-line option-icon"></i>
                <span>Desplazamientos concertados</span>
              </div>
              <div class="travel-option">
                <i class="ri-building-line option-icon"></i>
                <span>Servicio a empresas</span>
              </div>
            </div>
            <div class="travel-note">
              <i class="ri-information-line note-icon"></i>
              <span>Consulta disponibilidad y condiciones para tu ubicación</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="coverage-cta">
        <div class="cta-content">
          <i class="ri-questionnaire-line cta-icon"></i>
          <div class="cta-text">
            <p class="cta-title">¿No estás en nuestra zona?</p>
            <p class="cta-subtitle">Pregunta por nuestro servicio de viaje</p>
          </div>
          <a href="https://wa.me/584267379617" target="_blank" class="cta-button">
            <i class="ri-whatsapp-line button-icon"></i>
            CONSULTAR DISPONIBILIDAD
          </a>
        </div>
      </div>
    </div>

    <div class="coverage-divider"></div>
  </section>
</template>

<script setup>
// No se necesitan importaciones con CDN
</script>

<style scoped>
/* ============================================
   SECCIÓN COBERTURA - NEOBRUTALISMO
   ============================================ */

.coverage {
  background-color: #ffffff;
  padding: 80px 40px 40px;
  font-family: 'Inter', 'Space Grotesk', 'DM Sans', -apple-system, sans-serif;
  position: relative;
  overflow: hidden;
}

.coverage-container {
  max-width: 1280px;
  margin: 0 auto;
}

/* ============================================
   ENCABEZADO
   ============================================ */

.coverage-header {
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
   GRID PRINCIPAL
   ============================================ */

.coverage-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 50px;
  align-items: start;
}

/* ============================================
   MAPA DE GOOGLE
   ============================================ */

.coverage-map {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.map-wrapper {
  border: 4px solid #000000;
  box-shadow: 8px 8px 0px #000000;
  overflow: hidden;
  background-color: #f5f5f5;
  position: relative;
}

.google-map {
  display: block;
  width: 100%;
  height: 400px;
  background-color: #e8e8e8;
}

/* Leyenda del mapa */
.map-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 14px 20px;
  background-color: #ffffff;
  border: 3px solid #000000;
  box-shadow: 5px 5px 0px #000000;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  color: #000000;
}

.legend-dot {
  width: 16px;
  height: 16px;
  border: 2px solid #000000;
  flex-shrink: 0;
}

.dot-primary {
  background-color: #ccff00;
  opacity: 0.6;
}

.dot-secondary {
  background-color: #ccff00;
  opacity: 0.25;
  border-style: dashed;
}

.dot-travel {
  background-color: #ff6b6b;
  border-color: #000000;
}

/* Información de ubicación */
.location-info {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 14px 20px;
  background-color: #000000;
  border: 3px solid #000000;
  box-shadow: 5px 5px 0px #ccff00;
}

.location-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
}

.location-icon {
  font-size: 18px;
  color: #ccff00;
}

.location-item strong {
  color: #ccff00;
}

/* ============================================
   LISTA DE ZONAS
   ============================================ */

.coverage-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.coverage-card {
  background-color: #ffffff;
  padding: 24px;
  border: 4px solid #000000;
  box-shadow: 8px 8px 0px #000000;
}

.coverage-title {
  font-size: 20px;
  font-weight: 800;
  color: #000000;
  margin: 0 0 14px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.title-icon {
  font-size: 22px;
  color: #ccff00;
}

.coverage-badge-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 14px;
}

.zone-badge {
  display: inline-block;
  background-color: #ccff00;
  color: #000000;
  font-weight: 700;
  font-size: 15px;
  padding: 6px 14px;
  border: 2px solid #000000;
  box-shadow: 3px 3px 0px #000000;
}

.zone-extended {
  background-color: #f5f5f5;
  box-shadow: 3px 3px 0px #000000;
  border-style: dashed;
}

.coverage-detail {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #333333;
  margin: 6px 0;
}

.detail-icon {
  font-size: 18px;
  color: #ccff00;
}

.coverage-detail strong {
  color: #000000;
}

/* Tarjeta de viaje */
.coverage-travel {
  background-color: #fafafa;
  border-color: #000000;
  position: relative;
}

.travel-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #ff6b6b;
  color: #ffffff;
  font-weight: 800;
  font-size: 12px;
  padding: 6px 14px;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
}

.travel-icon {
  font-size: 16px;
}

.coverage-description {
  font-size: 16px;
  line-height: 1.6;
  color: #333333;
  margin: 0 0 14px 0;
}

.coverage-description strong {
  color: #000000;
  background-color: #ccff00;
  padding: 0 4px;
}

.travel-options {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-bottom: 14px;
}

.travel-option {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff;
  padding: 8px 12px;
  border: 2px solid #000000;
  font-size: 14px;
  font-weight: 600;
  color: #000000;
}

.option-icon {
  font-size: 16px;
  color: #ff6b6b;
}

.travel-note {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #000000;
  color: #ffffff;
  padding: 10px 16px;
  border: 2px solid #000000;
  font-size: 15px;
  font-weight: 600;
}

.note-icon {
  font-size: 18px;
  color: #ff6b6b;
}

/* ============================================
   CTA
   ============================================ */

.coverage-cta {
  background-color: #000000;
  border: 4px solid #000000;
  box-shadow: 8px 8px 0px #ccff00;
  padding: 30px 40px;
}

.cta-content {
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.cta-icon {
  font-size: 44px;
  color: #ccff00;
  flex-shrink: 0;
}

.cta-text {
  flex: 1;
}

.cta-title {
  font-size: 22px;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
}

.cta-subtitle {
  font-size: 16px;
  color: #cccccc;
  margin: 4px 0 0 0;
}

.cta-button {
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

.cta-button:hover {
  transform: translate(3px, 3px);
  box-shadow: 2px 2px 0px #ffffff;
}

.button-icon {
  font-size: 22px;
}

/* ============================================
   DIVISOR
   ============================================ */

.coverage-divider {
  max-width: 1280px;
  margin: 50px auto 0;
  height: 6px;
  background-color: #000000;
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 1024px) {
  .coverage-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .cta-content {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
  }

  .travel-options {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .coverage {
    padding: 50px 20px 30px;
  }

  .coverage-header {
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 36px;
  }

  .section-subtitle {
    font-size: 16px;
    padding: 0 10px;
  }

  .google-map {
    height: 250px;
  }

  .coverage-card {
    padding: 18px;
  }

  .coverage-title {
    font-size: 16px;
  }

  .zone-badge {
    font-size: 12px;
    padding: 4px 12px;
  }

  .coverage-detail {
    font-size: 13px;
  }

  .map-legend {
    padding: 10px 14px;
    gap: 12px;
  }

  .legend-item {
    font-size: 12px;
  }

  .location-info {
    flex-direction: column;
    gap: 8px;
    padding: 12px 16px;
  }

  .location-item {
    font-size: 13px;
  }

  .travel-options {
    grid-template-columns: 1fr 1fr;
  }

  .coverage-cta {
    padding: 25px 20px;
  }

  .cta-icon {
    font-size: 36px;
  }

  .cta-title {
    font-size: 18px;
  }

  .cta-subtitle {
    font-size: 14px;
  }

  .cta-button {
    font-size: 13px;
    padding: 12px 20px;
  }

  .button-icon {
    font-size: 18px;
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

  .google-map {
    height: 200px;
  }

  .travel-options {
    grid-template-columns: 1fr;
  }

  .travel-badge {
    font-size: 10px;
    padding: 4px 10px;
  }

  .travel-note {
    font-size: 12px;
    padding: 8px 12px;
    flex-wrap: wrap;
  }

  .coverage-card {
    padding: 14px;
  }

  .zone-badge {
    font-size: 11px;
    padding: 3px 10px;
  }

  .legend-dot {
    width: 12px;
    height: 12px;
  }

  .cta-title {
    font-size: 16px;
  }

  .cta-button {
    font-size: 12px;
    padding: 10px 16px;
  }

  .cta-icon {
    font-size: 28px;
  }
}
</style>
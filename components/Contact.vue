<template>
  <section class="contact" id='contact'>
    <div class="contact-container">
      <!-- Encabezado -->
      <div class="contact-header">
        <div class="section-badge">
          <i class="ri-customer-service-2-line badge-icon"></i>
          CONTACTO
        </div>
        <h2 class="section-title">
          HABLA <span class="highlight">CON NOSOTROS</span>
        </h2>
        <p class="section-subtitle">
          Soluciones técnicas a tu alcance. Contáctanos por el canal
          de tu preferencia y recibe atención personalizada inmediata.
        </p>
      </div>

      <div class="contact-grid">
        <!-- Información de contacto -->
        <div class="contact-info">
          <!-- Teléfono -->
          <div class="contact-card">
            <div class="contact-icon-wrapper">
              <i class="ri-phone-line contact-icon"></i>
            </div>
            <div class="contact-details">
              <h3 class="contact-label">Teléfono</h3>
              <a href="tel:+584264411443" class="contact-value">
                +58 426-441-1443
              </a>
              <span class="contact-note">Atención telefónica disponible de lunes a sábado de 8am a 6pm</span>
            </div>
          </div>

          <!-- WhatsApp -->
          <div class="contact-card">
            <div class="contact-icon-wrapper">
              <i class="ri-whatsapp-line contact-icon"></i>
            </div>
            <div class="contact-details">
              <h3 class="contact-label">WhatsApp</h3>
              <a href="https://wa.me/584264411443" target="_blank" class="contact-value">
                +58 426-441-1443
              </a>
              <span class="contact-note">Respuesta inmediata garantizada para consultas y soporte técnico</span>
            </div>
          </div>

          <!-- Email -->
          <div class="contact-card">
            <div class="contact-icon-wrapper">
              <i class="ri-mail-line contact-icon"></i>
            </div>
            <div class="contact-details">
              <h3 class="contact-label">Email</h3>
              <a href="mailto:servicio@tecnico.com" class="contact-value">
                servicio@tecnico.com
              </a>
              <span class="contact-note">Respuesta garantizada en menos de 24 horas laborables</span>
            </div>
          </div>

          <!-- Dirección -->
          <div class="contact-card">
            <div class="contact-icon-wrapper">
              <i class="ri-map-pin-2-line contact-icon"></i>
            </div>
            <div class="contact-details">
              <h3 class="contact-label">Dirección</h3>
              <span class="contact-value">
                Av. Principal, Local 5<br />
                Zaraza, Estado Guárico<br />
                Venezuela
              </span>
              <span class="contact-note">Ubicación exacta disponible en Google Maps con indicaciones detalladas</span>
            </div>
          </div>
        </div>

        <!-- Horario de atención -->
        <div class="contact-schedule">
          <div class="schedule-card">
            <div class="schedule-header">
              <i class="ri-time-line schedule-icon"></i>
              <h3 class="schedule-title">Horario de Atención</h3>
            </div>
            
            <div class="schedule-grid">
              <div class="schedule-day">
                <span class="day-name">Lunes - Viernes</span>
                <span class="day-hours">8:00 AM - 6:00 PM</span>
              </div>
              <div class="schedule-day">
                <span class="day-name">Sábado</span>
                <span class="day-hours">9:00 AM - 2:00 PM</span>
              </div>
              <div class="schedule-day">
                <span class="day-name">Domingo</span>
                <span class="day-hours day-closed">Cerrado</span>
              </div>
            </div>

            <div class="schedule-divider"></div>

            <div class="schedule-badge-group">
              <div class="schedule-badge">
                <i class="ri-flashlight-line badge-icon-sched"></i>
                <span>Atención de urgencias 24/7</span>
              </div>
              <div class="schedule-badge">
                <i class="ri-calendar-check-line badge-icon-sched"></i>
                <span>Agenda tu cita previa</span>
              </div>
            </div>

            <div class="schedule-note">
              <i class="ri-information-line note-icon"></i>
              <span>Horarios sujetos a cambios en días festivos</span>
            </div>
          </div>

          <!-- Botones de contacto rápido -->
          <div class="quick-contact">
            <a href="tel:+584264411443" class="quick-btn btn-phone">
              <i class="ri-phone-fill"></i>
              LLAMAR POR TELÉFONO
            </a>
            <a href="https://wa.me/584264411443" target="_blank" class="quick-btn btn-whatsapp">
              <i class="ri-whatsapp-fill"></i>
              INICIAR CHAT WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-divider"></div>
  </section>
</template>

<script setup>
// No se necesitan importaciones con CDN
</script>

<style scoped>
/* ============================================
   SECCIÓN CONTACTO - NEOBRUTALISMO
   ============================================ */

.contact {
  background-color: #ffffff;
  padding: 80px 40px 40px;
  font-family: 'Inter', 'Space Grotesk', 'DM Sans', -apple-system, sans-serif;
  position: relative;
  overflow: hidden;
}

.contact-container {
  max-width: 1280px;
  margin: 0 auto;
}

/* ============================================
   ENCABEZADO
   ============================================ */

.contact-header {
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

.contact-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  margin-bottom: 50px;
}

/* ============================================
   TARJETAS DE CONTACTO
   ============================================ */

.contact-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.contact-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background-color: #ffffff;
  padding: 24px;
  border: 4px solid #000000;
  box-shadow: 6px 6px 0px #000000;
  transition: all 0.1s ease;
  min-height: 140px;
}

.contact-card:hover {
  transform: translate(3px, 3px);
  box-shadow: 3px 3px 0px #000000;
}

.contact-icon-wrapper {
  background-color: #ccff00;
  padding: 14px;
  border: 3px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 52px;
  min-height: 52px;
}

.contact-icon {
  font-size: 26px;
  color: #000000;
  display: block;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  justify-content: flex-start;
}

.contact-label {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #666666;
  margin: 0;
  min-height: 20px;
}

.contact-value {
  font-size: 18px;
  font-weight: 800;
  color: #000000;
  text-decoration: none;
  line-height: 1.3;
  min-height: 24px;
}

.contact-value:hover {
  color: #000000;
  text-decoration: underline;
  text-decoration-color: #ccff00;
  text-decoration-thickness: 3px;
}

.contact-note {
  font-size: 14px;
  color: #888888;
  font-weight: 500;
  line-height: 1.4;
  min-height: 40px;
  display: flex;
  align-items: center;
}

/* ============================================
   HORARIO DE ATENCIÓN
   ============================================ */

.contact-schedule {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.schedule-card {
  background-color: #fafafa;
  padding: 24px;
  border: 4px solid #000000;
  box-shadow: 6px 6px 0px #000000;
}

.schedule-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.schedule-icon {
  font-size: 28px;
  color: #ccff00;
}

.schedule-title {
  font-size: 20px;
  font-weight: 800;
  color: #000000;
  margin: 0;
}

.schedule-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.schedule-day {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: #ffffff;
  border: 2px solid #000000;
}

.day-name {
  font-weight: 700;
  font-size: 14px;
  color: #000000;
}

.day-hours {
  font-weight: 600;
  font-size: 14px;
  color: #000000;
}

.day-closed {
  color: #ff6b6b;
}

.schedule-divider {
  height: 3px;
  background-color: #000000;
  margin: 16px 0;
}

.schedule-badge-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 14px;
}

.schedule-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #000000;
  color: #ffffff;
  font-weight: 700;
  font-size: 12px;
  padding: 6px 14px;
  border: 2px solid #000000;
}

.badge-icon-sched {
  font-size: 16px;
  color: #ccff00;
}

.schedule-note {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff;
  padding: 10px 14px;
  border: 2px solid #000000;
  font-size: 13px;
  font-weight: 500;
  color: #333333;
}

.note-icon {
  font-size: 18px;
  color: #ccff00;
}

/* ============================================
   BOTONES DE CONTACTO RÁPIDO
   ============================================ */

.quick-contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.quick-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 800;
  font-size: 13px;
  padding: 14px 20px;
  border: 3px solid #000000;
  box-shadow: 5px 5px 0px #000000;
  cursor: pointer;
  transition: all 0.05s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-decoration: none;
  text-align: center;
}

.quick-btn:hover {
  transform: translate(3px, 3px);
  box-shadow: 2px 2px 0px #000000;
}

.quick-btn i {
  font-size: 20px;
}

.btn-phone {
  background-color: #ccff00;
  color: #000000;
}

.btn-whatsapp {
  background-color: #25d366;
  color: #ffffff;
  border-color: #000000;
}

.btn-whatsapp:hover {
  color: #ffffff;
}

/* ============================================
   MAPA DE UBICACIÓN
   ============================================ */

.contact-map {
  margin-top: 10px;
}

.map-wrapper {
  border: 4px solid #000000;
  box-shadow: 8px 8px 0px #000000;
  overflow: hidden;
  margin-bottom: 16px;
}

.google-map {
  display: block;
  width: 100%;
  height: 300px;
  background-color: #e8e8e8;
}

.map-cta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px 24px;
  background-color: #000000;
  border: 3px solid #000000;
  box-shadow: 6px 6px 0px #ccff00;
}

.map-cta-icon {
  font-size: 24px;
  color: #ccff00;
}

.map-cta span {
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  flex: 1;
}

.map-cta-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: #ccff00;
  color: #000000;
  font-weight: 800;
  font-size: 13px;
  padding: 8px 18px;
  border: 2px solid #ffffff;
  box-shadow: 4px 4px 0px #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.05s ease;
}

.map-cta-link:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px #ffffff;
}

.map-cta-link i {
  font-size: 16px;
}

/* ============================================
   DIVISOR
   ============================================ */

.contact-divider {
  max-width: 1280px;
  margin: 50px auto 0;
  height: 6px;
  background-color: #000000;
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .contact-info {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 50px 20px 30px;
  }

  .contact-header {
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 36px;
  }

  .section-subtitle {
    font-size: 16px;
    padding: 0 10px;
  }

  .contact-info {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .contact-card {
    padding: 16px;
  }

  .contact-value {
    font-size: 15px;
  }

  .schedule-card {
    padding: 18px;
  }

  .schedule-day {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .quick-contact {
    grid-template-columns: 1fr;
  }

  .map-cta {
    flex-direction: column;
    text-align: center;
    padding: 16px;
  }

  .map-cta-link {
    width: 100%;
    justify-content: center;
  }

  .google-map {
    height: 220px;
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

  .contact-card {
    padding: 14px;
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-icon-wrapper {
    padding: 10px;
  }

  .contact-icon {
    font-size: 20px;
  }

  .contact-value {
    font-size: 14px;
  }

  .schedule-title {
    font-size: 17px;
  }

  .schedule-badge-group {
    flex-direction: column;
  }

  .schedule-badge {
    justify-content: center;
  }

  .map-cta span {
    font-size: 13px;
  }

  .map-cta-link {
    font-size: 11px;
    padding: 6px 14px;
  }

  .quick-btn {
    font-size: 12px;
    padding: 12px 16px;
  }
}
</style>
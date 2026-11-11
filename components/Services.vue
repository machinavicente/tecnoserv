<template>
  <section class="services" id='services'>
    <div class="services-container">
      <!-- Encabezado de sección -->
      <div class="services-header">
        <div class="section-badge">
          <i class="ri-service-line badge-icon"></i>
          SERVICIOS
        </div>
        <h2 class="section-title">
          LO QUE <span class="highlight">OFRECEMOS</span>
        </h2>
        <p class="section-subtitle">
          Soluciones técnicas completas para tus equipos informáticos,
          con la calidad y rapidez que necesitas.
        </p>
      </div>

      <!-- Grid de servicios -->
      <div class="services-grid">
        <!-- Servicio 1: Reparación PCs y Portátiles -->
        <div class="service-card card-repair">
          <div class="card-number">01</div>
          <div class="service-icon-wrapper">
            <i class="ri-computer-line service-icon"></i>
          </div>
          <h3 class="service-title">Reparación de PCs y Portátiles</h3>
          <p class="service-description">
            Diagnóstico y reparación de hardware y software en equipos
            de escritorio y portátiles. Solucionamos problemas de
            rendimiento, fallos de arranque y componentes dañados.
          </p>
          <div class="service-tag">+200 reparaciones</div>
        </div>

        <!-- Servicio 2: Recuperación de datos -->
        <div class="service-card card-data">
          <div class="card-number">02</div>
          <div class="service-icon-wrapper">
            <i class="ri-database-2-line service-icon"></i>
          </div>
          <h3 class="service-title">Recuperación de Datos</h3>
          <p class="service-description">
            Recuperamos información perdida por formateo, virus,
            fallos mecánicos o daños físicos en discos duros,
            SSD y unidades USB.
          </p>
          <div class="service-tag">95% éxito</div>
        </div>

        <!-- Servicio 3: Eliminación de virus/malware -->
        <div class="service-card card-virus">
          <div class="card-number">03</div>
          <div class="service-icon-wrapper">
            <i class="ri-shield-cross-line service-icon"></i>
          </div>
          <h3 class="service-title">Eliminación de Virus y Malware</h3>
          <p class="service-description">
            Limpieza profunda de sistemas infectados. Eliminamos
            virus, ransomware, spyware y cualquier tipo de
            software malicioso que comprometa tu seguridad.
          </p>
          <div class="service-tag">100% seguro</div>
        </div>

        <!-- Servicio 4: Instalación de software/hardware -->
        <div class="service-card card-install">
          <div class="card-number">04</div>
          <div class="service-icon-wrapper">
            <i class="ri-install-line service-icon"></i>
          </div>
          <h3 class="service-title">Instalación de Software/Hardware</h3>
          <p class="service-description">
            Instalación y configuración de sistemas operativos,
            programas especializados, drivers y componentes
            físicos como RAM, discos y tarjetas gráficas.
          </p>
          <div class="service-tag">Instalación exprés</div>
        </div>

        <!-- Servicio 5: Mantenimiento preventivo -->
        <div class="service-card card-maintenance">
          <div class="card-number">05</div>
          <div class="service-icon-wrapper">
            <i class="ri-tools-line service-icon"></i>
          </div>
          <h3 class="service-title">Mantenimiento Preventivo</h3>
          <p class="service-description">
            Planes de mantenimiento regular para optimizar el
            rendimiento, limpieza física y actualización de
            sistemas. Evita problemas antes de que ocurran.
          </p>
          <div class="service-tag">Plan anual</div>
        </div>

        <!-- Servicio 6: Redes y servidores -->
        <div class="service-card card-network">
          <div class="card-number">06</div>
          <div class="service-icon-wrapper">
            <i class="ri-server-line service-icon"></i>
          </div>
          <h3 class="service-title">Redes y Servidores</h3>
          <p class="service-description">
            Configuración, mantenimiento y optimización de redes
            locales, servidores empresariales y infraestructura
            TI para pequeñas y medianas empresas.
          </p>
          <div class="service-tag">Empresarial</div>
        </div>
      </div>

      <!-- CTA final -->
      <div class="services-cta">
        <p>¿Necesitas un servicio personalizado?</p>
        <a href="https://wa.me/584264411443" target="_blank" class="cta-button">
          HABLAR CON UN TÉCNICO
          <i class="ri-arrow-right-line cta-icon"></i>
        </a>
      </div>
    </div>

    <!-- Divisor -->
    <div class="services-divider"></div>
  </section>
</template>

<script setup>
// No se necesitan importaciones con CDN
</script>

<style scoped>
/* ============================================
   SECCIÓN SERVICIOS - NEOBRUTALISMO
   ============================================ */

.services {
  background-color: #ffffff;
  padding: 80px 40px 40px;
  font-family: 'Inter', 'Space Grotesk', 'DM Sans', -apple-system, sans-serif;
  position: relative;
  overflow: hidden;
}

.services-container {
  max-width: 1280px;
  margin: 0 auto;
}

/* ============================================
   ENCABEZADO
   ============================================ */

.services-header {
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
   GRID DE SERVICIOS
   ============================================ */

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 50px;
}

/* ============================================
   TARJETA DE SERVICIO
   ============================================ */

.service-card {
  background-color: #ffffff;
  padding: 30px 25px 25px;
  border: 4px solid #000000;
  box-shadow: 8px 8px 0px #000000;
  position: relative;
  transition: all 0.1s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.service-card:hover {
  transform: translate(3px, 3px);
  box-shadow: 4px 4px 0px #000000;
}

/* Número de servicio */
.card-number {
  position: absolute;
  top: -12px;
  right: 20px;
  background-color: #ccff00;
  color: #000000;
  font-weight: 900;
  font-size: 14px;
  padding: 4px 12px;
  border: 3px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  letter-spacing: 1px;
}

/* Icono */
.service-icon-wrapper {
  background-color: #ccff00;
  padding: 14px;
  border: 3px solid #000000;
  box-shadow: 5px 5px 0px #000000;
  margin-bottom: 4px;
}

.service-icon {
  font-size: 32px;
  color: #000000;
  display: block;
}

/* Título */
.service-title {
  font-size: 20px;
  font-weight: 800;
  color: #000000;
  margin: 0;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

/* Descripción */
.service-description {
  font-size: 15px;
  line-height: 1.6;
  color: #444444;
  margin: 0;
  flex-grow: 1;
}

/* Tag */
.service-tag {
  display: inline-block;
  background-color: #000000;
  color: #ffffff;
  font-weight: 700;
  font-size: 12px;
  padding: 4px 14px;
  border: 2px solid #000000;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 4px;
}

/* ============================================
   COLORES ESPECÍFICOS POR TARJETA
   ============================================ */

.card-repair .service-icon-wrapper {
  background-color: #ccff00;
}

.card-data .service-icon-wrapper {
  background-color: #ff6b6b;
}

.card-virus .service-icon-wrapper {
  background-color: #4ecdc4;
}

.card-install .service-icon-wrapper {
  background-color: #ffe66d;
}

.card-maintenance .service-icon-wrapper {
  background-color: #a8e6cf;
}

.card-network .service-icon-wrapper {
  background-color: #ff9ff3;
}

/* ============================================
   CTA FINAL
   ============================================ */

.services-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  background-color: #f5f5f5;
  border: 4px solid #000000;
  box-shadow: 8px 8px 0px #000000;
  margin-top: 10px;
}

.services-cta p {
  font-size: 22px;
  font-weight: 700;
  color: #000000;
  margin: 0;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #ccff00;
  color: #000000;
  font-weight: 800;
  font-size: 16px;
  padding: 16px 36px;
  border: 3px solid #000000;
  box-shadow: 6px 6px 0px #000000;
  cursor: pointer;
  transition: all 0.05s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cta-button:hover {
  transform: translate(3px, 3px);
  box-shadow: 2px 2px 0px #000000;
}

.cta-icon {
  font-size: 20px;
}

/* ============================================
   DIVISOR
   ============================================ */

.services-divider {
  max-width: 1280px;
  margin: 50px auto 0;
  height: 6px;
  background-color: #000000;
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .services {
    padding: 50px 20px 30px;
  }

  .services-header {
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 36px;
  }

  .section-subtitle {
    font-size: 16px;
    padding: 0 10px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .service-card {
    padding: 25px 20px 20px;
  }

  .service-icon {
    font-size: 28px;
  }

  .service-title {
    font-size: 18px;
  }

  .services-cta {
    padding: 30px 20px;
  }

  .services-cta p {
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

  .card-number {
    font-size: 12px;
    padding: 3px 10px;
    top: -10px;
    right: 14px;
  }

  .service-tag {
    font-size: 10px;
    padding: 3px 10px;
  }

  .services-cta p {
    font-size: 16px;
  }
}
</style>
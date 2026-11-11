<template>
  <section class="why-us" id='why-us'>
    <div class="why-us-container">
      <!-- Encabezado -->
      <div class="why-us-header">
        <div class="section-badge">
          <i class="ri-star-s-line badge-icon"></i>
          ¿POR QUÉ ELEGIRNOS?
        </div>
        <h2 class="section-title">
          VENTAJAS QUE <span class="highlight">NOS RESPALDAN</span>
        </h2>
        <p class="section-subtitle">
          Más de 10 años de experiencia nos avalan. Estas son las razones
          por las que nuestros clientes confían en nosotros.
        </p>
      </div>

      <!-- Grid de ventajas -->
      <div class="advantages-grid">
        <!-- Ventaja 1: Técnicos certificados -->
        <div class="advantage-card card-certified">
          <div class="advantage-number">01</div>
          <div class="advantage-icon-wrapper">
            <i class="ri-award-line advantage-icon"></i>
          </div>
          <h3 class="advantage-title">Técnicos Certificados</h3>
          <p class="advantage-description">
            Contamos con profesionales titulados y con certificaciones
            oficiales en reparación, redes y seguridad informática.
          </p>
          <div class="advantage-check">
            <i class="ri-checkbox-circle-fill check-icon"></i>
            <span>100% cualificados</span>
          </div>
        </div>

        <!-- Ventaja 2: Presupuesto sin compromiso -->
        <div class="advantage-card card-budget">
          <div class="advantage-number">02</div>
          <div class="advantage-icon-wrapper">
            <i class="ri-file-text-line advantage-icon"></i>
          </div>
          <h3 class="advantage-title">Presupuesto sin Compromiso</h3>
          <p class="advantage-description">
            Te ofrecemos un diagnóstico detallado y presupuesto
            totalmente gratuito sin obligación de contratar.
          </p>
          <div class="advantage-check">
            <i class="ri-checkbox-circle-fill check-icon"></i>
            <span>Sin coste adicional</span>
          </div>
        </div>

        <!-- Ventaja 3: Garantía en reparaciones -->
        <div class="advantage-card card-warranty">
          <div class="advantage-number">03</div>
          <div class="advantage-icon-wrapper">
            <i class="ri-shield-check-line advantage-icon"></i>
          </div>
          <h3 class="advantage-title">Garantía en Reparaciones</h3>
          <p class="advantage-description">
            Todas nuestras reparaciones cuentan con garantía de
            90 días en mano de obra y piezas instaladas.
          </p>
          <div class="advantage-check">
            <i class="ri-checkbox-circle-fill check-icon"></i>
            <span>90 días de garantía</span>
          </div>
        </div>

        <!-- Ventaja 4: Rapidez 24-48h -->
        <div class="advantage-card card-speed">
          <div class="advantage-number">04</div>
          <div class="advantage-icon-wrapper">
            <i class="ri-flashlight-line advantage-icon"></i>
          </div>
          <h3 class="advantage-title">Rapidez 24-48h</h3>
          <p class="advantage-description">
            Reparamos tu equipo en un plazo máximo de 48 horas.
            Para casos urgentes, disponemos de servicio exprés.
          </p>
          <div class="advantage-check">
            <i class="ri-checkbox-circle-fill check-icon"></i>
            <span>Entregas rápidas</span>
          </div>
        </div>

        <!-- Ventaja 5: Piezas originales -->
        <div class="advantage-card card-parts">
          <div class="advantage-number">05</div>
          <div class="advantage-icon-wrapper">
            <i class="ri-check-double-line advantage-icon"></i>
          </div>
          <h3 class="advantage-title">Piezas Originales</h3>
          <p class="advantage-description">
            Utilizamos componentes originales y de primera calidad
            para garantizar la durabilidad de tus equipos.
          </p>
          <div class="advantage-check">
            <i class="ri-checkbox-circle-fill check-icon"></i>
            <span>Calidad asegurada</span>
          </div>
        </div>

        <!-- Ventaja 6: Atención personalizada -->
        <div class="advantage-card card-personal">
          <div class="advantage-number">06</div>
          <div class="advantage-icon-wrapper">
            <i class="ri-user-heart-line advantage-icon"></i>
          </div>
          <h3 class="advantage-title">Atención Personalizada</h3>
          <p class="advantage-description">
            Trato cercano y adaptado a tus necesidades. Te explicamos
            cada paso del proceso con total transparencia.
          </p>
          <div class="advantage-check">
            <i class="ri-checkbox-circle-fill check-icon"></i>
            <span>Soporte 1:1</span>
          </div>
        </div>
      </div>

      <!-- Estadísticas de confianza -->
      <div class="stats-bar" ref="statsBar">
        <div class="stat-item">
          <span class="stat-number">{{ animatedStats.years }}+</span>
          <span class="stat-label">Años de experiencia</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ animatedStats.equipment.toLocaleString() }}+</span>
          <span class="stat-label">Equipos reparados con éxito</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ animatedStats.satisfaction }}%</span>
          <span class="stat-label">Clientes recomiendan nuestro servicio</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ animatedStats.rating }}★</span>
          <span class="stat-label">Calificación promedio en Google</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ animatedStats.responseTime }}h</span>
          <span class="stat-label">Tiempo promedio de respuesta</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ animatedStats.warrantyDays }}d</span>
          <span class="stat-label">Garantía en reparaciones</span>
        </div>
      </div>

      <!-- CTA -->
      <div class="why-us-cta">
        <p>¿Listo para confiar tu equipo a los mejores?</p>
        <a href="https://wa.me/584264411443" target="_blank" class="cta-button">
          SOLICITAR PRESUPUESTO
          <i class="ri-arrow-right-line cta-icon"></i>
        </a>
      </div>
    </div>

    <div class="why-us-divider"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const statsBar = ref(null)
const animatedStats = ref({
  years: 0,
  equipment: 0,
  satisfaction: 0,
  rating: 0,
  responseTime: 0,
  warrantyDays: 0
})

const targetStats = {
  years: 12,
  equipment: 3500,
  satisfaction: 99,
  rating: 4.9,
  responseTime: 2,
  warrantyDays: 90
}

let animationFrame = null
let observer = null
let animationInterval = null

const animateValue = (start, end, duration, callback) => {
  const startTime = performance.now()
  
  const update = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Easing function para animación suave
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    const current = start + (end - start) * easeOutQuart
    
    callback(current)
    
    if (progress < 1) {
      animationFrame = requestAnimationFrame(update)
    }
  }
  
  animationFrame = requestAnimationFrame(update)
}

const startAnimation = () => {
  // Resetear valores a 0
  animatedStats.value = {
    years: 0,
    equipment: 0,
    satisfaction: 0,
    rating: 0,
    responseTime: 0,
    warrantyDays: 0
  }
  
  // Animar años
  animateValue(0, targetStats.years, 2000, (value) => {
    animatedStats.value.years = Math.floor(value)
  })
  
  // Animar equipos
  animateValue(0, targetStats.equipment, 2500, (value) => {
    animatedStats.value.equipment = Math.floor(value)
  })
  
  // Animar satisfacción
  animateValue(0, targetStats.satisfaction, 2000, (value) => {
    animatedStats.value.satisfaction = Math.floor(value)
  })
  
  // Animar rating
  animateValue(0, targetStats.rating, 2000, (value) => {
    animatedStats.value.rating = value.toFixed(1)
  })
  
  // Animar tiempo de respuesta
  animateValue(0, targetStats.responseTime, 1500, (value) => {
    animatedStats.value.responseTime = value.toFixed(1)
  })
  
  // Animar días de garantía
  animateValue(0, targetStats.warrantyDays, 1800, (value) => {
    animatedStats.value.warrantyDays = Math.floor(value)
  })
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startAnimation()
          
          // Iniciar animación continua cada 8 segundos
          animationInterval = setInterval(() => {
            startAnimation()
          }, 8000)
          
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.3 }
  )
  
  if (statsBar.value) {
    observer.observe(statsBar.value)
  }
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
  if (observer) {
    observer.disconnect()
  }
  if (animationInterval) {
    clearInterval(animationInterval)
  }
})
</script>

<style scoped>
/* ============================================
   SECCIÓN VENTAJAS - NEOBRUTALISMO
   ============================================ */

.why-us {
  background-color: #fafafa;
  padding: 80px 40px 40px;
  font-family: 'Inter', 'Space Grotesk', 'DM Sans', -apple-system, sans-serif;
  position: relative;
  overflow: hidden;
}

.why-us-container {
  max-width: 1280px;
  margin: 0 auto;
}

/* ============================================
   ENCABEZADO
   ============================================ */

.why-us-header {
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
   GRID DE VENTAJAS
   ============================================ */

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 50px;
}

/* ============================================
   TARJETA DE VENTAJA
   ============================================ */

.advantage-card {
  background-color: #ffffff;
  padding: 30px 25px 25px;
  border: 4px solid #000000;
  box-shadow: 8px 8px 0px #000000;
  position: relative;
  transition: all 0.15s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.advantage-card:hover {
  transform: translate(4px, 4px);
  box-shadow: 3px 3px 0px #000000;
}

/* Número */
.advantage-number {
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
.advantage-icon-wrapper {
  background-color: #ccff00;
  padding: 14px;
  border: 3px solid #000000;
  box-shadow: 5px 5px 0px #000000;
  margin-bottom: 4px;
}

.advantage-icon {
  font-size: 32px;
  color: #000000;
  display: block;
}

/* Título */
.advantage-title {
  font-size: 20px;
  font-weight: 800;
  color: #000000;
  margin: 0;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

/* Descripción */
.advantage-description {
  font-size: 15px;
  line-height: 1.6;
  color: #444444;
  margin: 0;
  flex-grow: 1;
}

/* Check badge */
.advantage-check {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #000000;
  color: #ffffff;
  font-weight: 700;
  font-size: 13px;
  padding: 6px 16px;
  border: 2px solid #000000;
  margin-top: 6px;
}

.check-icon {
  font-size: 16px;
  color: #ccff00;
}

/* ============================================
   COLORES ESPECÍFICOS POR TARJETA
   ============================================ */

.card-certified .advantage-icon-wrapper {
  background-color: #ccff00;
}

.card-budget .advantage-icon-wrapper {
  background-color: #ff6b6b;
}

.card-warranty .advantage-icon-wrapper {
  background-color: #4ecdc4;
}

.card-speed .advantage-icon-wrapper {
  background-color: #ffe66d;
}

.card-parts .advantage-icon-wrapper {
  background-color: #a8e6cf;
}

.card-personal .advantage-icon-wrapper {
  background-color: #ff9ff3;
}

/* ============================================
   ESTADÍSTICAS
   ============================================ */

.stats-bar {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  background-color: #ffffff;
  padding: 30px 40px;
  border: 4px solid #000000;
  box-shadow: 8px 8px 0px #000000;
  margin-bottom: 50px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.stat-number {
  font-size: 32px;
  font-weight: 900;
  color: #000000;
  letter-spacing: -1px;
}

.stat-label {
  font-size: 13px;
  font-weight: 600;
  color: #555555;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: center;
}

/* ============================================
   CTA
   ============================================ */

.why-us-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  background-color: #000000;
  border: 4px solid #000000;
  box-shadow: 8px 8px 0px #ccff00;
}

.why-us-cta p {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
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
  border: 3px solid #ffffff;
  box-shadow: 6px 6px 0px #ffffff;
  cursor: pointer;
  transition: all 0.05s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cta-button:hover {
  transform: translate(3px, 3px);
  box-shadow: 2px 2px 0px #ffffff;
}

.cta-icon {
  font-size: 20px;
}

/* ============================================
   DIVISOR
   ============================================ */

.why-us-divider {
  max-width: 1280px;
  margin: 50px auto 0;
  height: 6px;
  background-color: #000000;
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 1024px) {
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .stats-bar {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    padding: 25px 30px;
  }
}

@media (max-width: 768px) {
  .why-us {
    padding: 50px 20px 30px;
  }

  .why-us-header {
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 36px;
  }

  .section-subtitle {
    font-size: 16px;
    padding: 0 10px;
  }

  .advantages-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .advantage-card {
    padding: 25px 20px 20px;
  }

  .advantage-icon {
    font-size: 28px;
  }

  .advantage-title {
    font-size: 18px;
  }

  .stats-bar {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px;
    gap: 10px;
  }

  .stat-number {
    font-size: 24px;
  }

  .stat-label {
    font-size: 11px;
  }

  .why-us-cta {
    padding: 30px 20px;
  }

  .why-us-cta p {
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

  .advantage-number {
    font-size: 12px;
    padding: 3px 10px;
    top: -10px;
    right: 14px;
  }

  .advantage-check {
    font-size: 11px;
    padding: 4px 12px;
  }

  .stats-bar {
    grid-template-columns: 1fr 1fr;
    padding: 15px;
    gap: 8px;
  }

  .stat-number {
    font-size: 24px;
  }

  .why-us-cta p {
    font-size: 16px;
  }

  .cta-button {
    font-size: 13px;
    padding: 12px 20px;
  }
}
</style>
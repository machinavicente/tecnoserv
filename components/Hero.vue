<template>
  <section class="hero" id='hero'>
    <div class="hero-container">
      
      <!-- COLUMNA IZQUIERDA -->
      <div class="hero-content">
        <!-- Badge superior -->
        <div class="badge-top mt-5">
          <i class="ri-tools-line badge-icon"></i>
          DIAGNÓSTICO GRATIS
        </div>

        <!-- Título -->
        <h1 class="hero-title">
          REPARAMOS
          <br />
          TU PC
          <br />
          <span class="highlight">EN 24H</span>
        </h1>

        <!-- Subtítulo -->
        <p class="hero-subtitle">
          Servicio técnico especializado. Diagnóstico sin costo,
          presupuesto transparente y garantía en todas nuestras reparaciones.
        </p>

        <!-- Botones -->
        <div class="hero-buttons">
          <button class="btn-primary">
            SOLICITAR PRESUPUESTO
            <i class="ri-arrow-right-line btn-icon"></i>
          </button>
          <button class="btn-secondary">
            <i class="ri-phone-line btn-icon"></i>
            LLAMAR AHORA
          </button>
        </div>

        <!-- Badges de confianza -->
        <div class="trust-badges">
          <div class="trust-item">
            <i class="ri-star-fill trust-icon"></i>
            <span>+250 equipos reparados</span>
          </div>
          <div class="trust-item">
            <i class="ri-check-double-line trust-icon"></i>
            <span>Garantía 90 días</span>
          </div>
        </div>
      </div>

      <!-- COLUMNA DERECHA -->
      <div class="hero-visual">
        <div class="illustration-wrapper">
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <!-- Fondo -->
            <rect width="500" height="500" fill="#f5f5f5" />
            
            <pattern id="diagonalPattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="#e0e0e0" stroke-width="1" />
            </pattern>
            <rect width="500" height="500" fill="url(#diagonalPattern)" />

            <!-- Monitor -->
            <rect x="150" y="120" width="200" height="150" rx="8" fill="white" stroke="black" stroke-width="4" />
            <rect x="165" y="135" width="170" height="105" fill="#ccff00" stroke="black" stroke-width="2" />
            <line x1="165" y1="145" x2="335" y2="145" stroke="black" stroke-width="2" />
            <circle cx="250" cy="195" r="15" fill="black" />
            <rect x="235" y="210" width="30" height="8" rx="4" fill="black" />
            <rect x="220" y="270" width="60" height="10" rx="2" fill="black" />
            <rect x="240" y="280" width="20" height="40" fill="black" />
            <rect x="230" y="320" width="40" height="8" rx="2" fill="black" />

            <!-- Piezas volando -->
            <rect x="380" y="130" width="30" height="30" rx="4" fill="#ccff00" stroke="black" stroke-width="3" />
            <line x1="383" y1="145" x2="407" y2="145" stroke="black" stroke-width="2" />
            <circle cx="395" cy="138" r="3" fill="black" />
            <circle cx="395" cy="152" r="3" fill="black" />
            <rect x="100" y="100" width="20" height="20" fill="#ccff00" stroke="black" stroke-width="3" />
            <circle cx="110" cy="110" r="4" fill="black" />

            <!-- Destornillador -->
            <line x1="130" y1="380" x2="180" y2="340" stroke="black" stroke-width="5" />
            <line x1="180" y1="340" x2="190" y2="330" stroke="black" stroke-width="6" stroke-linecap="round" />
            <rect x="125" y="375" width="12" height="12" rx="2" fill="#ccff00" stroke="black" stroke-width="2" />

            <!-- Técnico -->
            <circle cx="350" cy="350" r="35" fill="white" stroke="black" stroke-width="4" />
            <circle cx="335" cy="345" r="12" fill="#ccff00" stroke="black" stroke-width="3" />
            <circle cx="365" cy="345" r="12" fill="#ccff00" stroke="black" stroke-width="3" />
            <line x1="347" y1="345" x2="353" y2="345" stroke="black" stroke-width="3" />
            <circle cx="335" cy="345" r="4" fill="black" />
            <circle cx="365" cy="345" r="4" fill="black" />
            <path d="M 335 365 Q 350 375 365 365" stroke="black" stroke-width="3" fill="none" />
            <rect x="320" y="385" width="60" height="70" rx="10" fill="white" stroke="black" stroke-width="4" />
            <line x1="320" y1="400" x2="290" y2="370" stroke="black" stroke-width="6" stroke-linecap="round" />
            <line x1="380" y1="400" x2="410" y2="370" stroke="black" stroke-width="6" stroke-linecap="round" />
            <circle cx="290" cy="370" r="8" fill="white" stroke="black" stroke-width="3" />
            <circle cx="410" cy="370" r="8" fill="white" stroke="black" stroke-width="3" />

            <!-- Badges flotantes SVG -->
            <circle cx="80" cy="300" r="40" fill="#ccff00" stroke="black" stroke-width="4" />
            <text x="80" y="295" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="22" fill="black">24h</text>
            <text x="80" y="315" text-anchor="middle" font-family="sans-serif" font-size="10" fill="black">RÁPIDO</text>

            <polygon points="60,70 68,55 76,70 91,70 79,80 83,95 68,87 53,95 57,80 45,70" fill="#ccff00" stroke="black" stroke-width="3" />
            <polygon points="430,80 438,65 446,80 461,80 449,90 453,105 438,97 423,105 427,90 415,80" fill="#ccff00" stroke="black" stroke-width="3" />
            <polygon points="150,380 170,380 160,400 180,400 150,430 155,405 140,405" fill="#ccff00" stroke="black" stroke-width="3" />
          </svg>
        </div>

        <!-- Badges flotantes HTML con Remix Icon -->
        <div class="floating-badge badge-1">
          <i class="ri-flashlight-line badge-emoji"></i>
          <span>Rápido</span>
        </div>
        <div class="floating-badge badge-2">
          <i class="ri-shield-check-line badge-emoji"></i>
          <span>Seguro</span>
        </div>
      </div>
    </div>

    <div class="hero-divider"></div>
  </section>
</template>

<script setup>
// No se necesitan importaciones con CDN
</script>

<style scoped>
/* ============================================
   ESTILOS NEOBRUTALISTAS
   ============================================ */

.hero {
  background-color: #ffffff;
  padding: 60px 40px 40px;
  font-family: 'Inter', 'Space Grotesk', 'DM Sans', -apple-system, sans-serif;
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* ============================================
   COLUMNA IZQUIERDA
   ============================================ */

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.badge-top {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
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

.hero-title {
  font-size: clamp(60px, 10vw, 100px);
  font-weight: 900;
  line-height: 1;
  color: #000000;
  margin: 0;
  letter-spacing: -2px;
  border-bottom: 4px solid #000000;
  padding-bottom: 20px;
}

.hero-title .highlight {
  background-color: #ccff00;
  display: inline-block;
  padding: 0 12px;
  box-decoration-break: clone;
  border: 3px solid #000000;
  box-shadow: 6px 6px 0px #000000;
  margin-top: 4px;
}

.hero-subtitle {
  font-size: 18px;
  line-height: 1.6;
  color: #333333;
  max-width: 520px;
  margin: 0;
  font-weight: 400;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 8px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #ccff00;
  color: #000000;
  font-weight: 800;
  font-size: 16px;
  padding: 16px 32px;
  border: 3px solid #000000;
  box-shadow: 6px 6px 0px #000000;
  cursor: pointer;
  transition: all 0.05s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-primary:hover {
  transform: translate(3px, 3px);
  box-shadow: 2px 2px 0px #000000;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #ffffff;
  color: #000000;
  font-weight: 700;
  font-size: 16px;
  padding: 16px 32px;
  border: 3px solid #000000;
  box-shadow: 6px 6px 0px #000000;
  cursor: pointer;
  transition: all 0.05s ease;
}

.btn-secondary:hover {
  transform: translate(3px, 3px);
  box-shadow: 2px 2px 0px #000000;
}

.btn-icon {
  font-size: 20px;
}

.trust-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 8px;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  padding: 10px 18px;
  border: 3px solid #000000;
  font-weight: 600;
  font-size: 14px;
  color: #000000;
}

.trust-icon {
  font-size: 20px;
  color: #ccff00;
}

/* ============================================
   COLUMNA DERECHA
   ============================================ */

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.illustration-wrapper {
  width: 100%;
  max-width: 500px;
  border: 4px solid #000000;
  box-shadow: 12px 12px 0px #000000;
  background-color: #f5f5f5;
  overflow: hidden;
}

.illustration-wrapper svg {
  display: block;
  width: 100%;
  height: auto;
}

.floating-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff;
  padding: 10px 16px;
  border: 3px solid #000000;
  box-shadow: 5px 5px 0px #000000;
  font-weight: 700;
  font-size: 14px;
  color: #000000;
}

.badge-1 {
  top: 10%;
  right: -10%;
}

.badge-2 {
  bottom: 15%;
  left: -8%;
}

.badge-emoji {
  font-size: 22px;
  color: #ccff00;
}

/* ============================================
   DIVISOR
   ============================================ */

.hero-divider {
  max-width: 1280px;
  margin: 40px auto 0;
  height: 6px;
  background-color: #000000;
  position: relative;
  z-index: 2;
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-content {
    order: 1;
  }

  .hero-visual {
    order: 0;
  }

  .hero-title {
    font-size: clamp(50px, 8vw, 70px);
  }

  .floating-badge {
    display: none;
  }

  .illustration-wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 30px 16px 30px;
  }

  .hero-title {
    font-size: 42px;
    letter-spacing: -1px;
  }

  .hero-title .highlight {
    padding: 0 8px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
    text-align: center;
    padding: 14px 24px;
    font-size: 14px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .trust-badges {
    flex-direction: column;
    gap: 12px;
  }

  .trust-item {
    justify-content: center;
  }

  .illustration-wrapper {
    max-width: 300px;
  }

  .badge-top {
    font-size: 12px;
    padding: 8px 14px;
  }

  .badge-icon {
    font-size: 16px;
  }
}
</style>
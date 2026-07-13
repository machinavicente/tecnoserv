<template>
  <footer class="footer" id='footer'>
    <div class="footer-container">
      <!-- Grid principal del footer -->
      <div class="footer-grid">
        <!-- Columna 1: Logo y descripción -->
        <div class="footer-col footer-brand">
          <div class="footer-logo">
            <span class="logo-icon">⚡</span>
            <span class="logo-text">TECNO<span class="logo-highlight">SERV</span></span>
          </div>
          <p class="footer-description text-justify">
            Servicio técnico especializado en equipos informáticos.
            Reparación, mantenimiento y soluciones tecnológicas
            con la mejor calidad y garantía.
          </p>
          <div class="footer-social">
            <a href="https://www.instagram.com/machinav.dev/" target="_blank" class="social-link" aria-label="Instagram">
              <i class="ri-instagram-line"></i>
            </a>
            <a href="https://www.tiktok.com/@machina.dev" target="_blank" class="social-link" aria-label="TikTok">
              <i class="ri-tiktok-line"></i>
            </a>
          </div>
        </div>

        <!-- Columna 2: Enlaces rápidos -->
        <div class="footer-col footer-links">
          <h4 class="footer-title">Enlaces Rápidos</h4>
          <ul class="footer-menu">
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#why-us">Ventajas</a></li>
            <li><a href="#process">Proceso</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        <!-- Columna 3: Servicios -->
        <div class="footer-col footer-services">
          <h4 class="footer-title">Servicios</h4>
          <ul class="footer-menu">
            <li><a href="#footer">Reparación de PCs</a></li>
            <li><a href="#footer">Recuperación de datos</a></li>
            <li><a href="#footer">Eliminación de virus</a></li>
            <li><a href="#footer">Instalación software/hardware</a></li>
            <li><a href="#footer">Mantenimiento preventivo</a></li>
            <li><a href="#footer">Redes y servidores</a></li>
          </ul>
        </div>

        <!-- Columna 4: Contacto -->
        <div class="footer-col footer-contact">
          <h4 class="footer-title">Contacto</h4>
          <ul class="footer-contact-list">
            <li>
              <i class="ri-phone-line"></i>
              <a href="tel:+584265359617">+58 426-737-9617</a>
            </li>
            <li>
              <i class="ri-whatsapp-line"></i>
              <a href="https://wa.me/584265359617" target="_blank">+58 426-737-9617</a>
            </li>
            <li>
              <i class="ri-mail-line"></i>
              <a href="mailto:servicio@tecnico.com">vicentemachina.dev@gmail.com</a>
            </li>
            <li>
              <i class="ri-map-pin-2-line"></i>
              <span>Zaraza, Guárico</span>
            </li>
            <li>
              <i class="ri-time-line"></i>
              <span>Lun-Vie: 8am-6pm | Sáb: 9am-2pm</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Banda inferior: Legal y copyright -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <div class="footer-copyright">
            <p>
              &copy; 2026 <strong>TECNOSERV</strong>. Todos los derechos reservados.
            </p>
          </div>
          <div class="footer-legal">
            <a href="#footer" class="legal-link">Aviso Legal</a>
            <span class="legal-divider">|</span>
            <a href="#footer" class="legal-link">Política de Privacidad</a>
            <span class="legal-divider">|</span>
            <a href="#footer" class="legal-link">Política de Cookies</a>
            <span class="legal-divider">|</span>
            <a href="#footer" class="legal-link">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
/* ============================================
   FOOTER - NEOBRUTALISMO
   ============================================ */

.footer {
  background-color: #000000;
  padding: 60px 40px 20px;
  font-family: 'Inter', 'Space Grotesk', 'DM Sans', -apple-system, sans-serif;
  border-top: 6px solid #ccff00;
  position: relative;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
}

/* ============================================
   GRID PRINCIPAL
   ============================================ */

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 3px solid #ccff00;
  margin-bottom: 30px;
}

/* ============================================
   COLUMNAS
   ============================================ */

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

/* ============================================
   MARCA / LOGO
   ============================================ */

.footer-brand {
  gap: 16px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  font-size: 32px;
  color: #ccff00;
  background-color: #000000;
  padding: 6px;
  border: 3px solid #ccff00;
  box-shadow: 4px 4px 0px #ccff00;
}

.logo-text {
  font-size: 28px;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: -1px;
}

.logo-highlight {
  color: #ccff00;
}

.footer-description {
  font-size: 14px;
  line-height: 1.7;
  color: #aaaaaa;
  margin: 0;
  max-width: 320px;
}

/* ============================================
   REDES SOCIALES
   ============================================ */

.footer-social {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 4px;
}

.footer-social .social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #1a1a1a;
  color: #ffffff;
  font-size: 20px;
  border: 2px solid #333333;
  box-shadow: 3px 3px 0px #333333;
  transition: all 0.1s ease;
  text-decoration: none;
}

.footer-social .social-link:hover {
  background-color: #ccff00;
  color: #000000;
  border-color: #ccff00;
  box-shadow: 3px 3px 0px #ccff00;
  transform: translate(2px, 2px);
}

/* ============================================
   TÍTULOS Y MENÚS
   ============================================ */

.footer-title {
  font-size: 16px;
  font-weight: 800;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 4px 0;
  padding-bottom: 8px;
  border-bottom: 3px solid #ccff00;
  display: inline-block;
}

.footer-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-menu li {
  margin: 0;
}

.footer-menu a {
  color: #aaaaaa;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.15s ease;
  display: inline-block;
  padding: 2px 0;
}

.footer-menu a:hover {
  color: #ccff00;
  transform: translateX(4px);
  text-decoration: underline;
  text-decoration-color: #ccff00;
  text-decoration-thickness: 2px;
}

/* ============================================
   CONTACTO
   ============================================ */

.footer-contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-contact-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #aaaaaa;
  line-height: 1.4;
}

.footer-contact-list i {
  font-size: 18px;
  color: #ccff00;
  flex-shrink: 0;
  width: 20px;
  text-align: center;
}

.footer-contact-list a {
  color: #aaaaaa;
  text-decoration: none;
  transition: color 0.15s ease;
}

.footer-contact-list a:hover {
  color: #ccff00;
  text-decoration: underline;
}

.footer-contact-list span {
  color: #aaaaaa;
}

/* ============================================
   BANDA INFERIOR
   ============================================ */

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-copyright p {
  font-size: 13px;
  color: #888888;
  margin: 0;
}

.footer-copyright strong {
  color: #ccff00;
}

.footer-legal {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.legal-link {
  font-size: 13px;
  color: #888888;
  text-decoration: none;
  transition: color 0.15s ease;
}

.legal-link:hover {
  color: #ccff00;
  text-decoration: underline;
}

.legal-divider {
  color: #444444;
}

.footer-dev {
  text-align: center;
  font-size: 12px;
  color: #666666;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding-top: 12px;
  border-top: 1px solid #1a1a1a;
}

.heart-icon {
  color: #ff6b6b;
  font-size: 14px;
  animation: heartbeat 1.5s ease-in-out infinite;
}

.flash-icon {
  color: #ccff00;
  font-size: 14px;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .footer-brand {
    grid-column: span 2;
  }

  .footer-description {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 20px 16px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    padding-bottom: 30px;
  }

  .footer-brand {
    grid-column: span 1;
  }

  .footer-logo .logo-text {
    font-size: 24px;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-legal {
    justify-content: center;
    gap: 6px;
  }

  .legal-link {
    font-size: 12px;
  }

  .footer-dev {
    font-size: 11px;
    flex-wrap: wrap;
  }

  .footer-social .social-link {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 30px 14px 12px;
  }

  .footer-grid {
    gap: 20px;
    padding-bottom: 20px;
  }

  .footer-logo .logo-text {
    font-size: 20px;
  }

  .logo-icon {
    font-size: 24px;
    padding: 4px;
  }

  .footer-title {
    font-size: 14px;
  }

  .footer-menu a {
    font-size: 13px;
  }

  .footer-contact-list li {
    font-size: 13px;
  }

  .footer-contact-list i {
    font-size: 16px;
    width: 18px;
  }

  .footer-copyright p {
    font-size: 12px;
  }

  .footer-legal {
    gap: 4px;
  }

  .legal-link {
    font-size: 11px;
  }

  .legal-divider {
    font-size: 11px;
  }

  .footer-social .social-link {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }

  .footer-dev {
    font-size: 10px;
  }
}
</style>
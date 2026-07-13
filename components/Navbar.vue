<template>
  <header class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="navbar-container">
      <!-- Logo -->
      <a href="#" class="navbar-logo">
        <span class="logo-icon">⚡</span>
        <span class="logo-text">TECNO<span class="logo-highlight">SERV</span></span>
      </a>

      <!-- Menú de navegación -->
      <nav class="navbar-menu" :class="{ 'navbar-menu-open': isMenuOpen }">
        <ul class="navbar-list">
          <li><a href="#hero" class="nav-link" @click="closeMenu">Inicio</a></li>
          <li><a href="#services" class="nav-link" @click="closeMenu">Servicios</a></li>
          <li><a href="#why-us" class="nav-link" @click="closeMenu">Ventajas</a></li>
          <li><a href="#process" class="nav-link" @click="closeMenu">Proceso</a></li>
          <li><a href="#faq" class="nav-link" @click="closeMenu">FAQ</a></li>
          <li><a href="#maps" class="nav-link" @click="closeMenu">Ubicación</a></li>
          <li><a href="#contact" class="nav-link nav-link-cta" @click="closeMenu">Contacto</a></li>
        </ul>
      </nav>

      <!-- Botón hamburguesa (mobile) -->
      <button class="navbar-toggle" @click="toggleMenu" aria-label="Menú">
        <span class="toggle-line" :class="{ 'toggle-line-open': isMenuOpen }"></span>
        <span class="toggle-line" :class="{ 'toggle-line-open': isMenuOpen }"></span>
        <span class="toggle-line" :class="{ 'toggle-line-open': isMenuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* ============================================
   NAVBAR - NEOBRUTALISMO
   ============================================ */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #ffffff;
  border-bottom: 4px solid #000000;
  box-shadow: 0 4px 0px #000000;
  transition: all 0.2s ease;
  padding: 0 40px;
  height: 72px;
  display: flex;
  align-items: center;
}

.navbar-scrolled {
  background-color: #ffffff;
  border-bottom: 4px solid #ccff00;
  box-shadow: 0 6px 0px #000000;
  height: 64px;
}

.navbar-container {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* ============================================
   LOGO
   ============================================ */

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-icon {
  font-size: 28px;
  color: #000000;
  background-color: #ccff00;
  padding: 4px 6px;
  border: 3px solid #000000;
  box-shadow: 3px 3px 0px #000000;
  line-height: 1;
}

.logo-text {
  font-size: 24px;
  font-weight: 900;
  color: #000000;
  letter-spacing: -1px;
}

.logo-highlight {
  color: #ccff00;
  background-color: #000000;
  padding: 0 4px;
  border: 2px solid #000000;
}

.navbar-scrolled .logo-icon {
  font-size: 24px;
  padding: 3px 5px;
}

.navbar-scrolled .logo-text {
  font-size: 20px;
}

/* ============================================
   MENÚ DE NAVEGACIÓN
   ============================================ */

.navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-list {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  text-decoration: none;
  padding: 8px 16px;
  border: 2px solid transparent;
  transition: all 0.15s ease;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  position: relative;
}

.nav-link:hover {
  background-color: #f5f5f5;
  border-color: #000000;
  transform: translateY(-2px);
  box-shadow: 4px 4px 0px #000000;
}

.nav-link-cta {
  background-color: #ccff00;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  font-weight: 800;
}

.nav-link-cta:hover {
  background-color: #000000;
  color: #ccff00;
  border-color: #000000;
  box-shadow: 4px 4px 0px #ccff00;
  transform: translateY(-2px);
}

/* Indicador activo (opcional - se puede activar con JS) */
.nav-link.active {
  background-color: #ccff00;
  border-color: #000000;
  box-shadow: 4px 4px 0px #000000;
}

/* ============================================
   BOTÓN HAMBURGUESA (Mobile)
   ============================================ */

.navbar-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: 3px solid #000000;
  padding: 8px 10px;
  cursor: pointer;
  box-shadow: 3px 3px 0px #000000;
  background-color: #ffffff;
  transition: all 0.15s ease;
}

.navbar-toggle:hover {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px #000000;
}

.toggle-line {
  display: block;
  width: 24px;
  height: 3px;
  background-color: #000000;
  transition: all 0.3s ease;
  transform-origin: center;
}

.toggle-line-open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.toggle-line-open:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.toggle-line-open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 1024px) {
  .navbar {
    padding: 0 20px;
    height: 68px;
  }

  .navbar-scrolled {
    height: 60px;
  }

  .navbar-toggle {
    display: flex;
  }

  .navbar-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    padding: 80px 0 40px;
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    visibility: hidden;
    z-index: 999;
  }

  .navbar-menu-open {
    max-height: 100vh;
    opacity: 1;
    visibility: visible;
    overflow-y: auto;
  }

  .navbar-list {
    flex-direction: column;
    gap: 4px;
    width: 100%;
    padding: 0 20px;
  }

  .nav-link {
    width: 100%;
    text-align: center;
    padding: 12px 20px;
    font-size: 15px;
    border: 2px solid transparent;
  }

  .nav-link:hover {
    transform: none;
    box-shadow: none;
    background-color: #f5f5f5;
    border-color: #000000;
  }

  .nav-link-cta {
    background-color: #ccff00;
    border: 2px solid #000000;
    box-shadow: 4px 4px 0px #000000;
    margin-top: 4px;
  }

  .nav-link-cta:hover {
    background-color: #000000;
    color: #ccff00;
    border-color: #000000;
    box-shadow: 4px 4px 0px #ccff00;
    transform: none;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0 14px;
    height: 60px;
  }

  .navbar-scrolled {
    height: 54px;
  }


  .logo-icon {
    font-size: 22px;
    padding: 3px 5px;
  }

  .logo-text {
    font-size: 18px;
  }

  .navbar-scrolled .logo-icon {
    font-size: 18px;
    padding: 2px 4px;
  }

  .navbar-scrolled .logo-text {
    font-size: 16px;
  }

  .nav-link {
    font-size: 14px;
    padding: 10px 16px;
  }

  .navbar-toggle {
    padding: 6px 8px;
  }

  .toggle-line {
    width: 20px;
    height: 3px;
  }
}
</style>
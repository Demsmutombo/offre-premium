<template>
  <div class="floating-menu-container">
    <!-- Bouton principal du menu -->
    <button 
      class="floating-menu-btn" 
      @click="toggleMenu"
      :class="{ active: isMenuOpen }"
      :title="isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
    >
      <i class="bi" :class="isMenuOpen ? 'bi-x-lg' : 'bi-three-dots-vertical'"></i>
    </button>
    
    <!-- Boutons qui apparaissent -->
    <transition name="fade-scale">
      <div v-if="isMenuOpen" class="floating-buttons">
        <!-- Bouton Scroll to Top -->
        <button 
          class="floating-action-btn scroll-top-btn" 
          @click="scrollToTop"
          title="Retour en haut"
        >
          <i class="bi bi-arrow-up-short"></i>
        </button>
        
        <!-- Bouton Sélecteur de thème -->
        <button 
          class="floating-action-btn theme-btn" 
          @click="openThemeSelector"
          :title="'Thème actuel: ' + currentThemeName"
        >
          <i class="bi bi-palette-fill"></i>
        </button>
      </div>
    </transition>
    
    <!-- Overlay pour fermer le menu -->
    <div v-if="isMenuOpen" class="floating-menu-overlay" @click="closeMenu"></div>
  </div>
</template>

<script>
import { themes } from '../utils/theme'

export default {
  name: 'FloatingMenu',
  data() {
    return {
      isMenuOpen: false,
      currentTheme: 'white'
    }
  },
  computed: {
    currentThemeName() {
      const theme = Object.values(themes).find(t => t.id === this.currentTheme)
      return theme ? theme.name : 'Blanc'
    }
  },
  mounted() {
    // Charger le thème actuel
    const savedTheme = localStorage.getItem('memorial-theme')
    if (savedTheme) {
      this.currentTheme = savedTheme
    }
    
    // Écouter les changements de thème
    window.addEventListener('storage', this.handleThemeChange)
    this.checkThemeChange()
    
    // Fermer le menu si on clique ailleurs
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
    window.removeEventListener('storage', this.handleThemeChange)
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      this.closeMenu()
    },
    openThemeSelector() {
      // Déclencher l'ouverture du sélecteur de thème via un événement personnalisé
      window.dispatchEvent(new CustomEvent('open-theme-selector'))
      this.closeMenu()
    },
    handleClickOutside(event) {
      if (this.isMenuOpen && !this.$el.contains(event.target)) {
        this.closeMenu()
      }
    },
    handleThemeChange() {
      this.checkThemeChange()
    },
    checkThemeChange() {
      const savedTheme = localStorage.getItem('memorial-theme')
      if (savedTheme && savedTheme !== this.currentTheme) {
        this.currentTheme = savedTheme
      }
    }
  }
}
</script>

<style scoped>
.floating-menu-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 10000;
}

.floating-menu-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-color) 0%, color-mix(in srgb, var(--accent-color), black 15%) 100%);
  color: var(--contrast-color);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25), 0 0 0 4px rgba(255, 255, 255, 0.1);
  font-size: 24px;
  position: relative;
  z-index: 10001;
}

.floating-menu-btn:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35), 0 0 0 4px rgba(255, 255, 255, 0.15);
}

.floating-menu-btn:active {
  transform: translateY(0) scale(0.98);
}

.floating-menu-btn.active {
  transform: rotate(90deg);
  background: linear-gradient(135deg, color-mix(in srgb, var(--accent-color), black 10%) 0%, var(--accent-color) 100%);
}

.floating-buttons {
  position: absolute;
  bottom: 70px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

.floating-action-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-color) 0%, color-mix(in srgb, var(--accent-color), black 15%) 100%);
  color: var(--contrast-color);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25), 0 0 0 4px rgba(255, 255, 255, 0.1);
  font-size: 24px;
  position: relative;
}

.floating-action-btn:hover {
  transform: translateY(-4px) scale(1.1);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35), 0 0 0 4px rgba(255, 255, 255, 0.15);
}

.floating-action-btn:active {
  transform: translateY(-2px) scale(1.05);
}

.floating-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
  backdrop-filter: blur(2px);
}

/* Animations */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-scale-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.8);
}

.fade-scale-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.8);
}

.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Responsive */
@media (max-width: 768px) {
  .floating-menu-container {
    bottom: 20px;
    right: 20px;
  }
  
  .floating-menu-btn,
  .floating-action-btn {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
  
  .floating-buttons {
    bottom: 65px;
    gap: 14px;
  }
}

@media (max-width: 480px) {
  .floating-menu-container {
    bottom: 15px;
    right: 15px;
  }
  
  .floating-menu-btn,
  .floating-action-btn {
    width: 48px;
    height: 48px;
    font-size: 18px;
  }
  
  .floating-buttons {
    bottom: 60px;
    gap: 12px;
  }
}
</style>

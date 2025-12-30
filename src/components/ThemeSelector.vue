<template>
  <div class="theme-selector fixed">
    <button 
      class="theme-toggle-btn" 
      @click="toggleDropdown"
      :title="'Thème actuel: ' + currentThemeName"
    >
      <i class="bi bi-palette-fill"></i>
    </button>
    
    <div v-if="showDropdown" class="theme-dropdown" @click.stop>
      <div class="theme-dropdown-header">
        <h5>Choisir un thème</h5>
        <button @click="closeDropdown" class="close-btn">
          <i class="bi bi-x"></i>
        </button>
      </div>
      <div class="theme-options">
        <div 
          v-for="theme in themes" 
          :key="theme.id"
          class="theme-option"
          :class="{ active: currentTheme === theme.id }"
          @click="selectTheme(theme.id)"
        >
          <div class="theme-preview" :style="getThemePreviewStyle(theme)">
            <div class="theme-preview-color" :style="{ backgroundColor: theme.colors['--background-color'] }"></div>
            <div class="theme-preview-color" :style="{ backgroundColor: theme.colors['--accent-color'] }"></div>
            <div class="theme-preview-color" :style="{ backgroundColor: theme.colors['--surface-color'] }"></div>
          </div>
          <span class="theme-name">{{ theme.name }}</span>
          <i v-if="currentTheme === theme.id" class="bi bi-check-circle-fill"></i>
        </div>
      </div>
    </div>
    
    <!-- Overlay pour fermer le dropdown -->
    <div v-if="showDropdown" class="theme-overlay" @click="closeDropdown"></div>
  </div>
</template>

<script>
import { themes, applyTheme, saveTheme, loadTheme } from '../utils/theme'

export default {
  name: 'ThemeSelector',
  data() {
    return {
      showDropdown: false,
      currentTheme: 'white',
      themes: Object.values(themes)
    }
  },
  computed: {
    currentThemeName() {
      const theme = this.themes.find(t => t.id === this.currentTheme)
      return theme ? theme.name : 'Blanc'
    }
  },
  mounted() {
    // Charger le thème sauvegardé seulement s'il existe (utilisateur a déjà choisi)
    // Sinon, rester sur blanc par défaut
    const savedTheme = localStorage.getItem('memorial-theme')
    if (savedTheme) {
      this.currentTheme = savedTheme
      // Le thème a déjà été appliqué par loadTheme() dans main.js
    } else {
      this.currentTheme = 'white'
    }
    
    // Fermer le dropdown si on clique ailleurs
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
      // S'assurer que le dropdown est visible
      if (this.showDropdown) {
        this.$nextTick(() => {
          const dropdown = this.$el.querySelector('.theme-dropdown')
          if (dropdown) {
            dropdown.style.display = 'block'
            dropdown.style.visibility = 'visible'
            dropdown.style.opacity = '1'
          }
        })
      }
    },
    closeDropdown() {
      this.showDropdown = false
    },
    selectTheme(themeId) {
      this.currentTheme = themeId
      applyTheme(themeId)
      saveTheme(themeId)
      this.closeDropdown()
    },
    getThemePreviewStyle(theme) {
      return {
        backgroundColor: theme.colors['--background-color']
      }
    },
    handleClickOutside(event) {
      if (this.showDropdown && !this.$el.contains(event.target)) {
        this.closeDropdown()
      }
    }
  }
}
</script>

<style scoped>
.theme-selector {
  position: relative;
  z-index: 1000;
}

.theme-toggle-btn {
  background: linear-gradient(135deg, var(--accent-color) 0%, color-mix(in srgb, var(--accent-color), black 15%) 100%) !important;
  color: var(--contrast-color) !important;
  border: none !important;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25), 0 0 0 4px rgba(255, 255, 255, 0.1);
  font-size: 24px;
  position: relative;
  z-index: 10000;
}

.theme-toggle-btn::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  padding: 2px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s;
}

.theme-toggle-btn:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35), 0 0 0 4px rgba(255, 255, 255, 0.15);
}

.theme-toggle-btn:hover::before {
  opacity: 1;
}

.theme-toggle-btn:active {
  transform: translateY(0) scale(0.98);
}

.theme-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10000;
  backdrop-filter: blur(2px);
}

.theme-dropdown {
  position: absolute;
  bottom: 75px;
  right: 0;
  background: var(--surface-color);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  min-width: 320px;
  max-width: 360px;
  z-index: 10001;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: bottom right;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.theme-dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background: linear-gradient(135deg, var(--background-color) 0%, color-mix(in srgb, var(--background-color), var(--surface-color) 20%) 100%);
  position: relative;
}

.theme-dropdown-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
}

.theme-dropdown-header h5 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: var(--heading-color);
  letter-spacing: -0.5px;
}

.close-btn {
  background: rgba(0, 0, 0, 0.05);
  border: none;
  color: var(--default-color);
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: rgba(0, 0, 0, 0.1);
  color: var(--accent-color);
  transform: rotate(90deg);
}

.theme-options {
  padding: 12px;
  max-height: 450px;
  overflow-y: auto;
}

.theme-options::-webkit-scrollbar {
  width: 6px;
}

.theme-options::-webkit-scrollbar-track {
  background: transparent;
}

.theme-options::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.theme-options::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

.theme-option {
  display: flex;
  align-items: center;
  padding: 14px 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 6px;
  gap: 14px;
  border: 2px solid transparent;
  background: var(--background-color);
  position: relative;
  overflow: hidden;
}

.theme-option::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--accent-color);
  transform: scaleY(0);
  transition: transform 0.25s ease;
}

.theme-option:hover {
  background: color-mix(in srgb, var(--background-color), var(--surface-color) 50%);
  transform: translateX(4px);
  border-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.theme-option:hover::before {
  transform: scaleY(1);
}

.theme-option.active {
  background: linear-gradient(135deg, var(--accent-color) 0%, color-mix(in srgb, var(--accent-color), black 10%) 100%);
  color: var(--contrast-color);
  border-color: var(--accent-color);
  box-shadow: 0 4px 16px color-mix(in srgb, var(--accent-color), transparent 60%);
  transform: translateX(0);
}

.theme-option.active::before {
  transform: scaleY(1);
  background: var(--contrast-color);
}

.theme-preview {
  display: flex;
  gap: 3px;
  width: 70px;
  height: 36px;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.25s ease;
}

.theme-option:hover .theme-preview {
  transform: scale(1.05);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1);
}

.theme-option.active .theme-preview {
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.15);
}

.theme-preview-color {
  flex: 1;
  height: 100%;
}

.theme-name {
  flex: 1;
  font-weight: 600;
  color: var(--heading-color);
  font-size: 15px;
  letter-spacing: -0.3px;
  transition: color 0.2s ease;
}

.theme-option.active .theme-name {
  color: var(--contrast-color);
}

.theme-option i {
  color: var(--accent-color);
  font-size: 20px;
  transition: all 0.25s ease;
  opacity: 0;
  transform: scale(0.8);
}

.theme-option.active i {
  color: var(--contrast-color);
  opacity: 1;
  transform: scale(1);
}

/* Position fixe pour le bouton */
.theme-selector.fixed {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 10002;
}

/* Ajuster la position du dropdown pour qu'il soit au-dessus du bouton */
.theme-selector.fixed .theme-dropdown {
  bottom: 75px;
  top: auto;
  z-index: 10003 !important;
}

@media (max-width: 768px) {
  .theme-selector.fixed {
    bottom: 80px;
    right: 20px;
  }
  
  .theme-selector.fixed .theme-dropdown {
    right: 0;
    left: auto;
    min-width: 260px;
    bottom: 100px;
    z-index: 10003 !important;
  }
}
</style>


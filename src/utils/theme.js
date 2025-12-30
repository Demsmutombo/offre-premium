// Gestion des thèmes funéraires
export const themes = {
  white: {
    id: 'white',
    name: 'Blanc',
    colors: {
      '--background-color': '#ffffff',
      '--default-color': '#4e4e4e',
      '--heading-color': '#1a1a1a',
      '--accent-color': '#8b7355',
      '--surface-color': '#ffffff',
      '--contrast-color': '#ffffff',
      '--nav-color': '#1a1a1a',
      '--nav-hover-color': '#8b7355',
      '--nav-mobile-background-color': '#ffffff',
      '--nav-dropdown-background-color': '#ffffff',
      '--nav-dropdown-color': '#212529',
      '--nav-dropdown-hover-color': '#8b7355'
    }
  },
  dark: {
    id: 'dark',
    name: 'Noir Élégant',
    colors: {
      '--background-color': '#0a0a0a',
      '--default-color': '#e0e0e0',
      '--heading-color': '#ffffff',
      '--accent-color': '#d4af37',
      '--surface-color': '#1a1a1a',
      '--contrast-color': '#ffffff',
      '--nav-color': '#ffffff',
      '--nav-hover-color': '#d4af37',
      '--nav-mobile-background-color': '#0a0a0a',
      '--nav-dropdown-background-color': '#1a1a1a',
      '--nav-dropdown-color': '#e0e0e0',
      '--nav-dropdown-hover-color': '#d4af37'
    }
  },
  gray: {
    id: 'gray',
    name: 'Gris Sombre',
    colors: {
      '--background-color': '#2c2c2c',
      '--default-color': '#d0d0d0',
      '--heading-color': '#ffffff',
      '--accent-color': '#8b7355',
      '--surface-color': '#3a3a3a',
      '--contrast-color': '#ffffff',
      '--nav-color': '#ffffff',
      '--nav-hover-color': '#8b7355',
      '--nav-mobile-background-color': '#2c2c2c',
      '--nav-dropdown-background-color': '#3a3a3a',
      '--nav-dropdown-color': '#d0d0d0',
      '--nav-dropdown-hover-color': '#8b7355'
    }
  },
  blue: {
    id: 'blue',
    name: 'Bleu Nuit',
    colors: {
      '--background-color': '#1a2332',
      '--default-color': '#d0d4d8',
      '--heading-color': '#ffffff',
      '--accent-color': '#5a7ba3',
      '--surface-color': '#253447',
      '--contrast-color': '#ffffff',
      '--nav-color': '#ffffff',
      '--nav-hover-color': '#5a7ba3',
      '--nav-mobile-background-color': '#1a2332',
      '--nav-dropdown-background-color': '#253447',
      '--nav-dropdown-color': '#d0d4d8',
      '--nav-dropdown-hover-color': '#5a7ba3'
    }
  },
  brown: {
    id: 'brown',
    name: 'Marron Bronze',
    colors: {
      '--background-color': '#3d2f1f',
      '--default-color': '#e8dcc6',
      '--heading-color': '#ffffff',
      '--accent-color': '#b8860b',
      '--surface-color': '#4a3a28',
      '--contrast-color': '#ffffff',
      '--nav-color': '#ffffff',
      '--nav-hover-color': '#b8860b',
      '--nav-mobile-background-color': '#3d2f1f',
      '--nav-dropdown-background-color': '#4a3a28',
      '--nav-dropdown-color': '#e8dcc6',
      '--nav-dropdown-hover-color': '#b8860b'
    }
  }
}

export function applyTheme(themeId) {
  const theme = themes[themeId] || themes.white
  const root = document.documentElement
  
  Object.keys(theme.colors).forEach(key => {
    root.style.setProperty(key, theme.colors[key])
  })
  
  // Appliquer une classe au body pour identifier le thème
  document.body.className = document.body.className.replace(/theme-\w+/g, '')
  document.body.classList.add(`theme-${theme.id}`)
}

export function loadTheme() {
  // Ne charger le thème que s'il a été sauvegardé (utilisateur a déjà choisi)
  // Sinon, retourner 'white' sans l'appliquer (déjà appliqué par défaut dans le CSS)
  const savedTheme = localStorage.getItem('memorial-theme')
  if (savedTheme) {
    applyTheme(savedTheme)
    return savedTheme
  }
  // Par défaut, retourner 'white' sans l'appliquer
  return 'white'
}

export function saveTheme(themeId) {
  localStorage.setItem('memorial-theme', themeId)
}


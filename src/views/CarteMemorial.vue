<template>
  <div class="carte-memorial-page">
    <Header />
    
    <main class="main">
      <section class="carte-section section">
        <div class="container">
          <div class="carte-container" id="carte-memorial" ref="carteRef">
            <!-- Décorations florales élégantes -->
            <div class="floral-decoration top-left">
              <svg viewBox="0 0 120 120" class="floral-svg">
                <!-- Rose -->
                <path d="M60,20 Q45,25 40,40 Q45,55 60,60 Q75,55 80,40 Q75,25 60,20" fill="none" stroke="#D4AF37" stroke-width="1.2" stroke-linecap="round"/>
                <circle cx="50" cy="35" r="5" fill="none" stroke="#D4AF37" stroke-width="1.2"/>
                <circle cx="70" cy="35" r="5" fill="none" stroke="#D4AF37" stroke-width="1.2"/>
                <path d="M30,50 Q40,45 50,50" fill="none" stroke="#D4AF37" stroke-width="1" stroke-linecap="round"/>
                <path d="M25,65 Q35,60 45,65" fill="none" stroke="#D4AF37" stroke-width="1" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="floral-decoration top-right">
              <svg viewBox="0 0 100 100" class="floral-svg">
                <!-- Grande feuille -->
                <path d="M20,20 Q30,10 50,20 Q70,30 75,50 Q70,70 50,75 Q30,70 20,50 Q15,35 20,20" fill="none" stroke="#D4AF37" stroke-width="1.2" stroke-linecap="round"/>
                <path d="M50,20 L50,75" fill="none" stroke="#D4AF37" stroke-width="0.8"/>
                <!-- Petite fleur -->
                <circle cx="80" cy="35" r="6" fill="none" stroke="#D4AF37" stroke-width="1.2"/>
                <path d="M80,29 L80,41 M74,35 L86,35" fill="none" stroke="#D4AF37" stroke-width="1"/>
              </svg>
            </div>
            <div class="floral-decoration mid-left">
              <svg viewBox="0 0 100 120" class="floral-svg">
                <!-- Lys élégant -->
                <path d="M50,10 Q35,20 30,40 Q35,60 50,70 Q65,60 70,40 Q65,20 50,10" fill="none" stroke="#D4AF37" stroke-width="1.2" stroke-linecap="round"/>
                <path d="M50,30 Q42,38 45,50 Q50,62 58,50 Q55,38 50,30" fill="none" stroke="#D4AF37" stroke-width="1.2"/>
                <path d="M50,70 L50,110" fill="none" stroke="#D4AF37" stroke-width="1" stroke-linecap="round"/>
                <path d="M45,85 Q40,90 42,100" fill="none" stroke="#D4AF37" stroke-width="0.8" stroke-linecap="round"/>
                <path d="M55,85 Q60,90 58,100" fill="none" stroke="#D4AF37" stroke-width="0.8" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="floral-decoration mid-right">
              <svg viewBox="0 0 100 100" class="floral-svg">
                <!-- Cluster de fleurs -->
                <circle cx="50" cy="25" r="10" fill="none" stroke="#D4AF37" stroke-width="1.2"/>
                <path d="M50,35 Q42,42 45,55 Q50,68 58,55 Q55,42 50,35" fill="none" stroke="#D4AF37" stroke-width="1.2"/>
                <circle cx="40" cy="45" r="6" fill="none" stroke="#D4AF37" stroke-width="1"/>
                <circle cx="60" cy="50" r="6" fill="none" stroke="#D4AF37" stroke-width="1"/>
                <path d="M35,60 Q38,65 40,70" fill="none" stroke="#D4AF37" stroke-width="0.8" stroke-linecap="round"/>
                <path d="M65,55 Q68,60 70,65" fill="none" stroke="#D4AF37" stroke-width="0.8" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="floral-decoration bottom-left">
              <svg viewBox="0 0 100 80" class="floral-svg">
                <!-- Grande feuille décorative -->
                <path d="M15,60 Q25,40 45,50 Q65,60 75,70 Q65,80 45,75 Q25,80 15,60" fill="none" stroke="#D4AF37" stroke-width="1.2" stroke-linecap="round"/>
                <path d="M45,50 L45,75" fill="none" stroke="#D4AF37" stroke-width="0.8"/>
                <path d="M20,45 Q30,50 35,55" fill="none" stroke="#D4AF37" stroke-width="0.8" stroke-linecap="round"/>
                <!-- Petite fleur -->
                <circle cx="30" cy="35" r="5" fill="none" stroke="#D4AF37" stroke-width="1"/>
              </svg>
            </div>
            <div class="floral-decoration bottom-right">
              <svg viewBox="0 0 80 140" class="floral-svg">
                <!-- Vigne verticale élégante -->
                <path d="M40,15 Q35,25 38,40 Q42,55 40,70 Q38,85 40,100 Q42,115 40,130" fill="none" stroke="#D4AF37" stroke-width="1" stroke-linecap="round"/>
                <circle cx="40" cy="25" r="5" fill="none" stroke="#D4AF37" stroke-width="1.2"/>
                <circle cx="35" cy="50" r="4" fill="none" stroke="#D4AF37" stroke-width="1"/>
                <circle cx="45" cy="70" r="4" fill="none" stroke="#D4AF37" stroke-width="1"/>
                <circle cx="38" cy="90" r="4" fill="none" stroke="#D4AF37" stroke-width="1"/>
                <path d="M30,60 Q25,65 28,75" fill="none" stroke="#D4AF37" stroke-width="0.8" stroke-linecap="round"/>
                <path d="M50,80 Q55,85 52,95" fill="none" stroke="#D4AF37" stroke-width="0.8" stroke-linecap="round"/>
              </svg>
            </div>
            
            <!-- Contenu de la carte -->
            <div class="carte-content">
              <!-- Titre -->
              <h1 class="carte-title">En Mémoire De</h1>
              
              <!-- Image circulaire -->
              <div class="carte-image-container">
                <div class="carte-image-frame">
                  <img 
                    src="/assets/img/FB_IMG_1726419737492.jpg" 
                    alt="Henock Ngandu Kabadi" 
                    class="carte-image"
                  />
                </div>
              </div>
              
              <!-- Nom -->
              <h2 class="carte-name">Henock Ngandu Kabadi</h2>
              
              <!-- Dates -->
              <p class="carte-dates">15 Mai 1992 - 2 Septembre 2024</p>
              
              <!-- Message -->
              <p class="carte-message">
                Que ton âme trouve la paix éternelle et le réconfort. Repose en paix, cher Henock. Tu nous manqueras profondément.
              </p>
              
              <!-- Séparateur -->
              <div class="carte-separator"></div>
              
              <!-- Informations sur les obsèques -->
              <div class="carte-service-info">
                <p class="service-date">9 Septembre 2024</p>
                <p class="service-location">Nécropole de l'Eternité</p>
              </div>
            </div>
          </div>
          
          <!-- Bouton de téléchargement -->
          <div class="download-section text-center mt-5">
            <button @click="downloadCarte" class="btn-download">
              <i class="bi bi-download me-2"></i>
              Télécharger la carte
            </button>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import html2canvas from 'html2canvas'

export default {
  name: 'CarteMemorial',
  components: {
    Header,
    Footer
  },
  mounted() {
    this.initScripts()
  },
  methods: {
    async downloadCarte() {
      try {
        const carteElement = this.$refs.carteRef
        
        // Afficher un message de chargement
        const button = document.querySelector('.btn-download')
        const originalText = button.innerHTML
        button.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Génération en cours...'
        button.disabled = true
        
        // Attendre que toutes les images soient chargées
        await this.waitForImages(carteElement)
        
        // Générer l'image avec html2canvas en haute qualité
        const canvas = await html2canvas(carteElement, {
          backgroundColor: '#000000',
          scale: 3,
          logging: false,
          useCORS: true,
          allowTaint: true,
          removeContainer: false,
          imageTimeout: 20000,
          cacheBust: true,
          foreignObjectRendering: false,
          onclone: (clonedDoc, element) => {
            // S'assurer que tous les styles sont appliqués dans le clone
            const clonedElement = clonedDoc.querySelector('#carte-memorial')
            if (clonedElement) {
              // Forcer l'affichage de tous les éléments
              clonedElement.style.display = 'block'
              clonedElement.style.visibility = 'visible'
              clonedElement.style.opacity = '1'
              
              // S'assurer que les images sont visibles
              const images = clonedElement.querySelectorAll('img')
              images.forEach(img => {
                img.style.display = 'block'
                img.style.visibility = 'visible'
                img.style.opacity = '1'
                if (!img.complete) {
                  img.style.width = img.offsetWidth + 'px'
                  img.style.height = img.offsetHeight + 'px'
                }
              })
              
              // S'assurer que les SVG sont visibles
              const svgs = clonedElement.querySelectorAll('svg')
              svgs.forEach(svg => {
                svg.style.display = 'block'
                svg.style.visibility = 'visible'
                svg.style.opacity = '1'
              })
              
              // S'assurer que le texte est visible
              const textElements = clonedElement.querySelectorAll('h1, h2, p, span')
              textElements.forEach(el => {
                el.style.color = window.getComputedStyle(el).color
                el.style.visibility = 'visible'
                el.style.opacity = '1'
              })
            }
          }
        })
        
        // Convertir en blob en haute qualité et télécharger
        canvas.toBlob((blob) => {
          if (!blob) {
            throw new Error('Erreur lors de la génération de l\'image')
          }
          
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = 'carte-memorial-henock-ngandu-kabadi.png'
          link.style.display = 'none'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URL.revokeObjectURL(url)
          
          // Restaurer le bouton
          button.innerHTML = originalText
          button.disabled = false
        }, 'image/png', 1.0)
      } catch (error) {
        console.error('Erreur lors du téléchargement:', error)
        alert('Une erreur est survenue lors du téléchargement. Veuillez réessayer.')
        const button = document.querySelector('.btn-download')
        button.innerHTML = '<i class="bi bi-download me-2"></i>Télécharger la carte'
        button.disabled = false
      }
    },
    waitForImages(element) {
      return new Promise((resolve) => {
        const images = element.querySelectorAll('img')
        let loadedCount = 0
        const totalImages = images.length
        
        if (totalImages === 0) {
          resolve()
          return
        }
        
        const checkComplete = () => {
          loadedCount++
          if (loadedCount === totalImages) {
            // Attendre un peu plus pour s'assurer que tout est rendu
            setTimeout(resolve, 100)
          }
        }
        
        images.forEach((img) => {
          if (img.complete) {
            checkComplete()
          } else {
            img.onload = checkComplete
            img.onerror = checkComplete
            // Forcer le rechargement si nécessaire
            if (img.src && !img.complete) {
              const newImg = new Image()
              newImg.crossOrigin = 'anonymous'
              newImg.src = img.src
              newImg.onload = () => {
                img.src = newImg.src
                checkComplete()
              }
              newImg.onerror = checkComplete
            }
          }
        })
        
        // Timeout de sécurité
        setTimeout(resolve, 3000)
      })
    },
    async initScripts() {
      const scripts = [
        '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
        '/assets/vendor/aos/aos.js'
      ]

      try {
        await Promise.all(scripts.map(script => this.loadScript(script)))
        setTimeout(() => {
          this.initAOS()
        }, 100)
      } catch (error) {
        console.error('Error loading scripts:', error)
      }
    },
    loadScript(src) {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve()
          return
        }
        const script = document.createElement('script')
        script.src = src
        script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
      })
    },
    initAOS() {
      if (window.AOS) {
        window.AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        })
      }
    }
  }
}
</script>

<style scoped>
.carte-memorial-page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.carte-section {
  padding: 60px 20px 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 200px);
}

.carte-section .container {
  padding: 0;
  max-width: 100%;
}

@media (max-width: 768px) {
  .carte-section {
    padding: 40px 15px 60px;
    min-height: auto;
  }
  
  .carte-section .container {
    padding: 0 10px;
  }
}

@media (max-width: 480px) {
  .carte-section {
    padding: 30px 10px 50px;
  }
  
  .carte-section .container {
    padding: 0 5px;
  }
}

.carte-container {
  position: relative;
  background: #000000;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 70px 45px 60px 45px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.8), inset 0 0 100px rgba(212, 175, 55, 0.05);
  border-radius: 12px;
  overflow: hidden;
  min-height: 720px;
  border: 2px solid #D4AF37;
}

/* Décorations florales */
.floral-decoration {
  position: absolute;
  opacity: 0.5;
  z-index: 1;
  pointer-events: none;
  filter: drop-shadow(0 0 3px rgba(212, 175, 55, 0.6));
}

.floral-svg {
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

/* Top Left - Cluster de fleurs */
.floral-decoration.top-left {
  top: 15px;
  left: 15px;
  width: 90px;
  height: 90px;
}

/* Top Right - Grande feuille et fleur */
.floral-decoration.top-right {
  top: 20px;
  right: 20px;
  width: 70px;
  height: 80px;
}

/* Mid Left - Lys */
.floral-decoration.mid-left {
  top: 180px;
  left: 10px;
  width: 80px;
  height: 100px;
}

/* Mid Right - Cluster */
.floral-decoration.mid-right {
  top: 200px;
  right: 15px;
  width: 70px;
  height: 85px;
}

/* Bottom Left - Grande feuille */
.floral-decoration.bottom-left {
  bottom: 25px;
  left: 20px;
  width: 75px;
  height: 65px;
}

/* Bottom Right - Vigne verticale */
.floral-decoration.bottom-right {
  bottom: 15px;
  right: 15px;
  width: 55px;
  height: 130px;
}

.carte-content {
  text-align: center;
  position: relative;
  z-index: 2;
}

/* Titre */
.carte-title {
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #D4AF37;
  margin: 0 0 35px 0;
  letter-spacing: 3px;
  text-transform: uppercase;
  position: relative;
}

.carte-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 1px;
  background: #D4AF37;
}

/* Image circulaire */
.carte-image-container {
  margin: 0 auto 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carte-image-frame {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #D4AF37;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), 
              0 0 0 8px rgba(212, 175, 55, 0.2),
              inset 0 0 30px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: all 0.3s ease;
}

.carte-image-frame::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  padding: 2px;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.5), rgba(212, 175, 55, 0.2));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
}

.carte-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Nom */
.carte-name {
  font-family: 'Dancing Script', 'Brush Script MT', cursive;
  font-size: 48px;
  font-weight: 500;
  color: #D4AF37;
  margin: 0 0 25px 0;
  line-height: 1.2;
  text-shadow: 0 3px 8px rgba(0, 0, 0, 0.6),
               0 0 20px rgba(212, 175, 55, 0.3);
  letter-spacing: 1px;
}

/* Dates */
.carte-dates {
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 15px;
  color: #D4AF37;
  margin: 0 0 30px 0;
  font-weight: 300;
  letter-spacing: 1px;
  position: relative;
  padding-bottom: 20px;
}

.carte-dates::after {
  content: '•';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: #D4AF37;
  font-size: 12px;
  opacity: 0.6;
}

/* Message */
.carte-message {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 14px;
  color: #D4AF37;
  margin: 0 0 30px 0;
  line-height: 1.8;
  font-weight: 300;
  font-style: italic;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
}

/* Séparateur */
.carte-separator {
  width: 80px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #D4AF37, transparent);
  margin: 30px auto;
  position: relative;
}

.carte-separator::before,
.carte-separator::after {
  content: '❦';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #D4AF37;
  font-size: 12px;
  opacity: 0.7;
}

.carte-separator::before {
  left: -20px;
}

.carte-separator::after {
  right: -20px;
}

/* Informations service */
.carte-service-info {
  margin-top: 25px;
}

.service-date {
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 15px;
  color: #D4AF37;
  margin: 0 0 10px 0;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.service-location {
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 11px;
  color: #D4AF37;
  margin: 0;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  opacity: 0.8;
}

/* Section téléchargement */
.download-section {
  margin-top: 40px;
}

.btn-download {
  background-color: #D4AF37;
  color: #000000;
  border: 2px solid #D4AF37;
  padding: 14px 32px;
  font-size: 17px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
  font-family: 'Roboto', 'Arial', sans-serif;
}

.btn-download:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.5);
  background-color: #FFD700;
  border-color: #FFD700;
}

.btn-download:active {
  transform: translateY(0);
}

.btn-download:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

/* Responsive */
@media (max-width: 768px) {
  .carte-container {
    padding: 50px 25px 40px 25px;
    max-width: 100%;
    min-height: auto;
    border-radius: 8px;
    width: 100%;
  }
  
  /* Réduire les décorations florales sur mobile */
  .floral-decoration {
    opacity: 0.3;
  }
  
  .floral-decoration.top-left {
    width: 60px;
    height: 60px;
    top: 10px;
    left: 10px;
  }
  
  .floral-decoration.top-right {
    width: 50px;
    height: 60px;
    top: 15px;
    right: 15px;
  }
  
  .floral-decoration.mid-left {
    width: 55px;
    height: 70px;
    top: 150px;
    left: 8px;
  }
  
  .floral-decoration.mid-right {
    width: 50px;
    height: 65px;
    top: 160px;
    right: 12px;
  }
  
  .floral-decoration.bottom-left {
    width: 55px;
    height: 50px;
    bottom: 20px;
    left: 15px;
  }
  
  .floral-decoration.bottom-right {
    width: 40px;
    height: 100px;
    bottom: 12px;
    right: 12px;
  }
  
  .carte-title {
    font-size: 12px;
    margin-bottom: 25px;
    letter-spacing: 2px;
  }
  
  .carte-title::after {
    width: 30px;
    bottom: -10px;
  }
  
  .carte-image-frame {
    width: 180px;
    height: 180px;
    border-width: 3px;
  }
  
  .carte-name {
    font-size: 36px;
    margin-bottom: 18px;
  }
  
  .carte-dates {
    font-size: 13px;
    margin-bottom: 22px;
    padding-bottom: 15px;
  }
  
  .carte-message {
    font-size: 12px;
    line-height: 1.7;
    max-width: 100%;
    margin-bottom: 22px;
    padding: 0 10px;
  }
  
  .carte-separator {
    width: 60px;
    margin: 22px auto;
  }
  
  .carte-separator::before,
  .carte-separator::after {
    font-size: 10px;
  }
  
  .carte-separator::before {
    left: -15px;
  }
  
  .carte-separator::after {
    right: -15px;
  }
  
  .service-date {
    font-size: 13px;
    margin-bottom: 8px;
  }
  
  .service-location {
    font-size: 10px;
    letter-spacing: 1px;
  }
  
  .btn-download {
    padding: 12px 28px;
    font-size: 15px;
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .carte-section {
    padding: 30px 10px 50px;
  }
  
  .carte-container {
    padding: 40px 20px 35px 20px;
    border-radius: 6px;
    width: 100%;
  }
  
  /* Masquer certaines décorations sur très petit écran */
  .floral-decoration.mid-left,
  .floral-decoration.mid-right {
    display: none;
  }
  
  .floral-decoration.top-left {
    width: 45px;
    height: 45px;
  }
  
  .floral-decoration.top-right {
    width: 40px;
    height: 50px;
  }
  
  .floral-decoration.bottom-left {
    width: 45px;
    height: 40px;
  }
  
  .floral-decoration.bottom-right {
    width: 35px;
    height: 80px;
  }
  
  .carte-title {
    font-size: 11px;
    margin-bottom: 20px;
    letter-spacing: 1.5px;
  }
  
  .carte-image-frame {
    width: 150px;
    height: 150px;
    border-width: 2.5px;
  }
  
  .carte-name {
    font-size: 30px;
    margin-bottom: 15px;
  }
  
  .carte-dates {
    font-size: 12px;
    margin-bottom: 18px;
    padding-bottom: 12px;
  }
  
  .carte-message {
    font-size: 11px;
    line-height: 1.6;
    margin-bottom: 18px;
    padding: 0 5px;
  }
  
  .carte-separator {
    width: 50px;
    margin: 18px auto;
  }
  
  .service-date {
    font-size: 12px;
  }
  
  .service-location {
    font-size: 9px;
  }
  
  .btn-download {
    padding: 11px 24px;
    font-size: 14px;
  }
}

@media (max-width: 360px) {
  .carte-container {
    padding: 35px 15px 30px 15px;
  }
  
  .carte-image-frame {
    width: 130px;
    height: 130px;
  }
  
  .carte-name {
    font-size: 26px;
  }
  
  .carte-title {
    font-size: 10px;
  }
  
  .carte-message {
    font-size: 10px;
  }
}
</style>


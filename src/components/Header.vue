<template>
  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <router-link to="/" class="logo d-flex align-items-center">
        <h1 class="sitename">Henock Ngandu</h1>
      </router-link>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><router-link to="/" :class="{ active: $route.path === '/' }" @click="handleNavClick">Accueil<br></router-link></li>
          <li v-if="$route.path === '/'"><a href="#services" @click="scrollToSection">Services</a></li>
          <li v-if="$route.path === '/'"><a href="#portfolio" @click="scrollToSection">Galerry</a></li>
          <li><router-link to="/carte-memorial" :class="{ active: $route.path === '/carte-memorial' }" @click="handleNavClick">Carte Mémorial</router-link></li>
          <li v-if="$route.path === '/'"><a href="#contact" @click="scrollToSection">Contact</a></li>
          <li v-if="$route.path === '/temoignage'"><router-link to="/">Galerry</router-link></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list" @click="toggleMobileNav"></i>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggleMobileNav() {
      document.querySelector('body').classList.toggle('mobile-nav-active')
      const toggleBtn = document.querySelector('.mobile-nav-toggle')
      toggleBtn.classList.toggle('bi-list')
      toggleBtn.classList.toggle('bi-x')
    },
    scrollToSection(event) {
      event.preventDefault()
      const href = event.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        const section = document.querySelector(href)
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' })
        }
      }
      // Close mobile nav if open
      if (document.querySelector('.mobile-nav-active')) {
        this.toggleMobileNav()
      }
    },
    handleNavClick() {
      // Close mobile nav if open
      if (document.querySelector('.mobile-nav-active')) {
        this.toggleMobileNav()
      }
    }
  },
  mounted() {
    // Close mobile nav on link click
    const navLinks = document.querySelectorAll('#navmenu a')
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          this.toggleMobileNav()
        }
      })
    })
  }
}
</script>


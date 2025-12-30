<template>
  <footer id="footer" class="footer accent-background">
    <div class="container">
      <div class="copyright text-center">
        <img src="/assets/img/log.png" alt="IM DIGITAL LABS" style="max-width: 80px; height: auto; margin-bottom: 15px;">
        <p style="color: var(--contrast-color);">© <span>Copyright</span> <strong class="px-1 sitename"><span style="color: var(--accent-color);">IM DIGITAL LABS</span></strong> <span>All Rights Reserved</span></p>
      </div>
      <div class="credits text-center">
        <p style="color: var(--contrast-color);">Conçu par <strong style="color: var(--accent-color);">IM DIGITAL LABS</strong></p>
        <p style="margin-top: 10px; color: var(--contrast-color);">
          <a href="https://wa.me/243991683269" target="_blank" class="footer-link whatsapp-link" style="color: #25D366; text-decoration: none; margin-right: 15px;">
            <i class="bi bi-whatsapp me-1"></i>WhatsApp: +243 991 683 269
          </a>
          <span style="margin: 0 10px; color: var(--contrast-color);">|</span>
          <a href="mailto:imdigitallabs@gmail.com" class="footer-link email-link" style="color: var(--accent-color); text-decoration: none;">
            <i class="bi bi-envelope me-1"></i>imdigitallabs@gmail.com
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer-link {
  transition: all 0.3s ease;
}

.footer-link:hover {
  opacity: 0.8;
  text-decoration: underline !important;
}

.whatsapp-link:hover {
  color: #20ba5a !important;
}

.email-link:hover {
  color: color-mix(in srgb, var(--accent-color), white 20%) !important;
}
</style>


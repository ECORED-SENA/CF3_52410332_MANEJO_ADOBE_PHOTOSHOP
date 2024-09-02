<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5.pb-5
          .row.align-items-start
            .col-lg-9.mb-4.mb-lg-0
              .row.align-items-center.mb-5(data-aos="fade-right")
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/intro/img1.svg', alt='').fig-w1.m-auto
                .col
                  p.mb-0 En este componente formativo se darán a conocer las diversas herramientas, funcionamiento y características que le servirán a la hora de aplicarlo en los diversos proyectos que va a desarrollar en Adobe Photoshop, sacándole el máximo provecho, como son las capas y las máscaras.
              .row(data-aos="fade-right")
                .col-xl-auto.pe-lg-0.px-0
                  figure
                    img(src='@/assets/curso/intro/img2.png', alt='').m-auto
                .col.bg-c2
                  .p-4
                    p Si bien es cierto que nada supera una buena toma fotográfica, Photoshop le facilita la edición de imágenes o la creación de las mismas, por lo tanto, estudiaremos las capas con su respectivo panel y las máscaras.
                    p.mb-0 Con el uso de dichas herramientas, puede resaltar las imágenes o darles efectos de fantasía que le brinda Photoshop, con la variedad de opciones para una edición no destructiva.
            .col-lg-3
              figure(data-aos="fade-left")
                img(src='@/assets/curso/intro/img2.svg', alt='').fig-w3.m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Máscaras
    .row(data-aos="fade-up")
      .col-lg.mb-4.mb-lg-0.pe-lg-0
        .p-4.bg-c8.h-100
          .row
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img1.svg', alt='').fig-w6.m-auto
            .col
              p Con las máscaras se ocultan sectores de la imagen sin modificarla, permitiendo ver las áreas que se encuentran debajo de la imagen a la que se le aplica la máscara; al no afectar la imagen original se considera una técnica no destructiva.
              p.mb-0 Se pueden crear tres tipos de recorte: la máscara de capa, la máscara vectorial y el trazado de recorte.
      .col-lg-auto.ps-lg-0
        figure
          img(src='@/assets/curso/tema2/img1.png', alt='').fig-w2.m-auto
    Separador
    #t_2_1
    .titulo-segundo.color-primario
      h2 2.1 Las máscaras de capa
    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        p Cuando sea necesario aislar un objeto de su fondo, se puede utilizar la herramienta borrador de fondos, pero con el agravante de que se destruye el fondo de la imagen; para evitar esta situación, lo mejor es aplicar una máscara de capa.
        .row
          .col-md-auto.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/img2.svg', alt='').fig-w1.m-auto
          .col
            p.mb-0 Al crear la primera máscara de capa, aparece listada al final de la paleta Canales con el nombre y un número compuesto por la capa a la que pertenece.
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema2/img2.png', alt='').fig-w4.m-auto
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img3.png', alt='').fig-w4.m-auto
    p.mb-5(data-aos="fade-right") Al crear la primera máscara de capa, aparece listada al final de la paleta Canales con el nombre y un número compuesto por la capa a la que pertenece.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .row
          .col-12
            .p-4.p-lg-5.bg-c17
              figure
                img(src='@/assets/curso/tema2/img4.png', alt='').fig-w4.m-auto
    p(data-aos="fade-right") Capa 0 Máscara, es provisional y solamente se activa al seleccionar la capa.
    p.mb-5(data-aos="fade-right") Cuando el ícono de visibilidad se encuentra desactivado, al activarlo aparecerá por defecto en color rojo transparente el espacio correspondiente a la zona que oculta la máscara, este color y la opacidad pueden ser cambiados haciendo doble clic sobre la máscara y realizando los cambios en el cuadro de diálogo que aparece.
    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        .row
          .col-12
            .p-4.p-lg-5.bg-c6
              figure
                img(src='@/assets/curso/tema2/img5.png', alt='').fig-w5.m-auto
    Separador
    #t_2_2
    .titulo-segundo.color-primario
      h2 2.2 Máscara vectorial
    p.mb-5(data-aos="fade-right") Con las herramientas de creación de trazados, se pueden dibujar formas precisas y luego convertirlas en trazados de recorte, para esto se debe activar en la barra de opciones de las herramientas de trazado, la opción #[b Trazado].
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .row
          .col-12
            .p-4.p-lg-5.bg-c6
              figure
                img(src='@/assets/curso/tema2/img6.png', alt='').fig-w5.m-auto
    .row.align-items-center.mb-5
      .col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img7.png', alt='').fig-w2.m-auto
      .col-lg-10(data-aos="fade-left")
        .row.align-items-center.mb-3
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img4.svg', alt='').m-auto
          .col
            p.mb-0 Para hacer una máscara vectorial se selecciona el trazado y la capa con la que se desea crear la máscara, después se hace clic en el panel de capas sobre el siguiente ícono.
        p.mb-0 Al ingresar a la pestaña Trazados, en el panel lateral izquierdo, manteniendo activa la capa, aparece el trazado correspondiente a la máscara, en este caso con el nombre Máscara vectorial Capa 0.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .row
          .col-12
            .p-4.p-lg-5.bg-c18
              figure
                img(src='@/assets/curso/tema2/img8.png', alt='').fig-w3.m-auto
    p.mb-5(data-aos="fade-right") Al seleccionar el trazado de la máscara se puede editar su forma, con las herramientas de selección de forma o de crear trazados, a su vez, realizando cambios a la Máscara vectorial, sin afectar a la imagen original, ni al trazado de origen de la máscara.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .row
          .col-12
            .p-4.p-lg-5.bg-c6
              figure
                img(src='@/assets/curso/tema2/img9.png', alt='').fig-w5.m-auto
    p.mb-5(data-aos="fade-right") Si se deselecciona la capa asociada a la máscara, inmediatamente desaparece el trazado de la máscara.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .row
          .col-12
            .p-4.p-lg-5.bg-c18
              figure
                img(src='@/assets/curso/tema2/img10.png', alt='').fig-w3.m-auto
    p(data-aos="fade-right") Al seleccionar y deseleccionar la capa, se conmuta con la visualización del trazado de la máscara, así puede modificar su trazado en cualquier momento, editando el enmascaramiento de la capa sobre la que se está trabajando.
    Separador
    .row.bg-c19
      .col-12
        .p-5
          #t_2_3
          .titulo-segundo.color-primario
            h2 2.3 Comportamiento de las máscaras
          .row.alin-items-center.mb-5
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p Las máscaras se enlazan a su correspondiente capa, sin diferenciar si son de capa o vectoriales, este comportamiento se activa por defecto en Photoshop, esto significa que si se mueve la capa hacia arriba o abajo en la pila, lo hace simultáneamente la máscara asociada a la capa.
              p.mb-0 En caso de realizar transformaciones de manera aislada, a la capa o a la máscara, se debe desenlazar la máscara de su correspondiente capa; para esto, en el panel de capas, se hace clic sobre el ícono de la cadena.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img12.png', alt='').fig-w3.m-auto
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-left")
              .row
                .col-12
                  .p-4.p-lg-5.bg-c17
                    figure
                      img(src='@/assets/curso/tema2/img13.png', alt='').fig-w4.m-auto
          p.mb-5(data-aos="fade-right") Después de realizar las transformaciones del caso, para enlazar nuevamente la capa con la máscara, se hace clic en el espacio que aparece entre los dos íconos, esto activa de nuevo el enlace.
          .row.justify-content-center
            .col-lg-10(data-aos="fade-left")
              .row
                .col-12
                  .p-4.p-lg-5.bg-c17
                    figure
                      img(src='@/assets/curso/tema2/img14.png', alt='').fig-w4.m-auto
    Separador
    #t_2_4
    .titulo-segundo.color-primario
      h2 2.4 Visualización de máscaras
    p.mb-5(data-aos="fade-right") Para revisar si una máscara está correcta, se visualiza haciendo clic + Alt sobre el ícono que le corresponde en el panel de capas; esto la mostrará en color negro, en caso de ser una capa o el trazado, si es vectorial.
    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        .row
          .col-12
            .p-4.p-lg-5.bg-c17
              figure
                img(src='@/assets/curso/tema2/img15.png', alt='').fig-w4.m-auto
    Separador
    #t_2_5
    .titulo-segundo.color-primario
      h2 2.5 Borrado de máscaras
    .row.mb-5(data-aos="fade-down")
      .col-auto.pe-0
        figure.mt-1
          img(src='@/assets/curso/tema2/img16.png', style="width: 25px" alt='').m-auto
      .col
        p Mediante el panel de capas es muy fácil eliminar las máscaras, ya sean de capa o vectoriales, para suprimirla solo basta con hacer clic sostenido sobre la máscara y arrastrarla al ícono de #[b Eliminar capa] o seleccionar la máscara y hacer clic sobre el mismo.
        p.mb-0 En caso de eliminar una máscara vectorial, aparecerá el siguiente cuadro de diálogo:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 9.] Cuadro de diálogo eliminar máscara vectorial
        .row
          .col-12
            .p-4.p-lg-5.bg-c17
              figure
                img(src='@/assets/curso/tema2/img17.png', alt='').fig-w4.m-auto
    p.mb-5(data-aos="fade-right") Si da clic en #[b Aplicar], se fijará de forma definitiva la máscara a la capa, pero al seleccionar la opción Eliminar, aparecerá el siguiente cuadro de diálogo:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 10.] Cuadro de diálogo al dar clic en Eliminar
        .row
          .col-12
            .p-4.p-lg-5.bg-c17
              figure
                img(src='@/assets/curso/tema2/img18.png', alt='').fig-w4.m-auto
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img19.png', style="width:450px" alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Al aceptar se eliminará la máscara, en caso de querer aplicarla, se debe rasterizar la máscara vectorial para convertirla en una máscara de capa.
        p.mb-0 Una máscara vectorial se rasteriza haciendo clic derecho sobre la máscara y seleccionando Rasterizar máscara vectorial del cuadro de diálogo que se despliega.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

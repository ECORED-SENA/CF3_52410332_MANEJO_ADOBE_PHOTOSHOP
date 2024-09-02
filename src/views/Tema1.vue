<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Capas
    .row.justify-content-center.mb-5
      .col-lg-10.bg-c3(data-aos="fade-right")
        .row
          .col-auto.px-0.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img1.svg', alt='')
          .col
            .p-4
              p.mb-0 Las capas ubican las imágenes una sobre otra como si se tratara de hojas de papel mantequilla o láminas de acetato superpuestas, las zonas pintadas o que contienen imágenes de la capa superior, cubren las de la capa inferior, permitiéndole visualizar los objetos que se encuentran debajo, en las zonas transparentes o sin imagen; esto es muy valioso al momento de realizar ilustraciones, porque al aplicar trazos con el pincel, la pintura no se mezcla con la capa de abajo, permitiéndole hacer ediciones posteriores o aplicar efectos para mejorar los atributos de la imagen.
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img1.png', alt='')
      .col-lg-5(data-aos="fade-left")
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img3.svg', alt='')
          .col
            p.mb-0 #[b Photoshop] tiene cinco tipos de capas sin contar la de fondo, puesto que esta permanece siempre en la base en el panel de capas y no es transparente, ni se comporta como una.
        p.mb-4 En los archivos nuevos de #[b Photoshop] se activa al seleccionar un color de fondo; al abrir una imagen que no admite capas, esta se abre como fondo.
        .row
          .col-12
            .p-3.bg-c2
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/img4.svg', alt='')
                .col
                  p.mb-0 Una capa de fondo puede convertirse en capa de imagen desde la barra del menú capa.
    Separador
    #t_1_1
    .titulo-segundo.color-primario
      h2 1.1 Capa de imagen
    .row
      .col-lg-7(data-aos="fade-right")
        p Es conocida como capa de píxeles y contiene las imágenes que se encuentran en el lienzo sobre el que se está trabajando o los trazos de pintura cuando se pinta con Photoshop, pero si no existe la capa de fondo, esta puede reemplazarla.
        figure
          img(src='@/assets/curso/tema1/img6.svg', alt='').fig-w2
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img2.png', alt='').m-auto
    Separador
    #t_1_2
    .titulo-segundo.color-primario
      h2 1.2 Capa de texto
    .row.mb-5
      .col-12
        .p-4.bg-c5(data-aos="fade-down")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img7.svg', alt='').fig-w1.m-auto
            .col
              p Al momento de dar clic sobre el lienzo con la herramienta de texto se crea una nueva capa transparente, cuyo nombre se forma con las palabras digitadas, la cual no admite pintura ni recortes.
              p.mb-0 Para convertir una capa de texto en una de imagen, dé clic derecho con la herramienta capa de texto activa y seleccione la opción Rasterizar texto.
    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] Capa de texto
        .row
          .col-12
            .p-4.p-lg-5.bg-c6
              figure
                img(src='@/assets/curso/tema1/img3.png', alt='Imagen que presenta cómo convertir una capa de texto en una imagen.').fig-w5.m-auto
    Separador
    #t_1_3
    .titulo-segundo.color-primario
      h2 1.3 Capa de ajuste
    .row.bg-c7
      .col-12
        .px-5.pb-5
          .row.mb-5
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              p Esta capa le permite hacer cambios significativos a la imagen sin descomponer la original, además le puede aplicar una gran variedad de efectos que mejoran la imagen, tales como: brillo, contraste y niveles; dichos ajustes afectan las capas situadas debajo de la misma.
              .row.mb-3
                .col-12
                  .p-3.bg-c8
                    .row.align-items-center
                      .col-md.mb-4.mb-md-0
                        p.mb-0 La capa de ajuste está compuesta de dos capas, una que introduce el ajuste y la otra es la máscara de capa.
                      .col-md-auto
                        figure
                          img(src='@/assets/curso/tema1/img9.svg', alt='').fig-w1.m-auto
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img10.svg', alt='').fig-w1.m-auto
                .col
                  p.mb-0 Si bien puede operar las capas desde el menú capa, la forma más práctica de hacerlo es desde el panel de capas; para crear una nueva capa de ajustes haga clic sobre el botón Nueva capa de relleno y seleccione el cambio en el panel que se abre, las tres primeras opciones corresponden a la capa de relleno y el resto a la capa de ajuste.
            .col-lg-5(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img4.png', alt='').fig-w4.m-auto
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-down")
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 2.] Capa de ajuste
              .row
                .col-12
                  .p-4.p-lg-5.bg-c6
                    figure
                      img(src='@/assets/curso/tema1/img6.png', alt='Imagen que presenta el menú de la capa de ajuste.').fig-w4.m-auto
          p.mb-5(data-aos="fade-right") Uno de los grandes cambios que ha realizado #[b Photoshop] desde la versión CS4 es el panel de ajustes, que de manera rápida le permite crear las capas de ajuste, seleccionando uno de los íconos que lo componen, estos corresponden a cada una de las opciones del botón #[b Nueva capa de relleno], excluyendo las tres opciones correspondientes a relleno.
          .row.justify-content-center
            .col-lg-10(data-aos="fade-down")
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 3.] Panel de ajustes
              .row
                .col-12
                  .p-4.p-lg-5.bg-c6
                    figure
                      img(src='@/assets/curso/tema1/img7.png', alt='Imagen que presenta el panel de ajustes.').fig-w4.m-auto
    p.mb-5(data-aos="fade-right") Dentro de los ajustes, encontramos:
    TabsA.color-acento-botones.mb-5(data-aos="fade-left")
      .tarjeta.color-acento-botones.p-4(titulo="Brillo / Contraste")
        .row
          .col-lg-8.mb-4.mb-lg-0
            .row.mb-3
              .col-auto
                .px-3.py-2.bg-c9
                  p.mb-0 #[b Brillo / Contraste]
            p.mb-0 Sirve para ajustar la gama tonal de la imagen, con el controlador de brillo desplace de izquierda a derecha para aumentar o disminuir los valores tonales, expandiendo las luces y las sombras respectivamente, mientras que con el controlador de contraste puede variar la gama general de valores tonales de la imagen.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img9.png', alt='').fig-w3.m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Niveles")
        .row
          .col-lg-8.mb-4.mb-lg-0
            .row.mb-3
              .col-auto
                .px-3.py-2.bg-c9
                  p.mb-0 #[b Niveles]
            p Permite utilizar la gama completa de la imagen al definir los valores de las sombras e iluminaciones, para esto dispone de tres parámetros:
            ul.lista-ul
              li.d-flex
                i.fas.fa-pencil-alt
                |
                p.mb-0 #[b Punto blanco para las luces.]
              li.d-flex
                i.fas.fa-pencil-alt
                |
                p.mb-0 #[b Punto negro para las sombras.]
              li.d-flex
                i.fas.fa-pencil-alt
                |
                p.mb-0 #[b Punto gris para los medios tonos.]
            p.mb-0 Recuerde que al trabajar los medios tonos, no se afectan las sombras ni las iluminaciones.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img8.png', alt='').fig-w3.m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Curvas")
        .row
          .col-lg-8.mb-4.mb-lg-0
            .row.mb-3
              .col-auto
                .px-3.py-2.bg-c9
                  p.mb-0 #[b Curvas]
            p.mb-0 Ajusta el rango tonal de la imagen o la gama de color seleccionada, mediante los canales RGB.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img10.png', alt='').fig-w3.m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Equilibrio de color")
        .row
          .col-lg-8.mb-4.mb-lg-0
            .row.mb-3
              .col-auto
                .px-3.py-2.bg-c9
                  p.mb-0 #[b Equilibrio de color]
            p.mb-0 Corrige el color de las imágenes realizando cambios a la mezcla global de los colores.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img11.png', alt='').fig-w3.m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Blanco y negro")
        .row
          .col-lg-8.mb-4.mb-lg-0
            .row.mb-3
              .col-auto
                .px-3.py-2.bg-c9
                  p.mb-0 #[b Blanco y negro]
            p.mb-0 Ajusta los valores de los tonos de color para pasarlos a blanco y negro.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img12.png', alt='').fig-w3.m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Filtro de fotografía")
        .row
          .col-lg-8.mb-4.mb-lg-0
            .row.mb-3
              .col-auto
                .px-3.py-2.bg-c9
                  p.mb-0 #[b Filtro de fotografía]
            p.mb-0 Simula una variedad de filtros utilizados en la fotografía tradicional y sirven para ajustar la temperatura del color de la luz; estos se dividen en filtros cálidos y fríos.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img13.png', alt='').fig-w3.m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Mezclador de canales")
        .row
          .col-lg-8.mb-4.mb-lg-0
            .row.mb-3
              .col-auto
                .px-3.py-2.bg-c9
                  p.mb-0 #[b Mezclador de canales]
            p.mb-0 Pasa las fotografías a blanco y negro, ajustando los canales de color RGB.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img14.png', alt='').fig-w3.m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Mapa de degradado")
        .row
          .col-lg-8.mb-4.mb-lg-0
            .row.mb-3
              .col-auto
                .px-3.py-2.bg-c9
                  p.mb-0 #[b Mapa de degradado]
            p.mb-0 Permite la desaturación selectiva de tonos y la generación de duotonos o blanco y negro.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img15.png', alt='').fig-w3.m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Corrección selectiva")
        .row
          .col-lg-8.mb-4.mb-lg-0
            .row.mb-3
              .col-auto
                .px-3.py-2.bg-c9
                  p.mb-0 #[b Corrección selectiva]
            p.mb-0 Se utiliza para dar un toque #[i vintage] a las imágenes.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img16.png', alt='').fig-w3.m-auto
    p.mb-5(data-aos="fade-right") Existen otros tipos que son menos utilizados como:
    .row
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure.d-none.d-lg-block
          img(src='@/assets/curso/tema1/img17.png', alt='').m-auto
        figure.d-block.d-lg-none
          img(src='@/assets/curso/tema1/img17m.png', alt='').fig-w3.m-auto
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img11.svg', alt='').fig-w3.m-auto
    Separador
    #t_1_4
    .titulo-segundo.color-primario
      h2 1.4 Capa de relleno
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p La capa de relleno aplica un color que puede ser: degradado, de color uniforme o de motivo, este afecta las capas inferiores; además, se compone de dos capas, una que introduce el relleno y otra que es la máscara de capa.
        .row
          .col-md-auto.pe-md-0
            .p-4.bg-c2
              figure
                img(src='@/assets/curso/tema1/img12.svg', alt='').fig-w1.m-auto
          .col.ps-md-0
            .p-4.h-100.align-items-center.bg-c8
              p.mb-0 #[b Para crear una capa de relleno en el panel de capa, se da clic sobre el botón Nueva capa de relleno y después se selecciona el tipo de relleno del menú desplegable.]
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img18.png', alt='').fig-w5.m-auto
    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 4.] Capa de relleno
        .row
          .col-12
            .p-4.p-lg-5.bg-c6
              figure.d-none.d-lg-block
                img(src='@/assets/curso/tema1/img19.png', alt='Imagen que presenta el menú de la capa de relleno.').fig-w4.m-auto
              figure.d-block.d-lg-none
                img(src='@/assets/curso/tema1/img19m.png', alt='Imagen que presenta el menú de la capa de relleno.').fig-w3.m-auto
    Separador
    .row.bg-c10
      .col-12
        .p-5
          .row
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              #t_1_5
              .titulo-segundo.color-primario
                h2 1.5 Capa de forma
              p.mb-0 Al crear una forma vectorial con las herramientas de dibujo, pluma, rectángulo, rectángulo redondeado, elipse, polígono, línea y forma libre, estas se alojan en una capa de forma.
              Separador
              #t_1_6
              .titulo-segundo.color-primario
                h2 1.6 Objeto inteligente
              p El objeto inteligente crea una especie de contenedor del original de la imagen o vector en la capa, de esta manera, conserva las características de la imagen original, en otras palabras, edita el contenedor sin afectar la original; a esto se le conoce como edición no destructiva de la capa.
              .row.mb-3
                .col-12
                  .p-4.bg-c8
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src='@/assets/curso/tema1/img13.svg', alt='').fig-w6.m-auto
                      .col
                        p.mb-0 #[b Photoshop CC le permite enlazar contenidos de imagen desde un archivo externo.]
              p.mb-0 Una de las ventajas más importantes de los objetos inteligentes, es que le permite aplicar filtros que pueden ser modificados en cualquier momento; además, al editar la imagen original de un objeto inteligente, se actualizan todas las apariciones enlazadas al mismo. También sirve para trabajar con archivos vectoriales de Illustrator sin tener que rasterizarlos, es decir, convertirlos en mapas de bits.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img21.png', alt='').fig-w4.m-auto
          Separador
          #t_1_7
          .titulo-segundo.color-primario
            h2 1.7 Grupos de capas
          p(data-aos="fade-right") Por lo general, cuando se trabaja con imágenes, ya sea haciendo retoques o pintando, se utilizan muchas capas para evitar confusiones, es por esto que Photoshop dispone de la característica de crear grupos de capas.
          .row.align-items-center
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img22.png', alt='').fig-w3.m-auto
            .col-lg-9(data-aos="fade-left")
              p Cuando los grupos de capas se agrupan, es importante que en lo posible estas sean similares, es decir, que realicen la misma función, porque esto le permite trabajar de forma organizada.
              p En el panel de capas un grupo se visualiza con el siguiente ícono:
              figure.mb-3
                img(src='@/assets/curso/tema1/img43.png', alt='').fig-w1.m-auto.shadow.rounded
              p.mb-0 Al dar clic sobre el triángulo que está a la izquierda de la carpeta, esta se abre y le permite acceder a los elementos que componen el grupo de capas.
    Separador
    #t_1_8
    .titulo-segundo.color-primario
      h2 1.8 Panel de capas
    p.mb-5(data-aos="fade-right") Este panel contiene las operaciones que se realizan con las capas, de esta manera facilita el trabajo del usuario.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 5.] Panel de capas
        .row
          .col-12
            .p-4.p-lg-5.bg-c6
              figure.d-none.d-lg-block
                img(src='@/assets/curso/tema1/img23.png', alt='Imagen que presenta el panel de capas.').fig-w5.m-auto
    p.mb-5(data-aos="fade-right") Conozcamos cada uno de ellos:
    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c11
          .row.mb-4
            .col-auto
              .px-3.py-2.bg-c9
                p.mb-0 #[b A. Filtro de capa]
          .row
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img24.png', alt='').fig-w2.m-auto
            .col
              p.mb-0 Cuando un documento de Photoshop contiene muchas capas, se puede filtrar la capa con la que se quiere trabajar por nombre, tipo de capa, atributo, modo de fusión o color de la etiqueta, de esta manera, si se quiere emplear una sola capa, es posible conseguirlo.
      .col-lg-6(data-aos="fade-left")
        .p-4.bg-c11.h-100
          .row.mb-4
            .col-auto
              .px-3.py-2.bg-c9
                p.mb-0 #[b B. Opacidad]
          .row.mb-3
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img25.png', alt='').fig-w2.m-auto
            .col
              p La opacidad global determina el grado en el que la capa le permite ver a través de esta, la imagen de la capa que está debajo.
              p.mb-0 La capa puede ser traslúcida si el valor asignado es 0 % o totalmente opaca si se encuentra al 100 %.
          p.mb-0 #[b Opacidad de relleno:] ofrece la misma funcionalidad de la opacidad global, pero afecta únicamente a los píxeles de la imagen, formas y textos contenidos en la capa, sin influenciar los efectos aplicados a la capa.
    .row.mb-4
      .col-12
        .p-4.bg-c11
          .row.mb-4(data-aos="fade-right")
            .col-auto
              .px-3.py-2.bg-c9
                p.mb-0 #[b C. Modos de fusión]
          p(data-aos="fade-right") Controlan la influencia o mezcla de la capa superior, sobre las imágenes de las capas apiladas bajo esta.
          p.mb-5(data-aos="fade-right") En la siguiente imagen, se enumeran los modos de fusión en familias, según su funcionalidad:
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-down")
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 6.] Modos de fusión en familias
              .row
                .col-12
                  .p-4.p-lg-5.bg-c6
                    figure
                      img(src='@/assets/curso/tema1/img26.png', alt='Imagen que presenta los modos de fusión en familias, según su funcionalidad.').fig-w4.m-auto
          p.mb-5(data-aos="fade-right") Conozcamos algunos de ellos:
          .row.justify-content-center
            .col-lg-7(data-aos="fade-right")
              .row
                .col-12
                  .p-3.bg-c12
                    ul.lista-ul
                      li.d-flex.mb-0
                        i.fas.fa-pencil-alt
                        |
                        p.mb-0 #[b Normal:] pinta cada píxel de la imagen con los píxeles de la capa superior, este es el modo de fusión que viene predeterminado en Photoshop.
                    .hr1
                    ul.lista-ul
                      li.d-flex.mb-0
                        i.fas.fa-pencil-alt
                        |
                        p.mb-0 #[b Trama:] aclara la imagen de la capa subyacente.
                    .hr1
                    ul.lista-ul
                      li.d-flex.mb-0
                        i.fas.fa-pencil-alt
                        |
                        p.mb-0 #[b Color más claro:] este modo de fusión toma como base el color más luminoso de la imagen y la aclara.
                    .hr1
                    ul.lista-ul
                      li.d-flex.mb-0
                        i.fas.fa-pencil-alt
                        |
                        p.mb-0 #[b Multiplicar:] oscurece la imagen sin afectar los tonos blancos.
                    .hr1
                    ul.lista-ul
                      li.d-flex.mb-0
                        i.fas.fa-pencil-alt
                        |
                        p.mb-0 #[b Color más oscuro:] toma el color más oscuro de la imagen subyacente como tono de fusión y oscurece los tonos más claros que el color de base.
                    .hr1
                    ul.lista-ul
                      li.d-flex.mb-0
                        i.fas.fa-pencil-alt
                        |
                        p.mb-0 #[b Superponer:] contrasta la imagen respetando las luces y las sombras de la capa inferior, este mismo efecto se consigue aplicando los modos de fusión Luz suave o si desea mayor intensidad utilice Luz intensa.
                    .hr1
                    ul.lista-ul
                      li.d-flex.mb-0
                        i.fas.fa-pencil-alt
                        |
                        p.mb-0 #[b Luminosidad:] interviene la luz sin afectar el tono y la saturación.
                    .hr1
                    ul.lista-ul
                      li.d-flex.mb-0
                        i.fas.fa-pencil-alt
                        |
                        p.mb-0 #[b Color:] interfiere en el tono de la capa subyacente dejando intacta la saturación de la imagen; de igual manera, funcionan las opciones Tono y Saturación, afectando únicamente sus respectivas funciones.
            .col-lg-3(data-aos="fade-left")
              figure.d-none.d-lg-block
                img(src='@/assets/curso/tema1/img27.png', alt='').fig-w3.m-auto
    .row
      .col-12
        .p-4.bg-c11
          .row.mb-4(data-aos="fade-right")
            .col-auto
              .px-3.py-2.bg-c9
                p.mb-0 #[b D. Bloqueo de capas]
          p(data-aos="fade-right") Estas se bloquean de manera total o parcial para evitar modificaciones accidentales en su contenido, según las necesidades del usuario.
          p.mb-5(data-aos="fade-right") Para bloquear una capa totalmente, haga clic en la opción #[b Bloquear capa], entonces aparece el siguiente ícono al lado derecho del panel.
          .row.mb-5(data-aos="fade-right")
            .col-md-auto.mb-4.mb-md-0
              .row.align-items-center
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema1/img28.png', alt='').m-auto
                .col
                  p.mb-0 #[b Bloquear capa]
            .col-md
              figure
                img(src='@/assets/curso/tema1/img29.png', alt='').fig-w3
          .row.mb-5(data-aos="fade-down")
            .col-md-auto
              .row.align-items-start
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema1/img30.png', alt='').m-auto
                .col
                  p.mb-0 #[b Bloquear píxeles transparentes]
                  p.mb-0 Es la primera de las opciones parciales de bloqueo, la cual permite que únicamente se trabaje con los píxeles opacos de la capa.
          .row.mb-5(data-aos="fade-left")
            .col-md-auto
              .row.align-items-start
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema1/img31.png', alt='').m-auto
                .col
                  p.mb-0 #[b Bloquear píxeles de imagen]
                  p.mb-0 Bloquea parcialmente la capa al no permitirle hacer modificaciones con las herramientas de pintura.
          .row.mb-5(data-aos="fade-up")
            .col-md-auto
              .row.align-items-start
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema1/img32.png', alt='').m-auto
                .col
                  p.mb-0 #[b Bloquear posición]
                  p.mb-0 Impide que se desplacen los píxeles de la capa.
          .row
            .col-12
              .p-4.bg-c13(data-aos="fade-down")
                .row
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img15.svg', alt='').fig-w1.m-auto
                  .col
                    p Las opciones de #[b Bloquear transparencia] y #[b Bloquear imagen] vienen preseleccionadas por defecto para las capas forma y texto, las cuales no pueden desactivarse.
                    p.mb-0 Se pueden bloquear varias capas o grupos de capas, y para hacer esto, se seleccionan las capas y luego se da clic en la opción del modo de bloqueo que desee aplicar.
    Separador
    #t_1_9
    .titulo-segundo.color-primario
      h2 1.9 Operaciones con capas
    p.mb-5(data-aos="fade-right") En la parte inferior del panel Capas, se encuentra un conjunto de herramientas que le permite realizar diferentes tareas con las capas, tales como: enlazar capas, aplicar filtros, crear máscaras, crear nueva capa de relleno, agrupar capas, crear una nueva capa y eliminar capas.
    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 7.] Herramientas
        .row
          .col-12
            .p-4.p-lg-5.bg-c6
              figure
                img(src='@/assets/curso/tema1/img33.png', alt='Imagen que presenta las herramientas para trabajar con capas.').fig-w5.m-auto
    .row.bg-c14
      .col-12
        .p-5
          p.mb-5(data-aos="fade-right") A continuación, se explica cada una de estas herramientas:
          .row.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              .row.mb-4
                .col-auto
                  .row.align-items-center.bg-c9
                    .col
                      p.mb-0 #[b A. Enlazar capa]
                    .col-auto.pe-0
                      figure
                        img(src='@/assets/curso/tema1/img36.png', alt='').m-auto
              p.mb-5 Para mover, alinear, distribuir o transformar varias capas o grupos de capas, seleccione el panel Capas y dé clic en #[b Enlazar capas].
              .row.mb-4
                .col-auto
                  .row.align-items-center.bg-c9
                    .col
                      p.mb-0 #[b B. Añadir estilo de capa]
                    .col-auto.pe-0
                      figure
                        img(src='@/assets/curso/tema1/img37.png', alt='').m-auto
              p.mb-5 Al dar clic en el ícono se pueden aplicar uno o varios efectos a una capa o a un grupo de capas; Photoshop posee 10 estilos diferentes de capa y adicionalmente, se pueden crear estilos personalizados.
              .row
                .col-12
                  .p-3.bg-c13
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src='@/assets/curso/tema1/img15.svg', alt='').fig-w1.m-auto
                      .col
                        p.mb-0 #[b Los efectos se enlazan al contenido de la capa, es decir, al editar la capa, los contenidos modificados adoptan el efecto aplicado a esta.]
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img16.svg', alt='').fig-w3.m-auto
          .row.mb-5
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img17.svg', alt='').fig-w3.m-auto
            .col-lg-8(data-aos="fade-left")
              .row.mb-4
                .col-auto
                  .row.align-items-center.bg-c9
                    .col
                      p.mb-0 #[b C. Máscara vectorial]
                    .col-auto.pe-0
                      figure
                        img(src='@/assets/curso/tema1/img38.png', alt='').m-auto
              p Las máscaras esconden sectores de la imagen, mostrando por medio de áreas ocultas, las capas inferiores. Photoshop ofrece dos tipos de máscaras:
              .row.mb-3
                .col-12
                  .p-3.bg-c15
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-pencil-alt
                        |
                        p.mb-0 Las máscaras de imagen o mapa de bits, se pueden crear o editar con las herramientas de pintura y selección.
                      li.d-flex.mb-0
                        i.fas.fa-pencil-alt
                        |
                        p.mb-0 Las máscaras vectoriales, se crean con las herramientas de forma o de pluma.
              p El uso de máscaras es positivo, debido a que permite realizar ediciones no destructivas, porque tienen la facilidad de editarlas en cualquier momento.
              .row
                .col-12
                  .p-3.bg-c13
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src='@/assets/curso/tema1/img15.svg', alt='').fig-w1.m-auto
                      .col
                        p.mb-0 #[b En el panel de capas, las máscaras se pueden identificar con un ícono situado inmediatamente al lado derecho de la miniatura de la capa.]
          .row.mb-4
            .col-auto
              .row.align-items-center.bg-c9(data-aos="fade-right")
                .col
                  p.mb-0 #[b D. Nueva capa de relleno]
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema1/img38.png', alt='').m-auto
          .row.align-items-center.mb-5
            .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
              p Despliega una persiana con una variedad de opciones, desde la que se pueden seleccionar las diferentes capas de ajuste y relleno a crear. Además, ofrece las mismas opciones que el panel de ajuste, pero a diferencia de este, para su utilización, requiere que el usuario realice un mayor número de clics.
            .col-lg-3(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img18.svg', alt='').fig-w3.m-auto
          .row.justify-content-center
            .col-lg-10(data-aos="fade-down")
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 8.] Opciones del menú para nueva capa de relleno
              .row
                .col-12
                  .p-4.p-lg-5.bg-c6
                    figure
                      img(src='@/assets/curso/tema1/img39.png', alt='Imagen que presenta las opciones del menú para una nueva capa de relleno.').fig-w3.m-auto
    .row.justify-content-center
      .col-11.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c16.h-100
          .row.justify-content-center.mb-4
            .col-auto
              .row.align-items-center.bg-c9
                .col
                  p.mb-0 #[b E. Crear grupo]
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema1/img40.png', alt='').m-auto
          p Cuando se trabaja en Photoshop, por lo general, se crean muchas capas, por esto es útil agruparlas para mantener organizado el espacio de trabajo; al momento de realizar esta acción, se deben seleccionar varias capas y dar clic sobre el siguiente ícono.
          figure
            img(src='@/assets/curso/tema1/img44.png', style="width: 35px", alt='').m-auto.shadow
      .col-11.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        .p-4.bg-c16.h-100
          .row.justify-content-center.mb-4
            .col-auto
              .row.align-items-center.bg-c9
                .col
                  p.mb-0 #[b F. Crear capa nueva]
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema1/img41.png', alt='').m-auto
          p Con un solo clic en el siguiente ícono.
          figure.mb-3
            img(src='@/assets/curso/tema1/img45.png', style="width: 35px", alt='').m-auto.shadow
          p.mb-0 Agrega una capa de imagen transparente inmediatamente sobre la capa que se encuentra activa, pero si no hay ninguna capa seleccionada, ubica la nueva capa en la parte superior de la pila.
      .col-11.col-md-8.col-lg-4(data-aos="fade-left")
        .p-4.bg-c16
          .row.justify-content-center.mb-4
            .col-auto
              .row.align-items-center.bg-c9
                .col
                  p.mb-0 #[b G. Eliminar capa]
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema1/img42.png', alt='').m-auto
          p Para eliminar una capa, selecciónela y dé clic sobre el siguiente ícono.
          figure.mb-3
            img(src='@/assets/curso/tema1/img46.png', style="width: 35px", alt='').m-auto.shadow
          p O también puede hacerlo con clic sostenido arrastrando la capa hasta el ícono mencionado.
          p.mb-0 #[b Se puede cambiar el orden de las capas, haciendo clic sostenido sobre la capa que se quiere mover y después la arrastra hasta la posición que desee.]
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

export default {
  global: {
    componenteFormativo: 'Capas y máscaras',
    descripcionCurso:
      'El componente formativo proporciona un tutorial sobre el uso de capas y máscaras en Adobe Photoshop. Explica diferentes tipos de capas, como de imagen, texto, ajuste, relleno y forma, además de objetos inteligentes. También cubre las máscaras de capa y vectoriales, su comportamiento, visualización y borrado, destacando la edición no destructiva y la organización mediante el panel de capas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Capas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Capa de imagen',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Capa de texto',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Capa de ajuste',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Capa de relleno',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Capa de forma',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Objeto inteligente',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Grupos de capas',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Panel de capas',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Operaciones con capas',
            hash: 't_1_9',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Máscaras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Las máscaras de capa',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Máscara vectorial',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Comportamiento de las máscaras',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Visualización de máscaras',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Borrado de máscaras',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Capas',
      referencia:
        'Saber Programas Imagen. (2021). <i>Cómo usar CAPAS en Photoshop (video)</i>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Cwah8U6vdz8',
    },
    {
      tema: 'Las máscaras de capa',
      referencia:
        'Saber Programas Imagen. (2021). <i>Cómo usar las MÁSCARAS de CAPA en Photoshop (video)</i>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MFneSEiq0Ew&t=30s',
    },
  ],
  glosario: [
    {
      termino: 'Capa de ajuste',
      significado:
        'permite hacer cambios significativos a la imagen sin descomponer la original, aplicando efectos como brillo, contraste y niveles que afectan las capas situadas debajo.',
    },
    {
      termino: 'Capa de imagen',
      significado:
        'también conocida como capa de píxeles, contiene las imágenes que se encuentran en el lienzo o los trazos de pintura cuando se trabaja con Photoshop.',
    },
    {
      termino: 'Capa de relleno',
      significado:
        'aplica un color, que puede ser degradado, de color uniforme o de motivo, afectando las capas inferiores. Está compuesta de dos capas: una para el relleno y otra para la máscara de capa.',
    },
    {
      termino: 'Capa de texto',
      significado:
        'se crea al hacer clic sobre el lienzo con la herramienta de texto, generando una capa transparente con el nombre formado por las palabras digitadas.',
    },
    {
      termino: 'Capa de forma',
      significado:
        'al crear una forma vectorial con herramientas como pluma, rectángulo, elipse, entre otras, esta se aloja en una capa de forma.',
    },
    {
      termino: 'Máscara de capa',
      significado:
        'se utiliza para ocultar sectores de la imagen sin modificarla, permitiendo ver las áreas que se encuentran debajo de la imagen a la que se le aplica la máscara.',
    },
    {
      termino: 'Máscara vectorial',
      significado:
        'se crea con herramientas de forma o pluma, dibujando formas precisas que luego se convierten en trazados de recorte. Permiten ediciones no destructivas.',
    },
    {
      termino: 'Objeto inteligente',
      significado:
        'crea un contenedor del original de la imagen o vector en la capa, permitiendo editar el contenedor sin afectar la imagen original. Facilita la aplicación de filtros modificables en cualquier momento.',
    },
    {
      termino: 'Opacidad',
      significado:
        'determina el grado en que una capa permite ver a través de ella, afectando la visibilidad de la imagen de la capa que está debajo. La opacidad puede variar entre 0 % (traslúcida) y 100 % (totalmente opaca).',
    },
    {
      termino: 'Panel de capas',
      significado:
        'contiene las operaciones que se realizan con las capas, facilitando el trabajo del usuario. Permite realizar tareas como enlazar capas, aplicar filtros, crear máscaras, agrupar capas, entre otras.',
    },
  ],
  referencias: [
    {
      referencia: 'Adobe. (2024). <i>Conceptos básicos de las capas</i>. ',
      link:
        'https://helpx.adobe.com/co/photoshop/using/masking-layers.html?x-product=Helpx%2F1.0.0&x-product-location=Search%3AForums%3Alink%2F3.2.10',
    },
    {
      referencia: 'Adobe. (2023). <i>Máscaras de capas</i>. ',
      link:
        'https://helpx.adobe.com/co/photoshop/using/masking-layers.html?x-product=Helpx%2F1.0.0&x-product-location=Search%3AForums%3Alink%2F3.2.10',
    },
    {
      referencia:
        'Adobe Systems Software Ireland Ltd. (2015). <i>Conceptos básicos de las capas</i>. Consultado el 03 de diciembre de 2015, en. ',
      link: 'https://helpx.adobe.com/es/photoshop/using/layer-basics.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sergio Alfredo Morales Domínguez',
          cargo: 'Experto temático',
          centro: 'Regional Quindío - Centro Agroindustrial',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y productor audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        //{
        //  nombre: 'Luis Gabriel Urueta Alvarez',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

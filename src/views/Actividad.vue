<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Manejo de los residuos sólidos en la producción avícola.',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué capa permite hacer cambios significativos a la imagen sin descomponer la original?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Capa de imagen.', esCorrecta: false },
            { id: 'b', texto: 'Capa de texto.', esCorrecta: false },
            { id: 'c', texto: 'Capa de ajuste.', esCorrecta: true },
            { id: 'd', texto: 'Capa de forma.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes no es una herramienta de creación de formas vectoriales en Photoshop?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Elipse.', esCorrecta: false },
            { id: 'b', texto: 'Pluma.', esCorrecta: false },
            { id: 'c', texto: 'Rectángulo.', esCorrecta: false },
            { id: 'd', texto: 'Pincel.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cómo se puede identificar una máscara en el panel de capas?',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Con un ícono de ojo.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Con un ícono situado al lado derecho de la miniatura de la capa.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Con un ícono de candado.', esCorrecta: false },
            { id: 'd', texto: 'Con un ícono de carpeta.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué operación realiza el modo de fusión "Multiplicar" en una capa?',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Aclara la imagen de la capa subyacente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Oscurece la imagen sin afectar los tonos blancos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Contrasta la imagen respetando las luces y sombras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Interfiere en el tono de la capa subyacente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué debe hacerse para revisar si una máscara está correcta?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Hacer clic en el ícono de la cadena.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Hacer clic + Alt sobre el ícono que le corresponde en el panel de capas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Rasterizar la máscara.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la máscara y volver a crearla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el propósito principal de las máscaras en Photoshop?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Añadir efectos de color.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ocultar sectores de la imagen sin modificarla.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear nuevos trazados de recorte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Convertir una capa en fondo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es una característica de los objetos inteligentes en Photoshop?',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'No se pueden modificar una vez creados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permiten aplicar filtros que pueden ser modificados en cualquier momento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No pueden contener imágenes de otros archivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se rasterizan automáticamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué ocurre al deseleccionar la capa asociada a una máscara vectorial?',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'El trazado de la máscara se borra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El trazado de la máscara se vuelve visible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El trazado de la máscara desaparece.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La máscara se rasteriza automáticamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuántos tipos de capas se mencionan en el documento, excluyendo la capa de fondo?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: '4.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '5.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '6.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '7.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué capa se crea al hacer clic en el lienzo con la herramienta de texto?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Capa de imagen.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Capa de ajuste.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Capa de relleno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Capa de texto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>

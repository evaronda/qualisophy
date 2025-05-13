# Pasos para ejecutar el proyecto:

1. npm install

2. Crear un fichero .env con VITE_REACT_APP_WEBHOOK_URL={{tu clave webhook Make}}


3. npm run dev

## Funcionalidades de la Página de Resumen de Cursos
La página Resumen de Qualisophy actúa como un escaparate central de los cursos disponibles en la plataforma. Sus principales funcionalidades son:

# 1 Menú de Navegación
Menú superior con acceso a secciones clave: Página Principal, Cursos, Consultoría, Formación Empresas, Partnership y Contacto.

# 2 Desplegable en Cursos que permite seleccionar entre:

-Todos los cursos

-Curso Calidad de Software y Testing

-Curso BDD y Automatización E2E

-Coding and DevOps for Testers

# 3 Sección de Introducción a los Cursos
Presentación del propósito formativo con foco en Testing, DevOps y Automatización.

# 4 Visualización de Cursos Disponibles
Muestra detallada de los cursos disponibles con nombre, descripción y formador (por ejemplo, Francisco Guerrero).

# 5 Sección de Consultoría
-Ofrecen orientación técnica personalizada para pequeñas empresas.

-Botón de contacto directo: ¡Hablemos sobre tus ideas!

# 6 Formación Empresarial a Medida
Descripción de programas formativos para equipos.

Beneficios destacados como:

-Formaciones adaptadas

-Metodologías prácticas

-Flexibilidad horaria

-Impacto medible

# 7 Programa de Colaboración
Conecta a empresas con el talento formado en Qualisophy.

Ventajas para empresas como talento certificado, acceso prioritario, alianzas estratégicas y visibilidad.

# 8 Sección de Contacto
Formulario de contacto con campos: nombre, email y mensaje.

Botón de envío con estilo profesional.

# 9 Chatbot con respuestas preprogramadas (rama main)
Este chatbot utiliza React Simple Chatbot, una librería de React que permite construir flujos conversacionales de forma visual y sencilla. Las respuestas del bot están predefinidas en el código como una serie de pasos, cada uno con un mensaje o una opción que guía al usuario por una ruta concreta.
No hay inteligencia artificial ni procesamiento del lenguaje natural: simplemente responde según lo que está configurado. Es útil para formularios guiados, preguntas frecuentes o asistentes simples con lógica estática.

🔧 Funcionamiento:

Cada interacción sigue un flujo de pasos declarados en un array.

El bot no interpreta el texto del usuario, sino que responde según la estructura programada.

No requiere conexión a internet para generar respuestas, ya que todo está embebido en el frontend.  



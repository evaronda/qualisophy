# Pasos para ejecutar el proyecto:

1. npm install

2. Crear un fichero .env con VITE_REACT_APP_WEBHOOK_URL={{tu clave webhook Make}} y VITE_HUGGING_FACE_API_KEY={{tu clave de HuggingFace para el chatbot con IA}}


4. npm run dev

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

Llamado visual atractivo con texto destacado y fondo animado.

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

# 9 Chatbot con inferencias de Hugging Face (rama hugging-face-ai-chatbot)
Este chatbot está integrado con la API de Hugging Face, una plataforma de modelos de inteligencia artificial. En este caso, se usa un modelo alojado en la nube para realizar inferencias en tiempo real.
Cuando el usuario escribe un mensaje, se envía una solicitud HTTP a la API de Hugging Face, que responde con un texto generado por el modelo.

🔧 Funcionamiento:

Se recoge el input del usuario y se envía a la API de Hugging Face.

La API responde con una respuesta generada por el modelo (como un modelo de tipo LLM).

Se necesita una clave de autenticación y conexión a internet para funcionar.

Permite respuestas dinámicas y adaptadas al contexto, gracias al modelo de IA en la nube. 


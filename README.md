# Pasos para ejecutar el proyecto con Ollama:

## 0. Instalar Ollama y un modelo (ollama pull llama3:latest)

1. Entrar en https://ollama.com/download
2. Descargar Ollama

## 1. Instalación de dependencias

Ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install
```

## 2. Configuración del archivo .env

```bash
VITE_REACT_APP_WEBHOOK_URL={{tu clave webhook Make}}
VITE_OLLAMA_BASE_URL=http://localhost:11434
VITE_OLLAMA_MODEL=llama3:latest
```

VITE_OLLAMA_BASE_URL: La URL base de tu instancia local de Ollama. Por defecto, es http://localhost:11434/api/chat
VITE_OLLAMA_MODEL: El nombre del modelo que deseas usar. Por defecto, es llama3:latest. Puedes cambiarlo a otro modelo disponible en tu instancia de Ollama (por ejemplo, mistral:latest).

## 3. Ejecutar el proyecto

```bash
npm run dev
```

## 4. Cambiar el modelo de Ollama
Si deseas usar un modelo diferente, simplemente edita la variable VITE_OLLAMA_MODEL en el archivo .env y reinicia el servidor de desarrollo:
```bash
VITE_OLLAMA_MODEL=mistral:latest
```

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

# 9 Chatbot local con Ollama (rama local-ai-chatbot)
Este chatbot está integrado con Ollama, una plataforma que permite ejecutar modelos de lenguaje localmente, en tu propia máquina. No depende de servicios en la nube, lo que lo hace ideal para proyectos sin conexión o que requieren privacidad.
El bot procesa el mensaje del usuario, lo envía al servidor local de Ollama y muestra la respuesta generada por el modelo.

🔧 Funcionamiento:

El usuario escribe un mensaje y el chatbot lo reenvía al servidor local de Ollama mediante una API REST.

Ollama genera una respuesta usando un modelo LLM descargado (como LLaMA o Mistral).

Se requiere tener Ollama instalado, con un modelo previamente cargado.

Ofrece las ventajas de la IA generativa sin depender de terceros ni de conexión externa.


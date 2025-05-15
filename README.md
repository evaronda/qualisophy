# Qualisophy

## Pasos para ejecutar el proyecto con Ollama

Sigue estos pasos para instalar y ejecutar el proyecto localmente con integración Ollama:

### 0. Instalar Ollama y un modelo

1. Ve a [https://ollama.com/download](https://ollama.com/download) y descarga Ollama para tu sistema operativo.
2. Instala un modelo compatible, por ejemplo:
   ```bash
   ollama pull llama3:latest
   ```

### 1. Instalación de dependencias

Ejecuta el siguiente comando para instalar las dependencias necesarias:
```bash
npm install
```

### 2. Configuración del archivo .env

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido (ajusta los valores según tu configuración):

```
VITE_REACT_APP_WEBHOOK_URL=tu_clave_webhook_make
VITE_OLLAMA_BASE_URL=http://localhost:11434
VITE_OLLAMA_MODEL=llama3:latest
```

- `VITE_OLLAMA_BASE_URL`: URL base de tu instancia local de Ollama (por defecto, `http://localhost:11434`).
- `VITE_OLLAMA_MODEL`: Nombre del modelo a usar (por defecto, `llama3:latest`). Puedes cambiarlo por otro modelo disponible en tu instancia de Ollama (por ejemplo, `mistral:latest`).

### 3. Ejecutar el proyecto

```bash
npm run dev
```

### 4. Cambiar el modelo de Ollama

Si deseas usar un modelo diferente, edita la variable `VITE_OLLAMA_MODEL` en el archivo `.env` y reinicia el servidor de desarrollo:
```bash
VITE_OLLAMA_MODEL=mistral:latest
```

---

## Funcionalidades de la Página de Resumen de Cursos

La página Resumen de Qualisophy actúa como un escaparate central de los cursos disponibles en la plataforma. Sus principales funcionalidades son:

### 1. Menú de Navegación
Menú superior con acceso a secciones clave: Página Principal, Cursos, Consultoría, Formación Empresas, Partnership y Contacto.

### 2. Desplegable en Cursos
Permite seleccionar entre:
- Todos los cursos
- Curso Calidad de Software y Testing
- Curso BDD y Automatización E2E
- Coding and DevOps for Testers

### 3. Sección de Introducción a los Cursos
Presentación del propósito formativo con foco en Testing, DevOps y Automatización. Llamado visual atractivo con texto destacado y fondo animado.

### 4. Visualización de Cursos Disponibles
Muestra detallada de los cursos disponibles con nombre, descripción y formador (por ejemplo, Francisco Guerrero).

### 5. Sección de Consultoría
- Orientación técnica personalizada para pequeñas empresas.
- Botón de contacto directo: ¡Hablemos sobre tus ideas!

### 6. Formación Empresarial a Medida
Descripción de programas formativos para equipos. Beneficios destacados:
- Formaciones adaptadas
- Metodologías prácticas
- Flexibilidad horaria
- Impacto medible

### 7. Programa de Colaboración
Conecta a empresas con el talento formado en Qualisophy. Ventajas:
- Talento certificado
- Acceso prioritario
- Alianzas estratégicas
- Visibilidad

### 8. Sección de Contacto
Formulario de contacto con campos: nombre, email y mensaje. Botón de envío con estilo profesional.

### 9. Chatbot local con Ollama

Este chatbot está integrado con Ollama, permitiendo ejecutar modelos de lenguaje localmente en tu máquina. No depende de servicios en la nube, ideal para proyectos sin conexión o que requieren privacidad.

#### Funcionamiento:
- El usuario escribe un mensaje y el chatbot lo reenvía al servidor local de Ollama mediante una API REST.
- Ollama genera una respuesta usando un modelo LLM descargado (como LLaMA o Mistral).
- Se requiere tener Ollama instalado, con un modelo previamente cargado.
- Ofrece las ventajas de la IA generativa sin depender de terceros ni de conexión externa.


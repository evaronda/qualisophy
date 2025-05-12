# Pasos para ejecutar el proyecto con Ollama:

## 0. Instalar Ollama y un modelo (ollama pull llama3:latest)

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

VITE_OLLAMA_BASE_URL: La URL base de tu instancia local de Ollama. Por defecto, es http://localhost:11434.
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
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

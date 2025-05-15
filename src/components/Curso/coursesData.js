
export const courses = [
  {
    id: "calidad-software",
    path: "/curso",
    image: "/foto_presentacion_empresarial.jpg",
    title: "CURSO CALIDAD DE SOFTWARE Y TESTING",
    subtitle: "Recibe toda la formación necesaria para llevar a cabo actividades de Testing y Calidad de Software.",
    introduction: {
      title: "¿De qué trata?",
      text: "El Testing es la parte del Desarrollo de Software que se encarga de verificar que las aplicaciones, servicios y soluciones informáticas funcionan correctamente, y validar que su cometido es el que requieren los usuarios. El Testing se engloba como una de las actividades principales dentro de la Calidad del Software."
    },
    modules: [
      {
        title: "Módulo 1: Introducción a la Calidad del Software",
        description: "Conoce los conceptos básicos del Testing, roles y tipos de pruebas existentes."
      },
      {
        title: "Módulo 2: Testing dentro del Ciclo de Vida de un Desarrollo",
        description: "Aprende a planificar, diseñar, ejecutar pruebas y reportar errores."
      },
      {
        title: "Módulo 3: Automatización de Pruebas",
        description: "Profundiza en frameworks de automatización como Jest, Cypress y Postman."
      },
      {
        title: "Módulo 4: DevOps y Testing Continuo",
        description: "Integra pruebas automáticas en sistemas de CI/CD y aprende sobre métricas y reportes."
      }
    ],
    instructor: {
      name: "Fran Guerrero",
      description: "Francisco Guerrero es un especialista certificado en Agile ISTQB, con más de 14 años de experiencia en el campo de la Calidad del Software. Implementa procesos de prueba, estrategias de control de calidad y herramientas innovadoras."
    },
    details: [
      { label: "Inicio", value: "17 de Febrero de 2025" },
      { label: "Duración", value: "40 horas (7 semanas)" },
      { label: "Horario", value: "Lunes y Miércoles, 18:00 a 21:00" },
      { label: "Coste", value: "497 € (dos plazos)" },
      { label: "Inscripción anticipada", value: "447 € (hasta el 31 de Enero)" }
    ],
    contact: {
      email: "hello@qualisophy.com",
      phone: "123 123 123"
    }
  },
  {
    id: "bdd-automatizacion",
    path: "/bdd-automatizacion",
    image: "/bdd.jpg",
    title: "Curso BDD y Automatización E2E",
    subtitle: "Aprende a diseñar, implementar y mantener pruebas automatizadas utilizando herramientas como Cucumber, Cypress y más.",
    introduction: null,
    modules: [
      { title: "Módulo 1: Fundamentos de BDD" },
      { title: "Módulo 2: Sintaxis Gherkin y Cucumber" },
      { title: "Módulo 3: Automatización E2E con Cypress" },
      { title: "Módulo 4: Integración continua y pruebas automatizadas" }
    ],
    instructor: {
      name: "Equipo QA",
      description: "Este curso es impartido por profesionales con experiencia en QA y automatización de pruebas en entornos Agile."
    },
    details: [
      { label: "Inicio", value: "10 de Marzo de 2025" },
      { label: "Duración", value: "30 horas (6 semanas)" },
      { label: "Horario", value: "Martes y Jueves, 18:00 a 20:30" },
      { label: "Coste", value: "420 € (en un solo pago o 2 cuotas de 210 €)" }
    ],
    contact: {
      email: "hello@qualisophy.com",
      phone: "123 123 123"
    }
  },
  {
    id: "coding-devops-tester",
    path: "/CursoCodingDevopsTester",
    image: "/CODING.jpg",
    title: "CODING AND DEVOPS FOR TESTERS",
    subtitle: "Aprende habilidades clave de programación y automatización para integrarte de lleno en entornos DevOps.",
    introduction: {
      title: "¿Qué aprenderás?",
      text: "Este curso te proporciona conocimientos prácticos de programación, automatización y herramientas modernas utilizadas en pipelines de integración y entrega continua (CI/CD). Es ideal para testers que quieren dar el salto al mundo del desarrollo y DevOps."
    },
    modules: [
      {
        title: "Módulo 1: Fundamentos de Programación para Testers",
        description: "Aprende JavaScript, estructuras de control, funciones y manipulación del DOM."
      },
      {
        title: "Módulo 2: Automatización con Herramientas Modernas",
        description: "Utiliza herramientas como Cypress, Playwright y Postman para pruebas automatizadas."
      },
      {
        title: "Módulo 3: Introducción a Git y Control de Versiones",
        description: "Maneja proyectos con Git y GitHub, y colabora en equipos de desarrollo."
      },
      {
        title: "Módulo 4: Integración Continua con GitLab CI/CD",
        description: "Configura pipelines automáticos, ejecuta pruebas y entrega software de forma eficiente."
      }
    ],
    instructor: {
      name: "Laura Sánchez",
      description: "Ingeniera de Software y DevOps, con más de 10 años de experiencia en desarrollo de soluciones automatizadas y entornos CI/CD en empresas tecnológicas líderes. Certificada en AWS y GitLab CI/CD."
    },
    details: [
      { label: "Inicio", value: "3 de Marzo de 2025" },
      { label: "Duración", value: "48 horas (8 semanas)" },
      { label: "Horario", value: "Martes y Jueves, 18:00 a 21:00" },
      { label: "Coste", value: "540 € (pago fraccionado disponible)" },
      { label: "Descuento por inscripción anticipada", value: "490 € (hasta el 10 de Febrero)" }
    ],
    contact: {
      email: "formacion@qualisophy.com",
      phone: "987 654 321"
    }
  }
];

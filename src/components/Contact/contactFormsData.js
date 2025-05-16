export const contactForms = [
  {
    id: "contact",
    title: "CONTÁCTENOS",
    formType: "contact",
    fields: [
      { name: "name", label: "Nombre completo", type: "text", placeholder: "Ingrese su nombre", required: true },
      { name: "email", label: "Correo electrónico", type: "email", placeholder: "Ingrese su correo electrónico", required: true },
      { name: "message", label: "Su mensaje", type: "textarea", placeholder: "Ingrese su mensaje", required: true }
    ],
    buttonText: "Enviar mensaje"
  },
  {
    id: "colaborar",
    title: "COLABORA CON NOSOTROS",
    formType: "colaborar",
    fields: [
      { name: "name", label: "Nombre completo", type: "text", placeholder: "Ingrese su nombre", required: true },
      { name: "email", label: "Correo electrónico", type: "email", placeholder: "Ingrese su correo electrónico", required: true },
      { name: "message", label: "Su mensaje", type: "textarea", placeholder: "Ingrese su mensaje", required: true }
    ],
    buttonText: "Enviar mensaje"
  },
  {
    id: "curso",
    title: "INSCRÍBETE EN UN CURSO",
    formType: "curso",
    fields: [
      { name: "name", label: "Nombre completo", type: "text", placeholder: "Ingrese su nombre", required: true },
      { name: "email", label: "Correo electrónico", type: "email", placeholder: "Ingrese su correo electrónico", required: true },
      { name: "course", label: "Curso", type: "select", placeholder: "Seleccione un curso", required: true,
        options: [
          { value: "Calidad de Software y Testing", label: "Calidad de Software y Testing" },
          { value: "BDD y Automatización E2E", label: "BDD y Automatización E2E" },
          { value: "Coding and DevOps for Testers", label: "Coding and DevOps for Testers" }
        ]
      }
    ],
    buttonText: "Inscribirse"
  }
];

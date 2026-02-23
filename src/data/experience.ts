export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "Tech Solutions S.A.C.",
    role: "Senior Backend Developer",
    dates: "2022 - Presente",
    description: "Liderazgo técnico en el desarrollo de microservicios utilizando NestJS y PostgreSQL. Implementación de CI/CD con GitHub Actions y despliegue en contenedores Docker."
  },
  {
    company: "Dev Agency",
    role: "Fullstack Developer",
    dates: "2020 - 2022",
    description: "Desarrollo de aplicaciones web robustas con React y Node.js. Optimización de consultas SQL y diseño de APIs RESTful siguiendo mejores prácticas."
  },
  {
    company: "Startup Innovate",
    role: "Junior Developer",
    dates: "2018 - 2020",
    description: "Mantenimiento y desarrollo de nuevas funcionalidades para una plataforma de e-commerce. Colaboración en el diseño de la arquitectura de base de datos."
  }
];

export interface Project {
  title: string;
  description: string;
  url: string;
  github: string;
  tags: string[];
  image: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce API",
    description: "Una API robusta para una plataforma de comercio electrónico construida con NestJS, TypeORM y PostgreSQL. Incluye autenticación JWT y pagos con Stripe.",
    url: "https://demo-ecommerce.example.com",
    github: "https://github.com/juanperez/ecommerce-api",
    tags: ["NestJS", "PostgreSQL", "Docker", "TypeScript"],
    image: "https://picsum.photos/seed/ecommerce/600/400"
  },
  {
    title: "Task Manager Pro",
    description: "Aplicación de gestión de tareas con sincronización en tiempo real usando WebSockets. Frontend desarrollado con React y Tailwind CSS.",
    url: "https://taskpro.example.com",
    github: "https://github.com/juanperez/task-manager",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "https://picsum.photos/seed/taskpro/600/400"
  },
  {
    title: "Portfolio Minimalista",
    description: "Este mismo sitio web, construido con Astro y Tailwind CSS para un rendimiento excepcional y SEO optimizado.",
    url: "https://portfolio.example.com",
    github: "https://github.com/juanperez/portfolio",
    tags: ["Astro", "Tailwind CSS", "View Transitions"],
    image: "https://picsum.photos/seed/portfolio/600/400"
  }
];

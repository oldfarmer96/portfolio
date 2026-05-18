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
    title: "API Facturación Electrónica (SUNAT)",
    description:
      "API RESTful diseñada para desarrolladores que buscan implementar facturación electrónica en Perú. Abstrae la complejidad de la conexión directa con SUNAT, ofreciendo endpoints limpios y documentación fácil de implementar.",
    url: "#",
    github: "#",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Docker", "Redis"],
    image: "/projects/fact-damn.webp",
  },
  {
    title: "ERP Ferreterías & Facturación",
    description:
      "Sistema de ventas y gestión de inventario especializado para ferreterías. Incluye control de stock detallado, caja, reportes y consumo directo de API para emisión de comprobantes electrónicos.",
    url: "#",
    github: "#",
    tags: ["Next.js", "React", "Tailwind CSS", "Prisma"],
    image: "/projects/ferre.webp",
  },
  {
    title: "FarmaSys - Gestión de Farmacias",
    description:
      "Plataforma integral para administración de farmacias. Cuenta con alertas de caducidad, control de lotes, punto de venta rápido (POS) e integración de facturación electrónica.",
    url: "#",
    github: "#",
    tags: ["Vue.js", "Express", "MySQL"],
    image: "/projects/farmacia.webp",
  },
];

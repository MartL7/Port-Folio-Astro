import AstroIcon from '@/components/icons/Fronted/Astro.astro'
import TypeScriptIcon from '@/components/icons/Backend/Typescript.astro'
import TailwindIcon from '@/components/icons/Fronted/Tailwind.astro'

interface Tag {
  name: string
  icon: string | any
}

interface Project {
  name: string
  description: string
  image: string
  tags: Tag[]
  preview?: string
  repository?: string
}

export const projects: Project[] = [
  {
    name: 'Fichas CBTis 86',
    description: 'Aplicación web para la gestión de fichas de inscripción de alumnos del CBTis 86, con la finalidad de agilizar el proceso de inscripción de los alumnos. Creada con vanilla JavaScript, PHP, Mysql.',
    image: '/img/img-projects/fichas.webp',
    tags: [
      { name: 'Html', icon: 'fab fa-html5 text-orange-500 text-2xl sm:text-2xl' },
      { name: 'Css', icon: 'fab fa-css3 text-blue-500 text-2xl sm:text-2xl' },
      { name: 'JavaScript', icon: 'fab fa-js-square text-yellow-500 text-2xl sm:text-2xl' },
      { name: 'PHP', icon: 'fab fa-php text-blue-500 text-2xl sm:text-2xl' },
      { name: 'Mysql', icon: 'fas fa-database text-blue-500 text-2xl sm:text-2xl' }
    ],
    preview: 'https://cbtis86.edu.mx/cbtis86.edu.mx/admision/Fichas_CBTis86/'
  },

  {
    name: 'Control de Créditos de Clientes',
    description: 'Aplicación web para control de Créditos de Clientes de la empresa LOG-IN, con la finalidad de llevar un control de los créditos otorgados a los clientes, así como de los pagos realizados por los mismos. Creada con Astro, TypeScript y Tailwind CSS.',
    image: '/img/img-projects/credits-log-in.webp',
    tags: [
      { name: 'Astro', icon: AstroIcon },
      { name: 'TypeScript', icon: TypeScriptIcon },
      { name: 'Tailwind CSS', icon: TailwindIcon },
      { name: 'Sqlite', icon: 'fas fa-database text-blue-500 text-2xl sm:text-2xl' }
    ]
  },

  {
    name: 'Forever 6M',
    description: 'Anuario de compañeros del Grupo M del CBTis 86, con la funcionalidad de reaccionar, comentar a cada perfil, inspirado en el diseño de La Velada IV. Creado con Astro, TypeScript, SQLite, Tailwind CSS',
    image: '/img/img-projects/forever-6m.webp',
    tags: [
      { name: 'Astro', icon: AstroIcon },
      { name: 'TypeScript', icon: TypeScriptIcon },
      { name: 'Tailwind CSS', icon: TailwindIcon },
      { name: 'Sqlite', icon: 'fas fa-database text-blue-500 text-2xl sm:text-2xl' }
    ],
    repository: 'https://github.com/MartL7/Votaciones-fotos-random',
    preview: 'https://forever6m.vercel.app/'
  },

  {
    name: 'Control de Inventario del Laboratorio',
    description: 'Control del inventario de equipo, materiales, reactivos, libros del Laboratorio de Química del CBTis 86. Creada con Astro, TypeScript, TailwindCSS, SQLite',
    image: '/img/img-projects/inventario-quimica.webp',
    tags: [
      { name: 'Astro', icon: AstroIcon },
      { name: 'TypeScript', icon: TypeScriptIcon },
      { name: 'Tailwind CSS', icon: TailwindIcon },
      { name: 'Sqlite', icon: 'fas fa-database text-blue-500 text-2xl sm:text-2xl' }
    ]
  },

  {
    name: 'Bot De WhatsApp',
    description: 'Bot de WhatsApp para la empresa LOGIN Mayorista integrando la API Oficial de WhatsApp y la API de Openai. Creado en NodeJS con JavaScript',
    image: '/img/img-projects/bot-whatsapp.webp',
    tags: [
      { name: 'NodeJS', icon: 'fab fa-node-js text-green-500/70 text-2xl sm:text-3xl' },
      { name: 'JavaScript', icon: 'fab fa-js-square text-yellow-500 text-2xl sm:text-2xl' }
    ],
    preview: 'https://wa.me/527762269123?text=hola'
  }
]

export const moreProjects = [
  {
    name: 'Calculadora de Ships',
    description: 'Calcula el porcentaje Ship entre dos personas.',
    technologies: ['React', 'JavaScript', 'CSS']
  }
]

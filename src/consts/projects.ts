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
    image: '/public/img/img-projects/fichas.webp',
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
    image: '/public/img/img-projects/credits-log-in.webp',
    tags: [
      { name: 'Astro', icon: AstroIcon },
      { name: 'TypeScript', icon: TypeScriptIcon },
      { name: 'Tailwind CSS', icon: TailwindIcon },
      { name: 'Sqlite', icon: 'fas fa-database text-blue-500 text-2xl sm:text-2xl' }
    ]
  },
  {
    name: 'Tablas de Estadísticas',
    description: 'Tablas de Distribución de Frecuencias, con la finalidad de mostrar la información de una manera más visual y entendible. Creada con React, JavaScript y Tailwind CSS.',
    image: '/public/img/img-projects/tablas-estadistica.webp',
    tags: [
      { name: 'React', icon: 'fab fa-react text-blue-400 text-2xl sm:text-2xl' },
      { name: 'JavaScript', icon: 'fab fa-js-square text-yellow-500 text-2xl sm:text-3xl' },
      { name: 'Tailwind CSS', icon: TailwindIcon }
    ],
    repository: 'https://github.com/MartL7/tablas-estadistica.git',
    preview: 'https://estadistica-tablas.vercel.app/'
  }
]

export const moreProjects = [
  {
    name: 'Calculadora de Ships',
    description: 'Calcula el porcentaje Ship entre dos personas.',
    technologies: ['React', 'JavaScript', 'CSS']
  }
]

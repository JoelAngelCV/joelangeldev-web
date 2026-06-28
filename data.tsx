import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, X, Github, Crop, Pencil, Computer, Book, Rocket, Mail, AppWindow, Wrench } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={25} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/joel-angel-camasca-villanueva-41677824a/",
    },
    {
        id: 2,
        logo: <X size={25} strokeWidth={1} />,
        src: "https://x.com/joelangeldev",
    },
    {
        id: 3,
        logo: <Github size={25} strokeWidth={1} />,
        src: "https://github.com/JoelAngelCV",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Inicio",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Sobre Mí",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/sobre-mi",
    },
    {
        id: 3,
        title: "Portafolio",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portafolio",
    },
    {
        id: 4,
        title: "Servicios",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/servicios",
    },
    {
        id: 5,
        title: "Contacto",
        icon: <Mail size={25} color="#fff" strokeWidth={1} />,
        link: "/contacto",
    },
];

export const skillsData = [
    {
        id: 1,
        title: "HTML",
        image: "/logo-html.png",
        alt: "Logo HTML",
    },
    {
        id: 2,
        title: "CSS",
        image: "/logo-css.png",
        alt: "Certificado CSS Joelangeldev",
    },
    {
        id: 3,
        title: "Javascript",
        image: "/logo-js.png",
        alt: "Logo Javascript",
    },
    {
        id: 4,
        title: "React",
        image: "/logo-react.png",
        alt: "Logo React"
    },
    {
        id: 5,
        title: "Node JS",
        image: "/logo-node.png",
        alt: "Logo NodeJS"
    },
    {
        id: 6,
        title: "Typescript",
        image: "/logo-ts.png",
        alt: "Logo Typescript"
    },
    {
        id: 7,
        title: "Next JS",
        image: "/logo-next.png",
        alt: "Logo NextJS"
    },
    {
        id: 8,
        title: "Tailwind",
        image: "/logo-tw.png",
        alt: "Logo Tailwind"
    },
    {
        id: 9,
        title: "Git",
        image: "/logo-git.png",
        alt: "Logo Git"
    },
    {
        id: 10,
        title: "SQL",
        image: "/logo-sql.png",
        alt: "Logo SQL"
    },
    {
        id: 11,
        title: "PHP",
        image: "/logo-php.png",
        alt: "Logo PHP"
    },
    {
        id: 12,
        title: "Wordpress",
        image: "/logo-wp.png",
        alt: "Logo Wordpress"
    },
]

export const dataStudies = [
    {
        id: 1,
        title: "Computación e Informática",
        subtitle: "Instituto Superior Compulider's",
        date: "2005-2006",
    },
    {
        id: 2,
        title: "Ingenieria de Sistemas Cómputo y Telecomunicaciones",
        subtitle: "Universidad Inca Garcilaso de la Vega",
        date: "2013-2017",
    },
    {
        id: 3,
        title: "Cursos de Desarrollo Web",
        subtitle: "SoloLearn / Freecodecamp / Cursos Online",
        date: "2020-2023",
    },
]

export const certificateData = [
    {
        id: 1,
        title: "HTML",
        image: "/certificado-html.png",
        alt: "Certificado HTML Joelangeldev",
    },
    {
        id: 2,
        title: "CSS",
        image: "/certificado-css.png",
        alt: "Certificado CSS Joelangeldev",
    },
    {
        id: 3,
        title: "Javascript",
        image: "/certificado-javascript.png",
        alt: "Certificado Javascript Joelangeldev",
    },
    {
        id: 4,
        title: "SQL",
        image: "/certificado-sql.png",
        alt: "Certificado SQL Joelangeldev"
    },
    {
        id: 5,
        title: "JQuery",
        image: "/certificado-jquery.png",
        alt: "Certificado JQuery Joelangeldev"
    },
    {
        id: 6,
        title: "PHP",
        image: "/certificado-php.png",
        alt: "Certificado PHP Joelangeldev"
    },
    {
        id: 8,
        title: "Angular+NestJS",
        image: "/certificado-angular.png",
        alt: "Certificado Angular Joelangeldev"
    },
    {
        id: 7,
        title: "React+Redux",
        image: "/certificado-react.png",
        alt: "Certificado React Joelangeldev"
    },
]

export const serviceData = [
    {
        id: 1,
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Webs Responsivas y atractivas, adaptados a tus necesidades y objetivos comerciales.",
    },
    {
        id: 2,
        icon: <AppWindow />,
        title: "Maquetación",
        description: "Maquetación web desde diseños establecidos, utilizando las últimas tendencias y tecnologías.",
    },
    {
        id: 3,
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web, centradas en la experiencia del usuario.",
    },
    {
        id: 4,
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas.",
    },
    {
        id: 5,
        icon: <Wrench />,
        title: "Mantenimiento",
        description: "Mantenimiento de aplicaciones existentes, incluyendo diseño de logotipo, colores y elementos visuales.",
    },
];

export const dataPortfolio = [
    {
        title: "Itek Perú",
        description: "Página web para una empresa que brinda servicios de climatización y venta de equipos.",
        image: "/itekperru.jpg",
        tags: ["Next.js", "Tailwind", "Typescript", "Framer Motion"],
        githubUrl: "https://github.com/JoelAngelCV/itekperu",
        demoUrl: "https://itekperu.vercel.app/"
    },
    {
        title: "Chilca Ovni Festival",
        description: "Página web de un evento musical con información general, galería de imágenes y venta de entradas.",
        image: "/ovnisc.jpg",
        tags: ["Next.js", "Tailwind", "Typescript", "PayPal"],
        githubUrl: "https://github.com/JoelAngelCV/chilcaovni.git",
        demoUrl: "https://chilcaovni.vercel.app/"
    },
    {
        title: "Encuestas Presidenciales",
        description: "Aplicación Full Stack donde un usuario puede registrarse e iniciar sesión, votar por su candidato y ver resultados.",
        image: "/eleccionsc.jpeg",
        tags: ["Next.js", "Typescript", "Supabase"],
        githubUrl: "https://github.com/JoelAngelCV/eleccionesperu.git",
        demoUrl: "https://eleccionesperu.vercel.app/"
    },
    {
        title: "Good Coffee",
        description: "Proyecto Ecommerce con fotos y detalles de cada producto a modo de tarjetas, una sección favoritos y carrito de compras.",
        image: "/screen-goodcoff.jpg",
        tags: ["Next.js", "Typescript", "Stripe", "Zustand"],
        githubUrl: "https://github.com/JoelAngelCV/good-coffee-front.git",
        demoUrl: "https://good-coff.vercel.app/"
    },
    {
        title: "Modass For Men",
        description: "Maqueta de una tienda virtual, un proyecto donde se cuenta con un carrito de compras que simula la compra.",
        image: "/modassweb.jpg",
        tags: ["HTML", "CSS", "Bootstrap", "Javascript"],
        githubUrl: "https://github.com/JoelAngelCV/modass.git",
        demoUrl: "https://modass.onrender.com"
    },
    {
        title: "Portafolio",
        description: "Portafolio web conectado a bases de datos MySQL. También con optimización de rendimiento y técnicas de SEO.",
        image: "/joeldev1.jpg",
        tags: ["HTML", "CSS", "PHP", "JAVASCRIPT"],
        githubUrl: "https://github.com/JoelAngelCV/joeldev.git",
        demoUrl: "https://joeldev.onrender.com/"
    },
];
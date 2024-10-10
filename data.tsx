import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, X, Github, Crop, Pencil, Computer, Book, Rocket, Mail } from "lucide-react";

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
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/sobre-mi",
    },
    {
        id: 3,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portafolio",
    },
    {
        id: 4,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/servicios",
    },
    {
        id: 5,
        title: "Mail",
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
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        id: 2,
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        id: 3,
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    // {
    //     id: 4,
    //     icon: <Book />,
    //     title: "Copywriting",
    //     description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    // },
    {
        id: 5,
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];
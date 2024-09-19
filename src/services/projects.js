import techStack from "./techStack";
const projects = [
  {
    id: 1,
    title: "Web",
    name: "SIMKBS",
    status: "preview",
    imgPath: "/assets/album/simkbs.png",
    url: "https://shorturl.at/xEJKT",
    techStack: [techStack.find((tech) => tech.id === 1)].filter(Boolean),
    category: "UI/UX",
  },
  // {
  //   id: 2,
  //   title: "UI/UX Mobile Apps",
  //   name: "Career Search",
  //   status: "comming soon",
  //   imgPath: "/assets/album/polotno.png",
  //   url: "",
  //   techStack: [techStack.find((tech) => tech.id === 1)].filter(Boolean),
  //   category: "UI/UX",
  // },
  {
    id: 2,
    title: "Web ",
    name: "Silapor Polda",
    status: "comming soon",
    imgPath: "/assets/album/silapor.png",
    url: "",
    techStack: [
      techStack.find((tech) => tech.id === 3),
      techStack.find((tech) => tech.id === 4),
      techStack.find((tech) => tech.id === 6),
      techStack.find((tech) => tech.id === 8),
    ].filter(Boolean),
    category: "FULL STACK",
  },
  {
    id: 3,
    title: "Web",
    name: "Upricing Music",
    status: "preview",
    imgPath: "/assets/album/uprising.png",
    url: "https://nathad17.github.io/bootstrap_portfolio/",
    techStack: [
      techStack.find((tech) => tech.id === 3),
      techStack.find((tech) => tech.id === 4),
    ].filter(Boolean),
    category: "FRONTEND",
  },
  {
    id: 4,
    title: "Web Resep Makanan",
    name: "Dapur Kreatif",
    status: "comming soon",
    imgPath: "/assets/album/Web2.png",
    url: "",
    techStack: [
      techStack.find((tech) => tech.id === 2),
      techStack.find((tech) => tech.id === 4),
      techStack.find((tech) => tech.id === 6),
      techStack.find((tech) => tech.id === 8),
    ].filter(Boolean),
    category: "FULL STACK",
  },
  {
    id: 5,
    title: "Web Landing Page Sekolah",
    name: "PKBM Yeremia",
    status: "preview",
    imgPath: "/assets/album/simpesa.png",
    url: "https://vue-school.vercel.app/",
    techStack: [
      techStack.find((tech) => tech.id === 2),
      techStack.find((tech) => tech.id === 5),
      techStack.find((tech) => tech.id === 9),
    ].filter(Boolean),
    category: "FRONTEND",
  },
  {
    id: 6,
    title: "UI/UX Mobile Apps",
    name: "Flora Scan",
    status: "preview",
    imgPath: "/assets/album/2.png",
    url: "https://rb.gy/ugcu2p",
    techStack: [techStack.find((tech) => tech.id === 1)].filter(Boolean),
    category: "UI/UX",
  },
  {
    id: 7,
    title: "Web Link Tree",
    name: "Nath Links",
    status: "preview",
    imgPath: "/assets/album/kpmi.png",
    url: "https://nath-links.vercel.app/",
    techStack: [
      techStack.find((tech) => tech.id === 2),
      techStack.find((tech) => tech.id === 5),
      techStack.find((tech) => tech.id === 9),
    ].filter(Boolean),
    category: "FRONTEND",
  },
  {
    id: 8,
    title: "Web Landing Page Rental Mobil",
    name: "Nath Rental",
    status: "preview",
    imgPath: "/assets/album/posbindu.png",
    url: "https://nath-rental.vercel.app/",
    techStack: [
      techStack.find((tech) => tech.id === 2),
      techStack.find((tech) => tech.id === 5),
      techStack.find((tech) => tech.id === 9),
    ].filter(Boolean),
    category: "FRONTEND",
  },
  {
    id: 9,
    title: "Web Landing Page Rental Mobil",
    name: "Nath Rental",
    status: "preview",
    imgPath: "/assets/album/online.png",
    url: "https://nath-rental.vercel.app/",
    techStack: [
      techStack.find((tech) => tech.id === 2),
      techStack.find((tech) => tech.id === 5),
      techStack.find((tech) => tech.id === 9),
    ].filter(Boolean),
    category: "FRONTEND",
  },
  // Tambahkan proyek lainnya
];

export default projects;

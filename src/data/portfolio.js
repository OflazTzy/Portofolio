import bankSampahImg from '../image/Bank sampah.png';
import clickbaitImg from '../image/Clikbait.png';
import mentalImg from '../image/Mental.png';
import trashGoImg from '../image/TrashGO.png';
import supplierImg from '../image/SPK.png';
import sigImg from '../image/sig.png';
import inflasiImg from '../image/inflasip.png';
import kaliImg from '../image/kali.png';
import forensicImg from '../image/forensic.png';

import msb2Img from '../image/MSB2.jpg';
import msibImg from '../image/MSIB.jpg';
import msib3Img from '../image/MSIB3.jpg';
import csAdvancedImg from '../image/cs_advanced.jpg';
import csBasicImg from '../image/cs_basic.jpg';
import csIntermediateImg from '../image/cs_intermediate.jpg';
import dbAdvancedImg from '../image/db_advanced.jpg';
import dbBasicImg from '../image/db_basic.jpg';
import dbIntermediateImg from '../image/db_intermediate.jpg';
import jaringanImg from '../image/jaringan.jpg';
import linuxImg from '../image/linux.jpg';
import lombaUiUxImg from '../image/lomba_uiux.jpg';
import oopImg from '../image/oop.jpg';
import webImg from '../image/web.jpg';

import profilePhoto from '../image/porto.jpg';

export const profile = {
  name: "Muhammad David Fawwas Olfat",
  firstName: "David",
  lastName: "Fawwas",
  headline: "Full Stack Developer",
  secondaryTitle: "Cyber Security",
  email: "davidfawwass@gmail.com",
  phone: "085601110230",
  linkedin: "https://www.linkedin.com/in/muhammad-david-fawwas-olfat-453418409",
  github: "https://github.com/OflazTzy",
  instagram: "https://www.instagram.com/david_fawwas",
  cvUrl: "/CV_Muhammad David Fawwas Olfat.pdf",
  photo: profilePhoto,
  description: "Fresh Graduate S1 Informatika Universitas PGRI Semarang dengan minat pada Web Development, Cyber Security, dan Networking.",
  extendedDesc: "Memiliki pengalaman mengembangkan aplikasi berbasis Laravel dan WordPress, membangun REST API, serta melakukan vulnerability assessment dan penetration testing.",
};

export const education = {
  university: "Universitas PGRI Semarang",
  degree: "Sarjana Informatika",
  faculty: "Fakultas Teknik dan Informatika",
  period: "September 2022 – Juli 2026",
  gpa: "3.87 / 4.00",
};

export const navigation = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Security", id: "security" },
  { label: "Experience", id: "experience" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    iconType: "frontend",
    skills: ["PHP", "JavaScript", "Python"],
  },
  {
    title: "Frameworks & Technologies",
    iconType: "backend",
    skills: ["Laravel", "WordPress", "REST API", "Bootstrap", "Tailwind", "React"],
  },
  {
    title: "Database",
    iconType: "database",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Cyber Security",
    iconType: "security",
    skills: ["Web Application Security", "OWASP Top 10", "Vulnerability Assessment", "Penetration Testing", "Digital Forensics"],
  },
  {
    title: "Security Tools",
    iconType: "tools",
    skills: ["Burp Suite", "WPScan", "Nmap", "Metasploit", "Nikto", "Gobuster", "Nuclei", "Wireshark"],
  },
  {
    title: "Networking",
    iconType: "networking",
    skills: ["TCP/IP", "OSI Model", "Subnetting", "DNS", "DHCP", "Routing", "Network Security"],
  },
  {
    title: "Machine Learning",
    iconType: "ml",
    skills: ["TensorFlow", "Scikit-learn", "Data Preprocessing", "Model Development"],
  },
  {
    title: "Design",
    iconType: "design",
    skills: ["Canva", "Figma", "Adobe Animate", "Microsoft PowerPoint"],
  },
  {
    title: "Operating System",
    iconType: "os",
    skills: ["Linux", "Windows"],
  },
];

export const projects = [
  {
    title: "Aplikasi Bank Sampah",
    titleEn: "Waste Bank Application",
    category: "Web",
    summary: "Aplikasi web manajemen bank sampah yang dibangun dengan framework modern dan Multi-Factor Authentication (MFA).",
    problem: "Manajemen bank sampah membutuhkan autentikasi pengguna yang aman dan pelacakan digital yang jelas.",
    solution: "Membangun solusi full-stack menggunakan React dan Laravel, serta mengimplementasikan MFA untuk keamanan.",
    impact: "Menghadirkan platform digital yang praktis dan aman untuk inisiatif keberlanjutan lingkungan lokal.",
    stack: ["React", "Laravel", "JavaScript", "MFA"],
    demo: null,
    github: "https://github.com/OflazTzy/bank-sampah",
    image: bankSampahImg,
    featured: true,
  },
  {
    title: "Sistem Prediksi Kesehatan Mental",
    titleEn: "Mental Health Prediction System",
    category: "ML",
    summary: "Sistem machine learning untuk menganalisis dan memprediksi status kesehatan mental mahasiswa.",
    problem: "Pelacakan kesehatan mental mahasiswa sering kali kekurangan alat deteksi awal yang otomatis.",
    solution: "Mengembangkan model prediktif dengan Python untuk menganalisis input survei dan mengklasifikasikan tingkat risiko.",
    impact: "Memberikan pendekatan berbasis data sebagai landasan untuk deteksi dini masalah kesehatan mental mahasiswa.",
    stack: ["Python", "Machine Learning", "Data Analysis"],
    demo: null,
    github: "https://github.com/OflazTzy/Sistem-Prediksi-Kesehatan-Mental-Mahasiswa",
    image: mentalImg,
  },
  {
    title: "Deteksi Clickbait dengan IndoBERT",
    titleEn: "Clickbait Detection with IndoBERT",
    category: "ML",
    summary: "Model NLP deteksi clickbait berbahasa Indonesia yang memanfaatkan arsitektur transformer IndoBERT.",
    problem: "Media digital Indonesia sering menggunakan judul clickbait menyesatkan yang menurunkan kualitas informasi.",
    solution: "Melatih model pemrosesan bahasa alami berbasis IndoBERT untuk mengklasifikasikan judul secara akurat.",
    impact: "Menunjukkan penerapan model Transformer canggih untuk menyelesaikan masalah misinformasi bahasa lokal.",
    stack: ["Python", "IndoBERT", "NLP", "Jupyter"],
    demo: null,
    github: "https://github.com/OflazTzy/Sistem-Deteksi-Clikbait-menggunakan-Indobert",
    image: clickbaitImg,
  },
  {
    title: "Keamanan Server",
    titleEn: "Reliable Server Infrastructure",
    category: "Cyber",
    summary: "Proyek komprehensif tentang merancang dan mendeploy infrastruktur server yang aman dan berkinerja tinggi.",
    problem: "Layanan web modern membutuhkan arsitektur server kuat yang tahan terhadap ancaman siber sekaligus menjaga uptime.",
    solution: "Mengimplementasikan konfigurasi server yang aman, kontrol akses yang diperketat, dan alur deployment yang andal.",
    impact: "Mendokumentasikan praktik terbaik untuk membangun lingkungan server yang tangguh dan tahan serangan siber.",
    stack: ["Cybersecurity", "Linux", "Server Admin", "Network Security"],
    demo: "https://medium.com/@peminecraft824/building-reliable-server-infrastructure-with-a-focus-on-cyber-security-fbc6f32be8cf",
    github: null,
    image: kaliImg,
  },
  {
    title: "Digital Forensic LoneWolf",
    titleEn: "Digital Forensic LoneWolf",
    category: "Cyber",
    summary: "Proyek investigasi forensik digital yang menganalisis 9 image disk 'LoneWolf' untuk menemukan bukti kejahatan.",
    problem: "Investigasi kejahatan siber membutuhkan metodologi terstruktur untuk mengekstrak, memverifikasi, dan menganalisis bukti digital.",
    solution: "Menggunakan alat seperti HashMyFiles dan Autopsy untuk mengidentifikasi file relevan, menyusun timeline, dan membuat laporan 5W1H.",
    impact: "Menunjukkan kemampuan forensik praktis, pemahaman tentang integritas bukti, dan penyusunan laporan insiden keamanan yang mendetail.",
    stack: ["Digital Forensics", "Autopsy", "HashMyFiles", "Cybersecurity"],
    demo: "https://www.academia.edu/126911688/Digital_Forensic_LoneWolf",
    github: null,
    image: forensicImg,
  },
  {
    title: "Prediksi Inflasi Pendidikan",
    titleEn: "Education Inflation Prediction",
    category: "ML",
    summary: "Sistem machine learning yang menggunakan Random Forest dan LSTM untuk memprediksi inflasi biaya pendidikan.",
    problem: "Kenaikan biaya pendidikan yang tidak terprediksi menyulitkan perencanaan keluarga dan perumusan kebijakan publik.",
    solution: "Membangun sistem prediksi berbasis web untuk memproyeksikan data historis inflasi hingga 12 bulan ke depan.",
    impact: "Membantu pengambil kebijakan dan masyarakat dengan visualisasi yang jelas untuk merespons perubahan ekonomi.",
    stack: ["Python", "Random Forest", "LSTM", "Machine Learning"],
    demo: "https://conference.upgris.ac.id/index.php/infest/article/view/7776",
    github: null,
    image: inflasiImg,
  },
  {
    title: "SPK Pemilihan Supplier",
    titleEn: "Web-Based Decision Support System",
    category: "Web",
    summary: "Sistem pendukung keputusan menggunakan metode Simple Additive Weighting (SAW) untuk efisiensi pemilihan supplier.",
    problem: "Toko kelontong menghadapi tantangan inventaris dan risiko finansial akibat proses pemilihan supplier yang kurang optimal.",
    solution: "Membangun aplikasi web yang mengevaluasi supplier berdasarkan kriteria diskon, layanan, garansi, tempo, dan keuntungan.",
    impact: "Meningkatkan efisiensi operasional dan kepuasan pelanggan melalui keputusan pembelian berbasis data.",
    stack: ["PHP", "Web Development", "Algoritma SAW", "Sistem Pendukung Keputusan"],
    demo: "https://conference.upgris.ac.id/index.php/infest/article/view/5572",
    github: null,
    image: supplierImg,
  },
  {
    title: "TrashGo UI/UX Design",
    titleEn: "TrashGo UI/UX Design",
    category: "Web",
    summary: "Proyek desain UI/UX untuk aplikasi mobile manajemen persampahan.",
    problem: "Aplikasi pengelolaan sampah dan daur ulang seringkali kurang ramah pengguna dan kurang menarik.",
    solution: "Merancang antarmuka aplikasi mobile yang intuitif dan menarik untuk mendorong pembuangan sampah yang benar.",
    impact: "Meningkatkan partisipasi pengguna dalam program daur ulang melalui desain yang aksesibel.",
    stack: ["Figma", "UI/UX", "Prototyping"],
    demo: "https://www.figma.com/design/8eSD4V5Uc3psbQQE3tiwWd/TrashGo?node-id=0-1&p=f&t=dVdm1nEhdJb1oZtG-0",
    github: null,
    image: trashGoImg,
  },
  {
    title: "Analisis SIG Persebaran Penyakit",
    titleEn: "GIS Disease Distribution Analysis",
    category: "Web",
    summary: "Aplikasi Sistem Informasi Geografis (SIG) untuk memetakan dan menganalisis kasus diare serta fasilitas kesehatan.",
    problem: "Intervensi kesehatan masyarakat sering kali kurang tepat sasaran karena kurangnya data geospasial terstruktur mengenai wabah.",
    solution: "Mengembangkan platform SIG dengan metode waterfall untuk memvisualisasikan sebaran kasus dan jangkauan fasilitas kesehatan.",
    impact: "Meningkatkan daya tanggap masyarakat dan menyediakan data spasial penting untuk intervensi kesehatan regional yang terarah.",
    stack: ["SIG", "HTML", "CSS", "JavaScript"],
    demo: "https://conference.upgris.ac.id/index.php/sens/article/view/5068",
    github: null,
    image: sigImg,
  },
];

export const experiences = [
  {
    period: "Juni 2026 – Sekarang",
    title: "Grafologiindonesia",
    role: "Web Developer & Penetration Tester",
    type: "Magang — WFH",
    description: null,
    buildSkills: ["WordPress", "Theme Customization", "Plugin Configuration", "Content Management", "Performance", "Stability"],
    secureSkills: ["OWASP Top 10", "OWASP WSTG", "Vulnerability Assessment", "Penetration Testing"],
    tools: ["WPScan", "Burp Suite", "Nuclei", "Nikto", "Gobuster", "Nmap"],
    highlight: true,
  },
  {
    period: "Januari – Desember 2025",
    title: "Laboratorium Informatika",
    role: "Asisten Dosen dan Laboratorium",
    type: null,
    description: "Membantu dosen dan mahasiswa selama praktikum, instalasi dan konfigurasi software, maintenance laboratorium, mengembangkan modul praktikum, mendukung operasional laboratorium, menggantikan dosen pada mata kuliah Struktur Data ketika dosen berhalangan.",
    buildSkills: null,
    secureSkills: null,
    tools: null,
  },
  {
    period: "Januari – April 2025",
    title: "Diskominfo Kabupaten Batang",
    role: "Statistik — Magang",
    type: null,
    description: "Website untuk memprediksi inflasi pendidikan menggunakan Flask dan LSTM (Long Short-Term Memory).",
    buildSkills: null,
    secureSkills: null,
    tools: ["Python", "Flask", "LSTM", "Machine Learning"],
  },
  {
    period: "September – Desember 2024",
    title: "PT. Cournet Bangun",
    role: "Cyber Security Specialist — MSIB",
    type: null,
    description: "Menyelesaikan program 4 bulan Cyber Security Specialist. Bidang utama: Network Security, Linux, Digital Forensics, Deployment Server, dan Web Security.",
    buildSkills: null,
    secureSkills: ["Network Security", "Linux", "Digital Forensics", "Deployment Server", "Web Security"],
    tools: ["Linux", "Nmap", "Metasploit", "Burp Suite", "Autopsy", "FTK Imager", "TryHackMe"],
  },
  {
    period: "2023 – Sekarang",
    title: "Freelance Full Stack Developer",
    role: "Full Stack Developer",
    type: null,
    description: null,
    responsibilities: [
      "Mengembangkan aplikasi web berbasis Laravel",
      "Merancang dan mengembangkan REST API",
      "Integrasi aplikasi web dan mobile",
      "Membangun workflow otomatis menggunakan n8n",
      "Implementasi autentikasi",
      "Manajemen basis data",
      "Optimasi performa aplikasi",
      "Deployment",
      "Pemeliharaan",
      "Dokumentasi sistem",
    ],
    buildSkills: null,
    secureSkills: null,
    tools: null,
  },
];

export const organization = {
  name: "UKKI UPGRIS / ROHIS",
  role: "Divisi Media",
  period: "Desember 2022 – Desember 2025",
  skills: ["Social Media", "Canva", "Promotional Content", "OBS", "Audio", "Documentation"],
};

export const publication = {
  title: "Explainable Machine Learning Framework for Outbound IoT Botnet DDoS Detection",
  journal: "Jurnal Sisfokom",
  indexing: "SINTA 3",
  year: "2026",
  connection: ["Machine Learning", "Networking", "Cyber Security"],
};

export const certifications = [
  {
    title: "MSIB Batch 7 - Program Completion 1",
    issuer: "Kampus Merdeka",
    date: "2024",
    category: "MSIB",
    skills: ["Professional Development", "Project Management"],
    image: msb2Img,
  },
  {
    title: "MSIB Batch 7 - Cyber Security",
    issuer: "Kampus Merdeka",
    date: "2024",
    category: "MSIB",
    skills: ["Cyber Security Specialist", "Independent Study"],
    image: msibImg,
  },
  {
    title: "MSIB Batch 7 - Program Completion 2",
    issuer: "Kampus Merdeka",
    date: "2024",
    category: "MSIB",
    skills: ["Soft Skills", "Team Collaboration"],
    image: msib3Img,
  },
  {
    title: "Cyber Security Advanced",
    issuer: "Course-Net",
    date: "2024",
    category: "Cybersecurity",
    skills: ["Penetration Testing", "Advanced Security", "Threat Mitigation"],
    image: csAdvancedImg,
  },
  {
    title: "Cyber Security Intermediate",
    issuer: "Course-Net",
    date: "2024",
    category: "Cybersecurity",
    skills: ["Network Security", "Vulnerability Assessment", "Security Operations"],
    image: csIntermediateImg,
  },
  {
    title: "Cyber Security Basic",
    issuer: "Course-Net",
    date: "2024",
    category: "Cybersecurity",
    skills: ["Linux Basics", "Network Scanning", "Threat Awareness"],
    image: csBasicImg,
  },
  {
    title: "Database Advanced",
    issuer: "Course-Net",
    date: "2024",
    category: "Database",
    skills: ["Advanced Queries", "Optimization", "Database Design"],
    image: dbAdvancedImg,
  },
  {
    title: "Database Intermediate",
    issuer: "Course-Net",
    date: "2024",
    category: "Database",
    skills: ["SQL Joins", "Stored Procedures", "Data Modeling"],
    image: dbIntermediateImg,
  },
  {
    title: "Database Basic",
    issuer: "Course-Net",
    date: "2024",
    category: "Database",
    skills: ["SQL Fundamentals", "CRUD Operations", "Schema Design"],
    image: dbBasicImg,
  },
  {
    title: "Computer Networks",
    issuer: "Course-Net",
    date: "2024",
    category: "Networking",
    skills: ["TCP/IP", "Routing", "Network Administration"],
    image: jaringanImg,
  },
  {
    title: "Linux Administration",
    issuer: "Coding Studio",
    date: "2024",
    category: "System Admin",
    skills: ["CLI", "Server Management", "Bash Scripting"],
    image: linuxImg,
  },
  {
    title: "UI/UX Design Competition",
    issuer: "Competition",
    date: "2025",
    category: "UI/UX",
    skills: ["User Interface", "Prototyping", "User Experience"],
    image: lombaUiUxImg,
  },
  {
    title: "Object-Oriented Programming (OOP)",
    issuer: "Course-Net",
    date: "2024",
    category: "Programming",
    skills: ["Java/C++", "Design Patterns", "Software Architecture"],
    image: oopImg,
  },
  {
    title: "Web Development",
    issuer: "Dicoding",
    date: "2026",
    category: "Web Development",
    skills: ["HTML/CSS", "JavaScript", "Frontend Frameworks"],
    image: webImg,
  },
];

export const cyberSecuritySkills = [
  "Web Application Security",
  "OWASP Top 10",
  "Vulnerability Assessment",
  "Penetration Testing",
  "Digital Forensics",
  "Network Security",
];

export const networkingSkills = [
  "TCP/IP",
  "OSI Model",
  "Subnetting",
  "DNS",
  "DHCP",
  "Routing",
  "Network Security",
];

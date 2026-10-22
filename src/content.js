// All the words on the site live here. Edit this file to update the portfolio;
// the layout in App.jsx doesn't need to change.

export const person = {
  name: 'Kian Mwiberi',
  role: 'Full-stack developer and IT systems support',
  location: 'Nairobi, Kenya',
  email: 'muchemikian@gmail.com',
  phone: '+254 748 111 373',
  github: 'https://github.com/Mwiberikian',
  linkedin: 'https://www.linkedin.com/in/kian-muchemi/',
  cv: '/Kian_Mwiberi_CV.pdf',
  intro:
    'I build web applications end to end, from the React screens people use to the Node.js services and PostgreSQL tables behind them. I’m in my final year of Informatics and Computer Science at Strathmore University.',
}

// The handover note at the top of the page.
export const handover = [
  { field: 'Status', value: 'Final year, BSc Informatics and Computer Science, Strathmore University' },
  { field: 'Working on', value: 'A shift handover system for airline operations (my capstone, due November 2026)' },
  { field: 'Open to', value: 'Graduate roles in software development or IT systems' },
  { field: 'Based in', value: 'Nairobi, Kenya' },
]

export const featured = {
  title: 'Shift Handover Management System',
  context: 'Final-year project, designed for Kenya Airways',
  when: '2026 – present',
  summary:
    'When one shift hands over to the next, the details live in conversations and paper notes. This system turns each handover into a structured record that the next shift has to acknowledge and a supervisor can audit.',
  flow: [
    { who: 'Outgoing staff', does: 'log open tasks and incidents' },
    { who: 'Incoming staff', does: 'acknowledge the handover or raise a query' },
    { who: 'Supervisors', does: 'review and track handovers across departments' },
    { who: 'Admins', does: 'manage users, roles and departments' },
  ],
  points: [
    'Covers four departments: ground operations, maintenance, customer service and flight operations.',
    'Authentication, the full handover lifecycle, admin tools and role dashboards, with an automated test suite.',
    'Planned and delivered over four Agile Scrum sprints using object-oriented analysis and design.',
  ],
  stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
}

// Projects with highlight: true get a full entry; the rest appear as short
// lines under "Earlier projects".
export const projects = [
  {
    title: 'PageVault',
    highlight: true,
    kind: 'Digital library platform',
    summary:
      'A library site for fiction, fantasy, comics, manga and autobiographies. Readers search by title or author, filter by genre, read in the browser and keep a reading history. Admins manage the catalogue and user accounts.',
    detail:
      'Accounts use hashed passwords, session auth, prepared statements, CSRF tokens and time-limited reset links.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    link: { label: 'Code on GitHub', href: 'https://github.com/Mwiberikian/library' },
  },
  {
    title: 'School Clubs Management System',
    kind: 'Web platform',
    summary:
      'Helps students find campus clubs, join them and keep up with their events. Tested at Strathmore.',
    stack: ['PHP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Real Estate Management System',
    kind: 'Web platform',
    summary: 'Lets property managers run and monitor their estates from one place.',
    stack: ['PHP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Campus Flea Market App',
    kind: 'Android app',
    summary: 'Tells students when the next campus flea market is on, with prices and stall locations.',
    stack: ['Kotlin'],
  },
  {
    title: 'ESP32 Environmental Monitor',
    kind: 'Embedded systems',
    summary:
      'A sensor rig for flower growing that shows temperature, humidity and gas levels on an OLED screen. I designed the circuit schematic.',
    stack: ['ESP32', 'DHT22', 'MQ-5', 'EasyEDA'],
  },
]

export const experience = [
  {
    role: 'IT Assistant, industrial attachment',
    org: 'Kenyatta National Hospital, Nairobi',
    when: 'Jan – Mar 2026',
    points: [
      'Worked with the ICT team on system design and architecture for the hospital’s internal systems.',
      'Diagnosed and fixed hardware faults on staff computers and devices.',
      'Handled network and domain administration, including connectivity issues and domain accounts.',
    ],
  },
]

export const education = {
  degree: 'BSc Informatics and Computer Science',
  school: 'Strathmore University, Nairobi',
  when: '2022 – 2026 (expected)',
  coursework:
    'Distributed systems, cloud computing, information systems security, database management, machine learning, data structures and algorithms, embedded systems and IoT.',
}

export const skills = [
  { group: 'Languages', items: ['JavaScript', 'PHP', 'SQL', 'C++', 'Kotlin', 'HTML', 'CSS'] },
  { group: 'Frameworks and tools', items: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Docker', 'Git and GitHub', 'Vite'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL'] },
  { group: 'IT and systems', items: ['Network troubleshooting', 'domain administration', 'hardware support', 'system design (UML, OOAD)', 'Agile Scrum'] },
]

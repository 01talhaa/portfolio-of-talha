const fs = require('fs');
const path = require('path');

const files = [
  'components/Hero.tsx', 'components/About.tsx', 'components/Contact.tsx',
  'components/Education.tsx', 'components/Experience.tsx', 'components/Footer.tsx',
  'components/GitHubStats.tsx', 'components/ProjectGallery.tsx', 'components/Projects.tsx',
  'components/TechStack.tsx', 'components/Testimonials.tsx', 'components/Trust.tsx',
  'components/Navbar.tsx',
  'app/page.tsx', 'app/projects/[slug]/page.tsx'
];

files.forEach(file => {
  const p = path.join(__dirname, file);
  if (!fs.existsSync(p)) return;
  let content = fs.readFileSync(p, 'utf8');

  // Fix pseudo class bugs from previous script
  content = content.replace(/hover:bg-zinc-900 dark:bg-white/g, 'hover:bg-zinc-900 dark:hover:bg-white');
  content = content.replace(/hover:text-zinc-900 dark:text-white/g, 'hover:text-zinc-900 dark:hover:text-white');
  content = content.replace(/hover:text-zinc-50 dark:text-black/g, 'hover:text-zinc-50 dark:hover:text-black');
  
  // group-hover fixes
  content = content.replace(/group-hover:bg-zinc-900 dark:bg-white/g, 'group-hover:bg-zinc-900 dark:group-hover:bg-white');
  content = content.replace(/group-hover:text-zinc-900 dark:text-white/g, 'group-hover:text-zinc-900 dark:group-hover:text-white');

  // Fix Footer background explicitly
  content = content.replace(/bg-\[#050505\]/g, 'bg-zinc-50 dark:bg-[#050505]');

  // Make dark theme texts brighter
  content = content.replace(/dark:text-zinc-400/g, 'dark:text-zinc-300');
  content = content.replace(/dark:text-zinc-500/g, 'dark:text-zinc-400');
  content = content.replace(/dark:text-zinc-600/g, 'dark:text-zinc-400');
  content = content.replace(/dark:text-white\/80/g, 'dark:text-white/95');
  content = content.replace(/dark:text-zinc-300/g, 'dark:text-zinc-100');

  // Make light theme texts darker
  content = content.replace(/text-zinc-600(?![a-zA-Z0-9_-])/g, 'text-zinc-800');
  content = content.replace(/text-zinc-500(?![a-zA-Z0-9_-])/g, 'text-zinc-700');
  content = content.replace(/text-zinc-400(?![a-zA-Z0-9_-])/g, 'text-zinc-600');
  content = content.replace(/text-black\/80/g, 'text-black/95');

  // Additional check: text-zinc-900 -> let it be, it's already very dark.
  
  fs.writeFileSync(p, content, 'utf8');
});
console.log("Adjustments complete!");

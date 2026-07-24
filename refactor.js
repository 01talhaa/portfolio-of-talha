const fs = require('fs');
const path = require('path');

const files = [
  'components/Hero.tsx', 'components/About.tsx', 'components/Contact.tsx',
  'components/Education.tsx', 'components/Experience.tsx', 'components/Footer.tsx',
  'components/GitHubStats.tsx', 'components/ProjectGallery.tsx', 'components/Projects.tsx',
  'components/TechStack.tsx', 'components/Testimonials.tsx', 'components/Trust.tsx',
  'app/page.tsx', 'app/projects/[slug]/page.tsx'
];

files.forEach(file => {
  const p = path.join(__dirname, file);
  if (!fs.existsSync(p)) return;
  let content = fs.readFileSync(p, 'utf8');

  // Skip if already processed extensively (e.g. Navbar is skipped because not in list)

  // Replace bg-black with bg-zinc-50 dark:bg-black
  content = content.replace(/(?<!dark:)\bbg-black(\/[0-9]+)?\b/g, (match, p1) => {
    if (!p1) return 'bg-zinc-50 dark:bg-black';
    return `bg-black/5 dark:bg-black${p1}`;
  });

  // text-white -> text-zinc-900 dark:text-white
  content = content.replace(/(?<!dark:)\btext-white\b/g, 'text-zinc-900 dark:text-white');
  
  // text-white/80 -> text-black/80 dark:text-white/80
  content = content.replace(/(?<!dark:)\btext-white\/([0-9]+)\b/g, 'text-black/$1 dark:text-white/$1');

  // bg-white/10 -> bg-black/10 dark:bg-white/10
  content = content.replace(/(?<!dark:)\bbg-white\/([0-9]+)\b/g, 'bg-black/$1 dark:bg-white/$1');
  
  // bg-white/[0.02] -> bg-black/[0.02] dark:bg-white/[0.02]
  content = content.replace(/(?<!dark:)\bbg-white\/\[([^\]]+)\]\b/g, 'bg-black/[$1] dark:bg-white/[$1]');

  // border-white/10 -> border-black/10 dark:border-white/10
  content = content.replace(/(?<!dark:)\bborder-white\/([0-9]+)\b/g, 'border-black/$1 dark:border-white/$1');

  // ring-white/10 -> ring-black/10 dark:ring-white/10
  content = content.replace(/(?<!dark:)\bring-white\/([0-9]+)\b/g, 'ring-black/$1 dark:ring-white/$1');

  // bg-white -> bg-zinc-900 dark:bg-white
  content = content.replace(/(?<!dark:)\bbg-white(?!\/)\b/g, 'bg-zinc-900 dark:bg-white');

  // text-black -> text-zinc-50 dark:text-black
  content = content.replace(/(?<!dark:)\btext-black(?!\/)\b/g, 'text-zinc-50 dark:text-black');
  
  // text-zinc-300 -> text-zinc-600 dark:text-zinc-300
  content = content.replace(/(?<!dark:)\btext-zinc-300\b/g, 'text-zinc-600 dark:text-zinc-300');

  // text-zinc-400 -> text-zinc-500 dark:text-zinc-400
  content = content.replace(/(?<!dark:)\btext-zinc-400\b/g, 'text-zinc-600 dark:text-zinc-400');
  
  // shadow arbitrary values
  // e.g. shadow-[0_0_30px_rgba(255,255,255,0.05)]
  content = content.replace(/(?<!dark:)shadow-\[([^\]]*rgba\(255,255,255,[0-9.]+\)[^\]]*)\]/g, (match, p1) => {
    let lightShadow = `shadow-[${p1.replace(/rgba\(255,255,255,/g, 'rgba(0,0,0,')}]`;
    return `${lightShadow} dark:${match}`;
  });

  // text-zinc-500 (sometimes needs to be darker in light mode)
  // Let's just leave it, zinc-500 works on light and dark generally.
  
  fs.writeFileSync(p, content, 'utf8');
});
console.log("Refactoring complete!");

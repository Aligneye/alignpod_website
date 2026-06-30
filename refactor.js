import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

function refactorFile(filePath) {
  if (!filePath.endsWith('.tsx')) return;
  if (filePath.includes('components/ui/')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Reusable component injections
  let imports = [];

  // Buttons
  content = content.replace(/className="[^"]*px-10 py-5 bg-[#111111] text-white rounded-full font-semibold text-lg[^"]*"/g, 'className="btn-primary-light w-full sm:w-auto"');
  content = content.replace(/className="[^"]*px-10 py-5 bg-white text-\[#111111\] border border-gray-200 rounded-full font-semibold text-lg[^"]*"/g, 'className="btn-secondary-light w-full sm:w-auto"');
  content = content.replace(/className="[^"]*px-10 py-5 bg-white text-\[#111111\] rounded-full font-semibold text-lg[^"]*"/g, 'className="btn-primary-dark w-full sm:w-auto"');
  content = content.replace(/className="[^"]*px-10 py-5 bg-transparent text-white border border-white\/20 rounded-full font-semibold text-lg[^"]*"/g, 'className="btn-secondary-dark w-full sm:w-auto"');
  
  // Forms
  if (content.includes('FormInput') === false && content.includes('<input')) {
    // Only replacing the specific inputs from Contact.tsx if needed, but safer to skip complex regex logic for Forms in this script.
  }

  // Cards
  content = content.replace(/className="[^"]*bg-white p-8 lg:p-10 rounded-\[32px\] border border-\[#E7E7E7\][^"]*"/g, 'className="card-light"');
  content = content.replace(/className="[^"]*bg-\[#F8F8F6\] p-10 rounded-\[32px\] border border-\[#E7E7E7\][^"]*"/g, 'className="card-light"');
  content = content.replace(/className="[^"]*bg-white\/70 backdrop-blur-xl rounded-\[24px\] p-8 border border-gray-200\/80 shadow-[^"]*"/g, 'className="card-light"');
  content = content.replace(/className="[^"]*bg-white\/5 border border-white\/10 rounded-\[32px\] p-10 lg:p-12[^"]*"/g, 'className="card-dark"');

  // Headings
  content = content.replace(/className="[^"]*text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight[^"]*"/g, 'className="heading-section text-[#111111] mb-6"');
  content = content.replace(/className="[^"]*text-4xl sm:text-5xl font-display font-bold tracking-tight mb-[0-9]+[^"]*"/g, 'className="heading-section mb-8"');
  content = content.replace(/className="[^"]*text-xl font-display font-semibold text-\[#111111\] mb-2[^"]*"/g, 'className="heading-card"');
  content = content.replace(/className="[^"]*text-xl font-display font-semibold mb-3[^"]*"/g, 'className="heading-card"');
  content = content.replace(/className="[^"]*text-xl font-display font-semibold mb-4[^"]*"/g, 'className="heading-card mb-4"');
  
  // Body Text
  content = content.replace(/className="[^"]*text-[#6B7280] leading-relaxed font-light text-base[^"]*"/g, 'className="text-body text-[#6B7280]"');
  content = content.replace(/className="[^"]*text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light[^"]*"/g, 'className="text-body text-[#6B7280]"');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

walk('./src/components', refactorFile);
walk('./src/pages', refactorFile);

const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(directoryPath);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Remove text gradients entirely, replacing with just text-primary
    content = content.replace(/text-transparent bg-clip-text bg-gradient-to-[a-z]+ from-[a-zA-Z0-9/-]+ to-[a-zA-Z0-9/-]+/g, 'text-primary');

    // Remove simple background gradients
    content = content.replace(/bg-gradient-to-[a-z]+\sfrom-[a-zA-Z0-9/-\[\]]+\sto-[a-zA-Z0-9/-\[\]]+/g, 'bg-slate-50');
    content = content.replace(/bg-gradient-to-[a-z]+\sfrom-[a-zA-Z0-9/-\[\]]+\n?\s*to-[a-zA-Z0-9/-\[\]]+/g, 'bg-slate-50');

    // Convert rounded-full to rounded-md (or lg) as requested (boxier buttons)
    content = content.replace(/rounded-full/g, 'rounded-lg');
    content = content.replace(/rounded-3xl/g, 'rounded-xl');

    // Remove explicit linear gradients from inline styles if present
    content = content.replace(/backgroundImage:\s*'linear-gradient[^)]+\),\s*/g, 'backgroundImage: ');

    if (original !== content) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});

const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    
    // Remove the entire list item containing the blog.html link
    content = content.replace(/<li>\s*<a href="blog\.html"[^>]*>[\s\S]*?<\/a>\s*<\/li>/g, '');
    
    // Update about.html to index.html#about
    content = content.replace(/href="about\.html"/g, 'href="index.html#about"');
    
    // Update services.html to index.html#services
    content = content.replace(/href="services\.html"/g, 'href="index.html#services"');
    
    fs.writeFileSync(f, content);
});

console.log(`Fixed footer links in ${files.length} HTML files.`);

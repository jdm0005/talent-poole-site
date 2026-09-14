// Maintenance helper only: the deployed site has no build step or dependencies.
import fs from 'node:fs';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const context = {window:{}};
vm.runInNewContext(fs.readFileSync(root + 'content/site-content.js', 'utf8'), context);
const content = context.window.SITE_CONTENT;
const get = path => path.split('.').reduce((value,key) => value[key], content);
const escape = value => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const path = root + 'index.html';
const original = fs.readFileSync(path,'utf8');
let result = original.replace(/(<([\w-]+)\b[^>]*data-content="([^"]+)"[^>]*>)[\s\S]*?(<\/\2>)/g, (_,open,tag,key,close) => open + escape(get(key)) + close);
result = result.replace(/(<(div|ol)\b[^>]*data-list="([^"]+)"[^>]*>)[\s\S]*?(<\/\2>)/g, (_,open,tag,key,close) => {
  const items=get(key).map(item => tag === 'ol' ? `<li><h3>${escape(item.title)}</h3><p>${escape(item.copy)}</p></li>` : `<article class="feature-item"><h3>${escape(item.title)}</h3><p>${escape(item.copy)}</p></article>`);
  return open + '\n          ' + items.join('\n          ') + '\n        ' + close;
});
result = result.replace(/(<a\b[^>]*data-email-link[^>]*href=")[^"]*("[^>]*>)[\s\S]*?<\/a>/g,(_,a,b)=>a+'mailto:'+escape(content.agency.email)+b+escape(content.agency.email)+'</a>');
result = result.replace(/(<a\b[^>]*data-phone-link[^>]*href=")[^"]*("[^>]*>)[\s\S]*?<\/a>/g,(_,a,b)=>a+escape(content.agency.phoneHref)+b+escape(content.agency.phone)+'</a>');
result = result.replace(/(<a\b[^>]*data-email-cta[^>]*href=")[^"]*/g,(_,a)=>a+'mailto:'+escape(content.agency.email));
result = result.replace(/(<a\b[^>]*data-linkedin-link[^>]*href=")[^"]*/g,(_,a)=>a+escape(content.agency.linkedin));
result = result.replace(/(<a\b[^>]*data-email-intent="([^"]+)"[^>]*href=")[^"]*/g,(_,a,intent)=>a+'mailto:'+escape(content.agency.email)+'?subject='+encodeURIComponent(content.contact[intent+'Subject']));
if (process.argv.includes('--check')) { if (result !== original) { console.error('Static HTML is out of sync. Run node scripts/sync-content.mjs'); process.exitCode=1; } else console.log('Static content is in sync.'); }
else { fs.writeFileSync(path,result); console.log('Updated static fallback content.'); }

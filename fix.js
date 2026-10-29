const fs = require('fs');
const files = ['src/layouts/MainLayout.jsx','src/pages/Contact.jsx','src/components/StaffRequestModal.jsx'];
for (const f of files) {
  const p = f;
  try {
    const buf = fs.readFileSync(p);
    fs.writeFileSync(p, buf.toString('utf8'), 'utf8');
    console.log('ok');
  } catch(e) {
    console.log(e.message);
  }
}

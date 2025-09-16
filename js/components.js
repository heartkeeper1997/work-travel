async function loadComponent(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`ไม่สามารถโหลด ${file}`);
    document.getElementById(id).innerHTML = await res.text();
  } catch (err) {
    console.error(err);
    document.getElementById(id).innerHTML = `<p style="color:red;">โหลด ${file} ไม่สำเร็จ</p>`;
  }
}
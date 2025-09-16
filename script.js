import { initLoader } from './js/loader.js';
import { initLanguage } from './js/language.js';
import { initMusic } from './js/music.js';
import { initCountdown } from './js/countdown.js';
import { initScrollTop } from './js/scrollTop.js';

// ฟังก์ชันสำหรับโหลด Component (จาก js/components.js)
async function loadComponent(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`ไม่สามารถโหลด ${file}`);
    document.getElementById(id).innerHTML = await res.text();
  } catch (err) {
    console.error(err);
    document.getElementById(id).innerHTML = `<p style="color:red;">โหลด ${id} ไม่สำเร็จ</p>`;
  }
}

// ฟังก์ชันสำหรับเรียกโหลด Component ทั้งหมด
async function loadAllComponents() {
    const componentPromises = [
        loadComponent('loader-component', 'components/loader.html'),
        loadComponent('header-component', 'components/header.html'),
        loadComponent('map-component', 'components/map.html'),
        loadComponent('travel-dates-component', 'components/travel-dates.html'),
        loadComponent('vote-section-component', 'components/vote-section.html'),
        loadComponent('notes-component', 'components/notes.html'),
        loadComponent('footer-component', 'components/footer.html'),
        loadComponent('audio-controls-component', 'components/audio-controls.html'),
        loadComponent('scroll-top-component', 'components/scroll-top.html')
    ];
    // รอให้ทุก Component โหลดเสร็จก่อน
    await Promise.all(componentPromises);
}

// เมื่อหน้าเว็บโหลดเสร็จ
window.addEventListener('DOMContentLoaded', async () => {
  // 1. โหลด Component ทั้งหมดเข้ามาก่อน
  await loadAllComponents();
  
  // 2. เริ่มการทำงานของโมดูลต่างๆ
  initLoader();
  initScrollTop();
  initLanguage();
  initMusic();
  initCountdown();
});
const translations = {
  en: {
    pageTitle: "Let's go work at the Chiang Mai office",
    headerTitle: "🧳 Off-site Work Announcement",
    cityBangkok: "🏢 Bangkok",
    cityChiangmai: "🏔️ Chiang Mai",
    datesTitle: "📅 Travel Schedule",
    datesInfo: `Bangkok → <a href="https://maps.app.goo.gl/KVdA1FDkBZQXFtiN6" target="_blank" rel="noopener noreferrer" class="location-link">Chiang Mai 📍</a><br><strong>October 25 – November 1, 2025</strong>`,
    voteTitle: "Sign up for the trip",
    countdownExpired: `<h3 style="padding: 10px 0; text-align: center; color: #c0392b;">Registration has closed</h3>`,
    voteDescription: "Please click the button below to access the registration form.",
    voteNote: `* The "Register" button will be disabled after the period ends.`,
    registerBtnText: "Open Form",
    resultsBtnText: "View Results",
    notesTitle: "📋 Notes",
    noteItem1: "Accommodation for sleeping is available at the Chiang Mai office.",
    noteItem2: "Those starting their journey after Oct 25 or wishing to return earlier, please plan your round trip yourself.",
    noteItem3: "<b>Important:</b> All travelers must request permission from their supervisors beforehand.",
    footerCredit: "By ใจง่าย Gang",
    labelDays: "Days",
    labelHours: "Hours",
    labelMinutes: "Minutes",
    labelSeconds: "Seconds",
    loadingText: "Traveling..."
  },
  th: {
    pageTitle: "ไปทำงานที่ออฟฟิศเชียงใหม่กัน",
    headerTitle: "🧳 ไปทำงานที่ออฟฟิศเชียงใหม่กัน",
    cityBangkok: "🏢 กรุงเทพฯ",
    cityChiangmai: "🏔️ เชียงใหม่",
    datesTitle: "📅 กำหนดการเดินทาง",
    datesInfo: `กรุงเทพฯ → <a href="https://maps.app.goo.gl/KVdA1FDkBZQXFtiN6" target="_blank" rel="noopener noreferrer" class="location-link">เชียงใหม่ 📍</a><br><strong>วันที่ 25 ตุลาคม – 1 พฤศจิกายน 2568</strong>`,
    voteTitle: "ลงชื่อเข้าร่วมการเดินทาง",
    countdownExpired: `<h3 style="padding: 10px 0; text-align: center; color: #c0392b;">หมดเวลาลงทะเบียนแล้ว</h3>`,
    voteDescription: "กรุณาคลิกปุ่มด้านล่างเพื่อไปยังฟอร์มสำหรับลงชื่อเข้าร่วมการเดินทาง",
    voteNote: `* ปุ่ม "เปิดฟอร์มลงทะเบียน" จะถูกปิดเมื่อสิ้นสุดระยะเวลา`,
    registerBtnText: "เปิดฟอร์มลงทะเบียน",
    resultsBtnText: "ดูผลลัพธ์",
    notesTitle: "📋 หมายเหตุ",
    noteItem1: "มีที่พักสำหรับการนอนภายในบริเวณออฟฟิศที่เชียงใหม่",
    noteItem2: "ผู้ที่เริ่มเดินทางภายหลังวันที่ 25 ตุลาคม หรือผู้ใดที่ประสงค์กลับก่อน กรุณาวางแผนการเดินทางไป–กลับด้วยตนเอง",
    noteItem3: "<b>สำคัญมาก:</b> ผู้ที่จะเดินทาง ขอความกรุณา ขออนุญาตหัวหน้าก่อน",
    footerCredit: "By ใจง่าย Gang",
    labelDays: "วัน",
    labelHours: "ชั่วโมง",
    labelMinutes: "นาที",
    labelSeconds: "วินาที",
    loadingText: "กำลังเดินทาง..."
  }
};

export function initLanguage() {
  const langSwitcher = document.getElementById('langSwitcher');
  let currentLang = localStorage.getItem('lang') || 'th';

  const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    document.querySelectorAll('[data-lang]').forEach((el) => {
      const key = el.getAttribute('data-lang');
      const text = translations[lang]?.[key];
      if (!text) return;

      if (['datesInfo', 'noteItem3', 'countdownExpired'].includes(key)) {
        el.innerHTML = text;
      } else {
        el.innerText = text;
      }
    });

    document.documentElement.lang = lang;
    langSwitcher.innerText = lang === 'th' ? 'EN' : 'TH';
  };

  langSwitcher.addEventListener('click', () => {
    setLanguage(currentLang === 'th' ? 'en' : 'th');
  });

  setLanguage(currentLang);
}

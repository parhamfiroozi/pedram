// 1️⃣ Speed grades (default 0 = not set)
const speedGrades = {
  "جبر و معادله":0, "دایره":0, "الکتریسیته ساکن":0, "آشنایی با مبانی ریاضیات":0,
  "قدر هدایای زمینی":0, "تابع":0, "ماتریس و کاربردها":0, "آشنایی با نظریه اعداد":0,
  "حرکت بر خط راست":0, "مولکول‌ها در خدمت تندرستی":0, "جریان الکتریکی":0, "احتمال":0,
  "اسیدها و بازها":0, "رسانایی الکتریکی":0, "مثلثات":0, "حد و پیوستگی":0,
  "تبدیل‌های هندسی":0, "روابط طولی در مثلث":0, "آمار توصیفی":0, "آمار استنباطی":0,
  "پوشاک، نیازی پایان‌ناپذیر":0, "دینامیک":0, "القای الکترومغناطیسی":0,
  "مجموعه، الگو و دنباله + مثلثات":0, "ترسیم‌های هندسی و استدلال":0,
  "فیزیک و اندازه‌گیری":0, "کیهان زادگاه الفبای هستی":0, "قضیه تالس، تشابه":0,
  "ویژگی‌های فیزیکی مواد":0, "معادله‌ها و نامعادله‌ها + تابع":0, "چندضلعی‌ها":0,
  "کار، انرژی و توان":0, "ردپای گازها در زندگی":0, "تابع + شمارش":0, "دما و گرما":0,
  "ردپای گازها + آب":0, "مغناطیس":0, "توابع نمایی و لگاریتمی":0,
  "در پی غذای سالم":0, "ریاضیات گسسته":0, "محاسبات برداری":0
};

// 2️⃣ Major → subject-weight & color
const majorConfig = {
 "مهندسي برق": { weights: { "الکتریسیته ساکن": 0.25, "جریان الکتریکی": 0.25, "مغناطیس": 0.2, "توابع نمایی و لگاریتمی": 0.15, "ریاضیات گسسته": 0.15 }, color: '#f1c40f' },
        "مهندسي پزشكي": { weights: { "مولکول‌ها در خدمت تندرستی": 0.3, "قدر هدایای زمینی": 0.2, "در پی غذای سالم": 0.2, "تابع": 0.15, "آمار توصیفی": 0.15 }, color: '#9b59b6' },
        "مهندسي كامپيوتر": { weights: { "ماتریس و کاربردها": 0.25, "آشنایی با نظریه اعداد": 0.25, "تابع": 0.2, "ریاضیات گسسته": 0.2, "تبدیل‌های هندسی": 0.1 }, color: '#3498db' },
        "مهندسي معدن": { weights: { "مغناطیس": 0.3, "ریاضیات گسسته": 0.2, "آمار توصیفی": 0.2, "تابع": 0.15, "دینامیک": 0.15 }, color: '#795548' },
        "مهندسي معماري": { weights: { "تبدیل‌های هندسی": 0.25, "روابط طولی در مثلث": 0.2, "ترسیم‌های هندسی و استدلال": 0.25, "حد و پیوستگی": 0.15, "تابع": 0.15 }, color: '#1abc9c' },
        "مهندسي مكانيك": { weights: { "دینامیک": 0.3, "حرکت بر خط راست": 0.25, "مغناطیس": 0.2, "توابع نمایی و لگاریتمی": 0.15, "ریاضیات گسسته": 0.1 }, color: '#e74c3c' },
        "مهندسي هوافضا": { weights: { "دینامیک": 0.25, "مغناطیس": 0.2, "حرکت بر خط راست": 0.2, "توابع نمایی و لگاریتمی": 0.2, "ریاضیات گسسته": 0.15 }, color: '#34495e' },
        "مهندسي نفت و زمينانرژي": { weights: { "الکتریسیته ساکن": 0.2, "مغناطیس": 0.2, "آمار توصیفی": 0.2, "آمار استنباطی": 0.2, "توابع نمایی و لگاریتمی": 0.2 }, color: '#000000' },
        "مهندسي و علم مواد": { weights: { "آشنایی با نظریه اعداد": 0.25, "ماتریس و کاربردها": 0.25, "حد و پیوستگی": 0.2, "تابع": 0.15, "آمار توصیفی": 0.15 }, color: '#bdc3c7' },
        "مهندسي شهرسازي": { weights: { "آمار توصیفی": 0.3, "روابط طولی در مثلث": 0.25, "تبدیل‌های هندسی": 0.25, "حد و پیوستگی": 0.1, "تابع": 0.1 }, color: '#27ae60' },
        "مهندسي دريا": { weights: { "دینامیک": 0.3, "حرکت بر خط راست": 0.25, "آمار توصیفی": 0.2, "آمار استنباطی": 0.15, "تابع": 0.1 }, color: '#2980b9' },
        "مديريت صنعتي": { weights: { "آمار توصیفی": 0.3, "آمار استنباطی": 0.3, "تابع": 0.2, "ریاضیات گسسته": 0.2 }, color: '#f39c12' },
        "مديريت دولتي": { weights: { "آمار توصیفی": 0.35, "آمار استنباطی": 0.25, "احتمال": 0.2, "تابع": 0.2 }, color: '#d35400' },
        "گردشگري": { weights: { "آمار توصیفی": 0.4, "آمار استنباطی": 0.3, "تبدیل‌های هندسی": 0.15, "حد و پیوستگی": 0.15 }, color: '#c0392b' },
        "فيزيك": { weights: { "الکتریسیته ساکن": 0.2, "جریان الکتریکی": 0.2, "مغناطیس": 0.2, "القای الکترومغناطیسی": 0.2, "دینامیک": 0.2 }, color: '#e67e22' },
        "فناوري اطلاعات و ارتباطات": { weights: { "ماتریس و کاربردها": 0.3, "آشنایی با نظریه اعداد": 0.3, "تابع": 0.2, "تبدیل‌های هندسی": 0.2 }, color: '#8e44ad' },
        "مديريت بازرگاني": { weights: { "آمار توصیفی": 0.3, "آمار استنباطی": 0.3, "احتمال": 0.2, "تابع": 0.2 }, color: '#2c3e50' },
        "علوم و مهندسي آب": { weights: { "آمار توصیفی": 0.3, "آمار استنباطی": 0.3, "احتمال": 0.2, "دینامیک": 0.2 }, color: '#16a085' },
        "علوم كامپيوتر": { weights: { "ماتریس و کاربردها": 0.25, "آشنایی با نظریه اعداد": 0.25, "تابع": 0.2, "ریاضیات گسسته": 0.2, "تبدیل‌های هندسی": 0.1 }, color: '#3498db' },
        "معماري داخلي": { weights: { "ترسیم‌های هندسی و استدلال": 0.3, "محاسبات برداری": 0.2, "تبدیل‌های هندسی": 0.25, "حد و پیوستگی": 0.25 }, color: '#7f8c8d' },
        "مهندسي ايمني صنعتي": { weights: { "آمار توصیفی": 0.3, "آمار استنباطی": 0.3, "احتمال": 0.2, "دینامیک": 0.2 }, color: '#ff6b6b' },
        "حسابداري": { weights: { "آمار توصیفی": 0.4, "آمار استنباطی": 0.3, "احتمال": 0.3 }, color: '#2ecc71' },
        "رياضيات و كاربردها": { weights: { "حد و پیوستگی": 0.25, "تابع": 0.25, "توابع نمایی و لگاریتمی": 0.2, "ریاضیات گسسته": 0.15, "تبدیل‌های هندسی": 0.15 }, color: '#4a4e69' },
        "شيمي محض": { weights: { "در پی غذای سالم": 0.25, "پوشاک، نیازی پایان‌ناپذیر": 0.25, "مولکول‌ها در خدمت تندرستی": 0.25, "اسیدها و بازها": 0.25 }, color: '#6a040f' },
        "شيمي كاربردي": { weights: { "در پی غذای سالم": 0.2, "قدر هدایای زمینی": 0.2, "پوشاک، نیازی پایان‌ناپذیر": 0.2, "اسیدها و بازها": 0.2, "رسانایی الکتریکی": 0.2 }, color: '#00b4d8' },
        "اقتصاد": { weights: { "آمار توصیفی": 0.4, "آمار استنباطی": 0.3, "احتمال": 0.3 }, color: '#52b788' },
        "آمار": { weights: { "آمار توصیفی": 0.5, "آمار استنباطی": 0.3, "احتمال": 0.2 }, color: '#ecf0f1' },
};

// helper: racer SVG
function getRacerSVG(color) {
  return `<svg viewBox="0 0 120 40" style="transform: scaleX(-1);filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.4));">
    <path d="M10,25 L30,25 L40,10 L80,10 L90,25 L110,25" fill="${color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M40,10 L50,25 L70,25" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="3"/>
    <circle cx="35" cy="30" r="8" fill="#2c3e50" stroke="white" stroke-width="1"/>
    <circle cx="85" cy="30" r="8" fill="#2c3e50" stroke="white" stroke-width="1"/>
  </svg>`;
}

// build lanes + racers
function initializeTrack() {
  const track = document.getElementById('race-track');
  let html = '<div class="finish-line"></div>';
  for (let major in majorConfig) {
    const id = major.replace(/\s/g,'-');
    html += `
      <div class="lane">
        <div class="racer" id="${id}" style="right: calc(100% - 90px);">
          ${getRacerSVG(majorConfig[major].color)}
          <div class="tooltip">${major}<br>امتیاز: 0.00</div>
        </div>
      </div>`;
  }
  track.innerHTML = html;
}

// compute per-subject average from localStorage
function getSubResults() {
  const gradesData = JSON.parse(localStorage.getItem('pedramGrades')||'{}');
  const subjectAverages = {};
  for (let subj in gradesData) {
    const arr = gradesData[subj].filter(g=>!isNaN(g)&&g!=='');
    if (!arr.length) continue;
    subjectAverages[subj] = arr.reduce((s,v)=>s+parseFloat(v),0)/arr.length;
  }
  const out = {};
  for (let subj in speedGrades) {
    const avg = subjectAverages[subj]||0;
    out[subj] = { final:(avg*0.7 + speedGrades[subj]*0.3).toFixed(2) };
  }
  return out;
}

// place racers along the track
function calculateAndPlaceRacers() {
  const subRes = getSubResults();
  const trackWidth = document.getElementById('race-track').clientWidth;
  const finishPx = 100, startPx = trackWidth - 90, maxDist = startPx - finishPx;

  for (let major in majorConfig) {
    let sumW=0, sumSW=0;
    for (let [sub,w] of Object.entries(majorConfig[major].weights)) {
      if (subRes[sub]) {
        sumSW += parseFloat(subRes[sub].final)*w;
        sumW += w;
      }
    }
    const score = sumW ? sumSW/sumW : 0;
    const el = document.getElementById(major.replace(/\s/g,'-'));
    if (!el) continue;
    const pos = finishPx + (1 - Math.min(1,score/10)) * maxDist;
    el.style.right = `${pos}px`;
    el.querySelector('.tooltip').innerHTML = `${major}<br>امتیاز: ${score.toFixed(2)}`;
  }
}

// initialize on load
window.addEventListener('DOMContentLoaded', ()=>{
  initializeTrack();
  calculateAndPlaceRacers();
});

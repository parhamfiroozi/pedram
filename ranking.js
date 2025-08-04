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
  "مهندسي برق":         {weights:{ "الکتریسیته ساکن":.25,"جریان الکتریکی":.25,"مغناطیس":.2,"توابع نمایی و لگاریتمی":.15,"ریاضیات گسسته":.15}, color:'#f1c40f'},
  "مهندسي پزشكي":       {weights:{ "مولکول‌ها در خدمت تندرستی":.3,"قدر هدایای زمینی":.2,"در پی غذای سالم":.2,"تابع":.15,"آمار توصیفی":.15}, color:'#9b59b6'},
  "مهندسي كامپيوتر":    {weights:{ "ماتریس و کاربردها":.25,"آشنایی با نظریه اعداد":.25,"تابع":.2,"ریاضیات گسسته":.2,"تبدیل‌های هندسی":.1}, color:'#3498db'},
  /* … all your other majors … */
  "آمار":               {weights:{ "آمار توصیفی":.5,"آمار استنباطی":.3,"احتمال":.2}, color:'#ecf0f1'}
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

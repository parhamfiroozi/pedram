<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>رده‌بندی استعداد پدرام</title>
    <link rel="icon" href="https://i.postimg.cc/hhFJVd0K/20250804-1452-Little-Superhero-Costume-remix-01k1td04c3f6fs45xstkmfeb2c.png">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap');

        body {
            font-family: 'Vazirmatn', 'B Nazanin', Nazanin, sans-serif;
            background-color: #f0f2f5;
            color: #333;
            margin: 0;
            padding: 20px;
            overflow-x: hidden;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 2px solid #e0e0e0;
            padding-bottom: 15px;
            margin-bottom: 20px;
        }

        header h1 {
            color: #2c3e50;
            margin: 0;
        }

        .logo {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 3px solid #3498db;
        }
        
        .controls {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px;
            background-color: #f9f9f9;
            border-radius: 8px;
            margin-bottom: 25px;
        }

        .calc-button {
            padding: 12px 30px;
            border: none;
            background: #e74c3c;
            color: white;
            font-family: inherit;
            font-size: 18px;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px #c0392b;
        }
        
        .calc-button:hover {
            background-color: #c0392b;
        }
        
        .calc-button:active {
            transform: translateY(2px);
            box-shadow: 0 2px #c0392b;
        }

        /* --- Race Track Styles --- */
        .race-track {
            position: relative;
            width: 100%;
            padding: 20px 0;
            background-color: #7f8c8d;
            border-radius: 10px;
            margin-top: 20px;
            border: 5px solid #5d6d7e;
            display: flex;
            flex-direction: column;
            gap: 3px; /* Reduced gap for more lanes */
        }
        
        .lane {
            position: relative;
            width: 100%;
            height: 45px; /* Reduced height for more lanes */
            background-color: #95a5a6;
            border-top: 2px dashed rgba(255, 255, 255, 0.5);
        }
        
        .lane:first-child {
            border-top: none;
        }

        .finish-line {
            position: absolute;
            left: 100px;
            top: 0;
            bottom: 0;
            width: 10px;
            background-image: repeating-linear-gradient(
                45deg,
                #fff,
                #fff 10px,
                #000 10px,
                #000 20px
            );
            z-index: 2;
        }

        .racer {
            position: absolute;
            top: 5px;
            width: 70px; /* Adjusted size */
            height: 35px; /* Adjusted size */
            transition: right 0.8s cubic-bezier(0.25, 1, 0.5, 1);
            cursor: pointer;
        }
        
        .racer .tooltip {
            visibility: hidden;
            width: 180px;
            background-color: rgba(0,0,0,0.8);
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 8px;
            position: absolute;
            z-index: 10;
            bottom: 110%;
            left: 50%;
            margin-left: -90px;
            opacity: 0;
            transition: opacity 0.3s;
            font-size: 0.9em;
        }
        
        .racer:hover .tooltip {
            visibility: visible;
            opacity: 1;
        }
        
        footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 15px;
            border-top: 2px solid #e0e0e0;
        }

        footer a {
            text-decoration: none;
            color: #3498db;
            font-weight: bold;
            padding: 10px 20px;
            border-radius: 5px;
            background-color: #ecf0f1;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>رده‌بندی استعداد پدرام</h1>
            <img src="https://i.postimg.cc/hhFJVd0K/20250804-1452-Little-Superhero-Costume-remix-01k1td04c3f6fs45xstkmfeb2c.png" alt="لوگو" class="logo">
        </header>

        <div class="controls">
            <button class="calc-button" onclick="calculateAndPlaceRacers()">مشاهده رده‌بندی</button>
        </div>

        <div id="race-track" class="race-track">
            <div class="finish-line"></div>
            <!-- Lanes and racers will be generated here -->
        </div>
        
        <footer>
            <a href="index.html">بازگشت به برنامه</a>
        </footer>
    </div>

    <script>
    // ─────────────────────────────────────────────────────────────────
    // 1️⃣ Speed grades (all zero by default; edit if you like)
    const speedGrades = {
        "جبر و معادله": 0, "دایره": 0, "الکتریسیته ساکن": 0, "آشنایی با مبانی ریاضیات": 0,
        "قدر هدایای زمینی": 0, "تابع": 0, "ماتریس و کاربردها": 0, "آشنایی با نظریه اعداد": 0,
        "حرکت بر خط راست": 0, "مولکول‌ها در خدمت تندرستی": 0, "جریان الکتریکی": 0, "احتمال": 0,
        "اسیدها و بازها": 0, "رسانایی الکتریکی": 0, "مثلثات": 0, "حد و پیوستگی": 0,
        "تبدیل‌های هندسی": 0, "روابط طولی در مثلث": 0, "آمار توصیفی": 0, "آمار استنباطی": 0,
        "پوشاک، نیازی پایان‌ناپذیر": 0, "دینامیک": 0, "القای الکترومغناطیسی": 0,
        "مجموعه، الگو و دنباله + مثلثات": 0, "ترسیم‌های هندسی و استدلال": 0, "فیزیک و اندازه‌گیری": 0,
        "کیهان زادگاه الفبای هستی": 0, "قضیه تالس، تشابه": 0, "ویژگی‌های فیزیکی مواد": 0,
        "معادله‌ها و نامعادله‌ها + تابع": 0, "چندضلعی‌ها": 0, "کار، انرژی و توان": 0,
        "ردپای گازها در زندگی": 0, "تابع + شمارش": 0, "دما و گرما": 0, "ردپای گازها + آب": 0,
        "مغناطیس": 0, "توابع نمایی و لگاریتمی": 0, "در پی غذای سالم": 0, "ریاضیات گسسته": 0,
        "محاسبات برداری": 0
    };

    // ─────────────────────────────────────────────────────────────────
    // 2️⃣ Major-to-sub-subject weight mappings and racer designs
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

    function getRacerSVG(color) {
        return `<svg viewBox="0 0 120 40" style="transform: scaleX(-1); filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.4));">
            <path d="M10,25 L30,25 L40,10 L80,10 L90,25 L110,25" fill="${color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M40,10 L50,25 L70,25" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="3"/>
            <circle cx="35" cy="30" r="8" fill="#2c3e50" stroke="white" stroke-width="1"/>
            <circle cx="85" cy="30" r="8" fill="#2c3e50" stroke="white" stroke-width="1"/>
        </svg>`;
    }

    function initializeTrack() {
        const track = document.getElementById('race-track');
        let html = '<div class="finish-line"></div>';
        for (const majorName in majorConfig) {
            const config = majorConfig[majorName];
            const racerId = majorName.replace(/\s/g, '-');
            html += `
                <div class="lane">
                    <div class="racer" id="${racerId}" style="right: calc(100% - 90px);">
                        ${getRacerSVG(config.color)}
                        <div class="tooltip">${majorName}<br>امتیاز: 0.00</div>
                    </div>
                </div>
            `;
        }
        track.innerHTML = html;
    }

    function getSubResults() {
        const gradesData = JSON.parse(localStorage.getItem('pedramGrades')) || {};
        const out = {};
        
        const subjectAverages = {};
        // Create a set of all unique subject names from the schedule
        if (gradesData) {
            for (const subject in gradesData) {
                const validGrades = gradesData[subject].filter(g => g !== null && g !== '' && !isNaN(g));
                if (validGrades.length > 0) {
                    const sum = validGrades.reduce((acc, curr) => acc + parseFloat(curr), 0);
                    subjectAverages[subject] = sum / validGrades.length;
                }
            }
        }

        for (let name in speedGrades) {
            const avg = subjectAverages[name] || 0;
            const speed = speedGrades[name] || 0;
            const final = (avg * 0.7 + speed * 0.3);
            out[name] = { final: final.toFixed(2) };
        }
        return out;
    }

    function calculateAndPlaceRacers() {
        const subResults = getSubResults();
        
        for (const majorName in majorConfig) {
            const config = majorConfig[majorName];
            let sumW = 0, sumSW = 0;
            for (const [sub, w] of Object.entries(config.weights)) {
                const obj = subResults[sub];
                if (obj) {
                    sumSW += parseFloat(obj.final) * w;
                    sumW += w;
                }
            }
            const finalScore = sumW > 0 ? (sumSW / sumW) : 0;
            
            const racerElement = document.getElementById(majorName.replace(/\s/g, '-'));
            if (racerElement) {
                const tooltip = racerElement.querySelector('.tooltip');
                tooltip.innerHTML = `${majorName}<br>امتیاز: ${finalScore.toFixed(2)}`;

                const trackWidth = document.getElementById('race-track').clientWidth;
                const finishPosition = 100;
                const startPosition = trackWidth - 90; // Racer width
                const raceableDistance = startPosition - finishPosition;

                const positionFromRight = (1 - (finalScore / 10)) * raceableDistance;
                
                racerElement.style.right = `${positionFromRight}px`;
            }
        }
    }

    window.onload = () => {
        initializeTrack();
        calculateAndPlaceRacers();
    };
    </script>
</body>
</html>

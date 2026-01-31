// ভাসমান হৃদয় তৈরি
function createHearts() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heartCount = window.innerWidth < 768 ? 15 : 25;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = getRandomHeart();
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 8 + 's';
        heart.style.fontSize = (Math.random() * 25 + 15) + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.2;
        heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
        heartsContainer.appendChild(heart);
    }
}

function getRandomHeart() {
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💞', '💝', '🧡', '💛', '💚', '💙', '💜'];
    return hearts[Math.floor(Math.random() * hearts.length)];
}

function nextSection() {
    const currentSection = document.querySelector('section:target') || document.getElementById('welcome');
    let nextSection;
    
    if (currentSection.id === 'welcome') {
        nextSection = document.getElementById('memories');
    } else if (currentSection.id === 'memories') {
        nextSection = document.getElementById('proposal');
    } else {
        nextSection = document.getElementById('welcome');
    }
    
    nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    
    // ছোট হৃদয় এনিমেশন
    createButtonHearts();
}

function showMemory(num) {
    const messages = [
        "এই ছবিটির দিনটা মনে আছে? সেদিন তুমি অসাধারণ দেখাচ্ছিলে! 💕",
        "তোমার সেই হাসি আমার সবচেয়ে প্রিয় স্মৃতি... 📸",
        "এই মুহূর্তটি চিরকাল মনে থাকবে 💖",
        "তোমার সাথে প্রতিটি মুহূর্ত বিশেষ 🌹"
    ];
    
    const message = messages[num-1] || "একটি সুন্দর স্মৃতি যা আমি কখনো ভুলবো না 💫";
    
    // সুন্দর এলার্ট ডিজাইন
    const memoryAlert = document.createElement('div');
    memoryAlert.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.2);
            z-index: 10000;
            text-align: center;
            max-width: 400px;
            width: 90%;
            border: 3px solid #ff3366;
        ">
            <div style="font-size: 50px; margin-bottom: 15px;">💭</div>
            <p style="color: #333; font-size: 18px; line-height: 1.6; margin-bottom: 20px;">
                ${message}
            </p>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: #ff3366;
                color: white;
                border: none;
                padding: 10px 25px;
                border-radius: 25px;
                font-size: 16px;
                cursor: pointer;
                transition: 0.3s;
            " onmouseover="this.style.background='#ff558c'" 
              onmouseout="this.style.background='#ff3366'">
                বুঝেছি 💖
            </button>
        </div>
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 9999;
        " onclick="this.parentElement.remove()"></div>
    `;
    
    document.body.appendChild(memoryAlert);
}

function showProposal() {
    const proposalText = `প্রিয়, অনেকদিন ধরে আমি ভাবছিলাম...

💌 তুমি কি আমার জীবনসঙ্গী হতে চাইবে?
✨ আমি আমার পুরো জীবন তোমার সাথে কাটাতে চাই

তোমার উত্তর শুনতে উতলা হয়ে আছি...

💖 'হ্যাঁ' বললে আমার জীবন সুন্দর হবে
😊 'না' বললে আমি অপেক্ষা করব`;

    // কাস্টম প্রপোজাল ডায়ালগ
    const proposalDialog = document.createElement('div');
    proposalDialog.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #ffafbd, #ffc3a0);
            padding: 40px;
            border-radius: 25px;
            box-shadow: 0 20px 50px rgba(255, 51, 102, 0.3);
            z-index: 10000;
            text-align: center;
            max-width: 450px;
            width: 90%;
            border: 5px solid white;
            animation: popup 0.5s ease;
        ">
            <div style="font-size: 60px; margin-bottom: 20px;">💌✨</div>
            <pre style="
                color: #333;
                font-size: 18px;
                line-height: 1.8;
                margin-bottom: 30px;
                font-family: 'Hind Siliguri', sans-serif;
                white-space: pre-wrap;
                text-align: center;
            ">${proposalText}</pre>
            <div style="display: flex; gap: 15px; justify-content: center;">
                <button id="yesBtn" style="
                    background: linear-gradient(45deg, #4CAF50, #45a049);
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 25px;
                    font-size: 18px;
                    cursor: pointer;
                    transition: 0.3s;
                    flex: 1;
                    max-width: 150px;
                ">হ্যাঁ 💖</button>
                <button id="noBtn" style="
                    background: linear-gradient(45deg, #ff4444, #cc0000);
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 25px;
                    font-size: 18px;
                    cursor: pointer;
                    transition: 0.3s;
                    flex: 1;
                    max-width: 150px;
                ">না 😔</button>
            </div>
        </div>
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            z-index: 9999;
            backdrop-filter: blur(5px);
        " id="proposalOverlay"></div>
    `;
    
    document.body.appendChild(proposalDialog);
    
    // হ্যাঁ বাটনে ক্লিক করলে
    document.getElementById('yesBtn').onclick = function() {
        celebrateYes();
        document.getElementById('proposalOverlay').parentElement.remove();
    };
    
    // না বাটনে ক্লিক করলে
    document.getElementById('noBtn').onclick = function() {
        document.getElementById('proposalOverlay').parentElement.remove();
        setTimeout(() => {
            alert("তা হোক... আমি অপেক্ষা করব তোমার হ্যাঁ শোনার জন্য ❤️\n\nআমি বিশ্বাস করি একদিন তুমি হ্যাঁ বলবে... 💫");
        }, 300);
    };
}

function celebrateYes() {
    // বড় উদযাপন
    const celebration = document.createElement('div');
    celebration.innerHTML = '🎉💝🥳🎊💖✨';
    celebration.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 120px;
        z-index: 10001;
        animation: celebration 2s ease-out;
        text-shadow: 0 0 20px rgba(255, 51, 102, 0.5);
        pointer-events: none;
    `;
    document.body.appendChild(celebration);
    
    // আরও হৃদয় তৈরি
    for(let i = 0; i < 50; i++) {
        setTimeout(() => {
            createFlyingHeart();
        }, i * 100);
    }
    
    // স্পেশাল মেসেজ
    setTimeout(() => {
        celebration.remove();
        const finalMessage = document.createElement('div');
        finalMessage.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 40px;
                border-radius: 25px;
                box-shadow: 0 20px 60px rgba(255, 51, 102, 0.4);
                z-index: 10000;
                text-align: center;
                max-width: 500px;
                width: 90%;
                border: 5px solid #ff3366;
                animation: popup 0.5s;
            ">
                <div style="font-size: 80px; margin-bottom: 20px;">💍❤️🎉</div>
                <h2 style="color: #ff3366; margin-bottom: 20px;">ধন্যবাদ প্রিয়! 💖</h2>
                <p style="color: #333; font-size: 20px; line-height: 1.6;">
                    তুমি আমার জীবনের সবচেয়ে সুন্দর উপহার!<br>
                    আমি প্রতিশ্রুতি দিচ্ছি তোমাকে সর্বদা খুশি রাখব।<br><br>
                    💕 চিরকাল তোমার পাশে থাকব 💕
                </p>
                <button onclick="this.parentElement.parentElement.remove(); location.reload()" style="
                    background: #ff3366;
                    color: white;
                    border: none;
                    padding: 12px 35px;
                    border-radius: 25px;
                    font-size: 18px;
                    cursor: pointer;
                    margin-top: 25px;
                    transition: 0.3s;
                " onmouseover="this.style.transform='scale(1.05)'" 
                  onmouseout="this.style.transform='scale(1)'">
                    আবার শুরু করি 🔄
                </button>
            </div>
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(255, 51, 102, 0.1);
                backdrop-filter: blur(10px);
                z-index: 9999;
            " onclick="this.parentElement.remove()"></div>
        `;
        document.body.appendChild(finalMessage);
    }, 2500);
}

function createFlyingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = getRandomHeart();
    heart.style.cssText = `
        position: fixed;
        top: ${Math.random() * 100}vh;
        left: ${Math.random() * 100}vw;
        font-size: ${Math.random() * 40 + 20}px;
        z-index: 10000;
        pointer-events: none;
        animation: flyAway 2s ease-out forwards;
    `;
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 2000);
}

function createButtonHearts() {
    for(let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.cssText = `
                position: fixed;
                bottom: 100px;
                left: 50%;
                font-size: 25px;
                z-index: 1000;
                pointer-events: none;
                animation: buttonHeart 1.5s ease-out forwards;
            `;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1500);
        }, i * 200);
    }
}

// CSS এনিমেশন যোগ
const style = document.createElement('style');
style.textContent = `
    @keyframes popup {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        70% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    
    @keyframes flyAway {
        0% { 
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
        }
        100% { 
            transform: translate(${Math.random() * 200 - 100}px, -200px) scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes buttonHeart {
        0% { 
            transform: translateX(-50%) translateY(0) scale(1);
            opacity: 1;
        }
        100% { 
            transform: translateX(${Math.random() * 100 - 50}px) translateY(-150px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// পেজ লোড হলে হৃদয় তৈরি
window.onload = function() {
    createHearts();
    
    // স্বাগত মেসেজ
    setTimeout(() => {
        console.log("💖 স্বাগতম! এই সাইটটি বিশেষ কাউকে উৎসর্গকৃত 💖");
    }, 1000);
};

// রিসাইজ হলে নতুন হৃদয় তৈরি
window.addEventListener('resize', function() {
    document.getElementById('heartsContainer').innerHTML = '';
    createHearts();
});
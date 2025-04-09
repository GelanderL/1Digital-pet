// 宠物初始状态
let pet = {
    hunger: 100,
    mood: 100
};

// 更新界面显示
function getElementById(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`Element with id "${id}" not found.`);
    }
    return element;
}

function updateUI() {
    const petHappyElement = getElementById('pet-happy');
    const petSadElement = getElementById('pet-sad');
    const petNormalElement = getElementById('pet-normal');
    const hungerBar = getElementById('hunger-bar');
    const moodBar = getElementById('mood-bar');

    // 更新饱食度血条
    if (hungerBar) {
        hungerBar.style.width = `${pet.hunger}%`;
    }
    // 更新心情度血条
    if (moodBar) {
        moodBar.style.width = `${pet.mood}%`;
    }

    if (petHappyElement && petSadElement && petNormalElement) {
        if (pet.hunger < 30) {
            petHappyElement.style.display = 'none';
            petSadElement.style.display = 'block';
            petNormalElement.style.display = 'none';
        } else {
            petHappyElement.style.display = 'none';
            petSadElement.style.display = 'none';
            petNormalElement.style.display = 'block';
        }
    }
}

// 爱心互动
function love() {
    pet.mood = Math.min(100, pet.mood + 10);
    updateUI();
    if (Math.random() < 0.5) {
        showHappyIcon();
    }
}

// 喂食
function openBackpack() {
    document.getElementById('backpack').style.display = 'block';
}

function selectFood(food) {
    pet.hunger = Math.min(100, pet.hunger + 20);
    pet.mood = Math.min(100, pet.mood + 5);
    updateUI();
    animatePet('eat');
    closeBackpack();
    if (Math.random() < 0.5) {
        showHappyIcon();
    }
}

function closeBackpack() {
    document.getElementById('backpack').style.display = 'none';
}

// 运动
function exercise() {
    pet.hunger = Math.max(50, pet.hunger - 15);
    pet.mood = Math.min(100, pet.mood + 8);
    updateUI();
    animatePet('exercise');
    if (Math.random() < 0.5) {
        showHappyIcon();
    }
}

// 学习
function study() {
    pet.hunger = Math.max(50, pet.hunger - 5);
    pet.mood = Math.min(100, pet.mood + 6);
    updateUI();
    animatePet('study');
    if (Math.random() < 0.5) {
        showHappyIcon();
    }
}

// 显示开心图标
function showHappyIcon() {
    const petHappyElement = getElementById('pet-happy');
    const petNormalElement = getElementById('pet-normal');
    if (petHappyElement && petNormalElement) {
        petHappyElement.style.display = 'block';
        petNormalElement.style.display = 'none';
        setTimeout(() => {
            petHappyElement.style.display = 'none';
            petNormalElement.style.display = 'block';
            updateUI();
        }, 5000);
    }
}

// 宠物动画
// 移除或者注释掉会让角色位置移动的动画代码
// 例如：
// function animatePet(type) {
//     const petElement = document.getElementById('pet');
//     petElement.style.transform = 
//         type === 'love' ? 'scale(1.2)' :
//         type === 'eat' ? 'rotate(360deg)' :
//         type === 'exercise' ? 'translateY(-20px)' :
//         type === 'study' ? 'scale(0.8)' : '';
//     
//     setTimeout(() => {
//         petElement.style.transform = '';
//     }, 1000);
// }

// 每秒自动减少状态
setInterval(() => {
    pet.hunger = Math.max(50, pet.hunger - (2 / 10800));
    pet.mood = Math.max(50, pet.mood - (1 / (2 * 60 * 60)));
    updateUI();
}, 1000);

// 初始化
updateUI();

// 绑定图标点击事件
document.getElementById('love-icon').addEventListener('click', love);
document.getElementById('feed-icon').addEventListener('click', openBackpack);
document.getElementById('exercise-icon').addEventListener('click', exercise);
document.getElementById('study-icon').addEventListener('click', study);


function showHappyImage() {
    const happyImage = document.getElementById('happy-image');
    happyImage.style.display = 'block';

    // 将显示时间提升为十秒
    setTimeout(() => {
        happyImage.style.display = 'none';
    }, 10000); // 十秒（10000 毫秒）
}

// 假设某个图标点击事件触发显示开心图片
const iconElement = document.getElementById('your-icon-id');
iconElement.addEventListener('click', showHappyImage);


// 随机触发待机动画
function randomIdle() {
    const pet = document.querySelector('.pet');
    const petImg = pet.querySelector('img'); // 获取宠物的 img 元素
    const randomTime = Math.random() * (60000 - 10000) + 10000; 

    setTimeout(() => {
        if (petImg) {
            petImg.style.display = 'none'; // 隐藏宠物的 img 元素
        }
        pet.classList.add('idle');
        const idleDuration = Math.random() * (20000 - 3000) + 3000; 

        // 动画持续一段时间后移除
        setTimeout(() => {
            pet.classList.remove('idle');
            if (petImg) {
                petImg.style.display = 'block'; // 显示宠物的 img 元素
            }
            // 再次随机触发
            randomIdle();
        }, idleDuration);
    }, randomTime);
}

// 启动随机触发
// 获取待机动画元素
const petIdleElement = document.querySelector('.pet.idle');

// 定义一个函数来随机设置动画时长
function setRandomAnimationDuration() {
    // 生成一个 0.5 到 2 秒之间的随机数
    const randomDuration = Math.random() * 1.5 + 0.5;
    // 设置动画时长
    petIdleElement.style.animationDuration = `${randomDuration}s`;
}

// 初始设置动画时长
setRandomAnimationDuration();

// 每隔一段时间重新设置动画时长
setInterval(setRandomAnimationDuration, 2000); // 每 2 秒重新设置一次

// 指定された範囲のランダムな数値を生成する関数
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// エクスポートに新しい関数を追加
export {    
    getRandomNumber,
};
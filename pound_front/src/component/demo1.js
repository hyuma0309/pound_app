// 配列からランダムな要素を取得する関数
const getRandomElement = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

// エクスポートに新しい関数を追加
export {
    getRandomElement,
};

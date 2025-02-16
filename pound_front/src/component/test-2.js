// 配列の要素の合計を計算する関数
const sumArray = (arr) => {
    return arr.reduce((sum, current) => sum + current, 0);
};

// オブジェクトの値をチェックする関数
const checkObject = (obj) => {
    if (!obj || typeof obj !== 'object') {
        return false;
    }
    return Object.keys(obj).length > 0;
};

// エクスポート
export {
    checkObject
};
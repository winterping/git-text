// 累加
function Accumulation(...val) {
    console.log(val);
    return val.reduce((t, v) => {
        t + v
    });
}

// 代替map
const a = [1, 2, 3];
const b = a.reduce((t, v) => {
    return [...t, v * 2]
}, [])
console.log(b);

// 代替filter
const c = a.reduce((t, v) => v > 1 ? [...t, v] : t, [])
console.log(c);

const scores = [{
        score: 45,
        subject: "chinese"
    },
    {
        score: 90,
        subject: "math"
    },
    {
        score: 60,
        subject: "english"
    }
];
// 代替some：至少一门合格
const isAtLeastOneQualified = scores.reduce((t, v) => t || v.score >= 60, false);
console.log(isAtLeastOneQualified);

// 数组过滤
function Difference(arr = [], orr = []) {
    return arr.reduce((t, v) => (!orr.includes(v) && t.push(v), t), [])
}
console.log(Difference([1, 2, 3, 5, 7], [2, 3]));

// 数组扁平
function Flat(arr = []) {
    return arr.reduce((t, v) => t.concat(Array.isArray(v) ? v.flat() : v), [])
}
console.log(Flat([2, 3, [4, 5], 1]));

// 数组去重
function Unique(arr = []) {
    return arr.reduce((t, v) => t.includes(v) ? t : [...t, v], [])
}

//数组最大值
function Max(arr = []) {
    return arr.reduce((t, v) => t > v ? t : v)
}

/**
 * js相关技巧
 */

// 生成随机ID
const RandomId = len => Math.random().toString(36).substr(3, len);
const id = RandomId(10);
// console.log(Math.random().toString(28));
// console.log(id);

//取整
console.log(~~2.1);
console.log(2.3 | 0);
console.log(2.5 >> 0);

//补零
const FillZero = (num, len) => {
    return num.toString().padStart(len, '0')
}
console.log(FillZero(21,4));

function Func() {
    console.log("x");
    Func = function() {
        console.log("y");
    }
}
Func()

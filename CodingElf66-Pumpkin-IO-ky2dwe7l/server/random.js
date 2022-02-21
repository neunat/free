module.exports.choose =
function choose(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

module.exports.newUser =
function newUser(name = "") {
    return {
        name,
        init: false,
        score: 5,
        bestScore: 5,
        angle: 0,
        x: Math.random() * 500,
        y: Math.random() * 1000,
        velX: 0,
        velY: 0,
    };
};

// water, poison, fert, super
module.exports.newFood =
function newFood(food, type) {
    food.push({
        x: Math.floor(Math.random() * 1000),
        y: Math.floor(Math.random() * 500),
        type, 
    });
}
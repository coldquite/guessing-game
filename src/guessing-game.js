class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.ans = this.min + Math.ceil((this.max - this.min) / 2);
        return this.ans;
    }

    lower() {
        this.max = this.ans;
    }

    greater() {
        this.min = this.ans;
    }

    min = null;
    max = null;
    ans = null;
}

module.exports = GuessingGame;

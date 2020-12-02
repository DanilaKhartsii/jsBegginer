let game = {
	rightAnswers: 0,
	nextQuestionIndex: 0,
	run() {
		if (!this.isQuestionExists()) {
            console.log(`Игра окончена, ваш счет ${this.rightAnswers}`);
            this.nextQuestionIndex = 0;
            this.rightAnswers = 0;
            if(confirm('Хотите сыграть еше?')) {
                this.run();
            }
            return;
		}
		let result = leader.askQuestion(questions[this.nextQuestionIndex]);
		if (result) {
			this.rightAnswers++;
		}
		this.nextQuestionIndex++;
		this.run();
	},
	isQuestionExists() {
		return questions[this.nextQuestionIndex] !== undefined;
	},
	init() {
		console.log("Введите game.run() и нажмите Enter для начала игры");
	},
};

game.init();

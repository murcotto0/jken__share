$(document).ready(function () {
    let reward = "";
    let score = 0;
    const correctAnswers = ["0", "1"];

    $("#startQuiz").click(function () {
        reward = $("#rewardInput").val();
        if (reward.trim() === "") {
            alert("ご褒美を設定してください！");
            return;
        }
        $("#rewardSetup").hide();
        $("#quizContainer").show();
    });

    $("#submitAnswer").click(function () {
        const userAnswers = [
            $("#step1").text().trim(),
            $("#input1").val().trim()
        ];

        score = 0;
        for (let i = 0; i < correctAnswers.length; i++) {
            if (userAnswers[i] == correctAnswers[i]) { //完全一致　===　
                score += 50; // 各問題50点
            }
        }

        $("#valueX").text("0");
        $("#finalValueX").text("1");

        $("#quizContainer").hide();
        $("#resultContainer").show();

        $("#scoreOutput").html(`得点: ${score}/100<br>` +
            (score >= 70 ? `おめでとうございます！設定したご褒美: ${reward}` : "残念、また挑戦してください！"));
    });
});
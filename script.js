// スタートボタンのイベントリスナー
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    
    if (startButton) {
        startButton.addEventListener('click', () => {
            // 診断開始時に回答をリセット
            localStorage.removeItem('quiz-answers');
            // 質問画面へ遷移
            window.location.href = 'quiz.html';
        });
    }
});
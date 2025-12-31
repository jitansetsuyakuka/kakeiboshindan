// 質問データ
const questions = [
    {
        id: 1,
        text: "あなたは朝型？夜型？",
        answers: [
            { text: "朝型（早起きが得意）", score: { timing: "morning" } },
            { text: "夜型（夜の方が集中できる）", score: { timing: "night" } },
            { text: "どちらでもない", score: { timing: "neutral" } }
        ]
    },
    {
        id: 2,
        text: "1日の中で落ち着ける時間は？",
        answers: [
            { text: "朝の時間", score: { timing: "morning" } },
            { text: "夜寝る前", score: { timing: "night" } },
            { text: "週末", score: { frequency: "weekly" } },
            { text: "月に1回あるかないか", score: { frequency: "monthly" } }
        ]
    },
    {
        id: 3,
        text: "毎日のルーティンはある？",
        answers: [
            { text: "毎日同じ時間に同じことをする", score: { frequency: "daily" } },
            { text: "曜日ごとにやることを決めている", score: { frequency: "weekly" } },
            { text: "その日の気分で動く", score: { frequency: "monthly" } },
            { text: "ルーティンは苦手", score: { frequency: "monthly" } }
        ]
    },
    {
        id: 4,
        text: "やるべきことを毎日やらないと気持ち悪い？",
        answers: [
            { text: "毎日やらないと落ち着かない", score: { frequency: "daily" } },
            { text: "週単位で考える", score: { frequency: "weekly" } },
            { text: "月単位で考える", score: { frequency: "monthly" } },
            { text: "あまり気にしない", score: { frequency: "monthly" } }
        ]
    },
    {
        id: 5,
        text: "レシートの扱い方は？",
        answers: [
            { text: "お財布に溜まりがち", score: { frequency: "monthly" } },
            { text: "その日のうちに整理", score: { frequency: "daily" } },
            { text: "すぐ捨てる", score: { digital: 1 } },
            { text: "デジタルで管理", score: { digital: 2 } }
        ]
    },
    {
        id: 6,
        text: "買い物後、レシートを見返すタイミングは？",
        answers: [
            { text: "すぐ見る", score: { frequency: "daily" } },
            { text: "家に帰ってから", score: { frequency: "daily" } },
            { text: "後でまとめて", score: { frequency: "weekly" } },
            { text: "あまり見ない", score: { digital: 1 } }
        ]
    },
    {
        id: 7,
        text: "お金の管理で一番気になることは？",
        answers: [
            { text: "全体の合計額", score: { detail: "rough" } },
            { text: "カテゴリごとの内訳", score: { detail: "detailed" } },
            { text: "使いすぎた項目", score: { detail: "detailed" } },
            { text: "自動で記録したい", score: { digital: 2 } }
        ]
    },
    {
        id: 8,
        text: "計画を立てるとき、どんなタイプ？",
        answers: [
            { text: "細かく計画", score: { detail: "detailed" } },
            { text: "ざっくり決める", score: { detail: "rough" } },
            { text: "計画は苦手", score: { detail: "rough" } }
        ]
    },
    {
        id: 9,
        text: "家計簿に何を求める？",
        answers: [
            { text: "シンプルで続けやすさ", score: { detail: "rough" } },
            { text: "細かく分析できる", score: { detail: "detailed" } },
            { text: "自動で楽", score: { digital: 2 } }
        ]
    },
    {
        id: 10,
        text: "新しいことを始めるとき、どうする？",
        answers: [
            { text: "紙に書いて整理する", score: { digital: -1 } },
            { text: "スマホでメモする", score: { digital: 1 } },
            { text: "頭の中で考える", score: { digital: 0 } }
        ]
    },
    {
        id: 11,
        text: "文房具やノートを選ぶのは好き？",
        answers: [
            { text: "好き・楽しい", score: { digital: -2 } },
            { text: "普通", score: { digital: 0 } },
            { text: "あまり興味ない", score: { digital: 1 } }
        ]
    },
    {
        id: 12,
        text: "家計簿を続けるために一番大事なことは？",
        answers: [
            { text: "手軽さ", score: { detail: "rough" } },
            { text: "見やすさ", score: { detail: "detailed" } },
            { text: "自動化", score: { digital: 2 } }
        ]
    },
    {
        id: 13,
        text: "銀行やクレカの明細、どうやって確認する？",
        answers: [
            { text: "紙の明細", score: { digital: -1 } },
            { text: "アプリで確認", score: { digital: 1 } },
            { text: "あまり確認しない", score: { digital: 0 } }
        ]
    }
];

// 現在の質問番号
let currentQuestion = 0;

// 回答を保存する配列
let answers = {
    timing: [],
    frequency: [],
    detail: [],
    digital: 0
};

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
});

// 質問を表示
function showQuestion() {
    const question = questions[currentQuestion];
    
    // 質問番号と質問文を表示
    document.getElementById('questionNumber').textContent = `Q${question.id}`;
    document.getElementById('questionText').textContent = question.text;
    
    // プログレスバーを更新
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = `${currentQuestion + 1}/${questions.length}`;
    
    // 選択肢を表示
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.textContent = answer.text;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
}

// 回答を選択
function selectAnswer(answerIndex) {
    const question = questions[currentQuestion];
    const answer = question.answers[answerIndex];
    
    // スコアを保存
    if (answer.score.timing) {
        answers.timing.push(answer.score.timing);
    }
    if (answer.score.frequency) {
        answers.frequency.push(answer.score.frequency);
    }
    if (answer.score.detail) {
        answers.detail.push(answer.score.detail);
    }
    if (answer.score.digital !== undefined) {
        answers.digital += answer.score.digital;
    }
    
    // 次の質問へ
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        // 診断結果を計算して結果画面へ
        calculateResult();
    }
}

// 診断結果を計算
function calculateResult() {
    // デジタルタイプかどうか判定（スコアが5以上）
    if (answers.digital >= 5) {
        localStorage.setItem('quiz-result', 'digital');
        window.location.href = 'result.html';
        return;
    }
    
    // タイミング（朝/夜）を判定
    const morningCount = answers.timing.filter(t => t === 'morning').length;
    const nightCount = answers.timing.filter(t => t === 'night').length;
    let timing = morningCount >= nightCount ? 'morning' : 'night';
    
    // 頻度（毎日/週末/月末）を判定
    const dailyCount = answers.frequency.filter(f => f === 'daily').length;
    const weeklyCount = answers.frequency.filter(f => f === 'weekly').length;
    const monthlyCount = answers.frequency.filter(f => f === 'monthly').length;
    
    let frequency = 'monthly';
    if (dailyCount >= 3) {
        frequency = 'daily';
    } else if (weeklyCount >= 2) {
        frequency = 'weekly';
    }
    
    // 詳細度（ざっくり/きっちり）を判定
    const roughCount = answers.detail.filter(d => d === 'rough').length;
    const detailedCount = answers.detail.filter(d => d === 'detailed').length;
    const detail = roughCount >= detailedCount ? 'rough' : 'detailed';
    
    // 結果を組み合わせ
    let result = '';
    if (frequency === 'daily') {
        result = `${timing}-${detail}`;
    } else if (frequency === 'weekly') {
        result = `weekly-${detail}`;
    } else {
        result = `monthly-${detail}`;
    }
    
    // 結果を保存して結果画面へ
    localStorage.setItem('quiz-result', result);
    window.location.href = 'result.html';
}
// 診断結果データ
const resultData = {
    'morning-rough': {
        type: '朝活ざっくりタイプ',
        image: 'https://www.genspark.ai/api/files/s/uTr7KB80?cache_control=3600',
        feature: '朝の時間を有効活用して、前日の支出をざっくりまとめて記録するあなた。細かいことは気にせず、全体の流れを把握するのが得意です。朝の清々しい時間に家計簿タイムを作ることで、1日を前向きにスタートできます。',
        method: [
            '朝のルーティンに「家計簿タイム5分」を組み込む',
            '前日のレシートを見ながら、日付と合計金額を大まかなカテゴリで記録',
            '朝のコーヒータイムと一緒に、リラックスしながら書く'
        ],
        advice: '朝型さんは、時間を有効活用するのが得意！朝の5分で前日を振り返ることで、1日の計画も立てやすくなります。細かく書かなくても大丈夫。続けることが一番大事だよ！'
    },
    'morning-detailed': {
        type: '朝活きっちりタイプ',
        image: 'https://www.genspark.ai/api/files/s/uTr7KB80?cache_control=3600',
        feature: '朝の時間を使って、前日の支出をしっかり記録するあなた。項目ごとに分けて、きちんと管理することで安心感を得られます。朝の集中力を活かして、家計簿を丁寧に仕上げるのが得意です。',
        method: [
            '朝のルーティンに「家計簿タイム10〜15分」を確保',
            '前日のレシートを見ながら、日付と合計金額、店名などをカテゴリごとに記録',
            '週の終わりや月末に合計を出して振り返る'
        ],
        advice: '朝型×きっちり派さんは、計画的に動くのが得意！朝の集中力を活かして、丁寧に記録することで、家計の流れがしっかり見えてきます。細かく書くことで、節約ポイントも見つけやすくなるよ！'
    },
    'night-rough': {
        type: '夜まとめざっくりタイプ',
        image: 'https://www.genspark.ai/api/files/s/bGdTGQdb?cache_control=3600',
        feature: '1日の終わりに、その日の支出をざっくりまとめて記録するあなた。夜のリラックスタイムに、軽く振り返るだけでOK。細かいことは気にせず、全体の流れを把握するのが得意です。',
        method: [
            '夜のリラックスタイムに「家計簿タイム5分」を組み込む',
            'その日のレシートを見ながら、日付と合計金額を大まかなカテゴリで記録',
            '寝る前のルーティンとして習慣化するのがおすすめ'
        ],
        advice: '夜型さんは、1日を振り返る時間が大事！夜のリラックスタイムに、軽く家計簿を書くことで、心も整理されます。細かく書かなくても大丈夫。続けることが一番だよ！'
    },
    'night-detailed': {
        type: '夜まとめきっちりタイプ',
        image: 'https://www.genspark.ai/api/files/s/bGdTGQdb?cache_control=3600',
        feature: '1日の終わりに、その日の支出をしっかり記録するあなた。項目ごとに分けて、きちんと管理することで安心感を得られます。夜の落ち着いた時間に、丁寧に家計簿を仕上げるのが得意です。',
        method: [
            '夜のリラックスタイムに「家計簿タイム10〜15分」を確保',
            'その日のレシートを見ながら、日付と合計金額、店名などをカテゴリごとに記録',
            '週の終わりや月末に合計を出して振り返る'
        ],
        advice: '夜型×きっちり派さんは、1日の終わりに丁寧に振り返ることで、達成感を感じられます。細かく書くことで、家計の流れがしっかり見えてきます。夜の集中力を活かして、コツコツ続けていこう！'
    },
    'weekly-rough': {
        type: '週末ざっくりタイプ',
        image: 'https://www.genspark.ai/api/files/s/33VEsOuL?cache_control=3600',
        feature: '週に1回、週末にまとめて記録するあなた。毎日書くのは面倒だけど、週単位で振り返ることで、全体の流れを把握できます。ざっくり記録するだけでOKなので、続けやすいタイプです。',
        method: [
            '週末の空いた時間に「家計簿タイム15〜20分」を確保',
            '1週間分のレシートをまとめて見ながら、日付と合計金額を大まかなカテゴリで記録',
            '週ごとの合計を出して、使いすぎた項目をチェック'
        ],
        advice: '週末まとめ派さんは、まとまった時間を使って、1週間を振り返るのが得意！毎日書かなくても大丈夫。週に1回、15分だけ時間を作ることで、家計の流れが見えてきます。続けることが一番だよ！'
    },
    'weekly-detailed': {
        type: '週末きっちりタイプ',
        image: 'https://www.genspark.ai/api/files/s/33VEsOuL?cache_control=3600',
        feature: '週に1回、週末にまとめて細かく記録するあなた。毎日書くのは面倒だけど、週単位でしっかり振り返ることで、家計の流れを把握できます。項目ごとに分けて記録することで、節約ポイントも見つけやすくなります。',
        method: [
            '週末の空いた時間に「家計簿タイム30〜40分」を確保',
            '1週間分のレシートをまとめて見ながら、日付と合計金額、店名などをカテゴリごとに記録',
            '週ごとの合計を出して、使いすぎた項目をチェック'
        ],
        advice: '週末きっちり派さんは、まとまった時間を使って、1週間を丁寧に振り返るのが得意！週に1回、30分だけ時間を作ることで、家計の流れがしっかり見えてきます。細かく書くことで、節約ポイントも見つけやすくなるよ！'
    },
    'monthly-rough': {
        type: '月末ざっくりタイプ',
        image: 'https://www.genspark.ai/api/files/s/7QVExvUb?cache_control=3600',
        feature: '月に1回、月末にまとめて記録するあなた。毎日や毎週書くのは面倒だけど、月単位で振り返ることで、全体の流れを把握できます。ざっくり記録するだけでOKなので、続けやすいタイプです。',
        method: [
            '月末の空いた時間に「家計簿タイム30〜40分」を確保',
            '1ヶ月分のレシートをまとめて見ながら、日付と合計金額を大まかなカテゴリで記録',
            '月ごとの合計を出して、使いすぎた項目をチェック'
        ],
        advice: '月末まとめ派さんは、まとまった時間を使って、1ヶ月を振り返るのが得意！毎日書かなくても大丈夫。月に1回、30分だけ時間を作ることで、家計の流れが見えてきます。続けることが一番だよ！'
    },
    'monthly-detailed': {
        type: '月末きっちりタイプ',
        image: 'https://www.genspark.ai/api/files/s/7QVExvUb?cache_control=3600',
        feature: '月に1回、月末にまとめて細かく記録するあなた。毎日や毎週書くのは面倒だけど、月単位でしっかり振り返ることで、家計の流れを把握できます。項目ごとに分けて記録することで、節約ポイントも見つけやすくなります。',
        method: [
            '月末の空いた時間に「家計簿タイム1時間」を確保',
            '1ヶ月分のレシートをまとめて見ながら、日付と合計金額、店名などをカテゴリごとに記録',
            '月ごとの合計を出して、使いすぎた項目をチェック'
        ],
        advice: '月末きっちり派さんは、まとまった時間を使って、1ヶ月を丁寧に振り返るのが得意！月に1回、1時間だけ時間を作ることで、家計の流れがしっかり見えてきます。細かく書くことで、節約ポイントも見つけやすくなるよ！'
    },
    'digital': {
        type: 'デジタルタイプ',
        image: 'https://www.genspark.ai/api/files/s/0JdXRNcv?cache_control=3600',
        feature: 'スマホやPCで家計管理をするのが得意なあなた。手書きよりもデジタルの方が便利で、自動連携やグラフ機能を活用して、効率的に家計を管理できます。スマホがあればいつでもどこでも記録できるのが魅力です。',
        method: [
            '家計簿アプリ（マネーフォワード、Zaim、LINE家計簿など）を活用',
            '銀行口座やクレジットカードと連携して、自動で記録',
            'レシート撮影機能を使って、手入力の手間を省く',
            'グラフや分析機能を使って、使いすぎた項目をチェック'
        ],
        advice: 'デジタル派さんは、効率を重視するのが得意！アプリを活用することで、手間なく家計を管理できます。ただし、アプリだけに頼らず、たまに見返して振り返ることも大事。自分に合ったアプリを見つけて、続けていこう！'
    }
};

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
    const resultType = localStorage.getItem('quiz-result');
    
    if (!resultType || !resultData[resultType]) {
        // 結果がない場合はトップに戻る
        window.location.href = 'index.html';
        return;
    }
    
    const result = resultData[resultType];
    
    // 結果を表示
    document.getElementById('resultType').textContent = result.type;
    document.getElementById('resultImage').src = result.image;
    document.getElementById('resultImage').alt = result.type;
    document.getElementById('resultFeature').textContent = result.feature;
    
    // おすすめの書き方をリスト表示
    const methodContainer = document.getElementById('resultMethod');
    const methodList = document.createElement('ul');
    result.method.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        methodList.appendChild(li);
    });
    methodContainer.appendChild(methodList);
    
    document.getElementById('resultAdvice').textContent = result.advice;
    
    // もう一度診断するボタン
    document.getElementById('retryButton').addEventListener('click', () => {
        localStorage.removeItem('quiz-result');
        window.location.href = 'index.html';
    });
});
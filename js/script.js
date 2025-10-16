// ★忘れずに！ js/config.js に APIキーを設定する

// APIキーの情報を読み込む
import { GEMINI_API_KEY } from './js/config.js';
// @google/genai ライブラリを読み込む
import { GoogleGenAI } from 'https://cdn.jsdelivr.net/npm/@google/genai';

// @google/genai ライブラリを初期化
const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// メッセージ送信
$('#send').on('click', function () {
    const userMessage = $('#user-input').val(); // ユーザーメッセージを取得
    if (!userMessage) return; // ユーザーメッセージが空の場合は処理を終了

    $('#user-input').val(''); // ユーザーメッセージをクリア

    // ★ Gemini API を実行する関数 callGeminiAPI を呼び出す
    callGeminiAPI(userMessage);
});

// Gemini API呼び出し関数
function callGeminiAPI(message) {
    $('#response').html('考え中...');

    // @google/genai ライブラリを使用して Gemini API を呼び出す
    genAI.models
        .generateContent({
            model: 'gemini-2.5-flash',
            contents: message,
        })
        .then(function (response) {
            const aiResponse = response.text; // AIの回答を取得
            $('#response').html(aiResponse); // AIの回答を表示
        });
}

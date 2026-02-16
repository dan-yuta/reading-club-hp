# コンテンツ更新ガイド

サイトの文面やリンクは、すべて `site.json` で管理しています。
HTMLやCSSを直接編集する必要はありません。

## 更新手順

1. `site.json` をテキストエディタで開く
2. 該当箇所の値を書き換える
3. 保存して、ブラウザで確認する（ローカル確認にはHTTPサーバーが必要）
4. GitHubにpushすると、Netlifyで自動デプロイされる

## よく更新する箇所

### 申込みフォームURL
```json
"links": {
  "apply_url": "https://docs.google.com/forms/d/e/..."
}
```

### noteリンク（過去の紹介本）
```json
"links": {
  "note_url": "https://note.com/..."
}
```

### Heroのキャッチコピー
```json
"hero": {
  "headline": "キャッチコピーをここに",
  "subheadline": "サブテキストをここに"
}
```

### 安心ポイントの数字（一人参加の割合など）
```json
"reassurance": {
  "items": [
    {
      "title": "ほぼ全員が一人参加",
      "stat": "92%",
      "stat_label": "が一人で参加"
    }
  ]
}
```
`stat` を空（`""`）にすると数字は表示されません。

### 過去の発表本リンク（本のルール末尾）
```json
"book_rules": {
  "note_reference": {
    "text": "過去に発表された本の一覧は",
    "link_text": "note",
    "url": "https://note.com/bookmeeting999",
    "suffix": "でご覧いただけます。"
  }
}
```
`note_reference` を削除またはURLを空にすると非表示になります。

### FAQ追加
```json
"faq": {
  "items": [
    {
      "q": "質問文",
      "a": "回答文"
    }
  ]
}
```

### 画像の設定
```json
"images": {
  "hero": "assets/images/hero.jpg",
  "flow": "assets/images/flow.png"
}
```
空（`""`）にすると画像は表示されません。

## 注意事項

- JSONの構文エラーに注意してください（カンマの過不足、引用符の閉じ忘れなど）
- 改行は `\n` で記述してください
- 絵文字は使用しないでください（デザイン方針）

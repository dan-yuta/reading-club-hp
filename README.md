# シン・ビジネス、自己啓発読書会 LP

オンライン読書会のランディングページです。

## 技術構成

- HTML / CSS / JavaScript（フレームワーク不使用）
- コンテンツは `content/site.json` で一元管理
- Netlify でデプロイ

## セットアップ

### ローカルで確認する

`index.html` は `fetch()` で JSON を読み込むため、ファイルを直接ブラウザで開くと動作しません。
`_dev/` フォルダにローカル確認用のツールを用意しています。

1. `_dev/start-server.bat` をダブルクリック
2. ブラウザが自動で `http://localhost:8000` を開く
3. 確認が終わったら `_dev/stop-server.bat` をダブルクリックで停止

> `_dev/` は `.gitignore` で除外されているため、デプロイには含まれません。

### Netlify にデプロイする

1. このリポジトリを GitHub に push する
2. Netlify でリポジトリを連携する
3. ビルド設定:
   - **Publish directory**: `.`（ルート）
   - ビルドコマンド: 不要（静的サイト）
4. デプロイ後、以下を更新する:
   - `index.html` の `<link rel="canonical">` コメントを解除し、本番URLを設定
   - `public/robots.txt` の Sitemap URL を本番URLに変更
   - `public/sitemap.xml` の `<loc>` を本番URLに変更

## コンテンツの更新

**更新は基本 `content/site.json` を触るだけです。**

詳細は [content/README.md](content/README.md) を参照してください。

### 主な更新箇所

| 項目 | JSON パス | 備考 |
|---|---|---|
| キャッチコピー | `hero.headline` | 改行は `\n` |
| 申込みURL | `links.apply_url` | Googleフォーム |
| noteリンク | `links.note_url` | 空なら非表示 |
| 開催日時 | `schedule.items[0].value` | 上部簡易版に表示 |
| 安心ポイントの数字 | `reassurance.items[1].stat` | 空なら非表示 |
| 本のルール（OK例/NG例） | `book_rules.examples.ok[]` / `ng[]` | 追加・削除自由 |
| 本のジャンル定義 | `book_rules.definitions` | ビジネス書・自己啓発書 |
| FAQ | `faq.items[]` | 追加・削除自由 |
| 画像 | `images.hero` / `images.flow` | 空なら非表示 |

## フォルダ構成

```
/
├── index.html              # メインページ
├── assets/
│   ├── css/
│   │   └── styles.css      # スタイルシート
│   ├── js/
│   │   └── main.js         # JSON読み込み・DOM構築・SVGアイコン
│   ├── images/
│   │   └── README.md       # 画像の配置ルール
│   └── icons/              # （必要に応じて）
├── content/
│   ├── site.json           # 全コンテンツ（更新はここ）
│   └── README.md           # 更新方法の説明
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── netlify.toml            # Netlify設定
├── .gitignore              # _dev/ 等を除外
├── README.md               # このファイル
│
└── _dev/                   # ローカル開発用（gitignore対象）
    ├── start-server.bat    #   サーバー起動
    ├── stop-server.bat     #   サーバー停止
    └── server.ps1          #   PowerShell簡易HTTPサーバー
```

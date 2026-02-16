# シン・ビジネス、自己啓発読書会 LP

20〜30代向けのオンラインZoom読書会のランディングページです。

> 📐 実装アーキテクチャ・設計思想・開発履歴は [Notion ドキュメント](https://www.notion.so/LP-3094fafd667380bdab76eb2f9a114189) を参照してください。

## 技術構成

- HTML / CSS / JavaScript（フレームワーク不使用）
- コンテンツは `content/site.json` で一元管理
- Google Fonts: Noto Sans JP + Noto Serif JP
- Netlify でデプロイ

## デザイン

- Airbnb / MUJI / Notion 風のクリーンで洗練されたデザイン
- カラースキーム: 青系（ネイビー / スカイブルー）
- ヒーロー: 2カラムのエディトリアルレイアウト
- 各セクション: カード、番号付きリスト、タイムライン等を使い分け
- スクロールフェードインアニメーション（IntersectionObserver）
- レスポンシブ対応（3ブレークポイント: 639px / 959px / 1199px）
- モバイル固定CTAバー
- トップに戻るボタン（右下）

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

### 画像の管理

| 画像 | JSON パス | ファイル | 用途 |
|---|---|---|---|
| ヒーロー | `images.hero` | `assets/images/hero.png` | メインビジュアル右側 |
| 安心ポイント | `images.reassurance` | `assets/images/reassurance.png` | セクション上部 |
| 成長できる理由 | `images.growth` | `assets/images/growth.png` | セクション上部 |
| 発表の流れ | `images.flow` | `assets/images/flow.png` | セクション上部 |
| CTA | `images.cta` | `assets/images/cta.png` | 申込みセクション |

- 画像はナノバナナ（Google Gemini Image）で生成
- JSON の値を空にすると、その画像は非表示になる
- ファビコン・ロゴは `assets/images/logo.png` から生成済み

## フォルダ構成

```
/
├── index.html              # メインページ
├── assets/
│   ├── css/
│   │   └── styles.css      # スタイルシート（CSS Custom Properties）
│   ├── js/
│   │   └── main.js         # JSON読み込み・DOM構築・SVGアイコン・アニメーション
│   └── images/
│       ├── logo.png         # ロゴ（ヘッダー・ヒーロー・ファビコン元画像）
│       ├── hero.png         # ヒーロー画像
│       ├── reassurance.png  # 安心ポイント画像
│       ├── growth.png       # 成長できる理由画像
│       ├── flow.png         # 発表の流れ画像
│       ├── cta.png          # CTA画像
│       ├── favicon.ico      # ファビコン
│       ├── favicon-*.png    # 各サイズファビコン（16/32/48/180/192/512）
│       └── README.md        # 画像の配置ルール
├── content/
│   ├── site.json           # 全コンテンツ（更新はここ）
│   └── README.md           # 更新方法の説明
├── public/
│   ├── robots.txt          # クロール設定
│   └── sitemap.xml         # サイトマップ
├── netlify.toml            # Netlify設定
├── .gitignore              # _dev/, prompts/ 等を除外
└── README.md               # このファイル

--- gitignore対象 ---

├── _dev/                   # ローカル開発用
│   ├── start-server.bat
│   ├── stop-server.bat
│   └── server.ps1
└── prompts/                # AI画像生成プロンプト
    ├── HP作成用プロンプト.md
    └── 画像生成プロンプト.md
```

## SEO対策

- 構造化された HTML（セマンティックタグ、aria-label）
- OGP / Twitter Card メタタグ設定済み
- robots.txt / sitemap.xml 配備済み
- canonical URL（デプロイ後に設定）
- Google Fonts の preconnect 設定
- 画像の lazy loading（`loading="lazy"`）

### 今後のTODO

- [ ] 画像の WebP 変換（現在PNG 5〜7MB → 目標 200KB以下）
- [ ] Google Search Console 登録 + sitemap送信
- [ ] 構造化データ（JSON-LD）追加
- [ ] canonical URL の設定（デプロイ後）

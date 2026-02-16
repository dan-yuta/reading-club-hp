# シン・ビジネス、自己啓発読書会 LP

20〜30代向けのオンラインZoom読書会のランディングページです。

> 📐 実装アーキテクチャ・設計思想・開発履歴は [Notion ドキュメント](https://www.notion.so/LP-3094fafd667380bdab76eb2f9a114189) を参照してください。

## 技術構成

- HTML / CSS / JavaScript（フレームワーク不使用）
- コンテンツは `content/site.json` で一元管理
- Google Fonts: Noto Sans JP + Inter
- Netlify でデプロイ（[https://reading-club-hp.netlify.app/](https://reading-club-hp.netlify.app/)）

## デザイン

Airbnb / MUJI / Notion 風のクリーンで洗練されたデザイン。レスポンシブ対応。

> 詳細（カラーパレット・フォント・レスポンシブ・アニメーション・セクション別レイアウト等）は [Notion ドキュメント](https://www.notion.so/LP-3094fafd667380bdab76eb2f9a114189) を参照してください。

## セットアップ

### ローカルで確認する

`index.html` は `fetch()` で JSON を読み込むため、**ファイルを直接ブラウザで開くと動作しません**。
ローカルHTTPサーバーを起動して確認する必要があります。

#### 方法1: Python（推奨・インストール不要な場合が多い）

```bash
# プロジェクトのルートに移動
cd path/to/reading-club-hp

# サーバー起動（Python 3）
python -m http.server 8000

# ブラウザで開く → http://localhost:8000
# 停止するには Ctrl + C
```

#### 方法2: Node.js

```bash
# npx なら追加インストール不要
npx serve .

# ブラウザで開く → http://localhost:3000
# 停止するには Ctrl + C
```

#### 方法3: VS Code 拡張機能

1. VS Code で [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) をインストール
2. `index.html` を右クリック → **「Open with Live Server」**
3. ブラウザが自動で開く（ファイル保存時に自動リロード）

#### 方法4: _dev/ フォルダ（Windows向け）

`_dev/` フォルダにローカル確認用のバッチファイルを用意しています。

1. `_dev/start-server.bat` をダブルクリック
2. ブラウザが自動で `http://localhost:8000` を開く
3. 確認が終わったら `_dev/stop-server.bat` をダブルクリックで停止

> `_dev/` は `.gitignore` で除外されているため、GitHub / Netlify には含まれません。
> 必要な場合は手動で作成してください。

### Netlify にデプロイする

1. このリポジトリを GitHub に push する
2. Netlify でリポジトリを連携する
3. ビルド設定:
   - **Publish directory**: `.`（ルート）
   - ビルドコマンド: 不要（静的サイト）
4. デプロイ後、以下を更新する（設定済み）:
   - ~~`index.html` の `<link rel="canonical">` コメントを解除し、本番URLを設定~~ ✅
   - ~~`public/robots.txt` の Sitemap URL を本番URLに変更~~ ✅
   - ~~`public/sitemap.xml` の `<loc>` を本番URLに変更~~ ✅

## コンテンツの更新

**更新は基本 `content/site.json` を触るだけです。**

### 主な更新箇所

| 項目 | JSON パス | 備考 |
|---|---|---|
| キャッチコピー | `hero.headline` | 改行は `\n` |
| 申込みURL | `links.apply_url` | Googleフォーム |
| 読書会へ行こう！URL | `links.dokusyokai_url` | 日程確認・参加申込み |
| こくちーずURL | `links.kokucheese_url` | 日程確認・参加申込み |
| noteリンク | `links.note_url` | 空なら非表示 |
| 開催日時 | `schedule.items[0].value` | 上部簡易版に表示 |
| 安心ポイントの数字 | `reassurance.items[1].stat` | 空なら非表示 |
| 本のルール（OK例/NG例） | `book_rules.examples.ok[]` / `ng[]` | 追加・削除自由 |
| 本のジャンル定義 | `book_rules.definitions` | ビジネス書・自己啓発書 |
| 過去の発表本リンク | `book_rules.note_reference` | 本のルール末尾にnoteリンク表示 |
| FAQ | `faq.items[]` | 追加・削除自由 |
| SNS項目 | `sns.items[]` | 表示順の変更・追加・削除自由 |

### 画像の管理

| 画像 | JSON パス | ファイル | 用途 |
|---|---|---|---|
| ヒーロー | `images.hero` | `assets/images/hero.webp` | メインビジュアル右側（実写写真） |
| 安心ポイント | `images.reassurance` | `assets/images/reassurance.webp` | セクション上部 |
| 成長できる理由 | `images.growth` | `assets/images/growth.webp` | セクション上部 |
| 発表の流れ | `images.flow` | `assets/images/flow.webp` | セクション上部 |
| CTA | `images.cta` | `assets/images/cta.webp` | 申込みセクション |

- ヒーロー画像は実写写真、その他はナノバナナ（Google Gemini Image）で生成
- JSON の値を空にすると、その画像は非表示になる
- ファビコン・ロゴは `assets/images/logo.webp` から生成済み

## フォルダ構成

```
/
├── index.html              # メインページ
├── googledeab7f9888863de5.html  # Google Search Console 認証
├── assets/
│   ├── css/
│   │   └── styles.css      # スタイルシート（CSS Custom Properties）
│   ├── js/
│   │   └── main.js         # JSON読み込み・DOM構築・SVGアイコン・アニメーション
│   └── images/
│       ├── logo.webp        # ロゴ（ヘッダー・ヒーロー表示用）
│       ├── hero.webp        # ヒーロー画像（実写写真）
│       ├── reassurance.webp # 安心ポイント画像
│       ├── growth.webp      # 成長できる理由画像
│       ├── flow.webp        # 発表の流れ画像
│       ├── cta.webp         # CTA画像
│       ├── icon-*.png       # SNSアイコン（note, 読書会, こくちーず）
│       ├── favicon.ico      # ファビコン
│       └── favicon-*.png    # 各サイズファビコン（16/32/180/192/512）
├── content/
│   └── site.json           # 全コンテンツ（更新はここ）
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
- canonical URL 設定済み
- Google Fonts の preconnect + 非同期読み込み
- 画像の lazy loading（`loading="lazy"`）+ width/height 属性
- Google Search Console 登録済み + sitemap送信済み
- 構造化データ（JSON-LD: Organization + WebSite）

### 完了済みの改善

- [x] 画像の WebP 変換（PNG 35MB → WebP 760KB、98%削減）
- [x] canonical URL の設定
- [x] Google Search Console 登録 + sitemap送信
- [x] 構造化データ（JSON-LD）追加（Organization + WebSite）
- [x] Lighthouse パフォーマンス改善（43→65: フォント非同期・logo WebP化・画像サイズ指定・コントラスト修正）
- [x] 不要ファイル削除・フォルダ整理

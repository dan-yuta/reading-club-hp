# 画像の管理

このディレクトリに画像を配置してください。

## ファイル一覧

| ファイル名 | 用途 | 推奨サイズ | 備考 |
|---|---|---|---|
| `hero.jpg` | Heroセクション背景 | 1600 x 900 px | 横長。軽量化推奨（200KB以下） |
| `flow.png` | イベントの流れ図解 | 幅 1200 px | 透過PNGまたはJPG |
| `community.jpg` | 雰囲気画像（任意） | 800 x 600 px | 読書会の雰囲気が伝わる写真 |

## 設定方法

1. 画像をこのディレクトリに配置する
2. `content/site.json` の `images` セクションにパスを記入する

```json
"images": {
  "hero": "assets/images/hero.jpg",
  "flow": "assets/images/flow.png",
  "community": "assets/images/community.jpg"
}
```

## 注意事項

- 画像を差し替える場合は同じファイル名で上書きしてください
- ファイルサイズはできるだけ軽量に（WebPやTinyPNGでの圧縮を推奨）
- `site.json` の該当フィールドを空（`""`）にすると、その画像は表示されません

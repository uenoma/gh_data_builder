# gh_data_builder

`gh_data_builder` は、ガンダムシリーズのMS（Mobile Suit）のデータをビルド・管理するためのReactベースのWebアプリケーションです。MSのスペック、武器、回避性能などのデータを入力・編集・表示することができます。

このプロジェクトは [Create React App](https://github.com/facebook/create-react-app) でブートストラップされています。

## 機能概要

- **データベースビュー**: 保存されたMSデータのリストを表示し、選択・編集・削除が可能です。
- **フォームビュー**: 新しいMSデータを作成または既存のデータを編集します。
- **ビューアビュー**: MSデータの詳細を表示します。

詳細な使い方は [MANUAL.md](MANUAL.md) を参照してください。

## 利用可能なスクリプト

プロジェクトディレクトリで以下のコマンドを実行できます：

### `npm start`

開発モードでアプリケーションを起動します。\
ブラウザで [http://localhost:3000](http://localhost:3000) を開いて表示できます。

変更を保存するとページが自動的にリロードされます。\
コンソールでリントエラーが表示される場合があります。

### `npm test`

インタラクティブなウォッチモードでテストランナーを起動します。\
テストの実行方法については [テストの実行](https://facebook.github.io/create-react-app/docs/running-tests) を参照してください。

### `npm run build`

本番用にアプリケーションを `build` フォルダにビルドします。\
Reactを本番モードで正しくバンドルし、パフォーマンスを最適化します。

ビルドは最小化され、ファイル名にハッシュが含まれます。\
アプリケーションのデプロイ準備が整います！

デプロイ方法については [デプロイ](https://facebook.github.io/create-react-app/docs/deployment) を参照してください。

### `npm run eject`

**注意: この操作は一方向です。一度 `eject` すると元に戻せません！**

ビルドツールと設定に満足できない場合、いつでも `eject` できます。このコマンドはプロジェクトから単一のビルド依存関係を削除します。

代わりに、すべての設定ファイルと推移的な依存関係（webpack、Babel、ESLintなど）をプロジェクトにコピーします。これにより、すべてのコマンド（`eject` を除く）が引き続き動作しますが、コピーされたスクリプトを指すため、必要に応じて調整できます。この時点であなた自身で管理する必要があります。

`eject` を使用する必要はありません。キュレートされた機能セットは中小規模のデプロイに適しており、この機能を使用する義務を感じる必要はありません。ただし、準備ができたらカスタマイズできるようにするためにこのツールを提供しています。

## 詳細情報

[Create React App のドキュメント](https://facebook.github.io/create-react-app/docs/getting-started) で詳細を確認できます。

Reactを学ぶには [React のドキュメント](https://reactjs.org/) を参照してください。

### コード分割

このセクションはこちらに移動しました: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### バンドルサイズの分析

このセクションはこちらに移動しました: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### プログレッシブWebアプリの作成

このセクションはこちらに移動しました: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### 高度な設定

このセクションはこちらに移動しました: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### デプロイ

このセクションはこちらに移動しました: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` が最小化に失敗する

このセクションはこちらに移動しました: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

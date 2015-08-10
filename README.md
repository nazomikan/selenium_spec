# selenium-spec

いろいろ

## downloadとか

* [selenium server](http://www.seleniumhq.org/download/)

* [chromedriver](http://chromedriver.storage.googleapis.com/index.html)

## seleniumサーバの起動

```sh
% java -jar ~/node_workspace/selenium/selenium-server-standalone-2.47.1.jar -Dwebdriver.chrome.driver=chromedriver
```

## 実行

```sh
% mocha test/example/standard/spec.js


  testサーバについて
    localhost:8080/a.html について
      ✓ titleが Hello World であること (615ms)


  1 passing (3s)
```



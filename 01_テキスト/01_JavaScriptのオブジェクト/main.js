const hikakin = {
  name: "ヒカキン",
  age: 24,
  hobbies: ["ゲーム", "動画編集", "猫と遊ぶこと"],
  isHappy: true,
  address: {
    country: "日本",
    city: "東京",
  },
  sayHello: function () {
    console.log("ブンブンハロー YouTube")
  },
}

// 練習問題
// hikakin オブジェクトに入っている sayHello メソッドを実行してください。
hikakin.sayHello()
// [やってみよう]
// hikakin オブジェクト を真似して自分のプロフィールをオブジェクトで作ってください。
// オブジェクトにはたくさんのプロパティを追加してください。
const masana = {
  name: "コニシマサナ",
  age: 21,
  hobbies: ["アークナイツ", "折り紙", "スポーツ観戦"],
  isSleepy: true,
  address: {
    country: "日本",
    city: "大阪",
  },
  greeting: function () {
    console.log("よろしくお願いします！")
  },
}

masana.name
masana.greeting()

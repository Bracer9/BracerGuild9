/*
window.onload = function() {
    var password = prompt("このページにアクセスするにはパスワードを入力してください:");
    if (password !== "ltx") {
      window.location.href = "https://google.com";  // パスワードが間違っている場合、リダイレクトする
    }
  };
  */

  window.onload = function() {
    // セッションストレージに「passwordEntered」がない場合のみパスワードを要求
    if (!sessionStorage.getItem("passwordEntered")) {
      var password = prompt("パスワードを小文字で入力してね♫");
  
      if (password === "ltx") {
        // 正しいパスワードが入力された場合
        sessionStorage.setItem("passwordEntered", "true");  // セッションストレージに設定
      } else {
        // 間違ったパスワードが入力された場合
        window.location.href = "https://google.com";  // 間違った場合、リダイレクト
      }
    }
  };
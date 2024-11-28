window.onload = function() {
    var password = prompt("このページにアクセスするにはパスワードを入力してください:");
    if (password !== "ltx") {
      window.location.href = "https://google.com";  // パスワードが間違っている場合、リダイレクトする
    }
  };
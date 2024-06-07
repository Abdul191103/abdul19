document.getElementById("loveButton").addEventListener("click", function() {
    var messages = [
      "Aku sayang kamu!",
      "Kamu istimewa bagiku.",
      "Hari-hariku lebih berwarna dengan kehadiranmu.",
      "Cinta kamu seperti angin, tidak bisa dilihat tetapi bisa dirasakan. uhuyyy"
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("loveMessage").textContent = messages[randomIndex];
  });
  
function search() {
    var keyword = document.querySelector(".search-bar input").value;
    window.location.href = "https://www.google.com/search?q=" + keyword;
  }
  document.querySelector(".search-bar button").addEventListener("click", search);
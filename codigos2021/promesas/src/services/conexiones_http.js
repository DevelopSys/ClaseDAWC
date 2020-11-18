"use strict";

export function getArticulos() {
  fetch(
    "http://newsapi.org/v2/top-headlines?country=us&apiKey=3b9f157a5b75463189508b079bdbb25f"
  )
    .then((data) => {
      console.log(data.json());
    })
    .catch((err) => {
      console.log(err);
    });
}

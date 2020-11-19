"use strict";
let url =
  "http://newsapi.org/v2/top-headlines?country=us&apiKey=3b9f157a5b75463189508b079bdbb25fwerwrwerwer";

export async function getArticulos() {
  let respuesta;
  respuesta = await fetch(url);
  try {
    if (respuesta.ok) {
      return await respuesta.json();
    } else if (respuesta.status === 401) {
      throw "Error";
    }
  } catch (err) {
    throw err;
  }
}
export async function getArticulosAjax() {
  $.ajax({
    type: "GET",
    url:
      "http://newsapi.org/v2/top-headlines?country=us&apiKey=3b9f157a5b75463189508b079bdbb25f",
    data: "",
    dataType: "json",
    success: function (response) {
      //console.log(response.articles);
      return response;
    },
  });
}

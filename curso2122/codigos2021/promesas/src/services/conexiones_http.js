"use strict";
let url =
  "http://newsapi.org/v2/top-headlines?country=us&apiKey=3b9f157a5b75463189508b079bdbb25fwerwrwerwer";
let urlUsers = "https://reqres.in/api/";

let urlRandom = "https://randomuser.me/api/";

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

export async function getUsers() {
  let respuesta = await $.ajax({
    type: "GET",
    url: `${urlUsers}users?page=2`,
    dataType: "json",
  });

  return respuesta;
}

export async function createUser(usuario) {
  let respuesta = await $.post(`${urlUsers}users`, usuario, "json");

  return respuesta;
}

export async function getUsersRandom(numero) {
  let respuesta = $.get(
    `${urlRandom}`,
    { results: numero, gender: "female" },
    function (data, textStatus, jqXHR) {
      console.log(data);
    },
    "json"
  );

  return respuesta;
}

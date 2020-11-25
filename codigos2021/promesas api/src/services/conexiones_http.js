"use strict";

let urlRandom = "https://randomuser.me/api/";

let urlRandomEmail = "?email=nadir.carvalho@example.com";

export async function getAllUsers(numero) {
  let respuesta = await $.get(`${urlRandom}?results=${numero}`, "json");
  return respuesta;
}

export async function getUserByUUID(uuid) {
  let respuesta = await $.get(`${urlRandom}?email=${uuid}`, "json");
  return respuesta;
}

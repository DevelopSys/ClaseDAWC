$.ajax({
    type: "GET",
    url: "http://localhost:3000/usuarios/filter",
    data: { gender: "female", country: "Spain" },
    dataType: "json",
    success: function(response) {
        console.log(
            response.response.filter((element) => {
                return element.location.state === "Asturias";
            })
        );
    },
    complete: () => {
        console.log("peticion completada");
    },
});
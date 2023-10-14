$(document).ready(() => {
  var $etiquetasA = $(".enlaces");
  $etiquetasA.on("click", () => {
    $(".enlaces").hide();
  });
  $(".mensaje").click(() => {
    $("p").html("Que cambia por este otro!");
  });
  $(".cambiar").click(() => {
    $("li").addClass("red");
  });
  $(".verSeccion").click(() => {
    $(".ocultable").toggle();
  });
  //   const apiUrl = "https://localhost:8000/productos";
  //   $.ajax({
  //     url: apiUrl,
  //     method: "GET",
  //     dataType: "json",
  //     success: () => {
  //       var $productosLista = $("#productos");
  //       $.each(data, (index, producto) => {
  //         var $nuevoProducto = $("<li>").text(producto.nombre);
  //         $productosLista.append($nuevoProducto);
  //       });
  //     },
  //     error: () => {
  //       console.error("Error:", error);
  //     },
  //   });
});

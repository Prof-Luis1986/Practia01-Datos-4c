//Pide al usuario que ingrese la información
const nombre=prompt("Ingresa tu nombre");
const apellido=prompt("Ingresa tu apellido");
const edad=prompt("Ingresa tu edad");
const lugarNacimiento=prompt("Ingresa tu lugar de nacimiento");
const fecha=prompt("Ingresa tu fecha de ncimiento");
const comidaFavorita=prompt("Ingresa tu comida favorita");
const carrera=prompt("Ingresa tu carrera");
const diaFavorito=prompt("Ingresa tu día favorito");

//Construye una lista con la información solicitada
const lista=document.createElement("ul")

//Agrega cada dato como elemento de lista
const agregarDAto=(etiqueta, valor)=>{
    const elementoLista=document.createElement("li");
    elementoLista.innerHTML=`<strong>${etiqueta}:</strong> ${valor}`;
    lista.appendChild(elementoLista);
};

agregarDAto("Nombre",`${nombre} ${apellido}`);
agregarDAto("Edad", edad);
agregarDAto("Lugar De Nacimiento", lugarNacimiento);
agregarDAto("Fecha de nacimiento", fecha);
agregarDAto("Comida Favorita", comidaFavorita);
agregarDAto("Carrera",carrera);
agregarDAto("Día Favorito", diaFavorito);

//Crear un contenedor DIV para mostrar la lista
const resultadoDiv=document.createElement("Div");
resultadoDiv.appendChild(lista);

//Agrega el nuevo div al cuerpo del documento




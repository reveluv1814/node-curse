//importando modulo
const math = require("./math/index");

//console.log(math.add(10,20))

///fetch
fetch("https://rickandmortyapi.com/api/character/").then((res) => res.json()); //convierte la resuesta en un json
//.then(data=>console.log(data)); // y de estos datos lo muestra por consola

//convirtiendola en asyn await
async function loadData() {
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await res.json(); //convierte la respuesta en un json y lo guarda en una variable
  //console.log(data)
}
loadData();

//si se considera un error lo podemos usar en un try catvch
//convirtiendola en asyn await
async function loadData1() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await res.json(); //convierte la respuesta en un json y lo guarda en una variable
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
loadData1();

//y en la version ecma 2022  (funciona si en package.json tiene el atributo "type: "module"")
try {
    const res = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await res.json(); //convierte la respuesta en un json y lo guarda en una variable
    console.log(data);
  } catch (error) {
    console.log(error);
  }
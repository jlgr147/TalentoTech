const autos=`[
    {
        "modelo": "Ford",
        "Produccion": 2010,
        "Kilometraje":1600

    },
    {
        "modelo": "Renout",
        "Produccion": 2016,
        "Kilometraje":2500
    },
    {
        "modelo": "vmw",
        "Produccion": 2020,
        "Kilometraje":3000
    }
]`
console.log(typeof autos);
const jsonData =JSON.parse(autos)
console.log(typeof jsonData)
const AutosNuevos = jsonData.filter((autos)=> autos.produccion>2010 && autos.Kilometraje>1600);
console.log(AutosNuevos)
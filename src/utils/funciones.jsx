export async function fetchData(categoria) {
    const response = await fetch(`https://api.mercadolibre.com/${categoria}`);
    const datos = await response.json();
    console.log(datos);
    console.log(categoria)
    return datos;
}
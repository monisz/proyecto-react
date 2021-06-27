export async function fetchData(categoria) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categoria}`);
    const datos = await response.json();
    console.log(datos.results);
    return datos.results;
}
export const LoaderComponent = () => {
    console.log("está en el loader")
    return (
        <div>
            <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden"></span>
            </div>
            <div>
                <h5>Cargando datos...</h5>
            </div>
        </div>
    )
}
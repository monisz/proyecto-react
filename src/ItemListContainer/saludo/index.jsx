export const Saludo = (props) => {
    return (
        <div style= {{display: 'flex', justifyContent: 'center', color: 'blue', marginTop: '5%'}}>
            <h1>{props.title} {props.dataUsuario.name}!</h1>
        </div>
    )
}
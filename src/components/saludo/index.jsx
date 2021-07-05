export const Saludo = (props) => {
    return (
        <div style= {{display: 'flex', justifyContent: 'center'}}>
            <h3>{props.title} {props.dataUsuario.name}!</h3>
        </div>
    )
}
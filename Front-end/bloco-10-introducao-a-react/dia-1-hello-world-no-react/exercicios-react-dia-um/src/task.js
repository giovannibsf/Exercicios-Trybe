import React from "react";


class Tarefas extends React.Component {
    render () {
        const compromissos = ['estudar', 'nadar', 'ler', 'musculação', 'comer bem']
        const Task = (valor) => {
            return (
                valor.map((element) => <li>{element}</li>)
            )
        }
        return (
            Task(compromissos)
        )
            }
    
    
}

export default Tarefas
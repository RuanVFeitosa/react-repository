import "./forms.css";
import { useState } from "react";

const Form = () => {
    // Estado inicial do Formulario

    const initilForm = {
        nome: "",
        senha: "",
    }

    // Estado do Formulario
    const [formState, setFormState] = useState(initilForm);

    // Função para lidr com a alteração dos campos de entrada
    const handleInput = (event) => {
        // Obter o valor e o nome do campo de entrada
        const target = event.currentTarget;

        // Extrair o valor e o nome do campo de entrada
        const { name, senha, value } = target;

        // Atualizar o estado do formulario com os novos valores
        setFormState({ ...formState, [name]: value, [senha]: value});

    }

    // Função para lidar com a submissão do formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState.nome)

        setFormState({...initilForm})
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <div className="form-control">
                    <label>Username: </label>
                    <input type="text" name="nome" placeholder="Enter your username" 
                    value={formState.nome} onChange={handleInput} />

                    <label>Password: </label>
                    <input type="text" name="senha" placeholder="Enter your password" 
                    value={formState.senha} onChange={handleInput} />

                </div>
                
                <div className="form-control">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
import {
    Main,
    Body,
    Logo,
    Spacing,
    CreateAcc
} from "./styles";
import { Input, Button } from "../../components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const save = async (ev) => {
        ev.preventDefault();
        await axios.post("http://localhost:3001/user", data);
        alert("Usuário criado com sucesso");
    }

    return (
        <Main>
            <Body>
                <form onSubmit={save}>
                    <Logo>Gerenciador Financeiro</Logo>
                    <Input
                        label="Nome"
                        placeholder="Digite o seu nome"
                        required={true}
                        value={data.name}
                        onChange={(ev) => setData({ ...data, name: ev.target.value })}
                    />
                    <Spacing />
                    <Input
                        label="Email"
                        placeholder="Digite o email"
                        required={true}
                        type="email"
                        value={data.email}
                        onChange={(ev) => setData({ ...data, email: ev.target.value })}
                    />
                    <Spacing />
                    <Input
                        label="Senha"
                        placeholder="Digite a senha"
                        type="Password"
                        required={true}
                        value={data.password}
                        onChange={(ev) => setData({ ...data, password: ev.target.value })}
                    />
                    <Spacing />
                    <Button
                        label="Criar conta"
                        variant="btn-primary"
                        type="submit"
                    />
                    <Spacing />
                    <CreateAcc onClick={() => navigate("/login")}>Fazer login</CreateAcc>
                </form>
            </Body>
        </Main>
    );
};

export default Register;
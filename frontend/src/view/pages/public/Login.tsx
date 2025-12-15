import { Input } from "../../components/Input";

export  function LoginForm(){
    return (
        <div>
            <h1>Login</h1>
            <form action="">
                <Input 
                label="Email"
                name="email"
                type="email"
                placeholder="Digite seu email"
                />
                <Input 
                label="Senha"
                name="password"
                type="password"
                placeholder="Digite sua senha"
                />
            </form>
        </div>
    );
}
import { Container, ContainerMid } from "./style";
import logo from "../../assets/smile.png"
import { useHistory } from "react-router-dom";

export function Login() {
    const history = useHistory();

    const handleLogin = () => {
      // Aqui você pode usar uma biblioteca de autenticação com o GitHub
      // para obter o usuário logado. Vou usar um exemplo simulado abaixo:
      const user = {
        name: "Exemplo de Usuário",
        username: "exemplouser",
        // Outras informações do usuário que você deseja passar
      };
  
      // Redirecionar para a página inicial (home) com o usuário como parâmetro
      history.push({
        pathname: "/",
        state: { user },
      });
    };
    return (
        <Container>
            <ContainerMid>
                <h1>Boas vindas ao atarefado!</h1>
                <img src={logo} alt="logo"/>
                <h2>Faça login parauma melhor experiência!</h2>
                <button>Entrar</button>
            </ContainerMid>
            
        </Container>
    )
}
import { StyledContainer } from "../../styles/grid";
import logo from "../../assets/Logo.svg";
import { Button } from "../../components/Button";
import { StyledDashboardHeader, StyledDashboardMain } from "./style";
import { useNavigate } from "react-router-dom";

export const Dashboard = ({ user }) => {
  const navigate = useNavigate();
  const exit = () => {
    navigate("/");
    localStorage.clear();
  };
  return (
    <>
      <StyledDashboardHeader>
        <nav>
          <img src={logo} alt="Kenzie Hub" />
          <Button action={() => exit()}>Sair</Button>
        </nav>
      </StyledDashboardHeader>
      <StyledDashboardMain>
        <section className="sectionBio">
          <div>
            <h2>Olá, {user.name}</h2>
            <p>{user.course_module}</p>
          </div>
        </section>
        <section className="sectionInfos">
          <div>
            <h2>Que pena! Estamos em desenvolvimento</h2>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </div>
        </section>
      </StyledDashboardMain>
    </>
  );
};

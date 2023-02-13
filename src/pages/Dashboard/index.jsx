import { StyledContainer } from "../../styles/grid";
import logo from "../../assets/Logo.svg";
import { Button } from "../../components/Button";
import { StyledDashboardHeader, StyledDashboardMain } from "./style";

export const Dashboard = () => {
  return (
    <>
      <StyledDashboardHeader>
        <nav>
          <img src={logo} alt="Kenzie Hub" />
          <Button>Sair</Button>
        </nav>
      </StyledDashboardHeader>
      <StyledDashboardMain>
        <section className="sectionBio">
          <div>
            <h2>Olá, Samuel Leão</h2>
            <p>Primeiro módulo (Introdução ao Frontend)</p>
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

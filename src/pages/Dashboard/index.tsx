import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/25910972?s=460&u=f3e860eb8d37b0d225ad551a32a145a777aa388a&v=4"
            alt="Halisson Alves"
          />
          <div>
            <strong>halissonalves/gameszerados</strong>
            <p>
              Website desenvolvido para registrar os jogos e estatísticas de
              jogos que venho zerando ao longo do tempo.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/25910972?s=460&u=f3e860eb8d37b0d225ad551a32a145a777aa388a&v=4"
            alt="Halisson Alves"
          />
          <div>
            <strong>halissonalves/gameszerados</strong>
            <p>
              Website desenvolvido para registrar os jogos e estatísticas de
              jogos que venho zerando ao longo do tempo.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/25910972?s=460&u=f3e860eb8d37b0d225ad551a32a145a777aa388a&v=4"
            alt="Halisson Alves"
          />
          <div>
            <strong>halissonalves/gameszerados</strong>
            <p>
              Website desenvolvido para registrar os jogos e estatísticas de
              jogos que venho zerando ao longo do tempo.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

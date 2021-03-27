import React from "react";

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermomete,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
} from "./styles";

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon />
        <div>
          <p>Localização</p>
          <strong>São Paulo, Sorocaba</strong>
        </div>
      </LocationCard>
      <ReputationCard>
        <ReputationThermomete>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li className="active'"></li>
        </ReputationThermomete>

        <ReputationRow>
          <div>
            <strong>000</strong>
            <span>vendas nos ultimos 4 meses</span>
          </div>
          <div>
            <strong>
              <SupportIcon />
            </strong>
            <span>Nunca nem vi</span>
          </div>
          <div>
            <strong>
              <ClockIcon />
            </strong>
            <span>Entrega devagarinho</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mais dados do vendedor</More>
    </Container>
  );
};

export default SellerInfo;

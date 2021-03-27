import React from "react";

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShildIcon,
} from "./styles";

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo</Condition>

      <Row>
        <h1>Camiseta diferenciadamente braba</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">34</span>
          <span className="cents">43</span>
        </PriceRow>

        <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
      </PriceCard>

      <StockStatus> Estoque Disponivel </StockStatus>

      <MethodCard>
        <CheckIcon />
        <div>
          <span className="title">Frete gratis</span>
          <span className="details">Beneficio Lotem ipsum</span>
          <a href="#" className="more">
            Ver mais opções
          </a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShildIcon />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ut,
            voluptas nihil quasi voluptatum numquam.
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;

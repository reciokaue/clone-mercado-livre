import React from 'react';
import ProductAction from '../ProductAction';
import SellerInfo from '../SellerInfo';

import { Container, Row, Panel, Column, Gallery, Section, Description  } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src="https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png" alt="T-shirt"/>
          </Gallery>

          <Info/>

        </Column>

        <Column>
          <ProductAction/>
          <SellerInfo/>
          
          <WarrantySection/>
          <WarrantySection/>
          <WarrantySection/>
        </Column>
      </Panel>
    </Container>
  );
};
const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">
          compra garantida com o Lorem Ipsum
        </p>
        <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolore culpa, accusamus consectetur ducimus voluptatem ea cumque asperiores eligendi provident?
        </p>
      </span>

      <span>
        <p className="title">
          compra garantida com do Vendedor
        </p>
        <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolore culpa, accusamus consectetur ducimus voluptatem ea cumque asperiores eligendi provident?
        </p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum provident minus laudantium numquam sit, quis quos officia corporis cumque! Sequi itaque, nihil nostrum magni accusantium iusto at non vero optio qui voluptatum. Qui deserunt illo nihil error maiores autem?
      <br/><br/>
      Itens incluso: <br/>
      -1x LED <br/>
      -1x LED <br/>
      -1x LED <br/>
      -1x LED <br/>
      -1x LED <br/>
      <br/>

      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolor atque debitis eaque molestias, harum provident deleniti, consectetur nam adipisci reprehenderit saepe eum, dignissimos placeat magni sequi praesentium dolorem. Impedit ad deleniti eveniet molestiae esse ipsum, dolore, minus dignissimos in hic porro ab magnam facilis similique saepe a! Unde, at quaerat voluptatum tempore neque, vero, repellendus minima nobis explicabo laboriosam reprehenderit laudantium eum ut modi labore eaque ipsa nostrum iste!
    </p>
  </Description>
)

export default Product;

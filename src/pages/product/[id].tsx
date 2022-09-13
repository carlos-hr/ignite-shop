import Image from "next/future/image";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camisa X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ab ut
          dicta delectus neque quaerat natus numquam quas optio officia tenetur,
          praesentium blanditiis sed dignissimos! Aut eos excepturi
          exercitationem nemo?
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}

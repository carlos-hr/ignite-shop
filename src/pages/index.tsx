import Image from "next/future/image";
import { HomeContainer, Product } from "../styles/pages/home";
import c1 from "../assets/1.png";
import c2 from "../assets/2.png";
import c3 from "../assets/3.png";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={c1} width={520} height={480} alt="" />
        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={c2} width={520} height={480} alt="" />
        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      {/* <Product>
        <Image src={c3} width={520} height={480} alt="" />
        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product> */}
    </HomeContainer>
  );
}

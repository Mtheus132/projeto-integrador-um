import "./css/ListadeProdutos.css";

export default function Lista() {
  return (
    <main>
      <div class="corpo-lista">
        <div class="filtros">
          <hgroup class="texto-filtro">
            <h3>Preço</h3>

            <br />

            <ul>
              <li> Até R$15 </li>
              <li> De R$16 á 30 reais</li>
              <li> De R$31 á 50 reais</li>
              <li> De R$51 á 100 reais</li>
              <li> De R$100 á 1000 reais</li> <br />
            </ul>

            <h3>Descontos</h3>

            <br></br>

            <ul>
              <li>Mais de 5% OFF </li>
              <li>Mais de 10% OFF</li>
              <li>Mais de 15% OFF</li>
              <li> Mais de 20% OFF</li>
              <li> Mais de 50% OFF</li> <br />
            </ul>

            <h3>Categorias </h3>

            <br></br>

            <ul>
              <li>Suplementos </li>
              <li> Barras de cereais</li>
              <li> Wheys</li>
              <li> Linha Vegana</li>
              <li> Vitaminas</li>
            </ul>

            <h3>Valor Frete </h3>

            <br />

            <ul>
              <li>Grátis </li>
              <li> Até 5 reais</li>
              <li> Até 10 reais</li>
              <li>Até 20 reais </li>
              <li> Qualquer valor</li> <br />
            </ul>
          </hgroup>
        </div>

        <div class="imagens-produtos">
          <img
            id="img-whey"
            src="img/whey-detalhe.png"
            alt="Imagem Whey Protein"
          />

          <img
            id="s-produto"
            src="img/touro-lista.png"
            alt="Imagem Touro suplemento"
          />

          <img
            id="t-produto"
            src="img/over-lista.png"
            alt="Imagem Over suplemento"
          />
        </div>

        <div class="descrição-produtos">
          <div class="d-whey">
            <hgroup>
              <h3>
                {" "}
                Kit 2x 100% Whey 900g (1.8kg) Max Titanium Whey Protein
                Concentrado{" "}
              </h3>
              <h4>
                {" "}
                Fornecido Por:
                <span class="italico">Iluminos </span>
                <span class="valor"> R$1.499 </span>
                <span class="real"> R$899 </span>
              </h4>
            </hgroup>

            <a href="">
              <button id="botão-carrinho-um">Adicionar ao Carrinho</button>
            </a>

            <a href="listaprodutos/whey">
              <button id="botão-ver-um">Ver mais</button>
            </a>
          </div>

          <div class="d-touro">
            <hgroup>
              <h3>Touro - Suplemento Energético com 60 capsulas - ApoloEX </h3>
              <h4>
                {" "}
                Fornecido Por:
                <span class="italico">Iluminos </span>
                <span class="valor"> R$600 </span>
                <span class="real"> R$399 </span>
              </h4>
            </hgroup>

            <a href="">
              <button id="botão-carrinho-um">Adicionar ao Carrinho</button>
            </a>

            <a href="listaprodutos/touro">
              <button id="botão-ver-um">Ver mais</button>
            </a>
          </div>

          <div class="d-over">
            <hgroup>
              <h3>
                Suplemento Gamer Overclock GG++, inteligencia & força, 30 Doses{" "}
              </h3>
              <h4>
                {" "}
                Fornecido Por:
                <span class="italico">Iluminos </span>
                <span class="valor"> R$400 </span>
                <span class="real"> R$285 </span>
              </h4>
            </hgroup>

            <a href="">
              <button id="botão-carrinho-um">Adicionar ao Carrinho</button>
            </a>

            <a href="listaprodutos/over">
              <button id="botão-ver-um">Ver mais</button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

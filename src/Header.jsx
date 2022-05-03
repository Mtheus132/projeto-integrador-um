import "./css/header.css";

export default function Header() {
  return (
    <header>
      <div class="promoções">
        <h5>
          Promoção da semana!! Kit 2x 100% Whey 900g (1.8kg) Max Titanium Whey
          Protein Concentrado de R$1.499 por apenas R$899
        </h5>
      </div>

      <div class="cabeçario">
        <img id="logo" src="img/logo.oficial.jpeg" alt=" Icone do Site" />

        <div class="pesquisar">
          <img id="icone-buscar" src="img/icone-busca.png" alt="icone busca" />
          <input type="text" name="Pesquisar" placeholder=" Pesquisar" />
        </div>

        <a href="/login">
          <img
            id="icone-usuario"
            src="img/icone-entrar-peq.png"
            alt="Icone usuario"
          />
        </a>

        <a href="/carrinho">
          <img
            id="icone-carrinho"
            src="img/crrinho-original-pq-trans.png"
            alt="Icone de um carrinho"
          />
        </a>
      </div>

      <div class="menu-principal">
        <a id="pagina-inicial" href="/">
          <li ul>Página Inicial</li>
        </a>
        <a id="lista-produtos" href="listaprodutos">
          <li ul>Lista de Produtos</li>
        </a>

        <a id="parceiro" href="/cadastroempresa">
          <li ul>Seja um Parceiro</li>
        </a>

        <a id="sobre-empresa" href="#">
          <li ul>Sobre a Empresa</li>
        </a>
      </div>
    </header>
  );
}

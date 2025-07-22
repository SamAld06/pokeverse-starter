import useSWR, { fetcher } from "../../swr";
import "./PokemonCard.css";

function PokemonCard({ name, url }) {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) {
    return <li className="pokemonCard">Error</li>;
  }

  if (isLoading) {
    return <li className="pokemonCard">Loading...</li>;
  }

  return (
    <li className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <img
              className="pokemonCard-image"
              src={data.sprites.front_default}
              alt=""
            />
            <span className="pokemonCard-name">{name}</span>
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div className="circle">
            </div>
            <div className="circle" id="right">
            </div>
            <div className="circle" id="bottom">
            </div>
          </div>
          <div className="front-content">
            <small className="badge">STAGE PLACEHOLDER</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>DESCRIPTION PLACEHOLDER</strong>
                </p>
              </div>
              <p className="card-footer">
                TYPE PLACEHOLDER &nbsp; | &nbsp; DEX NUMBER PLACEHOLDER
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default PokemonCard;

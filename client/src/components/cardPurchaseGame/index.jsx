import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { numberGamesCarts, setRefreshUpdate } from "../../redux/actions";
import styles from "./index.module.css";

function CardPruchaseGame({ game, section = "buyCard" }) {
  const dispatch = useDispatch();
  const handleDeleteCart = () => {
    const gameLocalStorage = JSON.parse(localStorage.getItem("name"));
    const newGameShooping = gameLocalStorage.filter(
      (gamers) => gamers.id !== game.id
    );
    localStorage.setItem("name", JSON.stringify(newGameShooping));
    dispatch(setRefreshUpdate());
    dispatch(numberGamesCarts(gameLocalStorage.length - 1));
  };
  const handleDeleteCartFavorities = () => {
    const gameLocalStorage = JSON.parse(localStorage.getItem("favorite"));
    const newGameShooping = gameLocalStorage.filter(
      (gamers) => gamers.id !== game.id
    );
    localStorage.setItem("favorite", JSON.stringify(newGameShooping));
    dispatch(setRefreshUpdate());
  };

  return (
    <div className={styles.containerGameCart}>
      <span className={styles.price}>{game.price}$</span>
      <Link to={`/detail/${game.id}`}>
        <img src={game.image} alt={game.name} />
      </Link>
      <span className={styles.nameGame}>{game.name}</span>
      {section === "purchased" && (
        <p className={styles.actionPruchasedGame}>Purchased</p>
      )}
      {section === "favoritesCard" && (
        <i
          className="bi bi-trash actionPruchasedGame"
          onClick={handleDeleteCartFavorities}
        ></i>
      )}
      {section === "buyCard" && (
        <i
          className="bi bi-trash actionPruchasedGame"
          onClick={handleDeleteCart}
        ></i>
      )}
    </div>
  );
}

export default CardPruchaseGame;

import style from "./FoodTruckListBox.module.css";

export default function FoodTruckListBox({ food }) {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <img src={food.image}></img>

          <div className={style.info}>
            <div className={style.title}>{food.name}</div>
            <div className={style.discription}>{food.description}</div>
          </div>
        </div>
      </div>
    </>
  );
}

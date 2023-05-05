import style from "./BoothListBox.module.css";

export function BoothListBox({ booth }) {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <img src={booth.image}></img>

          <div className={style.info}>
            <div className={style.title}>{booth.name}</div>
            <div className={style.theme}>{booth.theme}</div>
          </div>
        </div>
      </div>
    </>
  );
}

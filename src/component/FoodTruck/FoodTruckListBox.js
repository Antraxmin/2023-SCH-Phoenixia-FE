import style from "./FoodTruckListBox.module.css";

export default function FoodTruckListBox() {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <img src="../img/koko.jpg"></img>

          <div className={style.info}>
            <div className={style.title}>꼬꼬닭꼬치</div>
            <div className={style.discription}>
              안녕하세요. 꼬꼬닭꼬치입니다. 저희는 데리야끼 닭꼬치가
              주력메뉴입니다
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import style from "./TimeTableNav.module.css";

export default function TimeTableNav() {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.date}>9일</div>
          <div className={style.day}>화요일</div>
        </div>
        <div className={style.content}>
          <div className={style.date}>10일</div>
          <div className={style.day}>수요일</div>
        </div>
        <div className={style.content}>
          <div className={style.date}>11일</div>
          <div className={style.day}>목요일</div>
        </div>
      </div>
    </>
  );
}

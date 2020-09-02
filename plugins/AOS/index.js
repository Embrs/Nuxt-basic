import AOS from "aos";
import "aos/dist/aos.css";

// 滾動特效 Animate On Scroll
export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({
    duration: 600,
    easing: "ease-in-sine"
    // isable: "phone", // 手機版不呈現
  });
  // data-aos : https://michalsnik.github.io/aos/

  // data-aos-offset // 觸發動畫的位置上下(正負px)偏移
  // data-aos-duration // 動畫持續時間
  // data-aos-delay // 動畫延遲時間
  // data-aos-anchor // 觸發動畫的錨點
  // data-aos-anchor-placement // 滑動時觸發設定，錨點的上中下在螢幕上中下
  // data-aos-once // 觸發次數
};

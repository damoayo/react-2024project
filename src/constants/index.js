import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function port() {
  gsap.registerPlugin(ScrollTrigger);
  let horSection = gsap.utils.toArray(".port__item"); // 대상 요소를 배열로 가져옴
  gsap.to(horSection, {
    xPercent: -80 * (horSection.length - 1), // 전체 이동 거리 설정
    ease: "none",
    scrollTrigger: {
      trigger: "#port", // 애니메이션 시작 요소
      pin: true, // 요소 고정
      scrub: 1, // 스크롤에 따른 동기화
      start: "center center", // 시작 위치
      end: "top top", // 종료 위치
      markers: true, // 디버그 마커 비활성화
      invalidateOnRefresh: true, // 새로고침 시 애니메이션 초기화
      anticipatePin: 1, // 고정 요소의 애니메이션을 부드럽게 만듦
      toggleActions: "restart pause reverse pause", // 토글 액션 설정
    },
  });
}

# ☕️ Cafe898-8
> 친구가 운영하는 마카롱 카페, 랜딩페이지 제작  
>luckyjek.github.io/cafe898-8/

</br>

## 1. 제작 기간 & 참여 인원
- 2022년 02월 07일 ~ 02월 11일(5일)
- 개인 프로젝트

</br>

## 2. 기술 스택
#### `Front-end`
  - HTML
  - CSS
  - JavaScript

</br>

## 3. 핵심 기능
  - 마우스 포인트 따라서 움직이는 마카롱
  - data-* 사용, 사용자가 `메뉴`클릭, 해당 `<section>`으로 이동
  - NAVER Maps API 사용한 Cafe표시

<details>
<summary><b>핵심 기능 설명 펼쳐보기</b></summary>
<div markdown="1">

### 3.1 랜딩페이지 전체구조도

<img src="https://github.com/luckyjek/dream_coding/blob/main/portfolio/imgs/portfolio/site-cafe898-8.png" width="30%" height="30%" />

- **의미있는 태그들을 사용하여 작성** 🔎 [코드 확인](https://github.com/luckyjek/cafe898-8/blob/main/index.html#L24)
  - 최대한 의미있는 태그 작성 및 깔끔한 코드를 유지하여 작성하려고 노력

### 3.2 Mousemove Event
- **마우스 포인트 따라서 움직이는 마카롱** 🔎 [코드 확인](https://github.com/luckyjek/cafe898-8/blob/main/main.js#L3)
  - 마우스 포인터의 `x`및 `y`좌표를 변수 `x`및 `y`에 저장
  - 마우스가 페이지 위에서 이동하연 `mousemove` 이벤트가 발생
  
### 3.3 data-* 
- **표준이 아닌 속성이나 추가적인 DOM 속성 사용** 🔎 [코드 확인](https://github.com/luckyjek/cafe898-8/blob/main/main.js#24)
  - 사용자가 `메뉴`클릭, 해당 `<section>`으로 이동
  
### 3.4 NAVER Maps API 사용한 Cafe표시
- **Cafe898-8의 위치표시** 🔎 [코드 확인](https://github.com/luckyjek/cafe898-8/blob/main/map.js#1)
  - Google지도의 GPS좌표(위도, 경도) 사용
  
</div>
</details>

</br>

## 4. 핵심 트러블 슈팅
### 4.1 배포할 때 Open API 인증 실패 문제
- 배포하기 전, 개발 단계에서는 지도 API 호출이 잘 되었습니다. 하지만 배포를 한 후, 아래와 같이 console 창에 인증 실패가 나타났습니다.
<img src="https://github.com/luckyjek/dream_coding/blob/main/portfolio/imgs/portfolio/navermap%20error.png" width="40%" height="40%" />

- 그래서 검색 결과 저는 [Naver Developers](https://developers.naver.com/forum/posts/27590) 라는 개발자 포럼 글을 보고 힌트를 얻었습니다.
- 공동 저자로 참여할 때 [CORS](https://luckyjek.tistory.com/58?category=1243490) 용어가 생각이 났고,  
  기존의 local에서 작업하는 환경과 다르므로 배포한 후, 사용하는 URL을 확인하고 다시 설정을 해줘야 한다고 생각했습니다. 
- 따라서 서비스 환경 등록에 https://luckyjek.github.io 추가한 후, 제대로 불러와 지는 것을 확인하였습니다.

</br>

## 6. 회고 / 느낀점
>프로젝트 개발 회고 글: url

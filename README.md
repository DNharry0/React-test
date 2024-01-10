# 프로젝트 이름
- 무제
- 리엑트의 전반적인 기능을 테스트중

## 주요 기능

- 상태관리와 실시간 데이터 업데이트
- 실시간 업데이트와 푸시 알림
- 팔로우 및 소셜 기능
- 타임라인 및 필터링

## 앱 구조

- SPA (create-react-app)
- 반응형 웹: 미디어쿼리 사용
- 상태관리: Recoil, React Context API
- 권한관리
- 다국어처리 기능
- 애니메이션 & 스타일링: SCSS 사용

## 사용 스택

- React
- Firebase (로그인, 보안, 통신)
- SCSS
- Recoil
- Vercel

## API

- 이미지 업로드: Firebase storage
- 사용자 인증: Firebase auth
- 실시간 데이터 동기화 & 저장: firestore (onSnapshot 사용)

## 구현 기능

### 홈 타임라인

- firestore를 사용한 실시간 트위터 표시
- React 컴포넌트로 트윗 표시

### 트윗 작성/편집 페이지

- 이미지 업로드 CRUD
- 글 CRUD

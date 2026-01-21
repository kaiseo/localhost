
# 📄 [WEB] Localhost Landing Page Development Spec

## 1. 프로젝트 개요 (Overview)

* **프로젝트명:** Localhost Official Website (v0.1)
* **목표 (Goal):** 방문자에게 브랜드 정체성을 전달하고, **디스코드 서버(`Join Beta Crew`)로 전환**시킨다.
* **핵심 컨셉:** **"Digital Cabin in the Woods"**
* 차가운 코딩 화면(Dark) 속에 켜진 따뜻한 모닥불/스탠드 조명(Cozy Amber)의 느낌.


* **타겟 디바이스:** Mobile First, PC/Tablet Responsive.

---

## 2. 디자인 시스템 (Design System)

**"해커의 검은 화면이 아니라, 새벽 2시의 차분한 라운지 바 느낌"**

### **A. Color Palette (Hex Code 제안)**

* **Background (Base):** `#121212` (완전 블랙 아님, 눈이 편한 차콜 그레이)
* **Background (Surface):** `#1E1E1E` (카드 UI, 섹션 구분용 조금 더 밝은 그레이)
* **Primary (Point/Glow):** `#FFB347` ~ `#FFCC80` (따뜻한 앰버/파스텔 오렌지)
* *용도:* CTA 버튼, 강조 텍스트, 은은한 조명 효과(Box-shadow).


* **Text (Main):** `#EDEDED` (흰색에 가까운 회색, 가독성 확보)
* **Text (Muted):** `#A1A1A1` (부연 설명, 은은하게 처리)

### **B. Typography**

* **Font Family:** **Pretendard** (Variable)
* *이유:* 한글/영문 모두 깔끔하고, 모던한 UI에 가장 최적화됨.


* **Weight:**
* Headlines: Bold / ExtraBold (묵직하게)
* Body: Regular / Medium (가독성 위주)



### **C. Interaction (Look & Feel)**

* **Glow Effect:** 버튼이나 카드 호버 시 따뜻한 빛이 퍼지는 느낌 (`box-shadow` 활용).
* **Fade In:** 스크롤 시 텍스트가 아래서 위로 부드럽게 떠오름 (Framer Motion).

---

## 3. 정보 구조 (Information Architecture)

### **Page Structure (Single Page)**

1. **Header (GNB):** 로고 + CTA
2. **Hero Section:** 메인 카피 + 입장 버튼 (임팩트)
3. **Feature Section:** 3가지 핵심 가치 (Deep Work / Growth / Retreat)
4. **Vision Section:** 오프라인(증평) 티징
5. **Footer:** 저작권 + SNS 링크

---

## 4. 섹션별 상세 기획 (UI/UX Detail)

### **1. GNB (Global Navigation Bar)**

* **Type:** Sticky (스크롤 내려도 상단 고정, 배경은 `backdrop-blur` 처리).
* **Left:** `Localhost` (Text Logo, 폰트 굵게, 앰버 컬러 포인트).
* **Right:** `[ Join Crew ]` (Ghost Button or Outlined Button).

### **2. Hero Section (첫인상)**

* **Background:** 픽셀 아트 일러스트(오두막)를 우측에 배치하거나, 전체 배경에 은은하게 깔고 `overlay` 처리.
* **Copy:**
* Main: `Disconnect Noise, Connect Localhost.` (타이핑 애니메이션 효과 고려)
* Sub: `개발자, 노마드, 빌더를 위한 몰입의 OS.`


* **CTA Button:**
* Design: **Filled Button** (앰버 배경 + 검정 글씨).
* Action: 클릭 시 디스코드 초대 링크로 이동.
* Effect: Hover 시 버튼 주변으로 빛이 번짐 (`shadow-orange-500/50`).



### **3. Value Proposition (Feature)**

* **Layout:** 3단 그리드 (Mobile: 1단 스택).
* **Card Design:** 배경색 `#1E1E1E`, 모서리 둥글게 (`rounded-xl`), 테두리 없음.
* **Content:**
1. **Focus (몰입):** "24시간 열려 있는 음성 채널, 서로의 페이스메이커."
2. **Insight (성장):** "미국 주식, 크립토, 넥스트 테크. 진짜 정보의 흐름."
3. **Basecamp (아지트):** "디지털 라운지에서 증평 오프라인 허브까지."



### **4. Vision Section (Storytelling)**

* **Concept:** "Building in Progress"
* **Visual:** 증평 촌집의 **흑백 사진** 또는 공사 중인 **픽셀 아트**.
* **Copy:**
* `Localhost: Jeungpyeong (Loading...)`
* "우리는 충북 증평에 첫 번째 물리 서버를 짓고 있습니다. 곧, 화면 밖에서 만납니다."


* **Interactivity:** 사진 위에 마우스를 올리면 컬러로 바뀌거나, `Coming Soon` 뱃지 노출.

### **5. Footer**

* **Content:**
* `Ready to find your root?` (마지막 유도 문구)
* Copyright © 2026 Localhost.
* Instagram / Email 아이콘 링크.



---

## 5. 기술 스택 (Tech Stack)

* **Framework:** Next.js 16+ (App Router)
* **Styling:** Tailwind CSS
* **Icons:** Lucide React or React Icons (Heroicons)
* **Animation:** Framer Motion
* *필수 적용:* `initial={{ opacity: 0, y: 20 }}` -> `whileInView={{ opacity: 1, y: 0 }}` (스크롤 할 때 요소들이 부드럽게 나타나도록)


* **Hosting:** Vercel
* **Analytics:** Google Analytics 4 (버튼 클릭률 추적 필수)

---

## 6. 개발 체크리스트 (To-Do)

1. [ ] Next.js 프로젝트 생성 (`npx create-next-app@latest`)
2. [ ] `tailwind.config.ts`에 커스텀 컬러(Amber, Charcoal) 등록.
3. [ ] Pretendard 폰트 적용 (`next/font/local` 또는 CDN).
4. [ ] Hero Section 컴포넌트 코딩 & 픽셀 아트 배치.
5. [ ] Framer Motion으로 스크롤 애니메이션 적용.
6. [ ] 디스코드 영구 초대 링크 발급 및 버튼 연결.
7. [ ] Vercel 배포 & 도메인 연결.

---

### **💡 Developer's Note (구현 팁)**

* **Dark Mode 팁:** 텍스트를 절대 `#FFFFFF`(완전 흰색)로 쓰지 마세요. 눈이 아픕니다. `#E5E5E5`나 `#D4D4D4` 정도가 가장 고급스럽습니다.
* **Cozy 느낌 내기:** `bg-orange-500` 대신 `bg-amber-500` 계열을 쓰시고, 투명도(`opacity`)를 활용해 빛이 은은하게 퍼지는 느낌을 주세요.
* **속도:** 이미지는 꼭 `.webp` 포맷으로 변환해서 넣으세요.

discord channel: https://discord.gg/HYB8uHAn
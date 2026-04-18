export interface Instructor {
  name: string;
  role: string;
  initials: string;
  photo?: string; // path to photo in /public/instructors/ (e.g. "kim-jiwon.jpg")
  strengths: string[];
  credentials: string[];
  bio: string;
}

export const instructors: Instructor[] = [
  {
    name: "김지원",
    role: "강사",
    initials: "지원",
    photo: "/instructors/kim-jiwon.jpg",
    strengths: ["소통", "편안", "섬세"],
    credentials: [
      "現) QLI 강사",
      "前) 서울인재개발원 연구원",
      "前) 서울시강사협회 자문위원",
      "서강대학교 심리학 학사",
    ],
    bio: "대안형 특성화고에서 인성 중심 교육을 경험하며 주입식 체계 바깥의 배움을 접했고, 관계 상처를 겪으며 청년들에게 도움을 주는 상담사가 되었다. 현장 경험을 바탕으로 청년들이 건강한 방향으로 나아갈 수 있도록 길을 제시하는 교육에 힘쓰고 있다.",
  },
  {
    name: "박지은",
    role: "코치",
    initials: "지은",
    photo: "/instructors/park-jieun.jpg",
    strengths: ["공감", "진심", "강점발견"],
    credentials: [
      "現) Step-Up 코치",
      "前) 외국계기업 전략기획 매니저",
      "前) 서울청년그룹 인재관리 슈퍼바이저",
      "前) 청년 취업컨설팅 멘토단",
    ],
    bio: "남들이 다 좋다는 길을 포기하고 본인이 직접 가치 있는 길을 선택해 컨설팅의 길을 택했다. 개인의 고유한 스토리를 발견하고 강점을 키우는 것이 더 중요하다고 믿는다.",
  },
  {
    name: "김수민",
    role: "코치",
    initials: "수민",
    photo: "/instructors/kim-sumin.jpg",
    strengths: ["소통", "온화", "조용한카리스마"],
    credentials: [
      "現) Step-Up 코치",
      "前) 영상디자인 학과 졸업",
      "前) 엠제이 데칼 편집 디자이너",
    ],
    bio: "여러 사회생활을 경험하며 인간관계에서 가장 중요한 것이 '소통'이라는 것을 깊이 깨달았다. 현재는 청소년과 청년들을 대상으로 소통과 더 나은 가치를 위한 상담을 돕고 있다.",
  },
];

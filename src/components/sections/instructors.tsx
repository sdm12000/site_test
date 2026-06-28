import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionBadge } from "@/components/ui/section-badge";

const leadInstructor = {
  name: "이정민",
  role: "대표 강사",
  photo: "/images/coaches/lee-jeongmin.webp",
  quote: "국내외 교육·복지 현장의 경험을 바탕으로 사람의 성장과 변화를 연구하며, 질문과 소통을 통해 행동의 변화를 이끌어내는 교육 전문가.",
  career: [
    "前 한국복지재단(현 초록우산재단) 근무",
    "前 해외 아동교육 및 국제개발 분야 근무",
    "중국·네팔·필리핀 해외 교육 및 선교 활동",
    "Global Mission Association 서대문지부 강사",
    "KOREA HAVRUTA LECTURERS ASSOCIATION 강사",
    "California City Council Social Welfare Training 수료",
    "365 Monthly 습관변화 세미나 강사",
    "Brain Training Seminar 강사",
    "Mental Fitness Seminar 강사",
  ],
  licenses: ["사회복지사 2급", "웃음치료사", "레크리에이션 지도자"],
  fields: [
    "소통 및 관계 형성",
    "습관 변화와 자기관리",
    "두뇌 활용 및 사고력 향상",
    "멘탈 관리와 동기부여",
    "하브루타 기반 질문·토론 교육",
    "가치관 및 인성 교육",
  ],
};

const coaches = [
  {
    name: "김보섭",
    role: "수석 코치",
    photo: "/images/coaches/kim-boseop.webp",
    career: [
      "현) QLI ROOTIVE CLASS 수석코치",
      "전) 포레스트버드 기획팀장",
      "전) 서울인재개발교육원 연구원",
      "전) 그라디언트 인재개발관리부서 팀장",
      "전) COMEUP(비영리사업단체) 대표",
      "전) 포우 문화플랫폼 대표 및 강사",
    ],
  },
  {
    name: "최수지",
    role: "코치",
    photo: "/images/coaches/choi-suji.webp",
    career: [
      "현) ROOTIVE CLASS 코치팀",
      "전) 서울시 광고마케팅 브랜딩 운영팀장",
      "전) 한국청소년정책연구원 청소년 지도사",
      "전) 브랜드랩 퍼스널 브랜딩 프로젝트 운영팀장",
    ],
  },
];

export function InstructorsSection() {
  return (
    <section id="instructors" className="relative py-20 md:py-28 section-gradient-cool">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center">
          <SectionBadge>Instructor &amp; Coaches</SectionBadge>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            함께하는 강사진
          </h2>
          <p className="mt-5 mx-auto max-w-3xl font-display text-xl md:text-2xl font-bold text-accent leading-snug">
            &ldquo;가장 깊은 곳의 나를 발견하고,
            <br className="hidden sm:block" /> 가장 높은 곳을 향해 도약합니다.&rdquo;
          </p>
          <p className="mt-4 mx-auto max-w-2xl text-foreground-muted leading-relaxed">
            흔들리지 않는 성장은 내면의 근본을 들여다보는 것에서 시작됩니다. 내 안의 진짜 동기를 찾아내고,
            스스로 깊어지고 당당히 날아오를 당신의 모든 순간에 ROOTIVE CLASS가 든든한 동반자가 되겠습니다.
          </p>
        </FadeIn>

        {/* Lead instructor — featured card */}
        <FadeIn delay={0.15} className="mt-14">
          <div className="overflow-hidden rounded-3xl bg-surface shadow-xl shadow-accent/5 border border-border/30">
            <div className="grid md:grid-cols-5">
              <div className="relative md:col-span-2 min-h-[340px] md:min-h-full bg-gradient-to-br from-accent/10 to-secondary/10">
                <Image
                  src={leadInstructor.photo}
                  alt={`${leadInstructor.name} ${leadInstructor.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top"
                  priority
                />
              </div>

              <div className="md:col-span-3 p-8 md:p-10">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {leadInstructor.name}
                  </h3>
                  <span className="text-sm font-medium text-accent">{leadInstructor.role}</span>
                </div>

                <p className="mt-4 text-sm md:text-base text-foreground-muted leading-relaxed border-l-2 border-accent/40 pl-4 italic">
                  {leadInstructor.quote}
                </p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-accent uppercase">이력</p>
                    <ul className="mt-3 space-y-1.5">
                      {leadInstructor.career.map((c) => (
                        <li key={c} className="flex gap-2 text-sm text-foreground-muted leading-snug">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-widest text-accent uppercase">자격</p>
                    <ul className="mt-3 space-y-1.5">
                      {leadInstructor.licenses.map((c) => (
                        <li key={c} className="flex gap-2 text-sm text-foreground-muted leading-snug">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                          {c}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-6 text-xs font-semibold tracking-widest text-accent uppercase">전문 분야</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {leadInstructor.fields.map((f) => (
                        <span
                          key={f}
                          className="rounded-full bg-accent/8 border border-accent/15 px-3 py-1 text-xs font-medium text-accent"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Coaches */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {coaches.map((coach, i) => (
            <FadeIn key={coach.name} delay={0.2 + 0.1 * i}>
              <div className="flex h-full gap-5 rounded-3xl bg-surface p-6 md:p-7 shadow-lg shadow-accent/5 border border-border/30 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-28 w-28 md:h-32 md:w-32 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 to-tertiary/10">
                  <Image
                    src={coach.photo}
                    alt={`${coach.name} ${coach.role}`}
                    fill
                    sizes="160px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2.5">
                    <h3 className="font-display text-xl font-bold text-foreground">{coach.name}</h3>
                    <span className="text-sm font-medium text-accent">{coach.role}</span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {coach.career.map((c) => (
                      <li key={c} className="flex gap-2 text-sm text-foreground-muted leading-snug">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

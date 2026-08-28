export interface Review {
  name: string;
  age: number;
  affiliation: string;
  text: string;
}

export const reviews: Review[] = [
  {
    name: "김O성",
    age: 27,
    affiliation: "연세대 의대",
    text: "어려서 부터 항상 시키는대로만 살아왔던 저에게 진정한 나를 깨닫는 시간이었어요. 늘 공허한 마음과 회의감으로 괴로웠는데 이제서야 무언가를 스스로 해보려는 의지를 찾게 된 것 같습니다. 정말 감사합니다.",
  },
  {
    name: "Sophia Schultz",
    age: 24,
    affiliation: "Frankfurt",
    text: "어두운 내면의 모습을 항상 회피해왔습니다. 하지만 수업을 통해 그 모습을 직면하고, 더 성장할 수 있었습니다. 이 프로그램을 듣는 모든 분들에게 저와 같은 성장의 시간이 있기를, 그리고 누구보다 자신을 사랑하게 되는 계기가 되기를 바랍니다.",
  },
  {
    name: "박O환",
    age: 33,
    affiliation: "삼성중공업 연구원",
    text: "일상 같은 야근으로 인해 여유라고는 점심시간 커피 한잔이 전부였던 저에게 DADA CLASS는 진정한 힐링의 시간이었어요. 한번도 자신에 대해 깊게 생각해볼 기회가 없었던 저에게, Class를 통해 나 자신을 마주하고 진정한 나의 가치를 발견하게 된 것이 가장 기억에 남습니다.",
  },
  {
    name: "Evan Arnold",
    age: 35,
    affiliation: "Atlanta",
    text: "항상 성공만을 위해 살아왔는데, 인생에서 진짜 중요한 것이 무엇인지 느끼게 되는 값진 시간이었어요. 물질적인 성공만이 아닌 진짜 성공을 찾을 수 있는 방법을 알게 해주셔서 진짜 감사드립니다!",
  },
];

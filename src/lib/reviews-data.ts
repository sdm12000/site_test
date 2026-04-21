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
    text: "어두운 내면의 모습을 항상 회피해왔습니다. 하지만 수업을 통해 그 모습을 직면하고, 더 성장 할 수 있었습니다. 이 프로그램을 듣는 모든 분들에게 저와 같은 성장의 시간이 있기를, 그리고 신의 가호가 있기를 바랍니다.",
  },
  {
    name: "박O환",
    age: 33,
    affiliation: "삼성중공업 연구원",
    text: "일상 같은 야근으로 인해서 여유라고는 점심시간 커피 한잔이 전부였던 저에게 Step-up project는 진정한 힐링의 시간이었습니다. 한번도 교회를 다녀본 적 없지만 종교와 상관없이 모든 사람은 행복할 기회를 가지고 있다는 내용이 가장 기억에 남습니다.",
  },
  {
    name: "Evan Arnold",
    age: 35,
    affiliation: "Atlanta",
    text: "항상 성공만을 위해 살아왔는데, 인생에서 진짜 중요한 것이 무엇인지 느끼게 되는 귀한 시간이었습니다. 물질적인 성공만이 아닌 진짜 성공을 할 수 있는 방법을 알게 해주셔서 정말 감사드립니다!",
  },
];

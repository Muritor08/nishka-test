import { allAdvices } from "./DetailedData";

export const resultPerCategory = (questions, answers, category) => {
  const categoryQ = questions.filter(
    (element) => element.category === category
  );
  const scores = categoryQ.map((element) => answers[element.id].score);
  const sum = scores.reduce((partial_sum, a) => partial_sum + a, 0);
  const average = sum / scores.length / 100;

  // const advices = categoryQ.map(
  //   (element) => element.advice[answers[element.id].choice]
  // );

  const adviceObj = allAdvices[category];
  const adviceIndex = adviceObj.scores.indexOf(
    adviceObj.scores.find((e) => average * 100 >= e)
  );
  console.log(adviceIndex);

  return {
    category,
    average,
    advices: adviceObj.advice[adviceIndex],
    index: getIndex(average),
  };
};

export const resultOverall = (props) => {
 
  const average =
    (props.spendResult.average +
      props.saveResult.average +
      props.borrowResult.average +
      props.planResult.average +
      props.insuranceResult.average) /
    5;
  const index = getIndex(average);
  return { average, index };
};

export const getIndex = (score) => {
  if (score <= 0.4) {
    return 0;
  } else if (score > 0.4 && score < 0.8) {
    return 1;
  } else {
    return 2;
  }
};

export const resultRisk = (questions, answers) => {
  const risk14 =
    allAdvices["Risk profile 14"].advice[
      allAdvices["Risk profile 14"].scores.indexOf(answers[14].score)
    ];
  const risk16 =
    allAdvices["Risk profile 16"].advice[
      allAdvices["Risk profile 16"].scores.indexOf(answers[16].score)
    ];

  return {
    category: "Risk profile",
    average: 0,
    advices: [risk14, risk16],
    index: 0,
  };
};

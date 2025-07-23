// 📊 Script 2: Grade Calculator

function getAverage(scores) {
  let sum = 0;
  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) return "A++";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  const classAverage = getAverage(totalScores);
  const grade = getGrade(studentScore);

  if (hasPassingGrade(studentScore)) {
    return `Class average: ${classAverage}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${classAverage}. Your grade: ${grade}. You failed the course.`;
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 97));

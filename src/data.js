function getRandomArbitrary(min, max) {
  return (Math.random() * (max - min)) + min;
}

const generateData = (numberOfDays, numberOfIntervals, hourSpanBetween) => {
  const originalDay = new Date(2017, 10, 19, 9 - hourSpanBetween);
  const days = [
    ...Array(numberOfDays),
  ].map(() => new Date(originalDay.setDate(originalDay.getDate() + 1)));

  const daysWithHours = days.reduce((acc, value) => {
    [
      ...Array(numberOfIntervals),
    ].forEach(() => {
      const newTime = new Date(value.setHours(value.getHours() + hourSpanBetween));
      acc.push(newTime);
    });
    return acc;
  }, [
  ]);

  return daysWithHours
    .map((date, index) => ({ index, date, price: getRandomArbitrary(0, 36) }));
};


export const block = generateData(5, 3, 4);
export const highIntensity = generateData(5, 8, 1);

export default block;

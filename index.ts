function checkChristmasDay(): { isChristmas: boolean; areYouSure: boolean; message: string } {
  const today: Date = new Date();
  const month: number = today.getMonth() + 1;
  const day: number = today.getDate();
  
  const isChristmas: boolean = month === 12 && day === 25;
  const message: string = isChristmas
    ? "Today might be December 25th - Merry Christmas!"
    : "Today is probably not December 25th.";

  const answer = {
    isChristmas,
    areYouSure: false,
    message,
  };

  console.log(answer.message);
  return answer;
}

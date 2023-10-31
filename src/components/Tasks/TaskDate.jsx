const TaskDate = ({ startDate, endDate, status }) => {
  let date = new Date(startDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (status === "completed") {
    date = new Date(endDate);
  }
  const endDay = date.getDate();
  const endMonth = date.getMonth() + 1;
  const endYear = date.getFullYear();

  return (
    <>
      <p>
        Start date: {day < 10 ? `0${day}` : day}-
        {month < 10 ? `0${month}` : month}-{year}
      </p>
      {status === "completed" && (
        <p>
          End date: {endDay < 10 ? `0${endDay}` : endDay}-
          {endMonth < 10 ? `0${endMonth}` : endMonth}-{endYear}
        </p>
      )}
    </>
  );
};

export default TaskDate;

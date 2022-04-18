import moment from "moment";

export const getSubtractedDate = (date, subractedBy) => {
  const dateString = date.toISOString().slice(0, 10);
  const momentDate = moment(dateString)
    .subtract(subractedBy, "days")
    .format("YYYY-MM-DD");

  return new Date(momentDate);
};

import moment from "moment";

export const formatDate = (date: string | number) => {
  return moment(date).format("lll");
};

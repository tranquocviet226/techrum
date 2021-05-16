import moment from "moment";

export const formatDate = (date: string | number) => {
  return moment(date).format("LL");
};

export const upsert = (array: Array<any>, item: any) => {
  const i = array.findIndex((_item) => _item.id === item.id);
  if (i > -1) {
    array[i] = array[0];
    array[0] = item;
  } else array.unshift(item);
};

import Moment from "moment";

function FormatDate(dateValue) {
  return new Moment(new Date(dateValue)).format("MMMM D, YYYY");
}

function FormatDateTime(dateValue) {
  return new Moment(new Date(dateValue)).format("MMMM D YYYY, h:mm a");
}

export { FormatDate, FormatDateTime };

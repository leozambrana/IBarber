import moment from "moment";

export const availableTimes = [
  moment().add(30, 'minutes'),
  moment().add(1, 'hour'),
  moment().add(1, 'hour').add(30, 'minutes'),
]
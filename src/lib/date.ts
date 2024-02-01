import dayjs from "dayjs";
import ja from "dayjs/locale/ja";
import { displayNumber } from "@/lib/display";

dayjs.locale(ja);

export const convertH2HM = (hours: number): [number, number] => {
  const h = Math.floor(hours);
  const m = Math.floor((hours - h) * 60);
  return [h, m];
};

export const formatDate = (date: string, format: string = "YYYY年M月D日(ddd)") => {
  return dayjs(date).format(format);
};

export const convertDatetime = (startAt?: string, finishAt?: string): string => {
  if (!startAt) {
    return "不明";
  } else if (!finishAt) {
    return formatDate(startAt, "YYYY年M月D日(ddd)");
  } else if (dayjs(startAt).isSame(finishAt, "date")) {
    return `${ formatDate(startAt, "YYYY年M月D日(ddd) H:mm") }~${ formatDate(finishAt, "H:mm") }`;
  } else {
    return `${ formatDate(startAt, "YYYY年M月D日(ddd) H:mm") }~${ formatDate(finishAt, "YYYY年M月D日(ddd) H:mm") }`;
  }
};

export const convertDuration = (startAt?: string, finishAt: string | undefined = startAt): string => {
  if (!startAt) {
    return "不明";
  } else if (!finishAt) {
    return formatDate(startAt, "M/D");
  }
  const duration = dayjs(startAt).diff(finishAt, "hours", true);
  const [hours, minutes] = convertH2HM(duration);
  const durationText = hours >= 1
    ? `${ displayNumber(hours) }時間${ displayNumber(minutes) }分`
    : `${ displayNumber(minutes) }分`;
  if (dayjs(startAt).isSame(finishAt, "date")) {
    return `${ formatDate(startAt, "H:mm") }~${ formatDate(finishAt, "H:mm") } (${ durationText })`;
  } else {
    return `${ formatDate(startAt, "M/D H:mm") }~${ formatDate(finishAt, "M/D H:mm") } (${ durationText })`;
  }
};

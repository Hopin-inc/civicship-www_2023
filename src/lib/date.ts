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

export const convertDatetime = (startAt: string, finishAt?: string): string => {
  if (!finishAt) {
    return formatDate(startAt, "YYYY年M月D日(ddd) HH:mm");
  } else if (dayjs(startAt).isSame(finishAt, "date")) {
    return `${ formatDate(startAt, "YYYY年M月D日(ddd) HH:mm") }~${ formatDate(finishAt, "HH:mm") }`;
  } else {
    return `${ formatDate(startAt, "YYYY年M月D日(ddd) HH:mm") }~${ formatDate(startAt, "YYYY年M月D日(ddd) HH:mm") }`;
  }
};

export const convertDuration = (startAt: string, finishAt: string = startAt): string => {
  const duration = dayjs(startAt).diff(finishAt, "hours", true);
  const [hours, minutes] = convertH2HM(duration);
  const durationText = hours >= 1
    ? `${ displayNumber(hours) }時間${ displayNumber(minutes) }分`
    : `${ displayNumber(minutes) }分`;
  if (dayjs(startAt).isSame(finishAt, "date")) {
    return `${ formatDate(startAt, "HH:mm") }~${ formatDate(finishAt, "HH:mm") } (${ durationText })`;
  } else {
    return `${ formatDate(startAt, "M/D HH:mm") }~${ formatDate(finishAt, "M/D HH:mm") } (${ durationText })`;
  }
};

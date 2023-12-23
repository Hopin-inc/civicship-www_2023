export type AssociationOverview = {
  id: string;
  logo: string;
  prefix?: string;
  suffix?: string;
  name: string;
  description?: string;
  engagement: AssociationActivityEngagement;
  signUpAt: string;
  establishedAt: string;
  memberAvatars: string[];
  totalMembers: number;
}

export type UserActivityTrendOverview = {
  timing: ActivityTrend;
  frequency: ActivityTrend;
  location: ActivityTrend;
}

export type ActivityTrendOverview = {
  timing: ActivityTrend;
  frequency: ActivityTrend;
  location: ActivityTrend;
  age: ActivityTrend;
}

export type UserActivityTrendDetail = {
  timing: ActivityTiming;
  frequency: ActivityFrequency;
  location: ActivityLocation;
}

export type ActivityTrendDetail = {
  timing: ActivityTiming;
  frequency: ActivityFrequency;
  location: ActivityLocation;
  age: ParticipantAge;
}

export type DataWithTotal<T> = {
  data: T[];
  total: number;
}

export type PlanOverview = {
  id: string;
  thumbnail: string;
  startsAt: string;
  endsAt: string;
  address: string;
  association: AvatarWithName;
}

export type PlanDetail = {
  thumbnails: string[];
  startsAt: string;
  endsAt: string;
  registrants: AvatarWithName[];
  location: ActivityLocation[];
  age: ParticipantAge;
}

export type PastActivityDetail = {
  id: string;
  associationId: string;
  thumbnails: string[];
  startsAt: string;
  endsAt: string;
  participantAvatars: string[];
  totalParticipants: number;
  address: string;
}

export type GoingActivityDetail = {
  id: string;
  totalHours: number;
  totalParticipants: number;
  participants: AvatarWithName[];
  enteredAt: string;
  exitAt?: string;
  address: string;
  association: AvatarWithName;
  background?: string;
}

export type ActivityOverview = {
  id: string;
  participants: AvatarWithName[];
  remainingParticipants: number;
  address: string;
  enteredAt: string;
  exitAt?: string;
  association: AvatarWithName;
}

export type AssociationDetail = {
  id: string;
  logo: string;
  prefix?: string;
  suffix?: string;
  name: string;
  description?: string;
  targets?: string[];
  establishedAt: string;
  homepage?: string;
  address?: string;
  authorizedBy?: string;
}

export type MemberEngagement = {
  member: AvatarWithName;
}

export type PromotionBanner = {
  members: AvatarWithName[];
  name: string;
  planCount: number;
}

export type AssociationActivityEngagement = {
  participants: number;
  activityCount: number;
  activityHour: number;
}

type ActivityFrequency = {
  almostEveryDay: number;
  fourOrFiveDaysWeekly: number;
  twoOrThreeDaysWeekly: number;
  onceAWeek: number;
  biweekly: number;
  onceAMonth: number;
  everyTwoOrThreeMonths: number;
  almostOnceAYear: number;
}

type ActivityLocation = {
  stateAndCity: string;
  ratio: number;
}

type ActivityTiming = [
  TimesOfDay,
  TimesOfDay,
  TimesOfDay,
  TimesOfDay,
  TimesOfDay,
  TimesOfDay,
  TimesOfDay,
]

export type TimesOfDay = {
  morning: number;
  afternoon: number;
  evening: number;
  night: number;
}

type ActivityTrend = {
  value: string;
  percentage: number | null;
}

type AvatarWithName = {
  name: string;
  avatar: string;
}

type ParticipantAge = {
  underTeens: number;
  twenties: number;
  thirties: number;
  forties: number;
  fifties: number;
  sixties: number;
  seventies: number;
  overEighties: number;
}

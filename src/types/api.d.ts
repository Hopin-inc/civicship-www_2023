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

export type ActivityTrendOverview = {
  timing: ActivityTrend;
  frequency: ActivityTrend;
  location: ActivityTrend;
  age: ActivityTrend;
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

type ActivityTrend = {
  value: string;
  percentage: number | null;
}

type AvatarWithName = {
  name: string;
  avatar: string;
}

export type AssociationMembers = {
  members: MemberWithEngagement[];
  total: number;
}

type MemberWithEngagement = AvatarWithName & {
  lastActivityDate: string | null;
  activityCount: number;
  activityHours: number;
}

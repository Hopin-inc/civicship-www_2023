import { httpsCallable } from "firebase/functions";
import { functions } from "@/lib/firebase";
import {
  ActivityTrendOverview,
  AssociationDetail,
  AssociationOverview,
  DataWithTotal, GoingActivityDetail,
  PastActivityDetail,
  PlanOverview,
} from "@/types/api";

export const getTotalHours = async (): Promise<number | undefined> => {
  try {
    const callable = httpsCallable<void, number>(functions, "web-getTotalHours");
    const result = await callable();
    return result.data;
  } catch (e) {
    console.error(e);
  }
}

export const getOrganizations = async (): Promise<AssociationOverview[]> => {
  try {
    const callable = httpsCallable<void, AssociationOverview[]>(functions, "web-getOrganizations");
    const result = await callable();
    return result.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export const getOrganization = async (id: string): Promise<AssociationOverview | null> => {
  try {
    const callable = httpsCallable<string, AssociationOverview>(functions, "web-getOrganization");
    const result = await callable(id);
    return result.data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export const getOngoingActivities = async (id?: string): Promise<DataWithTotal<GoingActivityDetail>> => {
  try {
    const callable = httpsCallable<string | undefined, DataWithTotal<GoingActivityDetail>>(functions, "web-getOngoingActivities");
    const result = await callable(id);
    return result.data;
  } catch (e) {
    console.error(e);
    return {
      total: 0,
      data: [],
    };
  }
}

export const getPlans = async (id?: string): Promise<DataWithTotal<PlanOverview>> => {
  try {
    const callable = httpsCallable<string | undefined, DataWithTotal<PlanOverview>>(functions, "web-getPlans");
    const result = await callable(id);
    return result.data;
  } catch (e) {
    console.error(e);
    return {
      total: 0,
      data: [],
    };
  }
}

export const getRecords = async (id?: string): Promise<DataWithTotal<PastActivityDetail>> => {
  try {
    const callable = httpsCallable<string | undefined, DataWithTotal<PastActivityDetail>>(functions, "web-getRecords");
    const result = await callable(id);
    return result.data;
  } catch (e) {
    console.error(e);
    return {
      total: 0,
      data: [],
    };
  }
}

export const getActivityInfo = async (id: string): Promise<PastActivityDetail | null> => {
  try {
    const callable = httpsCallable<string, PastActivityDetail | null>(functions, "web-getActivityInfo");
    const result = await callable(id);
    return result.data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export const getOrganizationDetail = async (id: string): Promise<AssociationDetail | null> => {
  try {
    const callable = httpsCallable<string, AssociationDetail | null>(functions, "web-getOrganizationDetail");
    const result = await callable(id);
    return result.data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export const getOrganizationTrends = async (id: string): Promise<ActivityTrendOverview | null> => {
  try {
    const callable = httpsCallable<string, ActivityTrendOverview | null>(functions, "web-getOrganizationTrends");
    const result = await callable(id);
    return result.data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

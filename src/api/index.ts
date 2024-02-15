import { httpsCallable } from "firebase/functions";
import { cache } from "react";
import { IS_DEV } from "@/constants/env";
import { functions } from "@/lib/firebase";
import {
  ActivityTrendOverview,
  AssociationDetail,
  AssociationMembers,
  AssociationOverview,
  DataWithTotal, GoingActivityDetail,
  ActivityDetail,
  PlanOverview,
} from "@/types/api";

const PRINT_RESULT: boolean = IS_DEV;

export const getTotalHours = cache(async (): Promise<number | undefined> => {
  try {
    const callable = httpsCallable<void, number>(functions, "web-getTotalHours");
    const result = await callable();
    if (PRINT_RESULT) {
      console.log({
        function: "getTotalHours",
        params: undefined,
        result: result.data,
      });
    }
    return result.data;
  } catch (e) {
    console.error(e, {
      function: "getTotalHours",
      params: undefined,
    });
  }
});

export const getTotalDays = cache(async (): Promise<number | undefined> => {
  try {
    const callable = httpsCallable<void, number>(functions, "web-getTotalDays");
    const result = await callable();
    if (PRINT_RESULT) {
      console.log({
        function: "getTotalDays",
        params: undefined,
        result: result.data,
      });
    }
    return result.data;
  } catch (e) {
    console.error(e, {
      function: "getTotalDays",
      params: undefined,
    });
  }
});

export const getOrganizations = cache(async (): Promise<AssociationOverview[]> => {
  try {
    const callable = httpsCallable<void, AssociationOverview[]>(functions, "web-getOrganizations");
    const result = await callable();
    if (PRINT_RESULT) {
      console.log({
        function: "getOrganizations",
        params: undefined,
        result: result.data,
      });
    }
    return result.data;
  } catch (e) {
    console.error(e, {
      function: "getOrganizations",
      params: undefined,
    });
    return [];
  }
});

export const getOrganization = cache(async (id: string): Promise<AssociationOverview | null> => {
  try {
    const callable = httpsCallable<string, AssociationOverview>(functions, "web-getOrganization");
    const result = await callable(id);
    if (PRINT_RESULT) {
      console.log({
        function: "getOrganization",
        params: { id },
        result: result.data,
      });
    }
    return result.data;
  } catch (e) {
    console.error(e, {
      function: "getOrganization",
      params: { id },
    });
    return null;
  }
});

export const getOngoingActivities = cache(async (id?: string): Promise<DataWithTotal<GoingActivityDetail>> => {
  try {
    const callable = httpsCallable<string | undefined, DataWithTotal<GoingActivityDetail>>(functions, "web-getOngoingActivities");
    const result = await callable(id);
    if (PRINT_RESULT) {
      console.log({
        function: "getOngoingActivities",
        params: { id },
        result: result.data,
      });
    }
    return result.data;
  } catch (e) {
    console.error(e, {
      function: "getOngoingActivities",
      params: { id },
    });
    return {
      total: 0,
      data: [],
    };
  }
});

export const getPlans = cache(async (organizationId?: string): Promise<DataWithTotal<PlanOverview>> => {
  try {
    const callable = httpsCallable<string | undefined, DataWithTotal<PlanOverview>>(functions, "web-getPlans");
    const result = await callable(organizationId);
    if (PRINT_RESULT) {
      console.log({
        function: "getPlans",
        params: { organizationId },
        result: result.data,
      });
    }
    return result.data;
  } catch (e) {
    console.error(e, {
      function: "getPlans",
      params: { organizationId },
    });
    return {
      total: 0,
      data: [],
    };
  }
});

export const getRecords = cache(async (organizationId?: string): Promise<DataWithTotal<ActivityDetail>> => {
  try {
    const callable = httpsCallable<string | undefined, DataWithTotal<ActivityDetail>>(functions, "web-getRecords");
    const result = await callable(organizationId);
    if (PRINT_RESULT) {
      console.log({
        function: "getRecords",
        params: { organizationId },
        result: result.data,
      });
    }
    return result.data;
  } catch (e) {
    console.error(e, {
      function: "getRecords",
      params: { organizationId },
    });
    return {
      total: 0,
      data: [],
    };
  }
});

export const getActivityInfo = cache(async (id: string): Promise<ActivityDetail | null> => {
  try {
    const callable = httpsCallable<string, ActivityDetail | null>(functions, "web-getActivityInfo");
    const result = await callable(id);
    if (PRINT_RESULT) {
      console.log({
        function: "getActivityInfo",
        params: { id },
        result: result.data,
      });
    }
    return result.data;
  } catch (e) {
    console.error(e, {
      function: "getActivityInfo",
      params: { id },
    });
    return null;
  }
});

export const getOrganizationDetail = cache(async (id: string): Promise<AssociationDetail | null> => {
  try {
    const callable = httpsCallable<string, AssociationDetail | null>(functions, "web-getOrganizationDetail");
    const result = await callable(id);
    if (PRINT_RESULT) {
      console.log({
        function: "getOrganizationDetail",
        params: { id },
        result: result.data,
      });
    }
    return result.data;
  } catch (e) {
    console.error(e, {
      function: "getOrganizationDetail",
      params: { id },
    });
    return null;
  }
});

export const getOrganizationTrends = cache(async (id: string): Promise<ActivityTrendOverview | null> => {
  try {
    const callable = httpsCallable<string, ActivityTrendOverview | null>(functions, "web-getOrganizationTrends");
    const result = await callable(id);
    if (PRINT_RESULT) {
      console.log({
        function: "getOrganizationTrends",
        params: { id },
        result: result.data,
      });
    }
    return result.data;
  } catch (e) {
    console.error(e, {
      function: "getOrganizationTrends",
      params: { id },
    });
    return null;
  }
});

export const getOrganizationMembers = cache(async (id: string): Promise<AssociationMembers> => {
  try {
    const callable = httpsCallable<string, AssociationMembers>(functions, "web-getOrganizationMembers");
    const result = await callable(id);
    if (PRINT_RESULT) {
      console.log({
        function: "getOrganizationMembers",
        params: { id },
        result: result.data,
      });
    }
    return result.data;
  } catch (e) {
    console.error(e, {
      function: "getOrganizationMembers",
      params: { id },
    });
    return {
      members: [],
      total: 0,
    };
  }
});

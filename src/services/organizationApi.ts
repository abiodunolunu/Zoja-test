import axios from "@/axios";
import { IUpdateOrganizationData } from "@/types/ApiPayloads";
import { IUpdateOrganizationResponse } from "@/types/ApiResponse";

export default {
  getOrganization: () => {
    return axios.get("/settings/get-organization/6");
  },
  updateOrganization: ({
    id,
    name,
    city,
    country,
    state,
    street,
  }: IUpdateOrganizationData) => {
    return axios.post<IUpdateOrganizationResponse>(
      "/settings/update-organization",
      {
        id,
        name,
        city,
        country,
        state,
        street,
      }
    );
  },
};

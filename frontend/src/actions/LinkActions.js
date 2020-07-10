import { apiGet, apiPost } from "../helpers/api";

export const LINK_CREATE = "LINK_CREATE";
export const LINK_LIST = "LINK_LIST";

export const linkList = (data) => {
  const payload = apiGet("/link");

  return { type: LINK_LIST, payload };
};

export const linkCreate = (data) => {
  const is_social = !!data.is_social;
  const payload = apiPost("/link", { ...data, is_social });

  return { type: LINK_CREATE, payload };
};

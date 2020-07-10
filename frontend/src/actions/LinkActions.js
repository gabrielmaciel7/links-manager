import { apiPost } from "../helpers/api";

export const LINK_CREATE = "LINK_CREATE";

export const linkCreate = (data) => {
  const is_social = !!data.is_social;
  const payload = apiPost("/link", { ...data, is_social });

  return { type: LINK_CREATE, payload };
};

import { Client, ClientOptions, createClient } from "urql";
import { useState } from "react";
import { API_URL } from "../../constants";
import { useSaleorAuthClient } from "../auth";

export const apiClient = createClient({
  url: API_URL,
});

// since urql doesn't support invalidating cache manually
// https://github.com/urql-graphql/urql/issues/297#issuecomment-501646761
export const useCreateAuthedUrqlClient = (opts: ClientOptions) => {
  const createNewClient = () => createClient(opts);

  const [urqlClient, setUrqlClient] = useState<Client>(createNewClient());

  const resetClient = () => setUrqlClient(createNewClient());

  return { urqlClient, resetClient };
};

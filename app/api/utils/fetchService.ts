type TRest = "GET" | "POST" | "DELETE" | "PATCH";

interface IServiceProps {
  src: string;
  method?: TRest;
  body?: any;
}

export const get = async ({ src }: IServiceProps) => {
  return (await fetch(src, { method: "GET" })).json();
};

export const post = async ({ src, method, body }: IServiceProps) => {
  return fetch(src, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

import type { MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import {
  Form,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: "One" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export const loader = async ({ params, request }: LoaderFunctionArgs) => {

  // if (!note) {
  //   throw new Response("Not Found", { status: 404 });
  // }
  let note = {first: "trueee"}
  return json({ note });
};

export default function One() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="flex h-screen items-center justify-center">
{data.note.first}
    </div>
  );
}


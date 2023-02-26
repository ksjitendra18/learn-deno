import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  const todayDate = new Date();
  return (
    <div>
      Hello {props.params.name}. Today's date is{" "}
      {todayDate.getDate() +
        "/" +
        todayDate.getMonth() +
        "/" +
        todayDate.getFullYear()}
    </div>
  );
}

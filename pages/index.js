import { server } from "../config/server";

export default function Home() {
  return (
    <div>
      <h1> HELLO </h1>
    </div>
  );
}

export const getServerSideProps = async () => {
  const result = await fetch(`${server}api/portfolio`);

  const portfolio = await result.json();

  return {
    props: {
      portfolio,
    },
  };
};

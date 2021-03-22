import Head from "next/head";

function Meta({ title, keywords, description, icon, icon_apple }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href={icon}></link>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link rel="apple-touch-icon" href={icon_apple}></link>
    </Head>
  );
}

Meta.defaultProps = {
  title: "Trond Fuglseth Spjelkavik",
  keywords:
    "responsive web design, react, front end developer, portfolio, trond spjelkavik, javascript, golang, projects, trond fuglseth spjelkavik, IT, web developer, golang",
  description:
    "Front-End developer portfolio for Trond Fuglseth Spjelkavik. Includes projects for e-commerce, Go lang and SpaceX microsite.",
  icon: "https://www.t-dev.no/api/t-dev/favicon.ico",
  icon_apple: "https:www.//t-dev.no/api/t-dev/favicon.ico",
};
export default Meta;

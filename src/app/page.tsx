import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head key="key">
        <meta charSet="utf-8" />
        <title>Statko i tocka</title>
        <meta name="description" content="Slatko i tocka" />
        <meta name="author" content="matolucic" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />{' '}
        {/*<!--meta responsive-->*/}
        {/*<!--START CSS-->*/}
        <link rel="stylesheet" href="/css/style.css" /> {/*<!--main-->*/}
        <link rel="stylesheet" href="/css/grid.css" /> {/*<!--grid-->*/}
        <link rel="stylesheet" href="/css/responsive.css" /> {/*<!--grid-->*/}
        <link rel="stylesheet" href="/css/isotope.css" /> {/*<!--isotope-->*/}
        <link rel="stylesheet" type="text/css" href="/slide/css/fullwidth.css" media="screen" />
        {/*<!--revolution slider-->*/}
        <link
          rel="stylesheet"
          type="text/css"
          href="/slide/rs-plugin/css/settings.css"
          media="screen"
        />
        {/* <!--revolution slider-->*/}
        <link rel="stylesheet" href="/css/prettyPhoto.css" media="screen" />{' '}
        {/*<!--prettyphoto-->*/}
        {/*  <!--END CSS-->*/}
        {/* <!--FAVICONS-->*/}
        <link rel="shortcut icon" href="/img/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/img/favicon/apple-touch-icon-72x72.png" />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/img/favicon/apple-touch-icon-114x114.png"
        />
        {/*<!--END FAVICONS-->*/}
      </Head>
      <main>
        <section>XXX</section>
      </main>
    </>
  );
}

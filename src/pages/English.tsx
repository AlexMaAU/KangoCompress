import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header/Header';
import PageTitle from '../components/PageTitle/PageTitle';
import DropZone from '../components/DropZone/DropZone';
import Introduction from '../components/Introduction/Introduction';
import Policy from '../components/Policy/Policy';
import Footer from '../components/Footer/Footer';
import { Div } from '../components/Styles/English.styled';

function English() {
  return (
    <Div>
      <Helmet>
        <meta name="description" content="A concise description of your page content." />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta property="og:title" content="Your Page Title Here" />
        <meta property="og:description" content="A concise description of your page content." />
        <meta property="og:url" content="http://www.yourwebsite.com/page-url" />
        <meta property="og:image" content="http://www.yourwebsite.com/image-url.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Your Site Name" />
        <meta property="og:locale" content="en_US" />
        <title>KangoCompress</title>
        <link rel="canonical" href="http://mysite.com" />
      </Helmet>
      <Header />
      <PageTitle />
      <DropZone />
      <Introduction />
      <Policy />
      <Footer />
    </Div>
  );
}

export default English;

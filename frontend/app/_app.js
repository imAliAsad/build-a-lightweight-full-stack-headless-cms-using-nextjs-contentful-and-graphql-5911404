import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";

const CustomApp = ({ Component, pageProps }) => (
  <ContentfulLivePreviewProvider
    locale="en-US"
    enableInspectorMode={pageProps.draftMode}
    enableLiveUpdates={pageProps.draftMode}
  >
    <Component {...pageProps} />
  </ContentfulLivePreviewProvider>
);

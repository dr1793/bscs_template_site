import { getRevalidateQuery } from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import {
  HOME_PAGE_META_DESCRIPTION,
  HOME_PAGE_META_NAME,
} from "../lib/secrets";
import "../global_styles/globals.css";
import "../global_styles/output.css";
import LogoIcon from "@/components/utilities/LogoIcon/LogoIcon";
import { useStore } from "@/state/store";
import fontVariables from "./fonts";

export const metadata = {
  title: HOME_PAGE_META_NAME,
  description: HOME_PAGE_META_DESCRIPTION,
};

export interface PageLink {
  href: string;
  name: string;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // Constructing the link list on the Top Nav from Contentful
  const { data } = await getRevalidateQuery(query);
  const { links: linksWithKeys } = data?.navigationBarCollection?.items[0] as {
    links: string[];
  };
  const cleanLinksWithKeys: PageLink[] = linksWithKeys.map(
    (linkWithKey: string): PageLink => {
      var [linkText, key]: string[] = linkWithKey.split("(", 2);
      return { name: linkText.trim(), href: key.replace(")", "") };
    }
  );
  useStore.setState({ pageInfo: cleanLinksWithKeys });


  return (
    <html lang="en" data-theme="retro">
      <body className={`${fontVariables} flex flex-col min-h-screen justify-between`}>
        <TopNav contentfulPageLinks={cleanLinksWithKeys}>
          {/* @ts-expect-error Server Component */}
          <LogoIcon rotation color={"#492914"} size={110} />
        </TopNav>
        <div className="bg-white">{children}</div>
        <Footer classNames={``}/>
      </body>
    </html>
  );
}

const query = gql`
  query NavandFooter {
    navigationBarCollection {
      items {
        displayField
        links
        logo {
          url
        }
      }
    }
  }
`;

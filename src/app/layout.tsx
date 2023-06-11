import { Inter } from "next/font/google";
import { getRevalidateQuery } from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import {
  HOME_PAGE_META_DESCRIPTION,
  HOME_PAGE_META_NAME,
} from "../lib/secrets";
import "../styles/globals.css";
import "../styles/output.css";
import LogoIcon from "@/components/utilities/LogoIcon/LogoIcon";

export const metadata = {
  title: HOME_PAGE_META_NAME,
  description: HOME_PAGE_META_DESCRIPTION,
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await getRevalidateQuery(query);

  const { logo, links } = data?.navigationBarCollection?.items[0];

  return (
    <html lang="en">
      <body className={inter.className}>
            <TopNav contentfulLinks={links}>
                {/* @ts-expect-error Server Component */}
                <LogoIcon rotation color={"#492914"} size={110}/>
              </TopNav>
        {children}
        <Footer />
      </body>
    </html>
  );
}

const query = gql`
  query NavandFooter {
    navigationBarCollection {
      items {
        sys {
          id
        }
        displayField
        links
        logo {
          url
        }
      }
    }
  }
`;

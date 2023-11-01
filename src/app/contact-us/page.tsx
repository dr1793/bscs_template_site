import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import ContactFormComponent from "@/components/utilities/ContactFormComponent";
import { getRevalidateQuery } from "@/lib/apolloClient";
import MailingListCTABanner from "@/components/MailingListCTABanner";
import PageWrapper from "@/components/utilities/PageWrapper";
import { useStore } from "@/state/store";
import { gql } from "@apollo/client";
import PageBannerSection from "@/components/utilities/PageBannerSection/PageBannerSection";

export default async function ContactForm() {
  const pageList = useStore.getState().pageInfo;


  const { data } = await getRevalidateQuery(query);
  const headerFontSize = `calc(${(7 - 1) * 1.2}vw + 1rem)`;
  const subheaderFontSize = `text-2xl`;
  const hero = data?.contactPageCard;

  return (
    <PageWrapper
      pageNo={pageList.findIndex((page) => page.href == "contact-us")}
    >
      <PageBannerSection
        hero={hero}
        headerFontSize={headerFontSize}
        subheaderFontSize={subheaderFontSize}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-2">

        <div className="text-black">

          <div
            className="absolute h-[] inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2 "
          >
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            {hero.largeText}
          </h1>
          <dl className="mt-10 space-y-4 text-base leading-7 ">
            {/* <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Telephone</span>
                <PhoneIcon
                  className="h-7 w-6 "
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a className="hover:" href="tel:+1 (555) 234-5678">
                  +1 (555) 234-5678
                </a>
              </dd>
            </div> */}
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <EnvelopeIcon
                  className="h-7 w-6 "
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a
                  className="hover:"
                  href="mailto:hello@example.com"
                >
                  {hero.subText}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <ContactFormComponent />
      </div>
    </PageWrapper>
  );
}

const query = gql`
  query contactPageQuery{
    contactPageCard(id: "5BEtKkasFw3l74vjBAyfyt"){
      centerImage{
        url
      }
      largeText
      subText
      richText {
        json
      }
      textAlign
    }
  }
`

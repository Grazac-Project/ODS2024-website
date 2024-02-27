import Link from 'next/link';
import React from 'react';
import HeroSection from "@/components/privacy/privacy";

const privacy = [
    {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    content:
      'At Ogun Digital Summit (ODS24), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our Ogun Digital Summit app.',
  },
  {
    id: 'privacy-policy-covers',
    title: 'What this Privacy Policy Covers',
    content:
      'This Privacy Policy covers the collection, use, and protection of your data when you interact with the Ogun Digital Summit app (ODS24).',
  },
  {
    id: 'information-collection',
    title: 'Information Collection',
    content:
      'We collect only the necessary information required to provide you with our event services and enhance your user experience during the Ogun Digital Summit (ODS24).',
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content:
      'Your data is treated with the utmost confidentiality, and we implement industry-standard security measures to protect it from unauthorized access.',
  },
  {
    id: 'third-party-disclosure',
    title: 'Third-Party Disclosure',
    content:
      'We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your explicit consent.',
  },
  {
    id: 'cookie-usage',
    title: 'Cookie Usage',
    content:
      'The Ogun Digital Summit app (ODS24) may use cookies to enhance user experience. You can manage cookie preferences through your device settings.',
  },
];

function Page() {
  return (
    <div className="">
    
      <div className="pt-10 md:pt-20 relative px-4 sm:px-8 xl:px-16 2xl:px-24 w-full bg-white/80">
        <Privacy privacy={privacy} />
        <section className="text-header pt-10 pb-16">
          <p className="mb-8">
            By using our services, you agree to the terms outlined in our Privacy Policy. For more details on how we
            handle your data, please review our full Privacy Policy.
          </p>
          <p>
            If you have any questions or concerns, please contact us at{' '}
            <Link className="underline" href="mailto:hello@ogundigitalsummit.com">
              hello@ogundigitalsummit.com
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Page;
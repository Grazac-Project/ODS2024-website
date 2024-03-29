import Link from "next/link";
import React from "react";
import Privacy from "@/components/privacy/privacy";

const privacy = [
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    content:
      "Welcome to the Ogun Digital Summit Privacy Policy! This policy explains how we collect, use, and disclose information from and about you when you visit our website (https://ogundigitalsummit.com/) and use our services. Kindly carefully read this privacy policy and refrain from using this site if you disagree with the terms stated in it. We take your privacy seriously and are committed to protecting your personal information. This policy is designed to help you understand what information we collect, why we collect it, and how we use it",
  },
  {
    id: "privacy-policy-covers",
    title: "Information We Collect",
    content:
      "We collect two main types of information from our users",
  },
  {
    id: "information-collection",
    title: "Information You Provide   ",
    content:
      "When you register for the Summit, subscribe to our newsletter, or contact us, you may provide us with personal information such as your name, email address, and possibly additional information such as area of expertise, company affiliation, etc. This information helps us understand your interests and tailor your experience accordingly.",
  },
  {
    id: "data-security",
    title: "Information Collected Automatically",
    content:
      "We may automatically collect certain information about your use of the website, such as your IP address, browser type, operating system, referring URL, pages visited, and time spent on the website. We may also collect information about your device, such as your device type and model. This information helps us improve the functionality and user experience of the Website.",
  },

{
  id: "How-We-Use-Your-Information",
    title: "How We Use Your Information",
    content:
      "We use the information we collect for the following purposes:To provide and improve the Website and our services, including delivering summit content, updates, and announcements. To personalize your experience on the website, such as recommending content that may interest you. To process your summit registration and participation (e.g., sending registration confirmation, updates, and access to summit materials). To facilitate networking among attendees (if applicable), such as creating a platform for attendees to connect. This could enhance the value of the summit for attendees. To send you important information about the Ogun Digital Summit, including event schedules, speaker announcements, and registration details (if you subscribe). To analyze user behaviour to improve the website and our services. To comply with legal or regulatory requirements.",
  },

  {
    id: "third-party-disclosure",
    title: "Third-Party Disclosure",
    content:
      "We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your explicit consent.",
  },
  {
    id: "cookie-usage",
    title: "Cookie Usage",
    content:
      "The Ogun Digital Summit app (ODS24) may use cookies to enhance user experience. You can manage cookie preferences through your device settings.",
  },
];

function Page() {
  return (
    <div className="">
      <div className="pt-10 md:pt-20 relative px-4 sm:px-8 xl:px-16 2xl:px-24 w-full bg-white/80">
        <Privacy privacy={privacy} />
        <section className="text-header pt-10 pb-16">
          <p className="mb-8">
            By using our services, you agree to the terms outlined in our
            Privacy Policy. For more details on how we handle your data, please
            review our full Privacy Policy.
          </p>

          <p>
            If you have any questions or concerns, please contact us at{" "}
            <Link
              className="underline"
              href="mailto:hello@ogundigitalsummit.com"
            >
              hello@ogundigitalsummit.com
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Page;

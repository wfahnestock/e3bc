import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graph } from "@/lib/structured-data";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

const TITLE = "Privacy Policy";
const DESCRIPTION =
  "What data Ecubed Business Consulting collects when you use this site, who processes it, how long it is kept, and how to ask for it to be deleted.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/privacy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const LAST_UPDATED = "2026-09-05";

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        schema={graph(
          breadcrumbSchema([{ name: "Privacy Policy", path: "/privacy" }]),
        )}
      />
      <LegalPage
        eyebrow="Legal"
        title="Privacy policy"
        lastUpdated={LAST_UPDATED}
      >
        <h2>Who this covers</h2>
        <p>
          This policy applies to <strong>{SITE_NAME}</strong> and the website at
          e3bc.com. It covers people who visit the site or use the contact form.
          It does not cover information exchanged during a paid engagement,
          which is governed by the engagement letter you sign.
        </p>

        <h2>What we collect</h2>
        <h3>Information you type in</h3>
        <p>
          The contact form asks for your <strong>name</strong>,{" "}
          <strong>email address</strong>, <strong>business type</strong>, and
          your <strong>message</strong>. Nothing on the form is collected that
          you did not enter yourself.
        </p>
        <p>
          Submissions are delivered to Beth at her business email address.
        </p>

        <h3>Information collected automatically</h3>
        <ul>
          <li>
            <strong>Server logs.</strong> Our webhost records standard request
            information, including IP address, browser type, and the pages
            requested.
          </li>
          <li>
            <strong>Analytics.</strong> We use analytics to count
            visits and see which pages get read. It uses cookies to tell repeat
            visits from new ones.
          </li>
          <li>
            <strong>Bot protection.</strong> The contact form uses a Captcha
            to identify potential bots attempting to submit things through the 
            form.
          </li>
        </ul>

        <h2>What we do not do</h2>
        <ul>
          <li>We do not sell or rent your information. Not to anyone, ever.</li>
          <li>
            We do not run advertising pixels or retargeting.
          </li>
          <li>
            We do not ask for financial account numbers, Social Security
            numbers, or tax documents through this website. If we ever need
            those during an engagement, they are collected another way.
          </li>
        </ul>

        <h2>Who else processes it</h2>
        <p>
          Running a website means using service providers. These are the only
          ones that touch information from this site, and each has its own
          privacy policy:
        </p>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Provider</th>
                <th>What it does</th>
                <th>What it sees</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://www.netlify.com/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Netlify
                  </a>
                </td>
                <td>Hosts the site</td>
                <td>Request logs, including IP address</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.cloudflare.com/turnstile-privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cloudflare
                  </a>
                </td>
                <td>Turnstile bot check on the form</td>
                <td>IP address and browser signals at submission</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://resend.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resend
                  </a>
                </td>
                <td>Delivers the form as email</td>
                <td>Everything you typed into the form</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Analytics
                  </a>
                </td>
                <td>Counts visits and page views</td>
                <td>Cookie ID, pages viewed, approximate location</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>How long it is kept</h2>
        <ul>
          <li>
            <strong>Contact form emails</strong> stay in Beth&rsquo;s business
            inbox. Messages that do not lead to work are deleted within about
            two years. Messages that become client records are kept for as long
            as professional and tax record-keeping requires.
          </li>
          <li>
            <strong>Analytics data</strong> is retained on Google&rsquo;s
            default schedule and then deleted by Google.
          </li>
          <li>
            <strong>Server logs</strong> are kept on our host&rsquo;s standard
            retention schedule, which is short.
          </li>
        </ul>

        <h2>Your choices</h2>
        <ul>
          <li>
            <strong>Opt out of analytics.</strong> Install{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&rsquo;s opt-out browser add-on
            </a>
            , or block cookies for this site.
          </li>
          <li>
            <strong>Ask what we have.</strong> Email {SITE_EMAIL} and we will
            tell you what is in the inbox from your address.
          </li>
          <li>
            <strong>Ask us to delete it.</strong> Email {SITE_EMAIL} and we will
            delete your messages, unless we are required to keep them as part of
            a client record.
          </li>
        </ul>
        <p>
          We handle these requests for anyone who asks.
        </p>

        <h2>Security</h2>
        <p>
          The site is served over HTTPS, and form submissions are encrypted in
          transit. Please do not send sensitive material such as account
          numbers or tax documents through the contact form. Ask us for a secure
          method instead.
        </p>

        <h2>Children</h2>
        <p>
          This site is intended for business owners and is not directed at children under
          13. We do not knowingly collect information from children. If you
          believe a child has sent us information, email {SITE_EMAIL} and we
          will delete it.
        </p>

        <h2>Changes</h2>
        <p>
          If this policy changes, the &ldquo;last updated&rdquo; date at the top
          of the page changes with it.
        </p>
      </LegalPage>
    </>
  );
}

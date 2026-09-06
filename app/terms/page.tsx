import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graph } from "@/lib/structured-data";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

const TITLE = "Terms of Use";
const DESCRIPTION =
  "The terms for using the Ecubed Business Consulting website: what the content is, what it is not, and when a working relationship begins.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/terms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const LAST_UPDATED = "2026-09-05";

export default function TermsPage() {
  return (
    <>
      <JsonLd
        schema={graph(
          breadcrumbSchema([{ name: "Terms of Use", path: "/terms" }]),
        )}
      />
      <LegalPage
        eyebrow="Legal"
        title="Terms of use"
        lastUpdated={LAST_UPDATED}
      >
        <h2>Agreement</h2>
        <p>
          By using e3bc.com you agree to these terms. If you do not agree with
          them, please do not use the site. These terms apply to the website
          only. Paid work is governed by the engagement letter you sign.
        </p>

        <h2>This is general information, not advice</h2>
        <p>
          Everything on this site is general information about accounting,
          payroll, compliance, and running a small business.{" "}
          <strong>
            It is not accounting, tax, legal, or financial advice, and it is not
            written for your situation.
          </strong>{" "}
          Rules change, they vary by state and by contract, and the details of
          your business change the answer.
        </p>
        <p>
          Do not act on something you read here without getting advice about
          your specific circumstances. If you do act on it without engaging us
          or another professional, you do so at your own risk.
        </p>

        <h2>Reading this site does not make you a client</h2>
        <p>
          <strong>
            A working relationship begins only when both sides sign a written
            engagement letter that sets out the scope and the fee.
          </strong>
        </p>
        <p>
          Until that happens, we have no duty to you, we are not tracking your
          deadlines, and we are not monitoring your filings. A free consult is a
          conversation, not an engagement.
        </p>
        <p>
          Please do not send confidential or sensitive information through the
          contact form before an engagement is in place. Information sent before
          then is not protected by any professional duty of confidentiality, and
          the form is not a secure channel for financial records.
        </p>

        <h2>Licensing and scope of services</h2>
        <p>
          {SITE_NAME} provides accounting, bookkeeping, payroll, HR, and
          compliance consulting services.{" "}
          <strong>
            It is not a licensed CPA firm and does not provide attest services
          </strong>{" "}
          such as audits, reviews, or compilations accompanied by an
          accountant&rsquo;s report. Nothing on this site should be read as
          holding out {SITE_NAME} or its principal as a licensed certified
          public accountant.
        </p>
        <p>
          Where work requires a licensed CPA or an attorney, we will tell you
          and refer you to someone who can sign it.
        </p>

        <h2>Accuracy</h2>
        <p>
          We try to keep the site accurate and current, and we cite primary
          sources where we can. Even so, content may become out of date, and we
          make no promise that it is complete or error-free. Statutes,
          thresholds, filing forms, and wage determinations change on their own
          schedule. Always confirm a rule against the current official source
          before relying on it.
        </p>

        <h2>Our content</h2>
        <p>
          The text, design, graphics, and layout of this site belong to{" "}
          {SITE_NAME} and are protected by copyright. You are welcome to read
          it, print it for your own use, and link to it. You may not republish
          it, sell it, or present it as your own work without written
          permission.
        </p>

        <h2>Using the site</h2>
        <p>Please do not:</p>
        <ul>
          <li>
            Use the contact form to send spam, malware, or anything unlawful.
          </li>
          <li>
            Attempt to break, overload, probe, or gain unauthorized access to
            the site or its infrastructure.
          </li>
          <li>
            Scrape or harvest the site for bulk republication, or use automated
            tools to submit the form.
          </li>
          <li>Impersonate someone else when contacting us.</li>
        </ul>

        <h2>Links to other sites</h2>
        <p>
          We link to government agencies, trade associations, and other
          resources because they are useful. We do not control those sites and
          are not responsible for what they publish or how they handle your
          information.
        </p>

        <h2>No warranty</h2>
        <p>
          The site is provided &ldquo;as is&rdquo; and &ldquo;as
          available,&rdquo; without warranties of any kind, whether express or
          implied, including implied warranties of merchantability, fitness for
          a particular purpose, and non-infringement. We do not warrant that the
          site will be uninterrupted, secure, or error-free.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by Pennsylvania law, {SITE_NAME} and
          its principal are not liable for any indirect, incidental,
          consequential, special, or punitive damages arising from your use of
          this site or your reliance on anything published here, including lost
          profits, lost data, or business interruption, even if we were advised
          such damages were possible.
        </p>
        <p>
          Nothing in these terms limits liability that cannot be limited under
          applicable law.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of the Commonwealth of
          Pennsylvania, without regard to its conflict of law rules. Any dispute
          about this site will be brought in the state or federal courts serving
          York County, Pennsylvania, and you agree to that venue.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms. The &ldquo;last updated&rdquo; date at the
          top of the page will change when we do, and continuing to use the site
          after that means you accept the revised terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms go to{" "}
          <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>, or through the{" "}
          <Link href="/contact">contact page</Link>. See also the{" "}
          <Link href="/privacy">privacy policy</Link>.
        </p>
      </LegalPage>
    </>
  );
}

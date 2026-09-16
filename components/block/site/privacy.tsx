import LegalPage, { type LegalSection } from '@/components/block/site/legal-page'
import { site } from '@/data/site'

const sections: LegalSection[] = [
  {
    id: 'policy-scope',
    title: 'About this policy',
    content: (
      <>
        <p>
          This draft Privacy Policy covers the {site.name} website and inquiries sent through its
          contact links. It describes the website’s known features and highlights operational
          details that still need confirmation before this policy is finalized.
        </p>
        <p>
          It does not cover third-party websites or personal information handled within a client
          project. Where relevant, client work requires separate privacy and data-processing terms.
        </p>
      </>
    ),
  },
  {
    id: 'information-you-share',
    title: 'Information you share',
    content: (
      <>
        <p>
          If you email us, you choose what to share. This may include your name, email address,
          company, project requirements, and the contents of your message or attachments.
        </p>
        <p>
          Please share only what is needed for your inquiry. Do not send passwords, payment details,
          or sensitive personal information in an initial message. Opening an email link uses your
          chosen email service; it does not submit a website form.
        </p>
      </>
    ),
  },
  {
    id: 'hosting-and-analytics',
    title: 'Hosting & analytics',
    content: (
      <>
        <p>
          The website uses Cloudflare infrastructure and loads an analytics script from
          analytics.masb0ymas.com. Visiting the website involves technical requests to these
          services. Such requests can include an IP address, browser information, requested URL, and
          request time.
        </p>
        <p>
          The exact analytics fields, any cookies or browser storage, data destinations, and
          retention settings must be verified before this policy is finalized. This draft does not
          claim that analytics are anonymous, cookie-free, or disabled by default.
        </p>
        <p>
          Browser settings may let you restrict cookies or scripts. Their effect depends on your
          browser and the tools in use; this website does not currently provide a dedicated
          analytics preference control.
        </p>
      </>
    ),
  },
  {
    id: 'use-of-information',
    title: 'How information is used',
    content: (
      <>
        <p>The purposes to be covered by the finalized policy include:</p>
        <ul>
          <li>Responding to inquiries and discussing potential projects.</li>
          <li>Delivering, maintaining, and protecting the website.</li>
          <li>Understanding website usage and improving its content and experience.</li>
          <li>Meeting applicable legal obligations and handling relevant requests.</li>
        </ul>
        <p>
          The owner must confirm actual processing practices and any applicable legal bases,
          notices, or consent requirements before publication.
        </p>
      </>
    ),
  },
  {
    id: 'service-providers',
    title: 'Service providers & sharing',
    content: (
      <>
        <p>
          Hosting, analytics, and email services may process information as part of operating the
          website and responding to messages. Information may also need to be disclosed where
          required by applicable law.
        </p>
        <p>
          The finalized policy needs a confirmed account of providers, recipients, processing
          locations, and any relevant international-transfer safeguards. These details have not yet
          been established in this draft.
        </p>
      </>
    ),
  },
  {
    id: 'retention-and-security',
    title: 'Retention & security',
    content: (
      <>
        <p>
          Retention can differ for correspondence, hosting logs, and analytics. The owner must
          confirm retention periods or criteria, deletion practices, and any legal recordkeeping
          requirements before this policy is published.
        </p>
        <p>
          No internet transmission or storage system can be guaranteed completely secure.
          Appropriate safeguards should reflect the information being handled; this draft does not
          assert specific security certifications or controls.
        </p>
      </>
    ),
  },
  {
    id: 'privacy-requests',
    title: 'Your choices & requests',
    content: (
      <>
        <p>
          You can choose what information to include in an inquiry. Depending on your location and
          applicable law, you may also have rights to request access, correction, deletion,
          restriction, or portability of personal information, or to object to certain uses. Where
          processing relies on consent, withdrawal rights may apply.
        </p>
        <p>
          Contact us using the email below to ask about your information or raise a privacy concern.
          Please describe your request without including unnecessary sensitive data. Identity
          verification may be needed. Available rights and exceptions depend on the applicable law;
          you may also have a right to contact your local data-protection authority.
        </p>
      </>
    ),
  },
  {
    id: 'external-services',
    title: 'External websites',
    content: (
      <p>
        Links to project websites and social profiles take you to services with their own privacy
        practices. This draft does not cover how those services handle information. Review their
        privacy policies before sharing personal information with them.
      </p>
    ),
  },
  {
    id: 'policy-changes',
    title: 'Policy updates',
    content: (
      <p>
        This policy is awaiting owner and legal review. The finalized version should include an
        effective date and verified operational details. Future updates should be dated here so you
        can identify the version that applies.
      </p>
    ),
  },
]

export default function PrivacySection() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="What you share, how this website connects to services, and where to ask about your information."
      sections={sections}
      related={{ label: 'Read our Terms of Use', href: '/terms' }}
    />
  )
}

import LegalPage, { type LegalSection } from '@/components/block/site/legal-page'
import { site } from '@/data/site'

const sections: LegalSection[] = [
  {
    id: 'website-scope',
    title: 'About these terms',
    content: (
      <>
        <p>
          These draft Terms of Use describe the proposed conditions for using the {site.name}{' '}
          website. The website introduces our software development services, showcases selected
          projects, and provides ways to contact us.
        </p>
        <p>
          These terms concern this website only. They do not replace a signed proposal, statement of
          work, or other agreement for services.
        </p>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    content: (
      <>
        <p>Please use the website lawfully and respect other people’s rights. You must not:</p>
        <ul>
          <li>Attempt to gain unauthorized access to the website or its supporting systems.</li>
          <li>
            Introduce malicious code, disrupt the website, or interfere with its availability.
          </li>
          <li>Use website content to misrepresent your relationship with {site.name}.</li>
          <li>
            Copy or use material in a way that infringes intellectual property or privacy rights.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual property',
    content: (
      <>
        <p>
          Website text, design, branding, and other materials may be protected by intellectual
          property law. Rights remain with {site.name} or the relevant owners, including owners of
          third-party trademarks and project materials.
        </p>
        <p>
          You may view and share links to publicly available pages. Other uses require permission
          unless allowed by applicable law or a license attached to the material. A link to an
          open-source project does not change that project’s license.
        </p>
      </>
    ),
  },
  {
    id: 'project-agreements',
    title: 'Client projects',
    content: (
      <>
        <p>
          Service descriptions and project examples are general information, not a binding offer or
          a guarantee of a particular outcome. Sending an inquiry does not create a client
          relationship or commit either party to a project.
        </p>
        <p>
          Scope, fees, payment, timelines, confidentiality, ownership, support, and termination
          should be set out in a separate written agreement. That agreement governs the services it
          covers, including where it differs from these website terms.
        </p>
      </>
    ),
  },
  {
    id: 'external-links',
    title: 'Third-party links',
    content: (
      <p>
        The website links to project websites, social networks, and other external services. Those
        services are operated by their respective owners and have their own terms and privacy
        policies. A link is not a promise about their content, availability, or practices. Please
        review their policies before using them.
      </p>
    ),
  },
  {
    id: 'website-information',
    title: 'Information & availability',
    content: (
      <>
        <p>
          Website information may change and may contain errors or omissions. It is provided for
          general information, not as technical, business, or legal advice tailored to your
          circumstances. Confirm important details with us before relying on them.
        </p>
        <p>
          The website is provided on an “as available” basis. Continuous availability, accuracy, and
          freedom from interruptions are not guaranteed. Nothing in these draft terms is intended to
          exclude rights or responsibilities that cannot be excluded under applicable law.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    content: (
      <p>
        These draft terms may be revised before publication. A finalized version should identify its
        effective date, and later revisions should be dated on this page. Review the current version
        when you use the website and contact us if you have questions.
      </p>
    ),
  },
]

export default function TermsSection() {
  return (
    <LegalPage
      title="Terms of Use"
      description="A clear guide to using our website and understanding where project agreements begin."
      sections={sections}
      related={{ label: 'Read our Privacy Policy', href: '/privacy' }}
    />
  )
}

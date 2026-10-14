import type { Locale } from '@/lib/i18n'

import LegalPage, { type LegalContent } from '@/components/block/site/legal-page'
import { site } from '@/data/site'

const content: LegalContent = {
  en: (effectiveDate) => [
    {
      id: 'website-scope',
      title: 'About these terms',
      content: (
        <>
          <p>
            These Terms of Use describe the conditions for using the {site.name} website. The
            website introduces our software development services, showcases selected projects, and
            provides ways to contact us.
          </p>
          <p>
            They concern this website only. They do not replace a signed proposal, statement of
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
            Service descriptions and project examples are general information, not a binding offer
            or a guarantee of a particular outcome. Sending an inquiry does not create a client
            relationship or commit either party to a project.
          </p>
          <p>
            Scope, fees, payment, timelines, confidentiality, ownership, support, and termination
            should be set out in a separate written agreement. That agreement governs the services
            it covers, including where it differs from these website terms.
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
            The website is provided on an “as available” basis. Continuous availability, accuracy,
            and freedom from interruptions are not guaranteed. Nothing in these terms is intended to
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
          We may revise these terms from time to time. Revisions are dated on this page, and the
          effective date shown at the top identifies the current version. This version is effective
          as of {effectiveDate}. Review the current version when you use the website and contact us
          if you have questions.
        </p>
      ),
    },
  ],

  id: (effectiveDate) => [
    {
      id: 'website-scope',
      title: 'Tentang ketentuan ini',
      content: (
        <>
          <p>
            Ketentuan Penggunaan ini menjelaskan syarat penggunaan situs {site.name}. Situs ini
            memperkenalkan layanan pengembangan software kami, menampilkan proyek pilihan, dan
            menyediakan cara untuk menghubungi kami.
          </p>
          <p>
            Ketentuan ini hanya berlaku untuk situs ini. Ketentuan ini tidak menggantikan proposal,
            statement of work, atau perjanjian layanan lain yang telah ditandatangani.
          </p>
        </>
      ),
    },
    {
      id: 'acceptable-use',
      title: 'Penggunaan yang diperbolehkan',
      content: (
        <>
          <p>Gunakan situs ini secara sah dan hormati hak orang lain. Anda tidak boleh:</p>
          <ul>
            <li>Mencoba mendapatkan akses tanpa izin ke situs atau sistem pendukungnya.</li>
            <li>Menyisipkan kode berbahaya, mengganggu situs, atau menghambat ketersediaannya.</li>
            <li>
              Menggunakan konten situs untuk menyalahartikan hubungan Anda dengan {site.name}.
            </li>
            <li>
              Menyalin atau menggunakan materi dengan cara yang melanggar hak kekayaan intelektual
              atau privasi.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'intellectual-property',
      title: 'Kekayaan intelektual',
      content: (
        <>
          <p>
            Teks, desain, branding, dan materi lain di situs ini dapat dilindungi hukum kekayaan
            intelektual. Hak tetap dimiliki oleh {site.name} atau pemilik terkait, termasuk pemilik
            merek dagang pihak ketiga dan materi proyek.
          </p>
          <p>
            Anda boleh melihat dan membagikan tautan ke halaman yang tersedia untuk publik.
            Penggunaan lain memerlukan izin, kecuali diperbolehkan oleh hukum yang berlaku atau
            lisensi yang menyertai materi tersebut. Tautan ke proyek open-source tidak mengubah
            lisensi proyek tersebut.
          </p>
        </>
      ),
    },
    {
      id: 'project-agreements',
      title: 'Proyek klien',
      content: (
        <>
          <p>
            Deskripsi layanan dan contoh proyek merupakan informasi umum, bukan penawaran yang
            mengikat atau jaminan atas hasil tertentu. Mengirim pertanyaan tidak menciptakan
            hubungan klien dan tidak mengikat pihak mana pun pada suatu proyek.
          </p>
          <p>
            Cakupan, biaya, pembayaran, jadwal, kerahasiaan, kepemilikan, dukungan, dan pengakhiran
            harus diatur dalam perjanjian tertulis terpisah. Perjanjian tersebut mengatur layanan
            yang dicakupnya, termasuk jika isinya berbeda dari ketentuan situs ini.
          </p>
        </>
      ),
    },
    {
      id: 'external-links',
      title: 'Tautan pihak ketiga',
      content: (
        <p>
          Situs ini menautkan ke situs proyek, jejaring sosial, dan layanan eksternal lainnya.
          Layanan tersebut dioperasikan oleh pemiliknya masing-masing dan memiliki ketentuan serta
          kebijakan privasi sendiri. Sebuah tautan bukan jaminan atas konten, ketersediaan, atau
          praktik layanan tersebut. Tinjau kebijakan mereka sebelum menggunakannya.
        </p>
      ),
    },
    {
      id: 'website-information',
      title: 'Informasi & ketersediaan',
      content: (
        <>
          <p>
            Informasi di situs ini dapat berubah dan mungkin mengandung kesalahan atau kekurangan.
            Informasi ini disediakan sebagai informasi umum, bukan nasihat teknis, bisnis, atau
            hukum yang disesuaikan dengan situasi Anda. Konfirmasikan detail penting kepada kami
            sebelum mengandalkannya.
          </p>
          <p>
            Situs ini disediakan “sebagaimana tersedia”. Ketersediaan yang berkelanjutan, akurasi,
            dan bebas gangguan tidak dijamin. Tidak ada bagian dari ketentuan ini yang dimaksudkan
            untuk mengecualikan hak atau tanggung jawab yang tidak dapat dikecualikan menurut hukum
            yang berlaku.
          </p>
        </>
      ),
    },
    {
      id: 'changes',
      title: 'Perubahan ketentuan',
      content: (
        <p>
          Kami dapat merevisi ketentuan ini dari waktu ke waktu. Setiap revisi diberi tanggal di
          halaman ini, dan tanggal berlaku di bagian atas menunjukkan versi yang sedang berlaku.
          Versi ini berlaku sejak {effectiveDate}. Tinjau versi terbaru setiap kali Anda menggunakan
          situs ini, dan hubungi kami jika Anda memiliki pertanyaan.
        </p>
      ),
    },
  ],
}

export default function TermsSection({ locale }: { locale: Locale }) {
  return <LegalPage locale={locale} doc="terms" content={content} />
}

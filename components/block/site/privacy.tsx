import LegalPage, { type LegalContent } from '@/components/block/site/legal-page'
import { site } from '@/data/site'
import { LOCALE_COOKIE, type Locale } from '@/lib/i18n'

const content: LegalContent = {
  en: (effectiveDate) => [
    {
      id: 'policy-scope',
      title: 'About this policy',
      content: (
        <>
          <p>
            This Privacy Policy covers the {site.name} website and inquiries sent through its
            contact links. It describes what information is involved when you use the website and
            how that information is handled.
          </p>
          <p>
            It does not cover third-party websites or personal information handled within a client
            project. Where relevant, client work requires separate privacy and data-processing
            terms.
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
            Please share only what is needed for your inquiry. Do not send passwords, payment
            details, or sensitive personal information in an initial message. Opening an email link
            uses your chosen email service; it does not submit a website form.
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
            The website is hosted on Cloudflare infrastructure and loads an analytics script from
            analytics.masb0ymas.com. Visiting the website involves technical requests to these
            services. Such requests can include an IP address, browser information, requested URL,
            and request time.
          </p>
          <p>
            Analytics data is used to understand website usage and to improve its content and
            experience. Browser settings may let you restrict cookies or scripts; their effect
            depends on your browser and the tools in use. This website does not provide a dedicated
            analytics preference control.
          </p>
        </>
      ),
    },
    {
      id: 'language-preference',
      title: 'Language preference',
      content: (
        <p>
          When you choose a language with the language switcher, the website stores a small cookie
          named <code>{LOCALE_COOKIE}</code> in your browser. It contains only the language code (en
          or id), is used solely to show the website in the language you chose on later visits, and
          expires after one year. It is not used for analytics or advertising. You can delete it at
          any time through your browser settings.
        </p>
      ),
    },
    {
      id: 'use-of-information',
      title: 'How information is used',
      content: (
        <>
          <p>We use information for the following purposes:</p>
          <ul>
            <li>Responding to inquiries and discussing potential projects.</li>
            <li>Delivering, maintaining, and protecting the website.</li>
            <li>Understanding website usage and improving its content and experience.</li>
            <li>Meeting applicable legal obligations and handling relevant requests.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'service-providers',
      title: 'Service providers & sharing',
      content: (
        <p>
          Hosting, analytics, and email services may process information on our behalf as part of
          operating the website and responding to messages. Information may also be disclosed where
          required by applicable law. We do not sell personal information.
        </p>
      ),
    },
    {
      id: 'retention-and-security',
      title: 'Retention & security',
      content: (
        <>
          <p>
            Retention differs for correspondence, hosting logs, and analytics. Information is kept
            only as long as needed for the purposes described in this policy or as required by
            applicable law.
          </p>
          <p>
            We apply safeguards appropriate to the information being handled, but no internet
            transmission or storage system can be guaranteed completely secure. This policy does not
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
            Contact us using the email below to ask about your information or raise a privacy
            concern. Please describe your request without including unnecessary sensitive data.
            Identity verification may be needed. Available rights and exceptions depend on the
            applicable law; you may also have a right to contact your local data-protection
            authority.
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
          practices. This policy does not cover how those services handle information. Review their
          privacy policies before sharing personal information with them.
        </p>
      ),
    },
    {
      id: 'policy-changes',
      title: 'Policy updates',
      content: (
        <p>
          We may update this policy from time to time. Updates are dated on this page so you can
          identify the version that applies. This version is effective as of {effectiveDate}.
        </p>
      ),
    },
  ],

  id: (effectiveDate) => [
    {
      id: 'policy-scope',
      title: 'Tentang kebijakan ini',
      content: (
        <>
          <p>
            Kebijakan Privasi ini mencakup situs {site.name} dan pertanyaan yang dikirim melalui
            tautan kontaknya. Kebijakan ini menjelaskan informasi apa saja yang terlibat saat Anda
            menggunakan situs dan bagaimana informasi tersebut ditangani.
          </p>
          <p>
            Kebijakan ini tidak mencakup situs pihak ketiga atau informasi pribadi yang ditangani
            dalam proyek klien. Jika relevan, pekerjaan klien memerlukan ketentuan privasi dan
            pemrosesan data tersendiri.
          </p>
        </>
      ),
    },
    {
      id: 'information-you-share',
      title: 'Informasi yang Anda bagikan',
      content: (
        <>
          <p>
            Jika Anda mengirim email kepada kami, Anda yang menentukan apa yang dibagikan. Informasi
            ini dapat mencakup nama, alamat email, perusahaan, kebutuhan proyek, serta isi pesan
            atau lampiran Anda.
          </p>
          <p>
            Bagikan hanya informasi yang diperlukan untuk pertanyaan Anda. Jangan mengirim kata
            sandi, detail pembayaran, atau informasi pribadi yang sensitif dalam pesan awal. Membuka
            tautan email akan menggunakan layanan email pilihan Anda; tindakan itu tidak mengirimkan
            formulir di situs.
          </p>
        </>
      ),
    },
    {
      id: 'hosting-and-analytics',
      title: 'Hosting & analitik',
      content: (
        <>
          <p>
            Situs ini di-host pada infrastruktur Cloudflare dan memuat skrip analitik dari
            analytics.masb0ymas.com. Mengunjungi situs melibatkan permintaan teknis ke layanan
            tersebut. Permintaan itu dapat mencakup alamat IP, informasi browser, URL yang diminta,
            dan waktu permintaan.
          </p>
          <p>
            Data analitik digunakan untuk memahami penggunaan situs serta meningkatkan konten dan
            pengalamannya. Pengaturan browser mungkin memungkinkan Anda membatasi cookie atau skrip;
            efeknya bergantung pada browser dan alat yang Anda gunakan. Situs ini tidak menyediakan
            kontrol khusus untuk preferensi analitik.
          </p>
        </>
      ),
    },
    {
      id: 'language-preference',
      title: 'Preferensi bahasa',
      content: (
        <p>
          Saat Anda memilih bahasa melalui pemilih bahasa, situs menyimpan cookie kecil bernama{' '}
          <code>{LOCALE_COOKIE}</code> di browser Anda. Cookie ini hanya berisi kode bahasa (en atau
          id), hanya digunakan untuk menampilkan situs dalam bahasa pilihan Anda pada kunjungan
          berikutnya, dan kedaluwarsa setelah satu tahun. Cookie ini tidak digunakan untuk analitik
          atau iklan. Anda dapat menghapusnya kapan saja melalui pengaturan browser.
        </p>
      ),
    },
    {
      id: 'use-of-information',
      title: 'Cara informasi digunakan',
      content: (
        <>
          <p>Kami menggunakan informasi untuk tujuan berikut:</p>
          <ul>
            <li>Menanggapi pertanyaan dan mendiskusikan calon proyek.</li>
            <li>Menyediakan, memelihara, dan melindungi situs.</li>
            <li>Memahami penggunaan situs serta meningkatkan konten dan pengalamannya.</li>
            <li>Memenuhi kewajiban hukum yang berlaku dan menangani permintaan terkait.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'service-providers',
      title: 'Penyedia layanan & berbagi',
      content: (
        <p>
          Layanan hosting, analitik, dan email dapat memproses informasi atas nama kami sebagai
          bagian dari pengoperasian situs dan penanganan pesan. Informasi juga dapat diungkapkan
          jika diwajibkan oleh hukum yang berlaku. Kami tidak menjual informasi pribadi.
        </p>
      ),
    },
    {
      id: 'retention-and-security',
      title: 'Retensi & keamanan',
      content: (
        <>
          <p>
            Masa simpan berbeda untuk korespondensi, log hosting, dan analitik. Informasi disimpan
            hanya selama diperlukan untuk tujuan yang dijelaskan dalam kebijakan ini atau sesuai
            ketentuan hukum yang berlaku.
          </p>
          <p>
            Kami menerapkan pengamanan yang sesuai dengan informasi yang ditangani, tetapi tidak ada
            transmisi internet atau sistem penyimpanan yang dapat dijamin sepenuhnya aman. Kebijakan
            ini tidak menyatakan sertifikasi atau kontrol keamanan tertentu.
          </p>
        </>
      ),
    },
    {
      id: 'privacy-requests',
      title: 'Pilihan & permintaan Anda',
      content: (
        <>
          <p>
            Anda dapat memilih informasi apa yang disertakan dalam pertanyaan Anda. Bergantung pada
            lokasi Anda dan hukum yang berlaku, Anda mungkin juga berhak meminta akses, koreksi,
            penghapusan, pembatasan, atau portabilitas informasi pribadi, atau berkeberatan atas
            penggunaan tertentu. Jika pemrosesan didasarkan pada persetujuan, hak untuk menarik
            persetujuan dapat berlaku.
          </p>
          <p>
            Hubungi kami melalui email di bawah untuk menanyakan informasi Anda atau menyampaikan
            masalah privasi. Jelaskan permintaan Anda tanpa menyertakan data sensitif yang tidak
            perlu. Verifikasi identitas mungkin diperlukan. Hak dan pengecualian yang tersedia
            bergantung pada hukum yang berlaku; Anda mungkin juga berhak menghubungi otoritas
            perlindungan data setempat.
          </p>
        </>
      ),
    },
    {
      id: 'external-services',
      title: 'Situs eksternal',
      content: (
        <p>
          Tautan ke situs proyek dan profil media sosial membawa Anda ke layanan yang memiliki
          praktik privasi sendiri. Kebijakan ini tidak mencakup cara layanan tersebut menangani
          informasi. Tinjau kebijakan privasi mereka sebelum membagikan informasi pribadi.
        </p>
      ),
    },
    {
      id: 'policy-changes',
      title: 'Pembaruan kebijakan',
      content: (
        <p>
          Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Setiap pembaruan diberi tanggal
          di halaman ini agar Anda dapat mengetahui versi yang berlaku. Versi ini berlaku sejak{' '}
          {effectiveDate}.
        </p>
      ),
    },
  ],
}

export default function PrivacySection({ locale }: { locale: Locale }) {
  return <LegalPage locale={locale} doc="privacy" content={content} />
}

import Image from 'next/image';
import Link from 'next/link';

const translations = {
  en: {
    home: "Home",
    help: "Help",
    privacy: "Privacy Policy",
  },
  zh: {
    home: "首页",
    help: "帮助",
    privacy: "隐私政策",
  }
};

export default function Header({ lang }: { lang: 'en' | 'zh' }) {
  const t = translations[lang];

  return (
    <header className="bg-green-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href={`/${lang}`} className="text-xl font-bold hover:text-green-200 flex items-center">
          <Image src="/battery-icon.png" alt="Battery Icon" width={24} height={24} className="mr-2" />
          {lang === 'en' ? 'Battery Calculator' : '电池计算器'}
        </Link>
        <ul className="flex space-x-4">
          <li><Link href={`/${lang}`} className="hover:text-green-200">{t.home}</Link></li>
          <li><Link href={`/${lang}/help`} className="hover:text-green-200">{t.help}</Link></li>
          <li><Link href={`/${lang}/privacy`} className="hover:text-green-200">{t.privacy}</Link></li>
        </ul>
      </nav>
    </header>
  );
}

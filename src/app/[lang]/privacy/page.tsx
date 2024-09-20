import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | 隐私政策',
};

const translations = {
  en: {
    title: "Privacy Policy",
    content: "This is the privacy policy for the Battery Voltage Calculator.",
  },
  zh: {
    title: "隐私政策",
    content: "这是电池电压计算器的隐私政策。",
  }
};

export default function Privacy({ params: { lang } }: { params: { lang: 'en' | 'zh' } }) {
  const t = translations[lang];

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p>{t.content}</p>
    </div>
  );
}

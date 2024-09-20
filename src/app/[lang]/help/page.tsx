import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help | 帮助',
};

const translations = {
  en: {
    title: "Help",
    content: "This is the help page for the Battery Voltage Calculator.",
  },
  zh: {
    title: "帮助",
    content: "这是电池电压计算器的帮助页面。",
  }
};

export default function Help({ params: { lang } }: { params: { lang: 'en' | 'zh' } }) {
  const t = translations[lang];

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p>{t.content}</p>
    </div>
  );
}

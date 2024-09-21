import { Metadata } from 'next';
export const runtime = 'edge';
export const metadata: Metadata = {
  title: 'Privacy Policy | 隐私政策',
};

const translations = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated:",
    content: [
      "At Battery Voltage Calculator, we are committed to protecting your privacy. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information through our website.",
      "Information Collection and Use:",
      "• We do not collect any personal information from our users.",
      "• We do not use cookies or any other tracking technologies.",
      "• We do not require user registration or accounts.",
      "• The only data processed is the information you input directly into the calculator, which is not stored or transmitted.",
      "Third-Party Services:",
      "• We do not use any third-party services that might collect information about you.",
      "Changes to This Policy:",
      "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
      "Contact Us:",
      "If you have any questions about this Privacy Policy, please contact us."
    ]
  },
  zh: {
    title: "隐私政策",
    lastUpdated: "最后更新时间：",
    content: [
      "在电池电压计算器网站，我们致力于保护您的隐私。本隐私政策解释了我们通过网站收集、使用和披露信息的做法。",
      "信息收集和使用：",
      "• 我们不收集用户的任何个人信息。",
      "• 我们不使用 cookies 或任何其他跟踪技术。",
      "• 我们不需要用户注册或创建账户。",
      "• 唯一处理的数据是您直接输入计算器的信息，这些信息不会被存储或传输。",
      "第三方服务：",
      "• 我们不使用任何可能收集您信息的第三方服务。",
      "政策变更：",
      "我们可能会不时更新我们的隐私政策。我们会通过在此页面上发布新的隐私政策来通知您任何变更。",
      "联系我们：",
      "如果您对本隐私政策有任何问题，请联系我们。"
    ]
  }
};

export default function Privacy({ params: { lang } }: { params: { lang: 'en' | 'zh' } }) {
  const t = translations[lang];
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p className="mb-4">{t.lastUpdated} {currentDate}</p>
      {t.content.map((paragraph, index) => (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

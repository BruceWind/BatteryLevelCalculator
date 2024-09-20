import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const LeadAcidBatteryChart = dynamic(() => import('@/components/LeadAcidBatteryChart'), { ssr: false });

export const metadata: Metadata = {
  title: 'Help | 帮助',
};

const translations = {
  en: {
    title: "Help - Battery Voltage Calculator",
    introduction: "Welcome to the Battery Voltage Calculator. This tool helps you estimate the remaining charge of various battery types based on their voltage.",
    howToUse: "How to Use:",
    steps: [
      "Select your battery type from the dropdown menu.",
      "Enter the measured voltage of your battery.",
      "Click 'Calculate Charge' to see the estimated remaining charge.",
    ],
    supportedBatteries: "Supported Battery Types:",
    batteryTypes: [
      "Alkaline (1.5V)",
      "Carbon-zinc (1.5V)",
      "Lithium-ion (3.7V)",
      "<strong>Lead Acid (12V)</strong>",
      "Deep Cycle (12V)",
      "NiMH (1.2V)",
      "9V Alkaline",
    ],
    leadAcidSection: "<strong>Lead Acid Battery Voltage Chart</strong>",
    leadAcidInfo: "For lead acid batteries, the voltage can indicate the state of charge as follows:",
    leadAcidChart: [
      "12.7V or higher: 100% charged",
      "12.4V: 75% charged",
      "12.2V: 50% charged",
      "12.0V: 25% charged",
      "11.9V or lower: Discharged",
    ],
    note: "Note: These values are approximate and may vary slightly depending on the specific battery and conditions.",
    accuracy: "For the most accurate results, always use a reliable voltmeter and ensure the battery has been at rest (not charging or discharging) for at least a few hours before measuring.",
    leadAcidChartTitle: "Lead Acid Battery Voltage Chart",
  },
  zh: {
    title: "帮助 - 电池电压计算器",
    introduction: "欢迎使用电池电压计算器。此工具可帮助您根据电池电压估算各种类型电池的剩余电量。",
    howToUse: "使用方法：",
    steps: [
      "从下拉菜单中选择您的电池类型。",
      "输入您测量的电池电压。",
      "点击\"估算电量\"查看估计的剩余电量。",
    ],
    supportedBatteries: "支持的电池类型：",
    batteryTypes: [
      "碱性电池 (1.5V)",
      "碳性电池 (1.5V)",
      "锂离子电池 (3.7V)",
      "<strong>铅酸电池 (12V)</strong>",
      "深循环电池 (12V)",
      "镍氢电池 (1.2V)",
      "9V碱性电池",
    ],
    leadAcidSection: "<strong>铅酸电池电压图表</strong>",
    leadAcidInfo: "对于铅酸电池，电压可以指示充电状态如下：",
    leadAcidChart: [
      "12.7V 或更高：100% 充满",
      "12.4V：75% 电量",
      "12.2V：50% 电量",
      "12.0V：25% 电量",
      "11.9V 或更低：已放电",
    ],
    note: "注意：这些数值是近似值，可能会因具体电池和条件而略有不同。",
    accuracy: "为获得最准确的结果，请始终使用可靠的电压表，并确保在测量前电池已经静置（未充电或放电）至少几个小时。",
    leadAcidChartTitle: "铅酸电池电压图表",
  }
};

export default function Help({ params: { lang } }: { params: { lang: 'en' | 'zh' } }) {
  const t = translations[lang];

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p className="mb-4">{t.introduction}</p>
      
      <h2 className="text-2xl font-bold mb-2">{t.howToUse}</h2>
      <ol className="list-decimal list-inside mb-4">
        {t.steps.map((step, index) => (
          <li key={index} className="mb-1">{step}</li>
        ))}
      </ol>

      <h2 className="text-2xl font-bold mb-2">{t.supportedBatteries}</h2>
      <ul className="list-disc list-inside mb-4">
        {t.batteryTypes.map((type, index) => (
          <li key={index} className="mb-1" dangerouslySetInnerHTML={{__html: type}}></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mb-2" dangerouslySetInnerHTML={{__html: t.leadAcidSection}}></h2>
      <p className="mb-2">{t.leadAcidInfo}</p>
      <ul className="list-disc list-inside mb-4">
        {t.leadAcidChart.map((item, index) => (
          <li key={index} className="mb-1">{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mb-2" dangerouslySetInnerHTML={{__html: t.leadAcidChartTitle}}></h2>
      <LeadAcidBatteryChart />

      <p className="mb-2">{t.note}</p>
      <p>{t.accuracy}</p>
    </div>
  );
}

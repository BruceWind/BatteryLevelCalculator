'use client'

import { useState } from 'react';

const translations = {
  en: {
    title: "Battery Voltage Calculator",
    voltageInput: "Enter voltage (V)",
    batteryType: "Select battery type",
    alkaline: "Alkaline (1.5V)",
    carbon: "Carbon-zinc (1.5V)",
    lithium: "Lithium-ion (3.7V)",
    leadAcid: "Lead Acid (12V)",
    deepCycle: "Deep Cycle (12V)",
    nimh: "NiMH (1.2V)",
    ninev: "9V Alkaline",
    calculate: "Calculate Charge",
    estimatedCharge: "Estimated charge:",
    unknown: "Unknown"
  },
  zh: {
    title: "电池电压计算器",
    voltageInput: "输入电压 (V)",
    batteryType: "选择电池类型",
    alkaline: "碱性电池 (1.5V)",
    carbon: "碳性电池 (1.5V)",
    lithium: "锂离子电池 (3.7V)",
    leadAcid: "铅酸电池 (12V)",
    deepCycle: "深循环电池 (12V)",
    nimh: "镍氢电池 (1.2V)",
    ninev: "9V碱性电池",
    calculate: "估算电量",
    estimatedCharge: "估计剩余电量:",
    unknown: "未知"
  }
};

export default function Home({ params: { lang } }: { params: { lang: 'en' | 'zh' } }) {
  const t = translations[lang];

  const [voltage, setVoltage] = useState('');
  const [batteryType, setBatteryType] = useState('');
  const [estimatedCharge, setEstimatedCharge] = useState('');

  const estimateCharge = () => {
    // 实现电量估算逻辑
    // ...
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600">{t.title}</h1>
      <div className="space-y-4">
        <input
          type="number"
          value={voltage}
          onChange={(e) => setVoltage(e.target.value)}
          placeholder={t.voltageInput}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <select
          value={batteryType}
          onChange={(e) => setBatteryType(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">{t.batteryType}</option>
          <option value="alkaline">{t.alkaline}</option>
          <option value="carbon">{t.carbon}</option>
          <option value="lithium">{t.lithium}</option>
          <option value="leadAcid">{t.leadAcid}</option>
          <option value="deepCycle">{t.deepCycle}</option>
          <option value="nimh">{t.nimh}</option>
          <option value="ninev">{t.ninev}</option>
        </select>
        <button
          onClick={estimateCharge}
          className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
        >
          {t.calculate}
        </button>
        {estimatedCharge && (
          <p className="mt-4 text-center text-lg">
            {t.estimatedCharge} <strong className="text-green-600">{estimatedCharge}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

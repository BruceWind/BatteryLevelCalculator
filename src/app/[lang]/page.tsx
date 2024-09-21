'use client'

import { useState, useEffect } from 'react';
export const runtime = 'edge';


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
    unknown: "Unknown",
    voltageOutOfRange: "The entered voltage is out of the expected range for this battery type."
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
    unknown: "未知",
    voltageOutOfRange: "输入的电压超出了该电池类型的预期范围。"
  }
};
// 添加这个函数在组件外部
function interpolate(x: number, x1: number, y1: number, x2: number, y2: number): number {
  return y1 + (x - x1) * (y2 - y1) / (x2 - x1);
}

export default function Home({ params: { lang } }: { params: { lang: 'en' | 'zh' } }) {
  const t = translations[lang];
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 检查系统颜色主题
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    // 监听系统主题变化
    const listener = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addListener(listener);

    return () => darkModeMediaQuery.removeListener(listener);
  }, []);

  const [voltage, setVoltage] = useState('');

  // 添加这个函数来验证输入
  const handleVoltageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 允许空字符串、数字和小数点
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setVoltage(value);
    }
  };

  const [batteryType, setBatteryType] = useState('');
  const [estimatedCharge, setEstimatedCharge] = useState('');

  const estimateCharge = () => {
    if (!voltage || !batteryType) {
      setEstimatedCharge(t.unknown);
      return;
    }

    const v = parseFloat(voltage);
    let charge: number;

    const batteryProfiles = {
      alkaline: { min: 0.9, max: 1.6, alert: { min: 0.8, max: 1.7 } },
      carbon: { min: 0.8, max: 1.6, alert: { min: 0.7, max: 1.7 } },
      lithium: { min: 3.0, max: 4.2, alert: { min: 2.8, max: 4.3 } },
      leadAcid: { min: 10.5, max: 12.7, alert: { min: 10.0, max: 13.0 } },
      deepCycle: { min: 10.5, max: 12.7, alert: { min: 10.0, max: 13.0 } },
      nimh: { min: 1.0, max: 1.4, alert: { min: 0.9, max: 1.5 } },
      ninev: { min: 7.2, max: 9.6, alert: { min: 7.0, max: 9.8 } },
    };

    const profile = batteryProfiles[batteryType as keyof typeof batteryProfiles];

    if (!profile) {
      setEstimatedCharge(t.unknown);
      return;
    }

    if (v < profile.alert.min || v > profile.alert.max) {
      alert(t.voltageOutOfRange);
      setEstimatedCharge(t.unknown);
      return;
    }

    if (v >= profile.max) {
      charge = 100;
    } else if (v <= profile.min) {
      charge = 0;
    } else {
      charge = interpolate(v, profile.min, 0, profile.max, 100);
    }

    setEstimatedCharge(`${Math.round(charge)}%`);
  };

  return (
    <div className={`max-w-md mx-auto p-8 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h1 className={`text-3xl font-bold mb-6 text-center ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>{t.title}</h1>
      <div className="space-y-4">
        <input
          type="text"
          value={voltage}
          onChange={handleVoltageChange}
          placeholder={t.voltageInput}
          pattern="^\d*\.?\d*$"
          className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${isDarkMode
            ? 'bg-gray-700 text-white border-gray-600 focus:ring-green-500'
            : 'bg-white text-gray-700 border-gray-300 focus:ring-green-500'
            }`}
        />
        <select
          value={batteryType}
          onChange={(e) => setBatteryType(e.target.value)}
          className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${isDarkMode
            ? 'bg-gray-700 text-white border-gray-600 focus:ring-green-500'
            : 'bg-white text-gray-700 border-gray-300 focus:ring-green-500'
            }`}
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
          className={`w-full p-2 text-white rounded transition duration-300 ${isDarkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'
            }`}
        >
          {t.calculate}
        </button>
        {estimatedCharge && (
          <p className={`mt-4 text-center text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {t.estimatedCharge} <strong className={isDarkMode ? 'text-green-400' : 'text-green-600'}>{estimatedCharge}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

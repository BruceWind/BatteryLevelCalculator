'use client'

import { useState, useEffect } from 'react';

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
    let charge = '';

    switch(batteryType) {
      case 'alkaline':
      case 'carbon':
        if (v >= 1.5) charge = '100%';
        else if (v >= 1.4) charge = '75%';
        else if (v >= 1.3) charge = '50%';
        else if (v >= 1.2) charge = '25%';
        else charge = '0%';
        break;
      case 'lithium':
        if (v >= 4.2) charge = '100%';
        else if (v >= 3.9) charge = '75%';
        else if (v >= 3.7) charge = '50%';
        else if (v >= 3.5) charge = '25%';
        else charge = '0%';
        break;
      case 'leadAcid':
      case 'deepCycle':
        if (v >= 12.7) charge = '100%';
        else if (v >= 12.4) charge = '75%';
        else if (v >= 12.2) charge = '50%';
        else if (v >= 12.0) charge = '25%';
        else charge = '0%';
        break;
      case 'nimh':
        if (v >= 1.4) charge = '100%';
        else if (v >= 1.3) charge = '75%';
        else if (v >= 1.2) charge = '50%';
        else if (v >= 1.1) charge = '25%';
        else charge = '0%';
        break;
      case 'ninev':
        if (v >= 9.6) charge = '100%';
        else if (v >= 9.2) charge = '75%';
        else if (v >= 8.8) charge = '50%';
        else if (v >= 8.4) charge = '25%';
        else charge = '0%';
        break;
      default:
        charge = t.unknown;
    }

    setEstimatedCharge(charge);
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
          className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
            isDarkMode 
              ? 'bg-gray-700 text-white border-gray-600 focus:ring-green-500' 
              : 'bg-white text-gray-700 border-gray-300 focus:ring-green-500'
          }`}
        />
        <select
          value={batteryType}
          onChange={(e) => setBatteryType(e.target.value)}
          className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
            isDarkMode 
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
          className={`w-full p-2 text-white rounded transition duration-300 ${
            isDarkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'
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

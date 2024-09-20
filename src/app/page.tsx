'use client'

import { useState } from 'react';

export default function Home() {
  const [voltage, setVoltage] = useState('');
  const [batteryType, setBatteryType] = useState('');
  const [estimatedCharge, setEstimatedCharge] = useState('');

  const estimateCharge = () => {
    // 这里添加电量估算逻辑
    // 这只是一个简单的示例，实际逻辑需要根据不同电池类型进行调整
    let charge = '';
    const v = parseFloat(voltage);

    switch(batteryType) {
      case 'alkaline':
        if (v >= 1.5) charge = '100%';
        else if (v >= 1.4) charge = '50%';
        else if (v >= 1.3) charge = '30%';
        else charge = '低于30%';
        break;
      case 'lithium':
        if (v >= 4.2) charge = '100%';
        else if (v >= 3.7) charge = '50%';
        else if (v >= 3.6) charge = '30%';
        else charge = '低于30%';
        break;
      // 添加其他电池类型的逻辑
      default:
        charge = '未知';
    }

    setEstimatedCharge(charge);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">电池电量计算器</h1>
      <div className="w-full max-w-xs">
        <input
          type="number"
          value={voltage}
          onChange={(e) => setVoltage(e.target.value)}
          placeholder="输入电压 (V)"
          className="w-full p-2 mb-4 border rounded"
        />
        <select
          value={batteryType}
          onChange={(e) => setBatteryType(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="">��择电池类型</option>
          <option value="alkaline">碱性电池 (1.5V)</option>
          <option value="lithium">锂离子电池 (3.7V)</option>
          {/* 添加更多电池类型选项 */}
        </select>
        <button
          onClick={estimateCharge}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          估算电量
        </button>
        {estimatedCharge && (
          <p className="mt-4 text-center">
            估计剩余电量: <strong>{estimatedCharge}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

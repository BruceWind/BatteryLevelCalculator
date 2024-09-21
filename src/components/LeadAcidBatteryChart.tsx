'use client';

import React, { useEffect, useRef } from 'react';
import vegaEmbed from 'vega-embed';

const LeadAcidBatteryChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const spec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
        description: 'Lead Acid Battery Voltage Chart',
        width: 400,
        height: 300,
        data: {
          values: [
            { voltage: 11.8, charge: 0 },
            { voltage: 12.0, charge: 25 },
            { voltage: 12.2, charge: 50 },
            { voltage: 12.4, charge: 75 },
            { voltage: 12.7, charge: 100 }
          ]
        },
        mark: {
          type: 'line' as const, // Explicitly cast to the correct type
          point: true
        },
        encoding: {
          x: { field: 'voltage', type: 'quantitative' as const, title: 'Voltage (V)' }, // Cast to the correct type
          y: { field: 'charge', type: 'quantitative' as const, title: 'Charge (%)' } // Cast to the correct type
        }
      };

      vegaEmbed(chartRef.current, spec);
    }
  }, []);

  return <div ref={chartRef} />;
};

export default LeadAcidBatteryChart;

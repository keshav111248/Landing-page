import React from 'react';
import { COMPARISON_DATA } from '../data/landingData';

export const ComparisonTable: React.FC = () => {
  return (
    <div className="comparison-section">
      <div className="section-heading" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="section-badge" style={{ marginInline: 'auto' }}>
          Compare Features
        </div>
        <h2 className="breakdown">Detailed Plan Breakdown</h2>
      </div>

      <div className="comparison-table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature / Module</th>
              <th>Starter</th>
              <th className="growth">Growth</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody className="comparison-table-body">
            {COMPARISON_DATA.map((row, idx) => (
              <tr key={idx}>
                <td className="feature-name">{row.featureName}</td>
                <td>
                  {row.starterType === 'check' ? (
                    <span className="feature-active">✓</span>
                  ) : row.starterType === 'dash' ? (
                    <span className="feature-inactive">—</span>
                  ) : (
                    row.starter
                  )}
                </td>
                <td className="growth">
                  {row.growthType === 'check' ? (
                    <span className="feature-active">✓</span>
                  ) : row.growthType === 'dash' ? (
                    <span className="feature-inactive">—</span>
                  ) : (
                    row.growth
                  )}
                </td>
                <td>
                  {row.enterpriseType === 'check' ? (
                    <span className="feature-active">✓</span>
                  ) : row.enterpriseType === 'dash' ? (
                    <span className="feature-inactive">—</span>
                  ) : (
                    row.enterprise
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

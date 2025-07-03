import  { useEffect, useState } from 'react';


const statsData = [
  { label: 'VARIETIES OF COFFEE', target: 250 },
  { label: 'HOURS OF TESTING', target: 123 },
  { label: 'COFFEE MARKETS', target: 321 },
  { label: 'COFFEE BRANDS', target: 220 },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, index) => {
      return setInterval(() => {
        setCounts(prev => {
          const updated = [...prev];
          if (updated[index] < stat.target) {
            updated[index] += 1;
          }
          return updated;
        });
      }, 10);
    });

    // Clear intervals after completion
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="stats-section">
      {statsData.map((stat, index) => (
        <div className="stat-item" key={index}>
          <h2 className="number">{counts[index]}</h2>
          <h3 className="label">{stat.label}</h3>
          <p className="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean</p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;

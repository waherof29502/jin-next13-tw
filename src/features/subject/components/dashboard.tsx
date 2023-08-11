import { Card, Metric, Text } from '@tremor/react';

import dataBarbie from '@/data/movie-barbie.json';
import dataOppenheimer from '@/data/movie-oppenheimer.json';
const Dashboard = () => {
  return (
    <div className="text-left">
      <div className="grid grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-slate-100">Barbie</h2>
          <Card className="max-w-xs mx-auto mb-6" decoration="top" decorationColor="indigo">
            <Text>Revenue</Text>
            <Metric>${dataBarbie.global_revenue}</Metric>
          </Card>
          <Card className="max-w-xs mx-auto mb-6" decoration="top" decorationColor="indigo">
            <Text>Budget</Text>
            <Metric>${dataBarbie.budget}</Metric>
          </Card>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Oppenheimer</h2>
          <Card className="max-w-xs mx-auto mb-6" decoration="top" decorationColor="indigo">
            <Text>Revenue</Text>
            <Metric>${dataOppenheimer.global_revenue}</Metric>
          </Card>
          <Card className="max-w-xs mx-auto mb-6" decoration="top" decorationColor="indigo">
            <Text>Budget</Text>
            <Metric>${dataOppenheimer.budget}</Metric>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

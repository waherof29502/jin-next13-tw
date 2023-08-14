import { Card, DonutChart, LineChart, Metric, Text, Title } from '@tremor/react';

import dataBarbie from '@/data/movie-barbie.json';
import dataOppenheimer from '@/data/movie-oppenheimer.json';
function addCommasToNumber(number: number) {
  let numString = number.toString();
  numString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return numString;
}
const chartData = dataBarbie.domestic_daily.map(({ revenue, date }) => {
  const oppenheimer = dataOppenheimer.domestic_daily.find((opp) => opp.date === date);
  return {
    date,
    Barbie: revenue,
    Oppenheimer: oppenheimer?.revenue
  };
});

const Dashboard = () => {
  return (
    <div className="text-left">
      <div className="grid grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-slate-100">Barbie</h2>
          <Card className="max-w-xs mx-auto mb-6" decoration="top" decorationColor="indigo">
            <Text>Revenue</Text>
            <Metric>${addCommasToNumber(dataBarbie.global_revenue)}</Metric>
          </Card>
          <Card className="max-w-xs mx-auto mb-6" decoration="top" decorationColor="indigo">
            <Text>Budget</Text>
            <Metric>${dataBarbie.budget}</Metric>
          </Card>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">Oppenheimer</h2>
          <div className="grid grid-cols-2 gap-12">
            <div className="p-10 ">
              <img src={dataOppenheimer.poster_path} alt="Poster" />
            </div>

            <div>
              <DonutChart
                className="text-2xl font-bold w-24 h-24 mt-6 mb-8"
                data={[
                  {
                    name: false,
                    userScore: dataOppenheimer.vote_average
                  },
                  {
                    name: false,
                    userScore: 10 - dataOppenheimer.vote_average
                  }
                ]}
                category="userScore"
                index="name"
                colors={['green', 'slate']}
                label={`${(dataOppenheimer.vote_average * 10).toFixed()}%`}
              />
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
      </div>
      <div className="mt-2">
        <Card>
          <Title>Domestic daily</Title>
          <LineChart
            className="mt-6"
            data={chartData}
            index="year"
            categories={['Barbie', 'Oppenheimer']}
            colors={['pink', 'gray']}
            valueFormatter={addCommasToNumber}
            yAxisWidth={120}
          />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

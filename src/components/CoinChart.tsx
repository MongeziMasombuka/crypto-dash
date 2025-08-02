import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import type { ChartData } from "chart.js";
import "chartjs-adapter-date-fns";
import Spinner from "./Spinner";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale
);

type PricePoint = { x: number; y: number };

const API_URL = import.meta.env.VITE_COIN_API_URL;

const CoinChart = ({ coinId }: { coinId: string }) => {
  const [chartData, setChartData] = useState<ChartData<
    "line",
    PricePoint[]
  > | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchPrices = async () => {
        const res = await fetch(
          `${API_URL}/${coinId}/market_chart?vs_currency=usd&days=7`
        );

        const data = await res.json();

        const prices = data.prices.map((price: [number, number]) => ({
          x: price[0],
          y: price[1],
        }));

        setChartData({
          datasets: [
            {
              label: "Price (USD)",
              data: prices,
              fill: true,
              borderColor: "#007bff",
              backgroundColor: "rgba(0, 123, 255, 0.1)",
              pointRadius: 0,
              tension: 0.3,
            },
          ],
        });
      };

      fetchPrices();
    } catch (error) {
      console.error("Error fetching chart data:", error);
    } finally {
      setLoading(false);
    }
  }, [coinId]);

  if (loading) return <Spinner color="white" />;
  if (!chartData) return <Spinner color="white" />;

  return (
    <div style={{ marginTop: "30px" }}>
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: { mode: "index", intersect: false },
          },
          scales: {
            x: {
              type: "time",
              time: {
                unit: "day",
              },
              ticks: {
                autoSkip: true,
                maxTicksLimit: 7,
              },
            },
            y: {
              ticks: {
                callback: (value) => `$${value.toLocaleString()}`,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default CoinChart;

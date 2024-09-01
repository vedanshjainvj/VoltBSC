import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const tokenomicsData = [
    {
      fund: "Private Sale",
      allocation: 15,
      token: "66,000,000",
      imgSrc: "https://bitcoinminetrix.com/assets/images/ellipse-darker.svg",
    },
    {
      fund: "Affilate & Stacking",
      allocation: 30,
      token: "132,000,000",
      imgSrc: "https://bitcoinminetrix.com/assets/images/ellipse-dark.svg",
    },
    {
      fund: "Development & Core Charity",
      allocation: 10,
      token: "44,000,000", 
      imgSrc: "https://bitcoinminetrix.com/assets/images/ellipse-light.svg",
    },
    {
      fund: "Public Exchange Listing",
      allocation: 30,
      token: "32,000,000",
      imgSrc: "https://bitcoinminetrix.com/assets/images/ellipse-lighter.svg",
    },
    {
      fund: "Creator",
      allocation: 5,
      token: "22,000,000",
      imgSrc: "https://bitcoinminetrix.com/assets/images/ellipse-lighter.svg",
    },
  ];

  const data = {
    labels: tokenomicsData.map((item) => item.fund),
    datasets: [
      {
        label: "Allocation (%)",
        data: tokenomicsData.map((item) => item.allocation),
        backgroundColor: [
          "#ff9431", // Original color
          "rgba(255, 148, 49, 0.8)", // Slightly lighter
          "rgba(255, 148, 49, 0.6)", // Even lighter
          "rgba(255, 148, 49, 0.4)", // Lightest
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataIndex = tooltipItem.dataIndex;
            const allocation = tokenomicsData[dataIndex].allocation;
            const token = tokenomicsData[dataIndex].token;
            return `${allocation}% - ${token} tokens`;
          },
        },
      },
      // Custom plugin to draw text in the center
      beforeDraw: function (chart) {
        const ctx = chart.ctx;
        ctx.save();
        const centerX = chart.getDatasetMeta(0).data[0].x;
        const centerY = chart.getDatasetMeta(0).data[0].y;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Draw "Total Supply"
        ctx.font = "bold 24px Arial";
        ctx.fillText("4,000,000,000", centerX, centerY - 10);

        // Draw "Total Supply" label
        ctx.font = "bold 16px Arial";
        ctx.fillText("Total Supply", centerX, centerY + 20);

        ctx.restore();
      },
    },
    cutout: "70%",
    hover: {
      mode: "nearest",
      onHover: function (event, chartElement) {
        event.native.target.style.cursor = chartElement.length
          ? "pointer"
          : "default";
      },
    },
    animation: {
      animateScale: true, // Enable scale animation
    },
  };

  return (
    <div className="max-w-md flex items-center justify-center mx-auto relative">
      <Doughnut data={data} options={options} />
      <p className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="block text-lg font-semibold">Total Supply</span>
        <span className="block text-2xl font-bold">44,000,000</span>
      </p>
    </div>
  );
};

export default DonutChart;

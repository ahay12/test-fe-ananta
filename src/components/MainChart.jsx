import { Bar, Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import CalendarAppointments from "./Calendar";

Chart.register(CategoryScale);

export default function MainChart() {
    const doughnutData = {
        labels: ["Dental", "Internist", "Neurologist"],
        datasets: [
            {
                data: [120, 249, 165],
                backgroundColor: ["#3B82F6", "#6366F1", "#F87171"], // Warna untuk tiap bagian
                hoverBackgroundColor: ["#60A5FA", "#818CF8", "#FCA5A5"],
                borderWidth: 2,
                borderColor: "#ffff",
                cutout: "80%",
                borderRadius: 8,
            },
        ],
    }

    const doughnutOptions = {
        plugins: {
            legend: {
                display: false,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    }

    const barData = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
            {
                label: "Hospitalized Patients",
                data: [700, 400, 600, 300, 500, 700, 300, 400, 500, 650, 400, 700],
                backgroundColor: "#6366F1",
                borderRadius: 8,
            },
            {
                label: "Outpatient Care",
                data: [800, 500, 700, 600, 900, 800, 400, 700, 800, 850, 540, 800],
                backgroundColor: "#A5B4FC",
                borderRadius: 8,

            },
        ],
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        barPercentage: 0.9,
        plugins: {
            legend: {
                position: "top",
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                stacked: true,
                title: {
                    display: true,
                    color: "#4B5563",
                    font: {
                        size: 14,
                        weight: "bold",
                    },
                },
            },
            y: {
                ticks: {
                    min: 0,
                    max: 1000,
                    stepSize: 200
                },
                suggestedMin: 0,
                suggestedMax: 1000,
                stepSize: 200,
                title: {
                    display: true,
                    color: "#4B5563",
                    font: {
                        size: 14,
                        weight: "bold",
                    },
                },
                border: {
                    display: false,
                    dash: [5, 5],
                },
                grid: {
                    color: "#E5E7EB",

                },
            },
        },
    };

    return (
        <div className="absolute top-56 w-full mx-2 flex lg:flex-row flex-col lg:-ml-16 gap-y-5 items-center justify-center mt-10">
            {/* Card Bar */}
            <div className="lg:w-[55%] w-[95%] lg:space-x-0 space-y-4 text-xs bg-white rounded-2xl border p-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="material-symbols-outlined text-indigo-600">groups</span>
                        <h1 className="lg:text-xl text-lg font-semibold text-gray-800 ml-2">Patient Overview</h1>
                    </div>
                    <select className="p-2 px-4 rounded-lg text-gray-700 border border-gray-300">
                        <option value="Monthly">Monthly</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Daily">Daily</option>
                    </select>
                </div>
                {/* Custom Legends */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-6">
                        <div className="text-left">
                            <p className="lg:text-sm text-xs text-gray-500">Total patients</p>
                            <h3 className="lg:text-2xl text-xl font-semibold text-gray-900">839</h3>
                        </div>
                        <div className="text-left">
                            <div className="flex items-center space-x-2">
                                <span className="w-1 h-3 bg-[#6366F1] rounded-lg" />
                                <p className="lg:text-sm text-xs text-gray-500">Avg. Hospitalized patients</p>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900">283</h3>
                        </div>
                        <div className="text-left">
                            <div className="flex items-center space-x-2">
                                <span className="w-1 h-3 bg-[#A5B4FC] rounded-lg" />
                                <p className="lg:text-sm text-xs text-gray-500">Avg. Outpatient care</p>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900">421</h3>
                        </div>
                    </div>
                </div>
                {/* Chart */}
                <div className="mt-6">
                    <Bar data={barData} options={barOptions} style={{ width: '100%', height: '360px' }} />
                </div>
            </div>
            {/* Calendar */}
            <CalendarAppointments />
            {/* Card Medicine Supplies */}
            <div className="lg:absolute top-[510px] lg:w-[25%] w-[95%] bg-white rounded-2xl lg:-ml-[456px] border p-6 lg:mt-10">
                <div className="flex justify-between items-center">
                    <div className="flex items-center py-4  ">
                        <span className="material-symbols-outlined" style={{ color: "#12B76A" }}>pill</span>
                        <h3 className="text-lg font-semibold">Medicine Supplies</h3>
                    </div>
                    <div>
                        <button>
                            <span className="material-symbols-rounded">more_horiz</span>
                        </button>
                    </div>
                </div>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th className="border-b py-2">Name</th>
                            <th className="border-b py-2">Stock</th>
                            <th className="border-b py-2">Last Month</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2">Paracetamol</td>
                            <td className="py-2">140</td>
                            <td className="">
                                <div className="flex items-center">
                                    <span className=" text-red-500 text-sm border border-red-400 bg-red-100 rounded-full px-1 font-semibold">
                                        <span className="material-symbols-rounded rotate-180" style={{ color: "#ef4444", fontSize: "15px" }}>
                                            arrow_upward
                                        </span>
                                        2.5%
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2">Anastrozole</td>
                            <td className="py-2">123</td>
                            <td className="">
                                <div className="flex items-center">
                                    <span className=" text-[#12B76A] text-sm border border-[#A6F4C5] bg-[#ECFDF3] rounded-full px-1 font-semibold">
                                        <span className="material-symbols-rounded" style={{ color: "#12B76A", fontSize: "15px" }}>
                                            arrow_upward
                                        </span>
                                        2.5%
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2">Amoxicillin</td>
                            <td className="py-2">80</td>
                            <td className="">
                                <div className="flex items-center">
                                    <span className=" text-red-500 text-sm border border-red-400 bg-red-100 rounded-full px-1 font-semibold">
                                        <span className="material-symbols-rounded rotate-180" style={{ color: "#ef4444", fontSize: "15px" }}>
                                            arrow_upward
                                        </span>
                                        2.5%
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2">Bisoprolol</td>
                            <td className="py-2">60</td>
                            <td className="">
                                <div className="flex items-center">
                                    <span className=" text-[#12B76A] text-sm border border-[#A6F4C5] bg-[#ECFDF3] rounded-full px-1 font-semibold">
                                        <span className="material-symbols-rounded" style={{ color: "#12B76A", fontSize: "15px" }}>
                                            arrow_upward
                                        </span>
                                        2.5%
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2">Colidin</td>
                            <td className="py-2">54</td>
                            <td className="">
                                <div className="flex items-center">
                                    <span className=" text-red-500 text-sm border border-red-400 bg-red-100 rounded-full px-1 font-semibold">
                                        <span className="material-symbols-rounded rotate-180" style={{ color: "#ef4444", fontSize: "15px" }}>
                                            arrow_upward
                                        </span>
                                        2.5%
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Card Top 3 clinic */}
            <div className="lg:absolute lg:space-x-0 space-y-4 top-[510px] lg:w-[28%] w-[95%] bg-white rounded-2xl lg:ml-96 border p-6 lg:mt-10">
                <div className="flex items-center justify-between">
                    <div className="flex">
                        <span className="material-symbols-outlined" style={{ color: 'red' }}>home_health</span>
                        <h1>Top 3 in-demand clinics</h1>
                    </div>
                    <span className="material-symbols-rounded">more_horiz</span>
                </div>
                <div className="relative">
                    {/* Chart */}
                    <div>
                        <Doughnut data={doughnutData} options={doughnutOptions} style={{ width: '100%', height: '100%', position: 'relative', zIndex: '20' }} />
                    </div>
                    {/* Label Tengah */}
                    <div className="absolute z-10 inset-0 flex flex-col items-center justify-center">
                        <p>Total patient</p>
                        <h4 className="text-2xl font-bold text-gray-900">534</h4>
                        <p className="text-sm text-gray-500">This month</p>
                    </div>
                </div>
                <div className="mt-6 flex justify-center gap-3 items-center">
                    <div className="flex flex-col items-center px-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <p className="text-sm font-medium text-gray-900">120</p>
                        <p className="text-xs text-gray-500">Dental</p>
                    </div>
                    <div className="flex flex-col items-center border-x-2 px-2">
                        <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                        <p className="text-sm font-medium text-gray-900">249</p>
                        <p className="text-xs text-gray-500">Internist</p>
                    </div>
                    <div className="flex flex-col items-center px-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <p className="text-sm font-medium text-gray-900">165</p>
                        <p className="text-xs text-gray-500">Neurologist</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

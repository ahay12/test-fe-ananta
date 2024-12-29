// eslint-disable-next-line react/prop-types
const Card = ({ title, icon, count, count2, percentage, colorText, colorIcon1, colorIcon2, bgColor, classIcon }) => {
    return (
        <div className="lg:w-72 w-auto sm:w-60 lg:h-40 h-auto border rounded-2xl p-4 text-sm space-y-4 flex-shrink-0">
            {/* Head */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <span className="material-symbols-outlined text-lg" style={{ color: colorIcon1 }}>{icon}</span>
                    <h4 className="text-base font-medium">{title}</h4>
                </div>
                <div>
                    <button>
                        <span className="material-symbols-rounded text-gray-500">more_horiz</span>
                    </button>
                </div>
            </div>
            {/* Count */}
            <div>
                <h1 className="text-3xl font-bold">
                    {count} <span className="text-gray-400 text-sm -ml-2">{count2}</span>
                </h1>
            </div>
            {/* Bottom */}
            <div className="flex items-center justify-between space-x-2">
                <div>
                    <p className="text-gray-500 text-xs sm:text-sm">Compare with last month</p>
                </div>
                <div className="rounded-full p-1" style={{ backgroundColor: bgColor }}>
                    <div className="m-1 flex items-center justify-center space-x-1">
                        <span className={`material-symbols-rounded ${classIcon}`} style={{ color: colorIcon2 }}>
                            arrow_upward
                        </span>
                        <p className="text-xs sm:text-sm font-semibold" style={{ color: colorText }}>{percentage}</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default function CardStatistics() {
    return (
        <div className="absolute top-20 lg:w-auto w-full px-3 lg:px-8 lg:ml-[248px]">
            <div className="flex overflow-x-auto lg:overflow-x-hidden no-scrollbar gap-4 justify-start lg:justify-start">
                {/* Card 1 */}
                <Card
                    title="Overall Visitor"
                    icon="group"
                    count="1,478"
                    percentage="15%"
                    colorIcon1="#9E77ED"
                    colorIcon2="#12B76A"
                    colorText="#12B76A"
                    bgColor="#ECFDF3"
                />
                {/* Card 2 */}
                <Card
                    title="Total doctors"
                    icon="stethoscope"
                    count="210"
                    percentage="2.5%"
                    classIcon="rotate-180"
                    colorIcon1="#15B79E"
                    colorIcon2="#F04444"
                    colorText="#F04444"
                    bgColor="#FDEDEC"
                />
                {/* Card 3 */}
                <Card
                    title="Book appointment"
                    icon="medical_services"
                    count="321"
                    percentage="3.5%"
                    colorIcon1="#2E90FA"
                    colorIcon2="#12B76A"
                    colorText="#12B76A"
                    bgColor="#ECFDF3"
                />
                {/* Card 4 */}
                <Card
                    title="Room availability"
                    icon="bed"
                    count="213"
                    count2="/335"
                    percentage="1.5%"
                    colorIcon1="#D444F1"
                    colorIcon2="#F04444"
                    colorText="#F04444"
                    bgColor="#FDEDEC"
                />
            </div>
        </div>
    );
}

// May 1, 2026 = Friday (index 5: Sun=0 … Sat=6)
const DAYS = ["일", "월", "화", "수", "목", "금", "토"];
const START_COL = 5;
const TOTAL_DAYS = 31;
const WEDDING_DAY = 2;

const cells: (number | null)[] = [
  ...Array<null>(START_COL).fill(null),
  ...Array.from({ length: TOTAL_DAYS }, (_, i) => i + 1),
];
while (cells.length % 7 !== 0) cells.push(null);

export default function WeddingCalendar() {
  return (
    <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-5">
      <p className="text-center text-xs tracking-[0.2em] text-gray-400">2026 · MAY</p>
      <div className="mt-4 grid grid-cols-7 text-center">
        {DAYS.map((d, i) => (
          <span
            key={d}
            className={`pb-3 text-xs font-semibold ${
              i === 0 ? "text-rose-400" : i === 6 ? "text-blue-400" : "text-gray-400"
            }`}
          >
            {d}
          </span>
        ))}

        {cells.map((day, i) => {
          if (day === null) return <div key={i} />;
          const col = i % 7;
          const isWedding = day === WEDDING_DAY;
          const baseColor =
            col === 0 ? "text-rose-400" : col === 6 ? "text-blue-400" : "text-gray-700";

          return (
            <div key={i} className="flex items-center justify-center py-1">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm ${
                  isWedding ? "bg-rose-400 font-bold text-white" : baseColor
                }`}
              >
                {day}
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-3 text-center text-xs text-rose-400">♥ 2일 · 토요일 · 오후 5시</p>
    </div>
  );
}

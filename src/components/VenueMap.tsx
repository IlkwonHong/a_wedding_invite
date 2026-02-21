const KAKAO_URL =
  "https://map.kakao.com/link/search/서울대학교 엔지니어하우스";
const NAVER_URL =
  "https://map.naver.com/p/search/서울대학교%20엔지니어하우스";

export default function VenueMap() {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100">
      {/* Map placeholder */}
      <div
        className="relative flex h-44 items-center justify-center bg-stone-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, #c8c5c0 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          {/* Location pin */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-10 w-10 text-rose-400 drop-shadow"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.761-5.17 3.761-9.319C20.053 5.053 16.45 2 12 2S3.947 5.053 3.947 8.009c0 4.149 1.817 7.24 3.761 9.319a19.58 19.58 0 002.685 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
            엔지니어하우스 310동
          </span>
        </div>
      </div>

      {/* Info + buttons */}
      <div className="p-5">
        <p className="font-medium text-gray-800">서울대학교 엔지니어하우스</p>
        <p className="mt-1 text-sm text-gray-500">
          서울특별시 관악구 관악로 1 · 310동
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl bg-[#FEE500] py-3 text-sm font-semibold text-gray-800"
          >
            카카오맵
          </a>
          <a
            href={NAVER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl bg-[#03C75A] py-3 text-sm font-semibold text-white"
          >
            네이버맵
          </a>
        </div>
      </div>
    </div>
  );
}

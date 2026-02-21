const APPS = [
  { name: "네이버지도", url: "https://map.naver.com/p/search/서울대학교%20엔지니어하우스" },
  { name: "카카오내비", url: "https://map.kakao.com/link/to/서울대학교엔지니어하우스,37.4500,126.9518" },
  { name: "티맵", url: "tmap://route?goalname=서울대학교+엔지니어하우스&goaly=37.4500&goalx=126.9518" },
];

export default function VenueMap() {
  return (
    <div className="mt-6">
      <p className="font-medium text-gray-800">서울대학교 엔지니어하우스</p>
      <p className="mt-1 text-sm text-gray-500">서울특별시 관악구 관악로 1 · 310동</p>

      <div className="mt-5 flex divide-x divide-gray-200 rounded-2xl bg-gray-100 overflow-hidden">
        {APPS.map((app) => (
          <a
            key={app.name}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center py-4 text-xs text-gray-600 active:bg-gray-200"
          >
            {app.name}
          </a>
        ))}
      </div>
    </div>
  );
}

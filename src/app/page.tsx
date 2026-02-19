import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/banner.jpeg"    
          alt="Wedding photo"
          fill
          priority
          className="object-cover"
        />
        {/* 어두운 오버레이 (글자 잘 보이게) */}
        <div className="absolute inset-0 bg-black/30" />

        {/* 텍스트 */}
        <div className="absolute inset-0 flex items-end justify-center p-8">
          <div className="text-center text-white">
            <p className="text-sm tracking-[0.25em] opacity-90">WEDDING INVITE</p>
            <h1 className="mt-2 text-4xl font-semibold">Ilkwon & Yihyun</h1>
            <p className="mt-3 text-sm opacity-90">2026. 05. 02 SAT · 17:00</p>
          </div>
        </div>
      </section>

      {/* 아래 컨텐츠 자리 */}
      <section className="mx-auto max-w-md px-6 py-10">
        <h2 className="text-lg font-semibold">초대합니다</h2>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          소중한 분들을 모시고
          <br />
          저희의 새로운 시작을 함께하고 싶습니다.
        </p>
      </section>
    </main>
  );
}

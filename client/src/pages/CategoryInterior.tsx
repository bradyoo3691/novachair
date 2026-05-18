export default function CategoryInterior() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#1C1C1E] py-14">
        <div className="container">
          <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-3">INTERIOR CHAIR</p>
          <h1 className="nova-heading text-4xl md:text-5xl text-[#F5F0EB] mb-4">인테리어 의자</h1>
          <p className="text-[#888] text-base max-w-xl leading-relaxed">
            공간을 완성하는 인테리어 의자 라인업입니다.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container flex flex-col items-center justify-center text-center">
          <p className="text-6xl mb-6">🪑</p>
          <h2 className="nova-heading text-3xl text-[#1C1C1E] mb-4">제품 준비중</h2>
          <p className="text-[#888] text-base">곧 새로운 인테리어 의자 라인업을 선보일 예정입니다.</p>
        </div>
      </section>
    </main>
  );
}

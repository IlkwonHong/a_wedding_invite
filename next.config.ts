import type { NextConfig } from "next";

const repo = "a_wedding_invite";

const nextConfig: NextConfig = {
  output: "export",          // ✅ 정적 export
  images: { unoptimized: true }, // ✅ GitHub Pages에선 next/image 최적화 서버가 없음
  basePath: `/${repo}`,      // ✅ /a_wedding_invite 하위 경로로 서비스
  assetPrefix: `/${repo}/`,  // ✅ 정적 자산 경로 깨짐 방지
  trailingSlash: true,       // ✅ /page/ 형태로 export 안정화
};

export default nextConfig;

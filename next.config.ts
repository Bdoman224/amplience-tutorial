import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en-US", "hr"],
    defaultLocale: "en-US",
    // DOESNT LOOK USEABLE ON LOCALHOST
    domains: [
      {
        domain: "example.com",
        defaultLocale: "en-US",
      },
      {
        domain: "example.hr",
        defaultLocale: "hr",
      },
    ],
  },
};

export default nextConfig;

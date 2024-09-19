import baseConfig from "@rgbadmin/eslint-config/base";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    // rules: {
    //   "@typescript-eslint/no-unsafe-assignment": 0,
    // },
    ignores: ["dist/**"],
  },
  ...baseConfig,
];

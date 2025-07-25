import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [

  ...compat.extends("next/core-web-vitals"),

  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    rules: {
      "@next/next/no-img-element": "off", // disable warning for <img>
      "react/jsx-key": "off",             // disable missing key error
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;

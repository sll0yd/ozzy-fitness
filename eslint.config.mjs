import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Compatibility for ESM (ES Modules) to get directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a compatibility layer for existing ESLint configurations
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESLint configuration for a Next.js project
const eslintConfig = [
  // Extend Next.js recommended configurations
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Additional configuration to disable specific rules
  ...compat.config({
    rules: {
      // Disable rule preventing unescaped entities in React
      'react/no-unescaped-entities': 'off',
      
      // Disable Next.js custom font warning
      '@next/next/no-page-custom-font': 'off',
      
      // You can add more rule overrides here as needed
      // Example: 
      // 'no-unused-vars': 'warn',
    },
  }),
];

export default eslintConfig;
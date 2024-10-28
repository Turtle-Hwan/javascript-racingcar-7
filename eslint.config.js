import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,

  {
	  // 적용할 파일 설정
    files: ['src/**/*.js'],
    // 적용할 규칙 설정
     rules: {
      // 들여쓰기 깊이 제한
      'max-depth': ['error', 2],
      // 함수의 매개변수 개수 제한
      'max-params': ['error', 3],
      // 함수의 길이 제한
      'max-lines-per-function': ['error', { max: 15 }],
    },
  },
];
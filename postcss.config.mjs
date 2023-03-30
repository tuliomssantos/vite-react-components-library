import postcssPresetEnv from 'postcss-preset-env'

export default {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true,
      },
      autoprefixer: {
        grid: true,
        overrideBrowserslist: ['last 2 versions', 'ie >= 11'],
      },
    }),
  ],
}

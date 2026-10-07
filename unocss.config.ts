import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  safelist: [
    'neversink-diracx-scheme',
    'ns-c-dx-scheme',
    'neversink-diracx-light-scheme',
    'ns-c-dx-lt-scheme',
    'neversink-diracx-green-scheme',
    'ns-c-dx-gr-scheme',
    'neversink-diracx-green-light-scheme',
    'ns-c-dx-gr-lt-scheme',
    'diracx-accent',
    'diracx-green-accent',
    'bg-diracx-gradient',
    'diracx-logo',
    'section-diracx',
    'logos-grafana',
    'logos-mysql',
    'logos-postgresql',
    'logos-opensearch',
    'simple-icons-duckdb',
    'simple-icons-amazons3',
    'simple-icons-opentelemetry',
  ],
  transformers: [transformerDirectives()],
})

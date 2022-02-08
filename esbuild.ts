import { build, BuildOptions } from 'esbuild'

const options: BuildOptions = {
  entryPoints: ['./src/http-client.ts'],
  platform: 'node',
  target: 'node14',
  external: ['undici'],
  minify: true,
  bundle: true,
  outfile: './dist/http-client.js',
}

build(options).catch(err => {
  process.stderr.write(err.stderr)
  process.exit(1)
})

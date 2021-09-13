/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static'

const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    // paths: { // uncomment when deploying to GitHub
    //   base: '/bill-split'
    // },
    appDir: 'internal'
  }
}

export default config
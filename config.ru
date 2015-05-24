use Rack::Static,
  urls: ['/'],
  index: 'index.html',
  root: 'public'

run -> (run) {
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },

    File.open('public/index.html', File::RDONLY)
  ]
}

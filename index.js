addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    // 将这里的 'https://your-destination-url.com' 替换为你想要跳转的目标网址
    const destinationURL = 'https://www.lsepcn.com'
  
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>跳转中...</title>
        <meta http-equiv="refresh" content="0;url=${destinationURL}">
      </head>
      <body>
        <p>正在跳转到 <a href="${destinationURL}">${destinationURL}</a>...</p>
      </body>
      </html>
    `
  
    return new Response(html, {
      headers: { 'Content-Type': 'text/html' },
      status: 200,
    })
  }

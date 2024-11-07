/app
  /article
    /components
    /store
    /types
    /services
      articles.service.ts
    article.routes
  /globalFeed
    /components
    globalFeed.routes
  /shared
    /components
      /backendErrorMessages
        backendErrorMessages.component.ts
      /popularTag
        popular.component.ts
    /types
    /store
    /services
    /types
      article.interface.ts
    /services
      articles.service.ts
  app.routes
main.ts

### Structure/PROJECT_STRUCTURE

endpoind/api/articles


articles: [
{
id: string,
slug: string,
title: string,
body: string [256-2000 syntax]
description: [256-2000 syntax]
favoriteCount: number [Default 0]
cretatedAt: Date
updatedAt: Date
}
]

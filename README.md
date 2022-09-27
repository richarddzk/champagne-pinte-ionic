# Champagne Pinte StoreFront

## Current Stack
## React + Next.js + TypeScript + Material UI


### How to use

Install it and run:

```sh
npm install
npm run dev
npm run build
npm run start
```

Release Flow

with git flow 

```sh
git flow release start x.x.x
npm run ts-check
npm run lint:fix
npm install
npm ddp
git add .
git commit -m "chore: version x.x.x"
git flow release finish x.x.x -m "release: version x.x.x"
git push --all --follow-tags
Bump package json new version
```
/*
TODO: For each color generate something similar, just map the figma export.
The Figma CSS export of the "Material Theme Builder" is bad to implement. Solving it all by CSS will make implementation much simpler.

Basic idea:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-fg: --color-x;
    --color-bg: --color-y;
  }
  .mc {
    --color-fg: --color-x-m;
    --color-bg: --color-y-m;
  }
  .hc {
    --color-fg: --color-x-h;
    --color-bg: --color-y-h;
  }
}

@media (prefers-color-scheme: light) {
  :root {
    --color-fg: --color-y;
    --color-bg: --color-x;
  }
  .mc {
    --color-fg: --color-y-m;
    --color-bg: --color-x-m;
  }
  .hc {
    --color-fg: --color-y-h;
    --color-bg: --color-x-h;
  }
}
```
*/

;(async () => {
  const file = await Bun.file('./material-theme.json').text()
  console.log(file)
})()

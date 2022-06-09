Hi there!

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

![](https://github.com/andres0ares/bingo/blob/main/public/bingo_prev1.gif)
![](https://github.com/andres0ares/bingo/blob/main/public/bingo_prev2.gif)

## FlowChart

```mermaid
flowchart TB
  home --> cond{select}
  cond --> cr[create room]
  cond --> jr[join room]
  cr --> wp[wait players / start game]
  jr --> ws[wait start game]
  wp --> hd[host display]
  ws --> pd[player display]
  hd --> dw[display winner]
  pd --> dw
  
```

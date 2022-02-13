import { PageTurner } from '@neonfish/page-turner';
import '../node_modules/@neonfish/page-turner/dist/styles.css';
import { pages } from './pages';
import './styles.css';

// The entry point into the game from index.html

const game = new PageTurner({
  settings: {
    containerEl: "#page-turner",
    content: {
      height: "80%",
      top: "10%",
    },
    holdImageSlots: "all",
  },
  pages: pages,
});

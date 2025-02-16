import type { Card, DrawnCard } from '$models/cards';
import { allCards } from '$assets/cards';
import { canvas } from './canvas.svelte';

class DeckState {
  drawPile = $state([...allCards]);
  spread = $state<DrawnCard[]>([]);

  cardsLeft = $derived(this.drawPile.length);
  hasDrawn = $derived(this.drawPile.length != allCards.length);

  constructor() {
    this.shuffle();
  }

  shuffle() {
    const shuffled: Card[] = [];

    while (this.drawPile.length) {
      const randomIndex = Math.floor(Math.random() * this.drawPile.length);
      shuffled.push(...this.drawPile.splice(randomIndex, 1));
    }

    this.drawPile = shuffled;
  }

  async draw(amt: number) {
    for (let x = 0; x < amt; x++) {
      const isReversed = Math.random() > 0.5;
      const card: DrawnCard = { ...this.drawPile.shift()!, isReversed };
      this.spread.push(card);

      canvas.addCard(card);
    }
  }

  reset() {
    this.drawPile = [...allCards];
    this.spread = [];
    this.shuffle();
    canvas.cancel();
  }
}

export const deck = new DeckState();

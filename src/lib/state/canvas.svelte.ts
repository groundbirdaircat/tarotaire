import { allCards, getImageUrl } from '$assets/cards';

const OG_CARD_WIDTH = 300;
const OG_CARD_HEIGHT = 537;

interface UpdateDto {
  t: number;
  innerHeight: number;
  innerWidth: number;
}

class CanvasCard {
  ctx: CanvasRenderingContext2D;
  img = new Image();
  loaded = false;

  scale = 0.25;

  get height() {
    return OG_CARD_HEIGHT * this.scale;
  }

  get width() {
    return OG_CARD_WIDTH * this.scale;
  }

  get isMovingDown() {
    return this.speedY > 0;
  }

  randomScale = 0.1;

  randomX = this.randomScale * Math.random();
  randomY = this.randomScale * Math.random();

  currentX = 0;
  currentY = -this.height;

  speedX = 0.25;
  speedY = 1;

  constructor(ctx: CanvasRenderingContext2D, imagePath: string) {
    this.ctx = ctx;

    this.img.onload = () => (this.loaded = true);
    this.img.src = imagePath;

    const { innerWidth } = window;

    if (Math.random() > 0.5) {
      this.currentX = innerWidth - this.width;
      this.speedX *= -1;
    }
  }

  update({ t, innerHeight, innerWidth }: UpdateDto) {
    if (!this.loaded) return;

    this.currentX += (this.speedX + this.randomX) * t;
    this.currentY += (this.speedY + this.randomY) * t;

    this.speedY += (this.isMovingDown ? 0.02 : 0.025) * t;

    // bounce bottom
    if (this.isMovingDown && this.currentY + this.height > innerHeight) this.speedY *= -1;

    // remove when off screen
    if (this.currentX < 0 - this.width || this.currentX > innerWidth) canvas.removeCard(this);

    // prevent card from going below bottom
    if (this.currentY + this.height > innerHeight) this.currentY = innerHeight - this.height;

    this.draw();
  }

  private draw() {
    this.ctx.drawImage(this.img, this.currentX, this.currentY, this.width, this.height);
  }
}

class CanvasState {
  nextFrame = 0;

  loopId = crypto.randomUUID();

  allCanvasCards: CanvasCard[] = [];

  cancel() {
    this.loopId = crypto.randomUUID();
    canvas.allCanvasCards = [];
  }
  start(ref: HTMLCanvasElement) {
    this.loopId = crypto.randomUUID();
    const currentLoopId = this.loopId;

    const ctx = ref.getContext('2d');
    if (!ctx) return console.log('no ctx');

    const card = allCards[0];
    const imagePath = getImageUrl(card.image)!;

    this.allCanvasCards.push(new CanvasCard(ctx, imagePath));

    let lastD = 0;
    function loop(d: number) {
      if (canvas.loopId != currentLoopId) {
        console.log('break', currentLoopId);
        return;
      }

      const t = d - lastD;
      lastD = d;

      const { innerHeight, innerWidth } = window;

      for (const card of canvas.allCanvasCards) {
        card.update({
          t,
          innerHeight,
          innerWidth
        });
      }

      canvas.nextFrame = requestAnimationFrame(loop);
    }

    console.log('loop started', canvas.loopId);
    requestAnimationFrame(loop);
  }

  removeCard(card: CanvasCard) {
    this.allCanvasCards = this.allCanvasCards.filter(c => c != card);
    console.log('this.allCanvasCards', this.allCanvasCards);
  }
}

export const canvas = new CanvasState();

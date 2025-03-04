import type { DrawnCard } from '$models/cards';
import { getImageUrl } from '$assets/cards';
import { timeout } from '$utils/general';
import { gradientLog } from '$dev/util';

const OG_CARD_WIDTH = 300;
const OG_CARD_HEIGHT = 537;

interface UpdateDto {
  innerHeight: number;
  innerWidth: number;
  t: number;
}

class CanvasCard {
  ctx: CanvasRenderingContext2D;
  img = new Image();
  card: DrawnCard;
  loaded = false;
  hasEnteredView = false;

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

  speedX = 0.4;
  speedY = 1;

  hue = 360 * Math.random();

  constructor(ctx: CanvasRenderingContext2D, card: DrawnCard) {
    this.ctx = ctx;
    this.card = card;

    const imagePath = getImageUrl(card.image)!;
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

    this.hue += t * 0.05;

    const cardBottomY = this.currentY + this.height;
    const cardRightX = this.currentX + this.width;

    if (this.hasEnteredView) {
      // bounce bottom
      if (this.isMovingDown && cardBottomY > innerHeight) this.speedY *= -1;

      // prevent card from going below bottom
      if (cardBottomY > innerHeight) this.currentY = innerHeight - this.height;

      // remove when off screen
      if (cardRightX < 0 || this.currentX > innerWidth) canvas.removeCard(this);
    } else {
      // enter view
      if (cardBottomY > 0 && cardRightX > 0 && this.currentX < innerWidth)
        this.hasEnteredView = true;
    }

    this.draw();
  }

  private draw() {
    this.ctx.filter = `hue-rotate(${this.hue}deg)`;

    if (this.card.isReversed) {
      this.ctx.save();
      this.ctx.translate(this.currentX + this.width / 2, this.currentY + this.height / 2);
      this.ctx.rotate(Math.PI);
      this.ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
      this.ctx.restore();
    } else {
      this.ctx.drawImage(this.img, this.currentX, this.currentY, this.width, this.height);
    }

    this.ctx.filter = 'none';
  }
}

class CanvasState {
  isAnimating = $state(false);
  nextFrame = 0;
  loopId = crypto.randomUUID();
  allCanvasCards: CanvasCard[] = [];
  ctx!: CanvasRenderingContext2D;

  queueCards: DrawnCard[] = [];
  queueRunning = false;
  queueCycleCount = 0;

  runQueue() {
    if (!this.queueCards.length) {
      this.queueRunning = false;
      this.queueCycleCount = 0;
      gradientLog('stopping queue');
      return;
    }

    gradientLog('running queue');
    this.queueRunning = true;
    this.queueCycleCount++;

    !this.isAnimating && this.start();

    const card = this.queueCards.shift()!;
    this.allCanvasCards.push(new CanvasCard(this.ctx, card));

    const waitTime = 400 - this.queueCycleCount * 7 + Math.random() * 200;
    timeout(waitTime).then(this.runQueue.bind(this));
  }

  init(ref: HTMLCanvasElement) {
    const ctx = ref.getContext('2d');
    if (!ctx) throw new Error('no ctx');

    this.ctx = ctx;
  }

  start() {
    this.loopId = crypto.randomUUID();
    const currentLoopId = this.loopId;

    let lastD = 0;

    function loop(d: number) {
      if (canvas.loopId != currentLoopId) {
        canvas.isAnimating = false;
        gradientLog('loop ended: ' + currentLoopId);
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

    gradientLog('loop started: ' + canvas.loopId);
    this.isAnimating = true;
    requestAnimationFrame(loop);
  }

  stop() {
    this.loopId = crypto.randomUUID();
  }

  cancel() {
    this.loopId = crypto.randomUUID();
    canvas.allCanvasCards = [];
    const { innerHeight, innerWidth } = window;
    canvas.ctx?.clearRect(0, 0, innerWidth, innerHeight);
  }

  async addCard(card: DrawnCard) {
    this.queueCards.push(card);

    if (!this.queueRunning) {
      this.runQueue();
    }
  }

  removeCard(card: CanvasCard) {
    this.allCanvasCards = this.allCanvasCards.filter(c => c != card);
    !this.allCanvasCards.length && this.stop();
  }
}

export const canvas = new CanvasState();

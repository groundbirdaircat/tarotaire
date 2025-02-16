import type { Dict } from '$models/general';

export function makeLogObj(init: Dict<boolean>): Dict<boolean> {
  const logObj = { enabled: init._enabled };
  for (const [key, value] of Object.entries(init)) {
    if (key === '_enabled') continue;
    Object.defineProperties(logObj, {
      ['_' + key]: { value },
      [key]: {
        get() {
          return this.enabled && this['_' + key];
        }
      }
    });
  }
  return logObj;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function freeze(object: Dict<any>) {
  Object.freeze(object);
  Object.getOwnPropertyNames(object).forEach(p => {
    const value = object[p];
    if (typeof value === 'object' && value !== null) {
      freeze(value);
    }
  });
}

export function gradientLog(text: string) {
  const split = text.split('');
  const styles: string[] = [];
  let log = '';
  const adj = Math.random() * 140;
  let current = 280 + adj;
  const spread = 120 / split.length;
  split.forEach(letter => {
    log += '%c' + letter;
    current += spread;
    styles.push(`color: hsl(${Math.floor(current)}, 100%, 50%); `);
  });
  console.log(log, ...styles);
}

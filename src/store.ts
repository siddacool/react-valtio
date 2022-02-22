import { derive, devtools } from 'valtio/utils';
import { createStore } from '@satha/core';
import { proxy } from 'valtio';

interface ICounter {
  count: number;
}

const countLocalStorage = createStore('count', 0);

export const counterStore = proxy<ICounter>({
  count: countLocalStorage.get(),
});

export const counterStoreDerived = derive({
  doubled: (get) => get(counterStore).count * 2,
});

const counterStoreUnsub = devtools(counterStore, 'counterStore');

export const doubleCount = () => {
  const newCount = counterStore.count * 2;

  return newCount;
};

export const updateCounter = () => {
  const newCount = counterStore.count + 1;
  counterStore.count = newCount;

  countLocalStorage.set(() => newCount);
};

export const socketMessageStore = proxy({ msg: '' });

export const onMessage = (event: { data: string }) => {
  if (event && event.data) {
    socketMessageStore.msg = event.data;
  }
};

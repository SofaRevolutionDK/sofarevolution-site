type ScrollAmount = {
  hasScrolled: boolean,
  minScroll: number,
  maxScroll: number | null,
  currentScroll: number,
  percent: number
}

export const scrollAmountState = () => {
  const state: ScrollAmount = {
    hasScrolled: false,
    minScroll: 0,
    maxScroll: null,
    currentScroll: 0,
    percent: 0
  }

  return state;
}
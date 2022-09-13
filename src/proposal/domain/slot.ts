export enum SlotType {
  LUNCH = 'lunch',
  DINNER = 'dinner',
}

export type Slot = {
  slot: SlotType;
};
export type Day = {
  date: Date;
};

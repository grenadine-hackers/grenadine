export enum SlotType {
  LUNCH = "lunch",
  DINNER = "dinner",
}

export type Slot = {
  slot: SlotType;
};
export const isLunch = (slotType: SlotType) => slotType === SlotType.LUNCH;
export const isDinner = (slotType: SlotType) => slotType === SlotType.DINNER;

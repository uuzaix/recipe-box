export const formatInput = (ings) => {
  return ings.split(",").map(ing => ing.trim()).filter(ing => ing !== '')
}
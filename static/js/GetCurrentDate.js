export default function currentDate() {
  const date = new Date()

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  // This arrangement can be altered based on how we want the date's format to appear.
  const currentDate = `${year}-${String(month).padStart(2, '0')}-${String(
    day
  ).padStart(2, '0')}`
  return currentDate
}

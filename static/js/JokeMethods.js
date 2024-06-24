import { setData, getData } from 'nuxt-storage/local-storage'
import currentDate from './GetCurrentDate'
export function saveJokeToLocalStorage(joke) {
  const allFavJokes = getData('favorite_jokes')
  if (!allFavJokes) {
    return setData(
      'favorite_jokes',
      [{ date: currentDate(), joke }],
      99999999999
    )
  }
  setData(
    'favorite_jokes',
    [...allFavJokes, { date: currentDate(), joke }],
    99999999999
  )
}

export async function checkIfJokeIsSaved(joke) {
  const allFavJokes = await getData('favorite_jokes')
  if (!allFavJokes) return false
  const element = allFavJokes.find((element) => element.joke === joke)
  return element !== undefined
}

export async function getAllJokes() {
  const allFavJokes = await getData('favorite_jokes')
  // Sortowanie wymaga parsowania do type date
  if (allFavJokes)
    allFavJokes.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
  return allFavJokes
}

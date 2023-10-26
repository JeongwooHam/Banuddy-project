import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

export const getDiff = (date: string) => {
  const today = dayjs()
  const diff = dayjs.duration(today.diff(date))

  const yearDif: number = parseInt(diff.format('Y'))
  const monthDif: number = parseInt(diff.format('M'))
  const dateDif: number = parseInt(diff.format('D'))

  if (yearDif > 0) {
    return `${yearDif}년`
  } else if (monthDif > 0) {
    return `${monthDif}달`
  } else if (dateDif > 0) {
    return `${dateDif}일`
  } else {
    return '하루'
  }
}

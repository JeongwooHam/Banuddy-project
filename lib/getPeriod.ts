import moment from 'moment'
import 'moment/locale/ko'

const getPeriod = (date: string, type: string) => moment(date, type).fromNow()

export default getPeriod

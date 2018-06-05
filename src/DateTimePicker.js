import React, {PureComponent} from 'react'
import Picker from 'react-datetime-picker'
import moment from 'moment-timezone'
import './DateTimePicker.css'

export default class DateTimePicker extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { value: this.props.value }
    this.userTimeZone = moment.tz.guess()
  }

  render() {
    const timeZone = this.props.timeZone || this.userTimeZone
    const {value} = this.state
    const localValue = this.fudgeTime(value, timeZone)

    return (
      <div>
        <div><div className="DateTimePicker__timeZone">{timeZone}</div></div>
        <Picker
          calendarType="US"
          {...this.props}
          value={localValue}
          onChange={this.onChange}
        />
      </div>
    )
  }

  onChange = fudgedValue => {
    const timeZone = this.props.timeZone || this.userTimeZone
    const value = this.unfudgeTime(fudgedValue, timeZone)
    this.setState({value})
    this.props.onChange && this.props.onChange(value)
  }

  // These functions convert real times into times fudged such that, when
  // converted into the user's time zone, will appear as the time in the
  // specified time zone. These times are "wrong", but since this component
  // is concerned with showing a date/time picker with times in a time zone
  // other than the user's time zone, this is okay.  We do not leak the fudging
  // of times out of this component, but always accept real times in the value
  // prop, and send real times via the onChange prop handler.
  fudgeTime = (date, tz) => new Date(date.getTime() + this.getFudgeTime(date, tz))
  unfudgeTime = (date, tz) => new Date(date.getTime() - this.getFudgeTime(date, tz))
  getFudgeTime = (date, tz) => {
    if (tz === this.userTimeZone) return 0
    const fudgeMinutes = moment(date).tz(tz).utcOffset() - moment(date).tz(this.userTimeZone).utcOffset()
    return fudgeMinutes * 60000
  }
}

## Date-io adapter for Buddhist Era

This project is a part of date-io for buddhist era

Get more information [here](https://github.com/tarzui/date-fns-be)

## Examples

[!(display as buddhist era)](/assets/display.png)
[!(output value from date picker)](/assets/output.png)

## Install

`npm install @tarzui/date-fns-be`

or

`yarn add @tarzui/date-fns-be`

### Usage example with @mui DatePicker

```js
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@tarzui/date-fns-be';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { format } from 'date-fns';
import { th } from 'date-fns/locale';

export default function MuiDatePickerBuddhistEra() {
  const [value, setValue] = useState(format(new Date(), 'yyyy-MM-dd').toString());
  console.log('value: ', value);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={th}>
      <DatePicker
        label='@tarzui/date-fns-be'
        value={value}
        onChange={(newValue) => {
          console.log('newValue: ', newValue);
          setValue(format(new Date(newValue), 'yyyy-MM-dd').toString());
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
```

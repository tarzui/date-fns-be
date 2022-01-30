"use strict";
exports.__esModule = true;
var addDays_1 = require("date-fns/addDays");
var addSeconds_1 = require("date-fns/addSeconds");
var addMinutes_1 = require("date-fns/addMinutes");
var addHours_1 = require("date-fns/addHours");
var addWeeks_1 = require("date-fns/addWeeks");
var addMonths_1 = require("date-fns/addMonths");
var addYears_1 = require("date-fns/addYears");
var differenceInYears_1 = require("date-fns/differenceInYears");
var differenceInQuarters_1 = require("date-fns/differenceInQuarters");
var differenceInMonths_1 = require("date-fns/differenceInMonths");
var differenceInWeeks_1 = require("date-fns/differenceInWeeks");
var differenceInDays_1 = require("date-fns/differenceInDays");
var differenceInHours_1 = require("date-fns/differenceInHours");
var differenceInMinutes_1 = require("date-fns/differenceInMinutes");
var differenceInSeconds_1 = require("date-fns/differenceInSeconds");
var differenceInMilliseconds_1 = require("date-fns/differenceInMilliseconds");
var eachDayOfInterval_1 = require("date-fns/eachDayOfInterval");
var endOfDay_1 = require("date-fns/endOfDay");
var endOfWeek_1 = require("date-fns/endOfWeek");
var endOfYear_1 = require("date-fns/endOfYear");
var format_1 = require("date-fns/format");
var getHours_1 = require("date-fns/getHours");
var getSeconds_1 = require("date-fns/getSeconds");
var getYear_1 = require("date-fns/getYear");
var isAfter_1 = require("date-fns/isAfter");
var isBefore_1 = require("date-fns/isBefore");
var isEqual_1 = require("date-fns/isEqual");
var isSameDay_1 = require("date-fns/isSameDay");
var isSameYear_1 = require("date-fns/isSameYear");
var isSameMonth_1 = require("date-fns/isSameMonth");
var isSameHour_1 = require("date-fns/isSameHour");
var isValid_1 = require("date-fns/isValid");
var parse_1 = require("date-fns/parse");
var setHours_1 = require("date-fns/setHours");
var setMinutes_1 = require("date-fns/setMinutes");
var setMonth_1 = require("date-fns/setMonth");
var getDay_1 = require("date-fns/getDay");
var getDaysInMonth_1 = require("date-fns/getDaysInMonth");
var setSeconds_1 = require("date-fns/setSeconds");
var setYear_1 = require("date-fns/setYear");
var startOfDay_1 = require("date-fns/startOfDay");
var startOfMonth_1 = require("date-fns/startOfMonth");
var endOfMonth_1 = require("date-fns/endOfMonth");
var startOfWeek_1 = require("date-fns/startOfWeek");
var startOfYear_1 = require("date-fns/startOfYear");
var parseISO_1 = require("date-fns/parseISO");
var formatISO_1 = require("date-fns/formatISO");
var isWithinInterval_1 = require("date-fns/isWithinInterval");
var longFormatters_1 = require("date-fns/_lib/format/longFormatters");
var en_US_1 = require("date-fns/locale/en-US");
var defaultFormats = {
    dayOfMonth: 'd',
    fullDate: 'PP',
    fullDateWithWeekday: 'PPPP',
    fullDateTime: 'PP p',
    fullDateTime12h: 'PP hh:mm aaa',
    fullDateTime24h: 'PP HH:mm',
    fullTime: 'p',
    fullTime12h: 'hh:mm aaa',
    fullTime24h: 'HH:mm',
    hours12h: 'hh',
    hours24h: 'HH',
    keyboardDate: 'P',
    keyboardDateTime: 'P p',
    keyboardDateTime12h: 'P hh:mm aaa',
    keyboardDateTime24h: 'P HH:mm',
    minutes: 'mm',
    month: 'LLLL',
    monthAndDate: 'MMMM d',
    monthAndYear: 'LLLL yyyy',
    monthShort: 'MMM',
    weekday: 'EEEE',
    weekdayShort: 'EEE',
    normalDate: 'd MMMM',
    normalDateWithWeekday: 'EEE, MMM d',
    seconds: 'ss',
    shortDate: 'MMM d',
    year: 'yyyy'
};
var DateFnsUtils = /** @class */ (function () {
    function DateFnsUtils(_a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, locale = _b.locale, formats = _b.formats;
        this.lib = 'date-fns-be';
        // Note: date-fns input types are more lenient than this adapter, so we need to expose our more
        // strict signature and delegate to the more lenient signature. Otherwise, we have downstream type errors upon usage.
        this.is12HourCycleInCurrentLocale = function () {
            if (_this.locale) {
                return /a/.test(_this.locale.formatLong.time());
            }
            // By default date-fns is using en-US locale with am/pm enabled
            return true;
        };
        this.getFormatHelperText = function (format) {
            // @see https://github.com/date-fns/date-fns/blob/master/src/format/index.js#L31
            var longFormatRegexp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
            var locale = _this.locale || en_US_1["default"];
            return format
                .match(longFormatRegexp)
                .map(function (token) {
                var firstCharacter = token[0];
                if (firstCharacter === 'p' || firstCharacter === 'P') {
                    var longFormatter = longFormatters_1["default"][firstCharacter];
                    return longFormatter(token, locale.formatLong, {});
                }
                return token;
            })
                .join('')
                .replace(/(aaa|aa|a)/g, '(a|p)m')
                .toLocaleLowerCase();
        };
        this.parseISO = function (isoString) {
            return parseISO_1["default"](isoString);
        };
        this.toISO = function (value) {
            return formatISO_1["default"](value, { format: 'extended' });
        };
        this.getCurrentLocaleCode = function () {
            var _a;
            return ((_a = _this.locale) === null || _a === void 0 ? void 0 : _a.code) || 'th-Th';
        };
        this.addSeconds = function (value, count) {
            return addSeconds_1["default"](value, count);
        };
        this.addMinutes = function (value, count) {
            return addMinutes_1["default"](value, count);
        };
        this.addHours = function (value, count) {
            return addHours_1["default"](value, count);
        };
        this.addDays = function (value, count) {
            return addDays_1["default"](value, count);
        };
        this.addWeeks = function (value, count) {
            return addWeeks_1["default"](value, count);
        };
        this.addMonths = function (value, count) {
            return addMonths_1["default"](value, count);
        };
        this.isValid = function (value) {
            return isValid_1["default"](_this.date(value));
        };
        this.getDiff = function (value, comparing, unit) {
            switch (unit) {
                case 'years':
                    return differenceInYears_1["default"](value, _this.date(comparing));
                case 'quarters':
                    return differenceInQuarters_1["default"](value, _this.date(comparing));
                case 'months':
                    return differenceInMonths_1["default"](value, _this.date(comparing));
                case 'weeks':
                    return differenceInWeeks_1["default"](value, _this.date(comparing));
                case 'days':
                    return differenceInDays_1["default"](value, _this.date(comparing));
                case 'hours':
                    return differenceInHours_1["default"](value, _this.date(comparing));
                case 'minutes':
                    return differenceInMinutes_1["default"](value, _this.date(comparing));
                case 'seconds':
                    return differenceInSeconds_1["default"](value, _this.date(comparing));
                default: {
                    return differenceInMilliseconds_1["default"](value, _this.date(comparing));
                }
            }
        };
        this.isAfter = function (value, comparing) {
            return isAfter_1["default"](value, comparing);
        };
        this.isBefore = function (value, comparing) {
            return isBefore_1["default"](value, comparing);
        };
        this.startOfDay = function (value) {
            return startOfDay_1["default"](value);
        };
        this.endOfDay = function (value) {
            return endOfDay_1["default"](value);
        };
        this.getHours = function (value) {
            return getHours_1["default"](value);
        };
        this.setHours = function (value, count) {
            return setHours_1["default"](value, count);
        };
        this.setMinutes = function (value, count) {
            return setMinutes_1["default"](value, count);
        };
        this.getSeconds = function (value) {
            return getSeconds_1["default"](value);
        };
        this.setSeconds = function (value, count) {
            return setSeconds_1["default"](value, count);
        };
        this.isSameDay = function (value, comparing) {
            return isSameDay_1["default"](value, comparing);
        };
        this.isSameMonth = function (value, comparing) {
            return isSameMonth_1["default"](value, comparing);
        };
        this.isSameYear = function (value, comparing) {
            return isSameYear_1["default"](value, comparing);
        };
        this.isSameHour = function (value, comparing) {
            return isSameHour_1["default"](value, comparing);
        };
        this.startOfMonth = function (value) {
            return startOfMonth_1["default"](value);
        };
        this.endOfMonth = function (value) {
            return endOfMonth_1["default"](value);
        };
        this.startOfWeek = function (value) {
            return startOfWeek_1["default"](value, { locale: _this.locale });
        };
        this.endOfWeek = function (value) {
            return endOfWeek_1["default"](value, { locale: _this.locale });
        };
        this.getYear = function (value) {
            return getYear_1["default"](value);
        };
        this.setYear = function (value, count) {
            return setYear_1["default"](value, count);
        };
        this.date = function (value) {
            if (typeof value === 'undefined') {
                return new Date();
            }
            if (value === null) {
                return null;
            }
            return new Date(value);
        };
        this.toJsDate = function (value) {
            return value;
        };
        this.parse = function (value, formatString) {
            if (value === '') {
                return null;
            }
            return parse_1["default"](value, formatString, new Date(), { locale: _this.locale });
        };
        // public toBuddhistYear(date: any, format: any) {
        //   var christianYear = date.format('YYYY');
        //   var buddhishYear = (parseInt(christianYear) + 543).toString();
        //   return date
        //     .format(format.replace('YYYY', buddhishYear).replace('YY', buddhishYear.substring(2, 4)))
        //     .replace(christianYear, buddhishYear);
        // }
        // public format = (date: Date, formatKey: keyof DateIOFormats) => {
        //   return this.toBuddhistYear(date, this.formats[formatKey]);
        // };
        this.format = function (date, formatKey) {
            return _this.formatByString(date, _this.formats[formatKey]);
        };
        this.formatByString = function (date, formatString) {
            return format_1["default"](addYears_1["default"](date, 543), formatString, { locale: _this.locale });
        };
        this.isEqual = function (date, comparing) {
            if (date === null && comparing === null) {
                return true;
            }
            return isEqual_1["default"](date, comparing);
        };
        this.isNull = function (date) {
            return date === null;
        };
        this.isAfterDay = function (date, value) {
            return isAfter_1["default"](date, endOfDay_1["default"](value));
        };
        this.isBeforeDay = function (date, value) {
            return isBefore_1["default"](date, startOfDay_1["default"](value));
        };
        this.isBeforeYear = function (date, value) {
            return isBefore_1["default"](date, startOfYear_1["default"](value));
        };
        this.isAfterYear = function (date, value) {
            return isAfter_1["default"](date, endOfYear_1["default"](value));
        };
        this.isWithinRange = function (date, _a) {
            var start = _a[0], end = _a[1];
            return isWithinInterval_1["default"](date, { start: start, end: end });
        };
        this.formatNumber = function (numberToFormat) {
            return numberToFormat;
        };
        this.getMinutes = function (date) {
            return date.getMinutes();
        };
        this.getMonth = function (date) {
            return date.getMonth();
        };
        this.getDaysInMonth = function (date) {
            return getDaysInMonth_1["default"](date);
        };
        this.setMonth = function (date, count) {
            return setMonth_1["default"](date, count);
        };
        this.getMeridiemText = function (ampm) {
            return ampm === 'am' ? 'AM' : 'PM';
        };
        this.getNextMonth = function (date) {
            return addMonths_1["default"](date, 1);
        };
        this.getPreviousMonth = function (date) {
            return addMonths_1["default"](date, -1);
        };
        this.getMonthArray = function (date) {
            var firstMonth = startOfYear_1["default"](date);
            var monthArray = [firstMonth];
            while (monthArray.length < 12) {
                var prevMonth = monthArray[monthArray.length - 1];
                monthArray.push(_this.getNextMonth(prevMonth));
            }
            return monthArray;
        };
        this.mergeDateAndTime = function (date, time) {
            return _this.setSeconds(_this.setMinutes(_this.setHours(date, _this.getHours(time)), _this.getMinutes(time)), _this.getSeconds(time));
        };
        this.getWeekdays = function () {
            var now = new Date();
            return eachDayOfInterval_1["default"]({
                start: startOfWeek_1["default"](now, { locale: _this.locale }),
                end: endOfWeek_1["default"](now, { locale: _this.locale })
            }).map(function (day) { return _this.formatByString(day, 'EEEEEE'); });
        };
        this.getWeekArray = function (date) {
            var start = startOfWeek_1["default"](startOfMonth_1["default"](date), { locale: _this.locale });
            var end = endOfWeek_1["default"](endOfMonth_1["default"](date), { locale: _this.locale });
            var count = 0;
            var current = start;
            var nestedWeeks = [];
            var lastDay = null;
            while (isBefore_1["default"](current, end)) {
                var weekNumber = Math.floor(count / 7);
                nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
                var day = getDay_1["default"](current);
                if (lastDay !== day) {
                    lastDay = day;
                    nestedWeeks[weekNumber].push(current);
                    count += 1;
                }
                current = addDays_1["default"](current, 1);
            }
            return nestedWeeks;
        };
        this.getYearRangeFn = function (start, end) {
            var startDate = startOfYear_1["default"](start);
            var endDate = endOfYear_1["default"](end);
            var years = [];
            var current = startDate;
            while (isBefore_1["default"](current, endDate)) {
                years.push(current);
                current = addYears_1["default"](current, 1);
            }
            return years;
        };
        this.locale = locale;
        this.formats = Object.assign({}, defaultFormats, formats);
    }
    DateFnsUtils.prototype.getYearRange = function (start, end) {
        return this.getYearRangeFn(start, end).reverse();
    };
    return DateFnsUtils;
}());
exports["default"] = DateFnsUtils;

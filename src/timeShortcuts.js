import dayjs from "dayjs";
import quarterOfYear from "dayjs/plugin/quarterOfYear";

dayjs.extend(quarterOfYear);

function startEndOf(unit, date = dayjs()) {
    return [date.startOf(unit).toDate(), date.endOf(unit).toDate()];
}

export function loadTimeShortcuts() {
    return [
        {
            text: "今天",
            value: () => startEndOf("day"),
        },
        {
            text: "昨天",
            value: () => startEndOf("day", dayjs().subtract(1, "day")),
        },
        {
            text: "本周",
            value: () => [dayjs().day(1).startOf("day"), dayjs().day(7).endOf("day")],
        },
        {
            text: "上周",
            value: () => [dayjs().day(-6).startOf("day"), dayjs().day(0).endOf("day")],
        },
        {
            text: "本月",
            value: () => startEndOf("month"),
        },
        {
            text: "上月",
            value: () => startEndOf("month", dayjs().subtract(1, "month")),
        },
        {
            text: "本季度",
            value: () => startEndOf("quarter"),
        },
        {
            text: "上季度",
            value: () => startEndOf("quarter", dayjs().subtract(1, "quarter")),
        }
    ];
}

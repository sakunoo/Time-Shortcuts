import dayjs from "dayjs";
import quarterOfYear from "dayjs/plugin/quarterOfYear";

export function loadTimeShortcuts() {
    dayjs.extend(quarterOfYear);

    return [
        {
            text: "今天",
            value: () => {
                const day = dayjs();
                return [day.startOf("day").toDate(), day.endOf("day").toDate()];
            }
        },
        {
            text: "昨天",
            value: () => {
                const day = dayjs().subtract(1, "day");
                return [day.startOf("day"), day.endOf("day")];
            }
        },
        {
            text: "本周",
            value: () => {
                return [dayjs().day(1).startOf("day"), dayjs().day(7).endOf("day")];
            }
        },
        {
            text: "上周",
            value: () => {
                return [dayjs().day(-6).startOf("day"), dayjs().day(0).endOf("day")];
            }
        },
        {
            text: "本月",
            value: () => {
                const day = dayjs();
                return [day.startOf("month").toDate(), day.endOf("month").toDate()];
            }
        },
        {
            text: "上月",
            value: () => {
                const day = dayjs().subtract(1, "month");
                return [day.startOf("month").toDate(), day.endOf("month").toDate()];
            }
        },
        {
            text: "本季度",
            value: () => {
                const day = dayjs();
                return [day.startOf("quarter").startOf("day"), day.endOf("quarter").endOf("day")];
            }
        },
        {
            text: "上季度",
            value: () => {
                const day = dayjs().subtract(1, "quarter");
                return [day.startOf("quarter").startOf("day"), day.endOf("quarter").endOf("day")];
            }
        }
    ];
}

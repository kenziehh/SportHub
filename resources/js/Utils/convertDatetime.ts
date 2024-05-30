interface DateFormat {
    date: number;
    month: string;
    hour: string;
}

export function convertDateFormat(dateTimeString: string): DateFormat {
    const months: string[] = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const [datePart, timePart] = dateTimeString.split(" ");
    const [year, monthIndex, date] = datePart.split("-").map(Number);
    const [hour, minute, second] = timePart.split(":").map(Number);

    const month: string = months[monthIndex - 1];

    return { date, month, hour: `${hour}:${minute}` };
}

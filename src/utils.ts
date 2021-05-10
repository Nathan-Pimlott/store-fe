export function convertToCurrency(value: number) {
    try {
        var formatter = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        });

        return formatter.format(value);
    } catch (error) {
        console.error(error);
        return "£0.00";
    }
}

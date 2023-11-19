export const TransformStringMoney = (money: string) => {
    const removePoints = money.replace(".", "")
    const replaceDecimal = removePoints.replace(",", ".")
    return parseFloat(replaceDecimal)
}
export interface CalculateFormCardDto {
    label: string,
    type: "input" | "input-money" | "select" | "checkbox-list",
    subType?: "text" | "number" | "checkbox",
    selectOptions?: { key: string, label: string }[]
    key: string,
    prefix?: string,
    placeholder?: string,
    checkboxList?: { key: string, title: string }[][]
}
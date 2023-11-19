export interface CalculateFormCardDto {
    label: string,
    type: "input" | "input-money" | "select" | "checkbox-list",
    subType?: "text" | "number" | "checkbox",
    selectOptions?: { key: string, label: string }[]
    key: string,
    prefix?: string,
    placeholder?: string,
    checkboxList?: { key: string, title: string }[][],
    value?: any
}

export interface CalculateForm {
    country: 'brazil' | 'usa';
    state: string;
    brokerageFees: number;
    entry: number;
    installments: number;
    itbi: number;
    transferRate: number;
    condominium: boolean;
    energy: boolean;
    gas: boolean;
    internet: boolean;
    water: boolean;
    numberInstallments: number;
    rentValue: number;
    rentYears: number;
}
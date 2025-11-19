import { InputTypeEnum } from "../../inputTypeEnum"

export class Field {
    name: string | undefined
    label: string | undefined
    type: InputTypeEnum | undefined
    value: any
}
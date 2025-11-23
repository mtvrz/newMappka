
export interface GeneralDataObject {
    baseRequest: string,
    updatedRequest: string,
    previousStep:Steps,
    actualStep:Steps
}

export interface StepInfo {
    isStepActive: boolean
}


export type Steps = ["step_paste_rq","step_get_change","step_get_response"]
export type Actions = {
    id: number,
    value: string,
    description:string
}[]
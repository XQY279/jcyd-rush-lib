/// <reference types="react" />
export interface DataType {
    value: string | number;
    name: string | number;
}
export interface SelectProps {
    /**
     * 数据改变时触发的回掉
     */
    onChange: (current: DataType) => void;
    /**
     * 数据
     */
    data: DataType[];
    /**
     * 当前选中的数据
     */
    selected: DataType;
}
declare const Select: ({ selected, onChange, data }: SelectProps) => JSX.Element;
export default Select;

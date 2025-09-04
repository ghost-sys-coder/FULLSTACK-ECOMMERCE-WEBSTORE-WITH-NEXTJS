import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface SelectOption {
    name: string;
    value: string;
    symbol?: string;
}

interface SelectComponentProps {
    options: SelectOption[];
    placeholder?: string;
    onChange?: (value: string) => void;
}


const SelectComponent: React.FC<SelectComponentProps> = ({options, placeholder}) => {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className='bg-white'>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.symbol && <span className="mr-2">{option.symbol}</span>}
                        {option.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default SelectComponent
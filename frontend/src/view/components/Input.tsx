import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {
    name?: string;
    label?: string
    placeholder?: string;
    className?: string;
    type: "password" | "email" | "text" | "stack"
}

  export const Input = forwardRef< HTMLInputElement, InputProps>( 
    ({
        name,
        label,
        type,
        className,
        placeholder,
  }) => {
    return (
        <div>
        <label> {label} </label>
        <input type={type} placeholder={placeholder} className={className} name={name} />
        </div>
    )
  }
    
    );

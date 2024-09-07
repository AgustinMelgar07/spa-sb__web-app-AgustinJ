import './Input.css'
import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  hideLabel?: boolean
}

const Input = ({ id, title, hideLabel = false, required, ...rest }: Props) => {
  const inputTitle = required ? `${title} (Requerido)` : title

  return (
    <div className="cmp-input control">
      {!hideLabel && (
        <label htmlFor={id}>
          {title}
          {required && <span>*</span>}
        </label>
      )}
      <input
        id={id}
        name={id}
        title={inputTitle}
        required={required}
        {...rest}
      />
    </div>
  )
}

export default Input

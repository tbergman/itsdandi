/** @jsx jsx */
import {jsx,Styled,Input} from 'theme-ui'
import {useState} from 'react';

const InputWrapper = ({field,send,sendType,placeholder,scrollTo}) => {
  const [focused, setFocused] = useState(false)

return (
    <div className="Form__inputWrapper">
        <Input 
          id={scrollTo ? "namefield" : field.key}
          placeholder={placeholder} 
          value={field.value} 
          onFocus={()=>setFocused(true)}
          onBlur={()=>setFocused(false)}
          onChange={(e)=>send({type:sendType,value:e.target.value})}
          sx={{
            border: field.error ? '1px solid #FF5C17' : 'none',
          }}
        />
        {field.error && !focused && (
        <div className="Form__inputWrapper-error">
        <Styled.p>{field.error}</Styled.p>
      </div>
        )}


  </div>
)
}

export default InputWrapper;
/** @jsx jsx */
import {jsx,Styled,Input} from 'theme-ui'

const InputWrapper = ({field,send,sendType,placeholder}) => {
return (
    <div className="Form__inputWrapper">
    <Input 
    id="namefield" 
    placeholder={placeholder} 
    value={field.value} 
    onChange={(e)=>send({type:sendType,value:e.target.value})}
    sx={{
      border: field.error ? '1px solid #FF5C17' : 'none',
    }}
    />
    {field.error && (
  <div className="Form__inputWrapper-error">
  <Styled.p>{field.error}</Styled.p>
</div>
    )}


  </div>
)
}

export default InputWrapper;
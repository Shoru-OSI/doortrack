import './LabelledInput.css';

interface LabelledInputProps {
  label: string,
  placeholder: string,
  value: string,
  setValue: Function
}

function LabelledInput({label, placeholder, value, setValue}: LabelledInputProps) {

  return (
    <div className='labelled-input-container'>
      <div className='labelled-input'>
        <p className='labelled-input-label'>{label}</p>
        <input className='labelled-input-area' placeholder={placeholder? placeholder : ''} value={value} onChange={(e) => {setValue(e.target.value)}} />
      </div>
    </div>
  )

}

export default LabelledInput;
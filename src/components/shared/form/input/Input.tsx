import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostModel } from "../../../../models/components/modules";
import { InputModel } from "../../../../models/components/shared/form";
import './Input.scss';
const emptyData: PostModel.JsonData[] = [];
const templateF : 'title' = 'title';
export function Input(props: InputModel.Props) {  
  const [filteredData, setFilteredData] = useState(emptyData);
  const [template, setTemplate] = useState(templateF);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const autoComplete = props?.autocomplete;
  const handleInput = (value: string) => {
    setInputValue(value);
    if (props?.onInput) props.onInput(value);
    if (autoComplete) {
      handleAutocomplete(value);
    }
  }

  const handleAutocomplete = (value: string) => {
    setTemplate(autoComplete?.templateFilter ? autoComplete.templateFilter : templateF);
    let foundData: PostModel.JsonData[] = [];
    if (value) {
      foundData = autoComplete?.data.filter((d: PostModel.JsonData) => (d[template] || '')?.toLowerCase().includes(value.toLowerCase())) || [];
    }
    setFilteredData(foundData);    
  }

  const handleRedirect = (data: PostModel.JsonData) => {
    setInputValue('');
    setFilteredData(emptyData);
    const templateRedirect = autoComplete?.templateRedirect || 'id';
    if (data[templateRedirect]) {
      navigate(`posts/${data[templateRedirect]}`);
    }
  }
  
  return (
    <section className="input-container">
      <label htmlFor={props.id} className={props.isTextArea ? 'label-textarea' : 'label-input'}>
        {
          !props.isTextArea && 
          <input
            value={props.value !== undefined ? props.value : inputValue}
            type="text"
            placeholder="-"
            id={props.id}
            onInput={ (evt) => handleInput((evt.target as HTMLInputElement).value)}
            autoComplete="off"
          />
        }

        {
          props.isTextArea && 
          <textarea
            value={props.value !== undefined ? props.value : inputValue}
            placeholder="-"
            id={props.id}
            onInput={ (evt) => handleInput((evt.target as HTMLInputElement).value)}
            autoComplete="off"
          >
          </textarea>
        }
        <span>{props.label}</span>
      </label>
      {
        autoComplete &&
        <ul>
          {
            filteredData.map((data, index) =>(
              <li 
                key={'autocomplete' + index.toString()}
                onClick={() => handleRedirect(data)}
              >
                {data[template]}
              </li>
            ))
          }
        </ul>
      }
    </section>
  );
}
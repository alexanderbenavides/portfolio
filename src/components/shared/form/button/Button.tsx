import { ButtonModel } from "../../../../models/components/shared/form";
import './Button.scss';
export function Button(props: ButtonModel.Props) {
  const hableClick = () => {
    if (props?.onClick) props.onClick();
  }
  return (
    <button 
      type={props?.type ? props?.type : 'button'}
      aria-label={props.ariaLabel}
      disabled={props.disabled}
      onClick={hableClick}
    >
      {props.text ? props.text : ''}
      {
        props.hasIcon && 
        <i className="fa-solid fa-magnifying-glass"></i>
      }
    </button>
  );
  }
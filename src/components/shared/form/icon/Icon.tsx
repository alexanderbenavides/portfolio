import { IconModel } from "../../../../models/components/shared/form";
import './Icon.scss';
export function Icon(props: IconModel.Props) {
  const hableClick = (e: any) => {
    if (props?.onClick) props.onClick(e);
  }
  return (
    <i 
     className={props.name}
     style={{color: props.color}}
     onClick={(e) => hableClick(e)}
    >
    </i>
  );
}

import { FooterModel } from '../../../../models/components/shared/layout';
import { Icon } from '../../form';
import './Footer.scss';
const JsonData: FooterModel.JsonData[] = require('./footer.json');
export function Footer() {   
    const goToPages = (url: string) => {
        window.open(
            url,
            '_blank'
        );
    }
    return (
        <footer>
            {
                JsonData.map((json, index) => (
                    <Icon 
                    key={'brand' + index.toString()}
                    name={'fa-brands ' + json.icon}
                    color={json.color}
                    onClick={() => goToPages(json.url)}
                    ></Icon>
                ))
            }
        </footer>
    );
}

